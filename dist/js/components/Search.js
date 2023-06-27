app.component('search', {
    components: {
        Navbar: './Navbar.js'
    },

    data() {
        return {
            resultsRecipes: [],
            keyword: "",
        }
    },
    mounted() {
        console.log(this.resultsRecipes)

        const params = window.location.search;
        const urlParams = new URLSearchParams(params);
        const routeTxt = urlParams.get("keyword");
        this.keyword = routeTxt;
        this.getResults();
    },
    methods: {

        getResults() {
            axios({
                method: 'get',
                url: 'http://localhost/primerprueba/public/api/recipes/searchbyname/' + this.keyword

            })
                .then(
                    (response) => {

                        let resultsRecipes = response.data;

                        console.log(resultsRecipes);

                        resultsRecipes.forEach((element) => {

                            this.resultsRecipes.push({
                                id: element.id,
                                image: 'http://localhost/primerprueba/public/storage/imgs/' + element.image,
                                title: element.name,
                                category: element.category,
                                totaltime: element.total_time,
                                level: element.level,
                                likes: element.likes,
                                portions: element.portions,
                                position: 1,
                                ocassion: element.occasion,
                                ingredients: "NA",
                                description: element.description,
                                preparation: "NA"
                            })
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                );
        }
    },
    template:
        /* html */
        `<script>
            import Navbar from './Navbar.js'; 
        </script>
        <div class="row mt-5 recipes-container">
        <div v-if="resultsRecipes != null">
            <h4 class='ms-2 mt-3'>Results for <span class='fw-bolder text-orange'>{{this.keyword}}</span></h4>
        </div>
        </div>
        <div  class="row mt-5 recipes-container">
            <div v-for="(item, index) in resultsRecipes" class="col mb-4">
            <recipe-card :image="item.image" :category="item.category" :title="item.title"
            :description="item.description" :likes="item.likes" v-on:recipelike="onClickRecipeLike(index)" :data="item" :id="item.id"></recipe-card>
            </div>
        </div>
        <div v-if="resultsRecipes == ''">
        <h4 class='text-center mt-3 text-orange'>No results for <span class='fw-bolder'>{{keyword}}</span></h4>
        </div>
        `
});
