app.component('login', {
    methods: {
      loginUser() {
        const user = document.getElementById('user').value;
        const password = document.getElementById('password').value;
  
        axios.post('http://localhost/primerprueba/public/api/users/login', {
          email: user,
          password: password
        })
        .then(response => {
          localStorage.setItem('token', response.data.accessToken);
          localStorage.setItem('name', response.data.user.name);
          localStorage.setItem('lastname', response.data.user.last_name);
          localStorage.setItem('country', response.data.user.country);
          localStorage.setItem('email', response.data.user.email);
          window.location.href = 'http://localhost/TheKitchen/dist/home.html';
        })
        .catch(error => {
          console.log(error);
          window.location.href = 'http://localhost/TheKitchen/dist/error.html';
        });
      }
    },
    template:
      /*html*/
      ` <!--form-->
      <div class="row container center mt-1 mb-5 col-md-12 margin-box box-width">
          <!--initial form-->
          <div class="row container-login col-md-12 center mb-5">
              <form class="mt-2 mb-2">
                  <label class="form-label text-forms" for="user">Email</label>
                  <input id="user" class="form-control" type="text" name="user">
                  <label for="password" class="form-label mt-4 text-forms">Password <span
                          class="text-question"><a href="./pass-recovery-one.html" class="text-question"> Forgot?</a></span></label>
                  <input id="password" type="password" class="form-control color-input">
                  <div class="col center-button">
                      <div class="row center">
                        <a href="#" class="center btn-xl-dark mt-4 hover-grow" @click="loginUser">Log in</a>
                      </div>
                      <div>
                          <span class=" line-deco mt-4 mb-3 mx-auto"></span>
                      </div>
                      <div class="row center"><a href="./signup.html" class="center btn-xl-light mt-2 hover-grow">Sign up</a></div>
                  </div>
              </form>
          </div>
          <!--final form-->
      </div>`
  });