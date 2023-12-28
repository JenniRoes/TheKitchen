app.component('recipe-detail', {
    data() {
        return {
            id: "",
            image: "",
            title: "",
            tag: "",
            category: "",
            totaltime: "",
            preparationtime: "",
            cookingtime: "",
            level: "",
            likes: "",
            description: "",
            portions: "",
            occasion: "",
            position: "",
            preparation: "",
            ingredients: [],
            relatedRecipes: [],
            userId: ''

        }
    },
    mounted() {

        const params = window.location.search;
        const urlParams = new URLSearchParams(params);
        const id = urlParams.get("id");

        this.getDetails(id);
    },
    methods: {
        getDetails(id) {
            axios({
                method: 'get',
                url: 'http://localhost/primerprueba/public/api/recipes/recipe/' + id
            })
                .then(
                    (response) => {
                        console.log(id);
                        localStorage.setItem('idRecipe', id);

                        let recipe = response.data[0][0];
                        let ingredients = response.data[1];
                        let relatedRecipes = response.data[2];

                        this.id = recipe.id;
                        this.image = 'http://localhost/primerprueba/public/storage/imgs/' + recipe.image;
                        this.title = recipe.name;
                        this.category = recipe.category;
                        this.preparationtime = recipe.preparation_time;
                        this.cookingtime = recipe.cooking_time;
                        this.totaltime = recipe.total_time;
                        this.level = recipe.level;
                        this.likes = recipe.likes;
                        this.description = recipe.description;
                        this.portions = recipe.portions;
                        this.position = 1;
                        this.occasion = recipe.occasion;
                        this.tag = "Delicious!";
                        this.preparation = recipe.preparation_instructions;
                        this.ingredients = ingredients;

                        this.relatedRecipes = response.data[2];
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        saveRecipe(id) {
            axios({
                method: 'get',
                url: 'http://localhost/primerprueba/public/api/users/getuserid',
            })
                .then((response) => {
                        userId = response.data.uid;
                        idRecipe = localStorage.getItem('idRecipe');
                        
                        axios({
                            method: 'get',
                            url: 'http://localhost/primerprueba/public/api/users/saverecipe/' + userId + '/' + idRecipe
                        })
                            .then((response) => {
                                alert("The recipe has been added to your collection");
                            })
                            .catch((error) => console.log(error));
                    
                })
                .catch(
                    error => console.log(error)

                );
        }
    },
    computed: {
        //change color difficulty badge
        badgeClass() {
            if (this.level === 'Easy Recipes') {
                return 'badge-green';
            } else if (this.level === 'Intermediate Recipes') {
                return 'badge-yellow';
            } else if (this.level === 'Advanced Recipes') {
                return 'badge-red';
            }
            return 'badge-default';
        }
    },
    template:
        /*html*/
        `
    <!--recipe image-->
    <div class="row recipes-details detail-mobile">
    <div class="center-img-detail col">
        <div class="card">
            <img v-bind:src="image" class="detail-img" alt="photo food">
            <div class="card-img-overlay">
                <div>
                    <p class="align-content-center"><span class="badge-orange-big p-1">{{tag}}</span></p>
                </div>
                <div class="align-end">
                    <button class=" btn-circular hover-grow" @click= "saveRecipe"><img src="./imgs/icons/save.svg"
                            class="img-fluid mx-auto" alt="save icon"></button>
                </div>
            </div>
        </div>
        <!--recipe detail-->
        <div class="d-flex justify-content-between">
            <h1 class="mt-4">{{title}}</h1>
            <h6 class="mt-3 opacity-50 photo-hidden"><small>{{likes}} likes</small></h6>
        </div>
        <div class="mt-2 mb-5">
            <span class="badge badge-orange p-1">{{category}}</span>
            <span :class="badgeClass + ' p-1 ms-2'">{{level}}</span>
            <span class="badge badge-orange p-1 ms-2">{{occasion}}</span>
        </div>
        <div>
            <h2 class="mt-5">Description</h2>
            <div class="row mt-4 mb-3">
                <p class="label-time ms-3"><img src="imgs/icons/wash.svg" alt="preparation time icon">{{preparationtime}} min</p>
                <p class="label-time ms-3"><img src="imgs/icons/local_fire_department.svg"
                        alt="cooking time icon">{{cookingtime}} min</p>
                <p class="label-time ms-3"><img src="imgs/icons/nest_clock_farsight_analog-orange.svg"
                        alt="total time icon">{{totaltime}} min</p>
                <p class="label-time ms-3"><img src="imgs/icons/pie_chart_orange.svg" alt="portions icon">{{portions}}</p>
            </div>
            <p>{{description}}</p>
            <h2 class="mt-5 mb-2">Ingredients</h2>
            <ul>
                <li  v-for="ingredient in ingredients" :key="ingredient.id">{{ingredient.amount}} {{ingredient.measurement_unit}} {{ingredient.description}}</li>
            </ul>
            <h2 class="mt-5">Preparation</h2>
            <p>{{preparation}}</p>
        </div>
        </div>
        <!--related recipes-->
        <div class="col m-related-recipes">
                <div class="">
                    <h2 class="col mb-5">Related Recipes</h2>
                </div>
                <!--inicial card-->
                <div v-for="item in relatedRecipes" :key="item.id" class="col mb-4">
                    <recipe-card :image="'http://localhost/primerprueba/public/storage/imgs/' + item.image" :category="item.category" :title="item.name"
                        :description="item.description" :likes="item.likes"
                        :data="item" :id="item.id"></recipe-card>
                    <!--final card-->
                </div>
            </div>
        </div>
        `
});