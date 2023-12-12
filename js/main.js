
const header = document.getElementById('header-main');
header.innerHTML = getHeader();

const footer = document.getElementById('footer-main');
footer.innerHTML = getFooter();

function getHeader(){ //need to remove this <header> and </header>
    return (`
                <h1>Audrey Ruano</h1>
                <nav>
                    <ul class="nav-list">
                        <li style="order: 1" class="nav-item"><a href="index.html">Home</a></li>
                        <li style="order: 1" class="nav-item"><a href="about.html">About</a></li>
                        <li style="order: 1" class="nav-item"><a href="portfolio.html">Portfolio</a></li>
                        <li style="order: 1" class="nav-item"><a href="travel.html">Travel</a></li>
                        <li style="order: 1" class="nav-item"><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
        `)
}

function getFooter() {
    return `&copy; 2023 Audrey Ruano. Open Source.`
}