class MyNav extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadow.innerHTML =`
            <style>
            nav {
                background-color: black;
                font-family: var(--font);
                padding: 10px;
                text-align: center;
                margin-top: 20px;
            }

            nav ul {
                list-style-type: none;
            }

            nav li {
                display: inline;
                margin-right: 10px;
                /* Spacing between links */
                margin-bottom: 10px;
            }

            nav li a {
                text-decoration: none;
                color: var(--link-default);
                font-size: 24px;
                font-weight: bold;
                cursor: var(--cursor-main)
            }

            nav li a:hover {
                color: var(--link-hover);
                cursor: var(--cursor-main)
            }
            </style>
            <nav>
                <li><a href="./" onclick="clickSoundLoad(event)" onmouseenter="hoverSound()">Home</a></li>
                <li><a href="https://huecycles.com/andromedia/team" onclick="clickSoundLoad(event)" onmouseenter="hoverSound()">Meet the Team</a></li>
                <li><a href="https://huecycles.com/andromedia/faq" onclick="clickSoundLoad(event)" onmouseenter="hoverSound()">FAQ</a></li>
            </nav>
        `;
    }
}

customElements.define("my-nav", MyNav);