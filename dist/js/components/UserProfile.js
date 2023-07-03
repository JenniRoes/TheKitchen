app.component('user-profile', {
    props: {
      user: {
        type: String,
        default: "User name"
      },
      name: { 
        type: String,
        default: "username"
      },
      email: {
        type: String,
        default: "Email"
      },
      country: {
        type: String
      }
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
          <h4 class="mt-3">{{ user }}</h4>
        </div>
        <div class="text-user-container ms-4 me-5 pe-3 ps-3">
          <h5>About me</h5>
          <p>Name: {{ name }}</p>
          <p>Country: {{ country }}</p>
          <p>Email: {{ email }}</p>
          <a href="./login.html" class="btn btn-md-line mt-5 btn-hidden" @click= "logout">Log out</a>
        </div>
      </div>`
  });