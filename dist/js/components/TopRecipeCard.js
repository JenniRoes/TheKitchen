app.component('top-recipe-card', {
    props: {
        position: {
            type: Number
        },
        image: {
            type: String,
            default: "Food photo"
        },
        title: {
            type: String,
            default: "Recipe Title"
        },
        category: {
            type: String,
            default: "Category"
        },
        level: {
            type: String,
            default: "Level"
        },
        ocassion: {
            type: String,
            default: "Ocassion"
        },
        description: {
            type: String,
            default: "Lorem Ipsum"
        },
        totaltime: {
            type: Number,
            default: 0
        },
        portions: {
            type: Number,
            default: 0
        },
        likes: {
            type: Number,
            default: 0
        },
        id:{
            type: Number,
            default: 1
        }
    },
    methods: {
        onClickRecipeLike(){
            //console.log("LIKE");
            this.$emit('recipelike', this.id);
        },
    },
    computed: {
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
        `<!--inicial card-->
        <div class="card-top-recipe mb-3">
        <div class="img-container-top">
            <div class="img-fluid rounded-start top-recipes-badge">#{{position}}</div>
            <img class="top-recipe-img" v-bind:src="image" alt="photo food">
        </div>
        <div class="text-container-top mt-4 me-3 ms-2">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-6">
                        <h5 class="card-title ms-3"><a class="link-title overflow-title top-title" :href="'recipe-detail.html?id=' + id">{{title}}</a></h5>
                    </div>
                    <div class="ms-3 mb-2 mt-2">
                        <span class="badge badge-orange p-1">{{category}}</span>
                        <span :class="badgeClass + ' p-1 ms-2'">{{level}}</span>
                        <span class="badge badge-orange p-1 ms-2">{{ocassion}}</span>
                    </div>
                </div>
                <p class="card-text overflow ms-3">{{description}} </p>
                <div class="row ms-3 mt-2 mb-2">
                    <p class="label-time"><img src="imgs/icons/nest_clock_farsight_analog-orange.svg"
                            alt="preparation time icon">{{totaltime}} min</p>
                    <p class="label-time ms-3"><img src="imgs/icons/pie_chart_orange.svg" alt="portions icon">{{portions}}</p>
                </div>
                <div class="row ms-2">
                    <div class="col-10">
                        <p class="card-text mt-2"><small class="text-muted">{{likes}} likes</small>
                        </p>
                    </div>
                    <div class="col-1 ">
                        <button class=" btn-circular mt-1 mb-3 hover-grow" v-on:click="onClickRecipeLike(index)"><img src="./imgs/icons/favorite.svg"
                                class="img-fluid mx-auto mt-1" alt="favorite icon"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!--final card-->`
});