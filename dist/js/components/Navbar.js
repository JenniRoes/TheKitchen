app.component('navbar', {
  data() {
    return {
      inputValue: '',
      keyword: '',
    }
  },
  methods: {
    onClickSearch(keyword) {
      this.keyword = this.inputValue;
      this.$emit('searchRecipes', this.keyword);
    }
  },
  template:
    /*html*/
    `<!--navbar-->
    <nav id="navbar-main" class="navbar navbar-expand-lg">
    <a class="navbar-brand logo-mobile color-header" href="#">
        <img src="../dist/imgs/logotipo-xsm.png" class="logo-mobile img-fluid d-inline-block align-text-middle"
            alt="logotipo">
    </a>
    <!--boton navbar-main-->
    <button class="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-4 justify-content-end mt-2 mb-2" id="menu">
        <ul class="navbar-nav gap-5 me-5">
            <li class=" position-relative li-responsive"><a class="header-link" href="./home.html">Home</a>
            </li>
            <li class="position-relative"><a class="header-link" href="./top-ten.html">Top Recipes</a></li>
            <li class="position-relative"><a class="header-link" href="./categories.html">Categories</a>
            </li>
            <li class="position-relative obj-hidden-desk"><a class="header-link"
                    href="./user-profile.html">Profile</a></li>
        </ul>
        <!--search placeholder and button-->
        <div class="me-3 li-responsive">
            <form class="d-flex input-group" action="search.html" method="get" role="search">
                <input v-model="inputValue" class="form-control me-2 input-search" type="text" name="keyword"
                    placeholder="Search something..." aria-label="Search">
                <button class="btn btn-search rounded-end" type="submit"><img src="./imgs/icons/search.svg"
                        alt="search icon"></button>
                <!--user profile-->
                <a href="./user-profile.html" class="header-link">
                    <img class="ms-4 me-5 pe-0 photo-hidden user-icon" src="./imgs/icons/user.svg" alt="user profile">
                </a>
            </form>
        </div>
    </div>

</nav>`
});