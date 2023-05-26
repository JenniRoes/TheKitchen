app.component('banner',{
    props: {
        title: {
            type: String,
            default: "Section Title"
        },
        description: {
            type: String,
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem est lectustelluspellentesque at purus. Dictumst blandit odio orci elit non donec sodales. Nullam quampharetra,eleifendconsequat velit id euismod.Mauris nisi, suspendisse tristique ac urna. Fermentum sit enim porttitor et vitae. Vestibulumcraspellentesque interdum sit ullamcorper. Sed purus fringilla pellentesque interdum volutpatelitpulvinarplacerat."
        }
    },
    template:
    /*html*/
    `<div class="row">
        <div class="col-lg-5 ">
            <h1 class="mt-5">{{title}}</h1>
            <p class="mt-3">{{description}}</p>
        </div>
    <div class="col-4 ms-5 banner-hidden">
        <p><img src="../dist/imgs/banner-md.png" class="" alt="photo food"></p>
    </div>
</div>`

});