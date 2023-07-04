const app = Vue.createApp({
    data() {
        return {
            recipes: [],
            recipesten: [],
            categories: [{id: 0, category: "None"}],
            searchResults: [],
            userId : null
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
                            likes: element.likes,
                            description:  element.description,
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
                            category: element.category,
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

            //get user id
            axios({
                method: 'get',
                url: 'http://localhost/primerprueba/public/api/users/getuserid'
              })
              .then(response => {
                if (response.data.code === 200) {
                  this.userId = response.data.uid;
                }
              })
              .catch(error => console.log(error));
    },
    methods: {
        onClickRecipeLike: function(id) {
            this.recipes.forEach(recipe => {
                if (recipe.id === id) {

                    axios({
                        method: 'get',
                        url: 'http://localhost/primerprueba/public/api/users/likes/'+ this.userId + '/' + id
                    })
                    .then(
                        (response) => {
                            console.log(response);
                
                        }
                    )
                    .catch(
                        error => console.log(error)
                    )
                }
            });
        },
        onClickSelectedCategory(category) {
            //filter by category for categories page
            axios({
                method: 'get',
                url: 'http://localhost/primerprueba/public/api/recipes/filterby/category/' + category
            })
                .then(
                    (response) => {
                        //console.log(response.data);
                        
                        this.recipes = [];
                        let items = response.data;

                        items.forEach(element => {
                            this.recipes.push({
                                id: element.id,
                                image: 'http://localhost/primerprueba/public/storage/imgs/' + element.image,
                                title: element.name,
                                category: element.category,
                                likes: element.likes,
                                ocassion: element.occasion,
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



