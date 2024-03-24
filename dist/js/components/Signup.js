app.component('signup', {
    methods: {
        registerUser() {
            const name = document.getElementById('name').value;
            const lastName = document.getElementById('lastname').value;
            const country = document.getElementById('country').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (name && lastName && country && email && password) {
                const data = {
                    name: name,
                    last_name: lastName,
                    country: country,
                    email: email,
                    password: password
                };

                axios.post('http://localhost/primerprueba/public/api/users/register', data)
                    .then(response => {
                        window.location.href = 'http://localhost/TheKitchen/dist/confirm.html';
                    })
                    .catch(error => {
                        console.error(error);

                        console.log(response);
                    });
            } else {
                const form = document.getElementById('signupForm');
                
                if (form) {
                    form.classList.add('was-validated');
                }
            }
        }
    },
    template:
        /*html*/
        `
    <div class="container container-signup mb-5">
    <!--form-->
    <form id="signupForm" class="m-3 p-2 needs-validation" novalidate>
        <label class="form-label mt-3" for="name">Name</label>
        <input id="name" class="form-control mb-2" type="text" name="name" required>
        <div class="invalid-feedback">Please enter your name</div>
        <!--lastname-->
        <label class="form-label" for="lastname">Lastname</label>
        <input id="lastname" class="form-control mb-2" type="text" name="lastname" required>
        <div class="invalid-feedback">Please enter your lastname</div>
        <!--country-->
        <label class="form-label" for="country">Country</label>
        <input id="country" class="form-control mb-2" type="text" name="country" required>
        <div class="invalid-feedback">Please enter your country</div>
        <!--email-->
        <label class="form-label" for="email">Email</label>
        <input id="email" class="form-control mb-2" type="email" name="email" required>
        <div class="invalid-feedback">Please enter your email</div>
        <!--password-->
        <label for="password" class="form-label">Password</label>
        <input id="password" class="form-control mb-2" type="password" required>
        <div class="invalid-feedback">Please enter your password</div>
                
        <!--buttons-->
        <div class="col center-button">
            <div class="row center"><a class="center btn-signup-dark mt-4 mb-3 hover-grow" @click="registerUser">Sign up</a></div>
            <div>
                <span class="line-deco mb-3 mx-auto"></span>
            </div>
            <div class="row center"><a href="login.html" class="center btn-signup-light mb-4 hover-grow">Log in</a></div>
        </div>              
    </form>        
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