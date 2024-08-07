class WebsiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <!-- when icon is clicked, go back to home page -->
                <div class="nav-logo">
                <a href="/" class="logo-icon">
                    <img src="/images/magical.png" id="logo">
                    <p>mythos</p>
                </a>
                    <!-- <a href="/" class="logo-icon"><i class="fi fi-tr-book-open-cover" id="logo"></i></a> -->
                </div>

                <nav class="navbar">
                <ul>
                    <li>
                    <a href="/">home</a>
                    </li>
                    <li>
                    <a href="/browse">browse</a>
                    </li>
                    <li>
                    <a href="/about">about</a>
                    </li>
                </ul>

                <div class="nav-icons">
                    <img src="/images/search-interface-symbol.png" class="search-img">
                    <img src="/images/gnome.png" class="profile-img">
                </div>
                </nav>

                <div class="search">
                    <img src="/images/close.png" class="close-img">
                    <div class="row">
                        <form method="GET" action="/search">
                            <input type="text" name="q" id="input-box" placeholder="What are you looking for?" autocomplete="off" autofocus>
                            <button type="submit" class="submit-button">
                            <img src="/images/search-interface-symbol.png" class="search-img">
                            </button>
                        </form>
                    </div>
                    <div class="result-box">
                        <ul>
                            <li>One Dark Window</li>
                            <li>Shogun</li>
                            <li>I like you o///o</li>
                            <li>😳👉👈</li>
                        </ul>
                    </div>
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

let availableKeywords = [
    'Shogun' ,
    'The Lightning Thief' ,
    'Throne of Glass' ,
    'Blue Period' , 
    'Red Rising' ,
    'Big Nate' ,
    'Pachinko',
    'The Sea of Monsters',
    'The Titans Curse',
    'The Battle of the Labyrinth',
    'The Last Olympian',
    'The Chalice of the Gods',
    'Wrath of the Triple Goddess'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length) {
        resultsBox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list)=>{
        return"<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = ' ';
}