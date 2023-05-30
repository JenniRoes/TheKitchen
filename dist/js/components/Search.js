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
                url: "https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.keyword

            })
                .then(
                    (response) => {

                        let resultsRecipes = response.data.meals;

                        console.log(resultsRecipes);

                        resultsRecipes.forEach((element) => {

                            this.resultsRecipes.push({
                                id: element.idMeal,
                                image: element.strMealThumb,
                                title: element.strMeal,
                                category: element.strCategory,
                                totaltime: "20 mins",
                                level: "Easy",
                                likes: 0,
                                portions: "4-5",
                                position: 1,
                                ocassion: "Everyday",
                                ingredients: "NA",
                                description: "Delicious recipes of The Kitchen web site",
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
        <div  class="row mt-5">
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
