app.component('filter-category',{ //metodo que responde al click
    props:{
        category:{
            type: String
        }

    },
    methods:{
        onClickCategoryButton(){
            this.$emit('selectedcategory', this.category);
        }
    },
    template:
    /*html*/
    `<button class="btn" v-on:click="onClickCategoryButton"><small class="text-muted">{{category}}</small></button>`
})