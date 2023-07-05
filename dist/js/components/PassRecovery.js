app.component('pass-recovery', {
    methods: {
        newPassword() {
            const email = document.getElementById('email').value;

            axios.post('http://localhost/primerprueba/public/api/users/recoverpassword', {
                email: email,
            })
                .then(response => {
                    //console.log(response.data.password);
                    localStorage.setItem('password', response.data.password);
                    window.location.href = 'http://localhost/proyecto_interactivasII/dist/pass-recovery-two.html';
                })
                .catch(error => {
                    console.log(error);
                    alert("No se encuentra registrado o ha ingresado los datos incorrectamente")
                });
        }
    },
    template:
        /*html*/
        `
    <div class="container center mt-2 mb-5">
    <div class="row">
        <img src="./imgs/imagotipo-xl.png" class="imagotipo-responsive mt-5 mb-2" alt="logo">
    </div>
</div>
<div class="row container center mt-1 col-md-12 margin-box box-width mb-5">
    <div class="row container-pass-big col-md-10 center center-img-detail">
        <div>
            <p class="text-center mt-2">Enter your email and we’ll send you a link to reset your password</p>
            <form>
                <label class="form-label text-forms" for="email">Email</label>
                <input id="email" class="form-control" type="email" name="email">
            <div class="col col-md-12 center-button margin-box ">
                <div class="row center margin-box">
                    <a href="#" class="center btn-xxl-dark hover-grow mt-4" @click="newPassword">Reset password</a>
                </div>
            </div>
            </form>
        </div>
    </div>
</div>`
});