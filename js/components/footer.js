class MyFooter extends HTMLElement {
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
            p {
                text-shadow: none;
                margin: 0 auto;
            }
            a {
                text-decoration: none;
                text-shadow: none;
                cursor: var(--cursor-main);
                color: var(--link-alt);
                font-family: var(--font);
                font-size: 140%;
                font-weight: normal;
                text-shadow: none;
            }
            a:hover {
	            cursor: var(--cursor-main);
	            color: var(--link-hover);
                text-shadow: none;
            }
        </style>
            <p>ASTRAL DISC © 2021-2024</p>
            <p><a href="https://deltarune.com/">DELTARUNE</a> © Toby Fox</p>
            <p>Website © <a href="https://huecycles.com/about">HUECYCLES</a> & <a href="https://wiltzy.art/">WIL-TZY</a></p>
        `;
    }
}

customElements.define("my-footer", MyFooter);