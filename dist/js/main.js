const app = Vue.createApp({
    data() {
        return {
            recipes: [],
            relatedrecipes: [
                { id: 201, image: "./imgs/recipe-two.jpg", title: "Recipe title", level: "Easy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago" },
                { id: 202, image: "./imgs/recipe-two.jpg", title: "Recipe title", level: "Easy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago" },
                { id: 203, image: "./imgs/recipe-two.jpg", title: "Recipe title", level: "Easy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago" },
                { id: 204, image: "./imgs/recipe-two.jpg", title: "Recipe title", level: "Easy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "sUpdate 3min ago" }
            ],
            recipestopten: [
                { id: 101, image: "./imgs/toprecipe.png", title: "Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#1" },
                { id: 102, image: "./imgs/toprecipe.png", title: "Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#2" },
                { id: 103, image: "./imgs/toprecipe.png", title: "Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#3" },
                { id: 104, image: "./imgs/toprecipe.png", title: "Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#4" },
                { id: 105, image: "./imgs/toprecipe.png", title: "Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#5" },
                { id: 106, image: "./imgs/toprecipe.png", title: "Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#6" },
                { id: 107, image: "./imgs/toprecipe.png", title: "Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#7" },
                { id: 108, image: "./imgs/toprecipe.png", title: "Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#8" },
                { id: 109, image: "./imgs/toprecipe.png", title: "Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#9" },
                { id: 110, image: "./imgs/toprecipe.png", title: "Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#10" }
            ],
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
            categories: []
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
                            description: "Delicious recipes of The Kitchen web site"
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
