app.component('admin-recipe-card',{
    props: {
        image:{
            type: String,
            default: "Food photo"
        },
        title: {
            type: String,
            default: "Recipe title"
        },
        likes: {
            type: Number,
            default: 0
        }
    },
    template:
    /*html*/
    ` <!--inicial card-->
    <div class="col-md ms-4 container-item">
        <div class="row g-0">
            <div class="col-md">
                <img v-bind:src="image" class="img-fluid" alt="food photo">
            </div>
            <div class="col-md ms-4">
                <h4>{{title}}</h4>
                <h6 class="mt-3 opacity-50"><small>{{likes}} likes</small></h6>
            </div>
            <div class="col-md">
                <a class="btn btn-sm-dark hover-grow" href="./recipe-detail-admin.html">View
                    Details</a>
            </div>
            <span class=" line-deco-item"></span>
        </div>
    </div>
    <!--final card-->`
});