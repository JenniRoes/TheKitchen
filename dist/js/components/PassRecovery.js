app.component('pass-recovery',{
    
    template:
    /*html*/
    `
    <div class="container center mt-5">
    <div class="row">
        <img src="./imgs/imagotipo-xl.png" class="imagotipo-responsive mt-5 mb-5" alt="logo">
    </div>
</div>
<div class="row container center mt-1 col-md-12 margin-box box-width">
    <div class="row container-pass-big col-md-10 center center-img-detail">
        <div>
            <p class="text-center mt-2">Enter your email and we’ll send you a link to reset your password</p>
            <form>
                <label class="form-label text-forms" for="email">Email</label>
                <input id="email" class="form-control" type="email" name="email">
            <div class="col col-md-12 center-button margin-box ">
                <div class="row center margin-box">
                    <a href="./pass-recovery-three.html" class="center btn-xxl-dark hover-grow mt-4">Reset password</a>
                </div>
            </div>
            </form>
        </div>
    </div>
</div>`
});