app.component('signup', {
    methods: {
        registerUser() {
            // Obtener los valores de los campos de entrada
            const name = document.getElementById('name').value;
            const lastName = document.getElementById('lastname').value;
            const country = document.getElementById('country').value;
            const email = document.getElementById('email').value;
            const user = document.getElementById('user').value;
            const password = document.getElementById('password').value;

            // Crear el objeto de datos a enviar en la solicitud POST
            const data = {
                name: name,
                last_name: lastName,
                country: country,
                email: email,
                user: user,
                password: password
            };

            // Realizar la solicitud POST al endpoint de registro
            axios.post('http://localhost/primerprueba/public/api/users/register', data)
                .then(response => {
                    console.log(response.data);
                    // Redirigir a ../../login
                    window.location.href = '../../login.html';
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    template:
      /*html*/
      `<!--form-->
    <div class="container container-signup mb-5">
    <!--name-->
    <div class="m-3 p-2">
        <label class="form-label mt-3" for="name">Name</label>
        <input id="name" class="form-control mb-2" type="text" name="name">
        <!--lastname-->
        <label class="form-label" for="lastname">Lastname</label>
        <input id="lastname" class="form-control mb-2" type="text" name="lastname">
        <!--country-->
        <label class="form-label" for="country">Country</label>
        <input id="country" class="form-control mb-2" type="text" name="country">
        <!--email-->
        <label class="form-label" for="email">Email</label>
        <input id="email" class="form-control mb-2" type="email" name="email">
        <!--user-->
        <label class="form-label" for="user">User</label>
        <input id="user" class="form-control mb-2" type="text" name="user">
        <!--password-->
        <label for="password" class="form-label">Password</label>
            <input id="password" class="form-control mb-2" type="password">
            
        <!--buttons-->
        <div class="col center-button">
            <div class="">
            <div class="row center"><a href="./login.html" class="center btn-signup-dark mt-4 mb-3 hover-grow" @click="registerUser">Sign up</a></div>
                <span class=" line-deco mb-3 mx-auto"></span>
                <div class="row center"><a href="login.html" class="center btn-signup-light mb-4 hover-grow">Log in</a></div>
            </div>
            
        </div>
    </div>
</div>`
});
