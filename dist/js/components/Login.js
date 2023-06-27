app.component('login', {
    methods: {
      loginUser() {
        const user = document.getElementById('user').value;
        const password = document.getElementById('password').value;
  
        // Realizar la solicitud de inicio de sesión al API
        axios.post('http://localhost/primerprueba/public/api/users/login', {
          email: user,
          password: password
        })
        .then(response => {
          // Solicitud de inicio de sesión exitosa
          // Redirigir al usuario a ../../home.html
          window.location.href = 'http://localhost/proyecto_interactivasII/dist/home.html';
        })
        .catch(error => {
          // Error en la solicitud de inicio de sesión
          console.log(error);
          // Puedes mostrar un mensaje de error o tomar otras acciones según tus necesidades
        });
      }
    },
    template:
      /*html*/
      ` <!--form-->
      <div class="row container center mt-1 mb-5 col-md-12 margin-box box-width">
          <!--initial card-->
          <div class="row container-login col-md-12 center mb-5">
              <form class="mt-2 mb-2">
                  <label class="form-label text-forms" for="user">User</label>
                  <input id="user" class="form-control" type="text" name="user">
                  <label for="password" class="form-label mt-4 text-forms">Password <span
                          class="text-question"><a href="./pass-recovery-one.html" class="text-question"> Forgot?</a></span></label>
                  <input id="password" type="password" class="form-control color-input">
                  <div class="col center-button">
                      <div class="row center">
                        <!-- Agregar el evento 'click' para llamar al método 'loginUser' -->
                        <a href="#" class="center btn-xl-dark mt-4 hover-grow" @click="loginUser">Log in</a>
                      </div>
                      <div>
                          <span class=" line-deco mt-4 mb-3 mx-auto"></span>
                      </div>
                      <div class="row center"><a href="./signup.html" class="center btn-xl-light mt-2 hover-grow">Sign up</a></div>
                      <a class=" center text-orange mt-5" href="./recipe-list-admin.html"><small>Admin Access</small></a>
                  </div>
              </form>
          </div>
          <!--final card-->
      </div>`
  });