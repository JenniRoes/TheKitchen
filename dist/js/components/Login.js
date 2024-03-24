app.component('login', {
  data() {
    return {
      userData: {
        user: '',
        password: ''
      },
      formSubmitted: false,
      showIncorrectPasswordAlert: false
    };
  },
  methods: {
    submitForm() {
      this.formSubmitted = true;
    
      const user = this.userData.user;
      const password = this.userData.password;
    
      if (user && password) {
        axios.post('http://localhost/primerprueba/public/api/users/login', {
          email: user,
          password: password
        })
        .then(response => {
          const userData = response.data.user;
    
          if (userData) {
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('name', userData.name);
            localStorage.setItem('lastname', userData.last_name);
            localStorage.setItem('country', userData.country);
            localStorage.setItem('email', userData.email);
    
            window.location.href = 'http://localhost/TheKitchen/dist/home.html';
          } else {
            this.showIncorrectPasswordAlert = true;
          }
        })
        .catch(error => {
          if (error.response && error.response.status === 401) {
            this.showIncorrectPasswordAlert = true;
          } else {
            console.log(error);
            window.location.href = 'http://localhost/TheKitchen/dist/error.html';
          }
        });
      } else {
        const form = document.getElementById('loginForm');
        if (form) {
          form.classList.add('was-validated');
        }

      }
    }    

  },
  template:
    /*html*/
    `
    <!--Alert incorrect answer-->
    <div v-if="showIncorrectPasswordAlert" class="alert-incorrect mb-5" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill me-4" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg>
      <div>Incorrect password or user. Please try again!</div>
    </div>
    <!--form-->
    <div id="loginForm" class="row container center mt-1 mb-5 col-md-12 margin-box box-width">
      <div class="row container-login col-md-12 center mb-5">
        <form class="mt-2 mb-2 needs-validation" @submit.prevent="submitForm" novalidate>
          <label class="form-label text-forms" for="user">Email</label>
          <input id="user" class="form-control" type="text" name="user" v-model="userData.user" required>
          <div class="invalid-feedback">Please enter your email</div>

          <label for="password" class="form-label mt-4 text-forms">Password <span class="text-question"><a href="./pass-recovery-one.html" class="text-question"> Forgot?</a></span></label>
          <input id="password" type="password" class="form-control color-input" v-model="userData.password" required >
          <div class="invalid-feedback is-invalid">Please enter your password</div>

          <div class="col center-button">
            <div class="row center">
              <button type="submit" class="center btn-xl-dark mt-4 hover-grow">Log in</button>
            </div>
            <div>
              <span class="line-deco mt-4 mb-3 mx-auto"></span>
            </div>
            <div class="row center">
              <a href="./signup.html" class="center btn-xl-light mt-2 hover-grow">Sign up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  `
});

(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()