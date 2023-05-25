const app = Vue.createApp({
    data() { 
        return {
            recipes: [ 
                { id: 1, image: "./imgs/recipe-one.jpg", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", likes: 0, category: "Category"},
                { id: 2, image: "./imgs/recipe-two.jpg", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", likes: 0, category: "Category"},
                { id: 3, image: "./imgs/recipe-three.jpg", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", likes: 0, category: "Category"},
                { id: 4, image: "./imgs/recipe-four.jpg", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", likes: 0, category: "Category"},
                { id: 5, image: "./imgs/recipe-five.jpg", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", likes: 0, category: "Category"},
                { id: 6, image: "./imgs/recipe-six.jpg", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", likes: 0, category: "Category"},
                { id: 7, image: "./imgs/recipe-seven.jpg", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", likes: 0, category: "Category"},
                { id: 8, image: "./imgs/recipe-eight.jpg", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", likes: 0, category: "Category"}
            ],
            recipestop:[
                {id: 101, image:"./imgs/recipe-two.jpg", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", likes: 0, position: "#1"},
                {id: 102, image:"./imgs/recipe-two.jpg", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", likes: 0, position: "#2"},
                {id: 103, image:"./imgs/recipe-two.jpg", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", likes: 0, position: "#3"},
                {id: 104, image:"./imgs/recipe-two.jpg", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", likes: 0, position: "#4"}
            ],
            relatedrecipes:[
                {id: 201, image: "./imgs/recipe-two.jpg", title: "Recipe title", level: "Easy", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago"},
                {id: 202, image: "./imgs/recipe-two.jpg", title: "Recipe title", level: "Easy", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago"},
                {id: 203, image: "./imgs/recipe-two.jpg", title: "Recipe title", level: "Easy", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago"},
                {id: 204, image: "./imgs/recipe-two.jpg", title: "Recipe title", level: "Easy", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "sUpdate 3min ago"}
            ],
            recipestopten:[
                {id: 101, image:"./imgs/toprecipe.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#1"},
                {id: 102, image:"./imgs/toprecipe.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#2"},
                {id: 103, image:"./imgs/toprecipe.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#3"},
                {id: 104, image:"./imgs/toprecipe.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#4"},
                {id: 105, image:"./imgs/toprecipe.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#5"},
                {id: 106, image:"./imgs/toprecipe.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#6"},
                {id: 107, image:"./imgs/toprecipe.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#7"},
                {id: 108, image:"./imgs/toprecipe.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#8"},
                {id: 109, image:"./imgs/toprecipe.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#9"},
                {id: 110, image:"./imgs/toprecipe.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#10"}
            ],
            recipeslist:[
                {id: 21, image: "./imgs/itemlist.png", title: "Recipe title", likes: 0},
                {id: 22, image: "./imgs/itemlist.png", title: "Recipe title", likes: 0},
                {id: 23, image: "./imgs/itemlist.png", title: "Recipe title", likes: 0},
                {id: 24, image: "./imgs/itemlist.png", title: "Recipe title", likes: 0}
            ]
        }
    }
});
