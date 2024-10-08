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
            a {
                text-decoration: none;
                cursor: var(--cursor-main);
                color: var(--link-alt);
                font-family: var(--font);
            }
            a:hover {
	            cursor: var(--cursor-main);
	            color: var(--link-hover);
            }
        </style>
            ANDROMEDIA TEAM © 2021-2024<br>
            <a href="https://deltarune.com/">DELTARUNE</a> © Toby Fox<br>
            Website © <a href="https://huecycles.com/about">HUECYCLES</a> & <a href="https://wiltzy.art/">WIL-TZY</a>
        `;
    }
}

customElements.define("my-footer", MyFooter);