const app = Vue.createApp({
    data() {
        return {
            recipes: [],
            recipeslist: [
                { id: 21, image: "./imgs/itemlist.png", title: "Recipe title", likes: 0 },
                { id: 22, image: "./imgs/itemlist.png", title: "Recipe title", likes: 0 },
                { id: 23, image: "./imgs/itemlist.png", title: "Recipe title", likes: 0 },
                { id: 24, image: "./imgs/itemlist.png", title: "Recipe title", likes: 0 }
            ],
            userslist: [
                { id: 31, image: "./imgs/userlist.png", title: "User name" },
                { id: 32, image: "./imgs/userlist.png", title: "User name" },
                { id: 33, image: "./imgs/userlist.png", title: "User name" },
                { id: 34, image: "./imgs/userlist.png", title: "User name" }
            ],
            categories: [],
            searchResults: []
        }
    },
    mounted: function () {
        //filter by category 
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        })
            .then(

                (response) => {
                    let items = response.data.meals;
                    items.forEach((element, index) => {
                        this.categories.push({ id: index, category: element.strCategory });
                    });
                }
            )
            .catch(
                error => console.log(error)
            );

        //default recipes for home page
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        })
            .then(
                (response) => {
                    let items = response.data.meals;

                    this.recipes = [];

                    items.forEach(element => {
                        this.recipes.push({
                            id: element.idMeal,
                            image: element.strMealThumb,
                            title: element.strMeal,
                            category: 'Seafood',
                            totaltime: "20 mins",
                            level: "Easy",
                            likes: 0,
                            portions: "4-5",
                            position: 1,
                            ocassion: "Everyday",
                            ingredients: "NA",
                            description:  "Delicious recipes of The Kitchen web site",
                            preparation: "NA"
                        });
                    });

                }
            )
            .catch(
                error => console.log(error)
            );
    },
    methods: {
        onClickRecipeLike(index) {
            this.recipes[index].likes += 1;
        },
        onClickSelectedCategory(category) {
            //filter by category for categories page
            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category
            })
                .then(
                    (response) => {
                        //console.log(response.data.meals);
                        
                        this.recipes = [];
                         let items = response.data.meals;

                        items.forEach(element => {
                            this.recipes.push({
                                id: element.idMeal,
                                image: element.strMealThumb,
                                title: element.strMeal,
                                category: category,
                                likes: 0,
                                ocassion: "Everyday",
                                ingredients: "NA",
                                description: "Delicious recipes of The Kitchen web site"
                            });
                        });

                    }
                )
                .catch(
                    error => console.log(error)
                );
        } 
    }
});

