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
                font-family: var(--main-font);
                text-align: center;
                margin-top: 20px;
            }

            nav ul {
                list-style-type: none;
            }

            nav li {
                display: inline;
                margin-right: 10px;
                margin-left: 25px;
                /* Spacing between links */
                margin-bottom: 10px;
            }

            nav li a {
                text-decoration: none;
                color: var(--link-default);
                font-size: 300%;
                cursor: var(--cursor-main)
            }

            nav li a:hover {
                color: var(--link-hover);
                cursor: var(--cursor-main)
            }
            nav li a:hover.break {
	            cursor: var(--cursor-break);
	            color: var(--link-hover);
	            font-family: var(--font);
            }
            </style>
            <nav>
                <li><a href="./chapters" onclick="clickSoundLoad(event)" onmouseenter="hoverSound()">Home</a></li>
                <li><a href="./team" onclick="clickSoundLoad(event)" onmouseenter="hoverSound()">Team</a></li>
                <li><a href="./faq" onclick="clickSoundLoad(event)" onmouseenter="hoverSound()">FAQ</a></li>
                <li><a href="./newsletters" onclick="clickSoundLoad(event)" onmouseenter="hoverSound()">Newsletters</a></li>
            </nav>
        `;
    }
}

customElements.define("my-nav", MyNav);