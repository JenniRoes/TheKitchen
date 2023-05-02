const app = Vue.createApp({
    data() { 
        return {
            recipes: [ 
                { id: 1, image: "./imgs/recipe-one.png", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago", level: "Easy"},
                { id: 2, image: "./imgs/recipe-two.png", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago", level: "Easy"},
                { id: 3, image: "./imgs/recipe-three.png", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago", level: "Easy"},
                { id: 4, image: "./imgs/recipe-four.png", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago", level: "Easy"},
                { id: 5, image: "./imgs/recipe-five.png", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago", level: "Easy"},
                { id: 6, image: "./imgs/recipe-six.png", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago", level: "Easy"},
                { id: 7, image: "./imgs/recipe-seven.png", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago", level: "Easy"},
                { id: 8, image: "./imgs/recipe-eight.png", title: "Recipe title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago", level: "Easy"}
            ],
            recipestop:[
                {id: 101, image:"./imgs/recipe-two.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#1"},
                {id: 102, image:"./imgs/recipe-two.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#2"},
                {id: 103, image:"./imgs/recipe-two.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#3"},
                {id: 104, image:"./imgs/recipe-two.png", title:"Recipe title", category: "Entries", level: "Easy", ocassion: "All", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", totaltime: "45min", portions: "4-5", time: "Update 3min ago", position: "#4"}
            ],
            relatedrecipes:[
                {id: 201, image: "./imgs/recipe-two.png", title: "Recipe title", level: "Easy", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago"},
                {id: 202, image: "./imgs/recipe-two.png", title: "Recipe title", level: "Easy", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago"},
                {id: 203, image: "./imgs/recipe-two.png", title: "Recipe title", level: "Easy", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "Update 3min ago"},
                {id: 204, image: "./imgs/recipe-two.png", title: "Recipe title", level: "Easy", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremipsum dolor sit amet, co. Lorem ipsum dolor sit amet, co", time: "sUpdate 3min ago"}
            ],
            recipeslist:[
                {id: 301, image: "./imgs/itemlist.png", title: "Recipe title", time: "Update 3min ago"},
                {id: 302, image: "./imgs/itemlist.png", title: "Recipe title", time: "Update 3min ago"},
                {id: 303, image: "./imgs/itemlist.png", title: "Recipe title", time: "Update 3min ago"},
                {id: 304, image: "./imgs/itemlist.png", title: "Recipe title", time: "Update 3min ago"}
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
            ]
        }
    }
});
