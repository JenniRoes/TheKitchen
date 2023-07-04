app.component('user-profile', {
  data() {
    return {
      name: '',
      lastname: '',
      country: '',
      email: '',
    }
  },
  created() {
    this.name = localStorage.getItem('name');
    this.lastname = localStorage.getItem('lastname');
    this.country = localStorage.getItem('country');
    this.email = localStorage.getItem('email');
  },
    methods: {
      logout(){
        token = localStorage.getItem('token');

        axios({
          method: 'get',
          url: 'http://localhost/primerprueba/public/api/users/logout',
          headers: {
            Authorization: 'Bearer ${token}'
          }
        })
        .then(
          (response) => {
            window.location.href = 'http://localhost/proyecto_interactivasII/dist/login.html'
          }
        )
        .catch (
          error => console.log(error)
        );
      }
        
    },
    template:
      /*html*/
      `<!--about user-->
      <div class="col-2 user-container">
        <div class="mx-auto mt-5 user-name">
          <img class="img-fluid rounded-circle" src="./imgs/userprofile.png" alt="user profile">
          <h4 class="mt-3">{{name}}</h4>
        </div>
        <div class="text-user-container ms-4 me-5 pe-3 ps-3">
          <h5>About me</h5>
          <p>Hello, everyone! My name is {{name}} {{lastname}}. I love the delicious recipes of The Kitchen</p>
          <p>I'm from {{ country }}. If you want a recipe or have questions about any ingredient, description or process to cook a recipe from my country, you can write to my email:</p>
          <p>{{ email }}</p>
          <p>I hope I can help you and exchange recipes, enjoy The Kitchen!</p>
          <a href="./login.html" class="btn btn-md-line mt-5 btn-hidden" @click= "logout">Log out</a>
        </div>
      </div>
      `
  });