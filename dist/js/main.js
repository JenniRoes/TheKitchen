const app = Vue.createApp({
    data() {
        return {
            recipes: [],
            recipesten: [],
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
            searchResults: [],
            positions: [{position: 1}, {position: 2}, {position: 3}, {position: 4}, {position: 5}, 
                {position: 6}, {position: 7}, {position: 8}, {position: 9}, {position: 10}],
        }
    },
    mounted: function () {
        //filter by category 
        axios({
            method: 'get',
            url: 'http://localhost/primerprueba/public/api/recipes/categories'
        })
            .then(

                (response) => {
                    let items = response.data;
                    items.forEach((element, index) => {
                        this.categories.push({ id: index, category: element.category});
                    });
                }
            )
            .catch(
                error => console.log(error)
            );

        //default recipes for home page
        axios({
            method: 'get',
            url: 'http://localhost/primerprueba/public/api/recipes/all'
        })
            .then(
                (response) => {
                    let items = response.data;

                    this.recipes = [];

                    items.forEach(element => {
                        this.recipes.push({
                            id: element.id,
                            image:'http://localhost/primerprueba/public/storage/imgs/' + element.image,
                            title: element.name,
                            category: 'Breakfast',
                            totaltime: element.total_time,
                            level: element.level,
                            likes: element.likes,
                            portions: element.portions,
                            ocassion: element.occasion,
                            ingredients: "NA",
                            description:  element.description,
                            preparation: "NA"
                        });
                    });

                }
            )
            .catch(
                error => console.log(error)
            );

            //recipes for top ten
        axios({
            method: 'get',
            url: 'http://localhost/primerprueba/public/api/recipes/top10'
        })
            .then(
                (response) => {
                    let items = response.data;

                    this.recipesten = [];

                    items.forEach((element, index) => {
                        this.recipesten.push({
                            id: element.id,
                            image:'http://localhost/primerprueba/public/storage/imgs/' + element.image,
                            title: element.name,
                            category: 'Breakfast',
                            totaltime: element.total_time,
                            level: element.level,
                            likes: element.likes,
                            portions: element.portions,
                            position: index + 1,
                            ocassion: element.occasion,
                            description:  element.description
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
                url: 'http://localhost/primerprueba/public/api/recipes/filterby/category/'
            })
                .then(
                    (response) => {
                        console.log(response.data);
                        
                        this.recipes = [];
                         let items = response.data;

                        items.forEach(element => {
                            this.recipes.push({
                                id: element.id,
                                image: 'http://localhost/primerprueba/public/storage/imgs/' + element.image,
                                title: element.name,
                                category: category,
                                likes: 0,
                                ocassion: element.occasion,
                                ingredients: "NA",
                                description: element.description
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

