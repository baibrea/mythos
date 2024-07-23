class WebsiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <!-- when icon is clicked, go back to home page -->
                <div class="nav-logo">
                <a href="/" class="logo-icon">
                    <img src="images/magical.png" id="logo">
                    <p>mythos</p>
                </a>
                    <!-- <a href="/" class="logo-icon"><i class="fi fi-tr-book-open-cover" id="logo"></i></a> -->
                </div>

                <nav class="navbar">
                <ul>
                    <li>
                    <a href="index.html">home</a>
                    </li>
                    <li>
                    <a href="browse.html">browse</a>
                    </li>
                    <li>
                    <a href="about.html">about</a>
                    </li>
                </ul>

                <div class="nav-icons">
                    <img src="images/search-interface-symbol.png" class="search-img">
                    <img src="images/gnome.png" class="profile-img">
                </div>
                </nav>

                <div class="search">
                    <img src="images/close.png" class="close-img">
                    <form method="GET" action="search.html">
                        <input type="text" name="q" placeholder="What are you looking for?" autofocus>
                        <button type="submit" class="submit-button">
                        <img src="images/search-interface-symbol.png" class="search-img">
                        </button>
                    </form>        
                </div>

            </header>

            <hr class="divider">
        `
    }
}

customElements.define("website-header", WebsiteHeader);

const searchButton = document.querySelector(".search-img");
const searchClose = document.querySelector(".close-img");
const searchContent = document.querySelector(".search");

if (searchButton) {
    searchButton.addEventListener("click", () => {
        searchContent.classList.add("show-search");
    })
}

if (searchClose) {
    searchClose.addEventListener("click", () => {
        searchContent.classList.remove("show-search");
    })

    window.addEventListener("keydown", () => {
        if (event.keyCode === 27) {
            searchContent.classList.remove("show-search");
        }
    })
}