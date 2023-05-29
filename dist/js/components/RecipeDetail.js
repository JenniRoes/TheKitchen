app.component('recipe-detail',{
    data() {
        return {
            id : "",
            image : "",
            title : "",
            category : "",
            totaltime : "",
            level : "",
            likes : "",
            description : "",
            portions : "",
            occasion : "",
            position : "",
            preparation : "",
            ingredients: ""
        }
    },
    mounted() {

            const params = window.location.search;
            //console.log(params);
            const urlParams = new URLSearchParams(params);
            const id = urlParams.get("id");
            //console.log("este es el id" +id);

            this.getDetails(id);
       
    },
    methods: {
        getDetails(id){
            axios({
                method: 'get',
                url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id

            })
                .then(
                    (response) => {

                        let items = response.data.meals[0];
                        
                        console.log(response);

                        this.id = items.idMeal; 
                        this.image = items.strMealThumb;
                        this.title = items.strMeal;
                        this.category = items.strCategory;
                        this.totaltime = "20 mins";
                        this.level = "Easy";
                        this.likes = 2;
                        this.description = "Delicious recipes of The Kitchen web site"
                        this.portions = "4-5";
                        this.position= 1;
                        this.occasion = "Everyday";
                        this.tag = "Delicious!";
                        this.preparation = items.strInstructions;
                        this.ingredients = items.strIngredient1;


                    }
                )
                .catch(
                    error => console.log(error)
                );
        }
    },
    template:
    /*html*/
    `
    <div class="center-img-detail">
        <div class="card">
            <img v-bind:src="image" class="detail-img" alt="photo food">
            <div class="card-img-overlay">
                <div>
                    <p class="align-content-center"><span class="badge-orange-big p-1">{{tag}}</span></p>
                </div>
                <div class="align-end">
                    <button class=" btn-circular hover-grow" v-on:click="onClickRecipeLike()"><img src="./imgs/icons/favorite.svg"
                            class="img-fluid mx-auto mt-1" alt="favorite icon"></button>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <h1 class="mt-4">{{title}}</h1>
            <h6 class="mt-3 opacity-50"><small>{{likes}} likes</small></h6>
        </div>
        <div class="mt-2 mb-5">
            <span class="badge badge-orange p-1">{{category}}</span>
            <span class="badge badge-green p-1 ms-2">{{level}}</span>
            <span class="badge badge-orange p-1 ms-2">{{occasion}}</span>
        </div>
        <div>
            <h2 class="mt-5">Description</h2>
            <div class="row mt-4 mb-3">
                <p class="label-time ms-3"><img src="imgs/icons/wash.svg" alt="preparation time icon">15min</p>
                <p class="label-time ms-3"><img src="imgs/icons/local_fire_department.svg"
                        alt="cooking time icon">30min</p>
                <p class="label-time ms-3"><img src="imgs/icons/nest_clock_farsight_analog-orange.svg"
                        alt="total time icon">{{totaltime}}</p>
                <p class="label-time ms-3"><img src="imgs/icons/pie_chart_orange.svg" alt="portions icon">{{portions}}</p>
            </div>
            <p>{{description}}</p>
            <h2 class="mt-5 mb-2">Ingredients</h2>
            <ul>
                <li>{{ingredients}}</li>
            </ul>
            <h2 class="mt-5">Preparation</h2>
            <p>{{preparation}}</p>
        </div>
        </div>
    `
});