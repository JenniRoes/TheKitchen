app.component('recipe-card',{
    props:{
        image:{
            type: String,
            default: "Food photo"
        },
        title:{
            type: String,
            default: "Recipe Title"
        },
        category:{ 
            type: String,
            default: "Category"
        },
        description:{
            type: String,
            default: "Lorem Ipsum"
        },
        portions:{
            type: String
        },
        likes:{
            type: Number,
            default: 0
        }
    },
    methods: {
        onClickRecipeLike(){
            //console.log("LIKE");
            this.$emit('recipelike', this.index);
        }
    },
    template:
    /*html*/
    ` <!--inicial card-->
    <div class="card-recipe col-2 p-0 m-0">
        <div class="image-container">
            <img v-bind:src="image" class="img-fluid card-recipe-img top-border-photo"
                alt="photo food">
        </div>
        <div class="detail-container text-start ms-3 me-3">
            <div>
                <h5 class="mt-2"><a class="link-title" href="./recipe-detail.html">{{title}}</a></h5>
                <h6><span class="badge badge-orange mt-2 p-1">{{category}}</span></h6>
            </div>
            <div>
                <p class="pt-2 overflow ">{{description}}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center gap-1">
                <h6 class="mt-3 opacity-50"><small>{{likes}} likes</small></h6>
                <button class=" btn-circular mt-3 mb-3 hover-grow" v-on:click="onClickRecipeLike()"><img
                        src="../dist/imgs/icons/favorite.svg" class="img-fluid mt-1"
                        alt="favorite icon"></button>
            </div>
        </div>
    </div>
    <!--final card-->`
});