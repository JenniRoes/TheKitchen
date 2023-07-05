const app = Vue.createApp({
    data() {
        return {
            recipes: [],
            recipesten: [],
            categories: [{ id: 0, category: "None" }],
            searchResults: [],
            userId: null,
            savedRecipes: []
        }
    },
    mounted: async function () {
        try {
          // category filters 
          const categoriesResponse = await axios.get('http://localhost/primerprueba/public/api/recipes/categories');
          let categories = categoriesResponse.data;
          categories.forEach((element, index) => {
            this.categories.push({ id: index, category: element.category });
          });
      
          // default recipes for home page
          const defaultRecipesResponse = await axios.get('http://localhost/primerprueba/public/api/recipes/all');
          let defaultRecipes = defaultRecipesResponse.data;
          this.recipes = [];
          defaultRecipes.forEach(element => {
            this.recipes.push({
              id: element.id,
              image: 'http://localhost/primerprueba/public/storage/imgs/' + element.image,
              title: element.name,
              category: 'Breakfast',
              likes: element.likes,
              description: element.description,
            });
          });
      
          // recipes fot top ten page
          const topTenRecipesResponse = await axios.get('http://localhost/primerprueba/public/api/recipes/top10');
          let topTenRecipes = topTenRecipesResponse.data;
          this.recipesten = [];
          topTenRecipes.forEach((element, index) => {
            this.recipesten.push({
              id: element.id,
              image: 'http://localhost/primerprueba/public/storage/imgs/' + element.image,
              title: element.name,
              category: element.category,
              totaltime: element.total_time,
              level: element.level,
              likes: element.likes,
              portions: element.portions,
              position: index + 1,
              ocassion: element.occasion,
              description: element.description
            });
          });
      
          // det user id
          const userIdResponse = await axios.get('http://localhost/primerprueba/public/api/users/getuserid');
          if (userIdResponse.data.code === 200) {
            this.userId = userIdResponse.data.uid;
      
            // show save recipes
            const savedRecipesResponse = await axios.get('http://localhost/primerprueba/public/api/users/savedrecipes/' + this.userId);
            let savedRecipes = savedRecipesResponse.data;
      
            this.savedRecipes = [];
            savedRecipes.forEach(element => {
              this.savedRecipes.push({
                id: element.id,
                image: 'http://localhost/primerprueba/public/storage/imgs/' + element.image,
                title: element.name,
                category: 'Breakfast',
                likes: element.likes,
                description: element.description
              });
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
    methods: {
      updateRecipeLikes(id, likes) {
        this.recipes.forEach(recipe => {
          if (recipe.id === id) {
            recipe.likes = likes;
          }
        });
      },
        onClickRecipeLike: function (id) {
            this.recipes.forEach(recipe => {
                if (recipe.id === id) {

                    axios({
                        method: 'get',
                        url: 'http://localhost/primerprueba/public/api/users/likes/' + this.userId + '/' + id
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