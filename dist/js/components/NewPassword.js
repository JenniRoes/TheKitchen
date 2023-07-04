app.component('new-password',{
    data() {
        return {
          newPassword: ''
        }
      },
      created() {
        this.newPassword = localStorage.getItem('password');
      },
    template:
    /*html*/ `
    <div class="container center mt-5">
    <div class="row">
        <img src="./imgs/imagotipo-xl.png" class="imagotipo-responsive mt-5 mb-5" alt="logo">
    </div>
</div>
<div class="container center mt-1">
    <div class="row container-pass-small center mt-2 col margin-box center-img-detail">
        <div class="mt-3 mb-3">
            <p class="text-center text-med">Hello</p>
            <p class="text-center">A request has been made to reset your password. This is your new password:</p>
            <p class="text-center text-med">{{newPassword}}</p>
            <div class="col center-button mt-4">
                <div class="row center"><a href="./login.html" class="btn-xxl-dark hover-grow">Login</a></div>
            </div>
        </div>
    </div>
</div>`
});