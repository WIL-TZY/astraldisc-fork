class CookiesComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    // Init
    connectedCallback() {
        this.render();
        this.checkCookies();

        // Button Event listeners
        this.shadow.querySelector('.cookie-banner button:nth-of-type(1)').addEventListener('click', () => this.acceptCookies());
        this.shadow.querySelector('.cookie-banner button:nth-of-type(2)').addEventListener('click', () => this.rejectCookies());
    }

    render() {
      this.shadow.innerHTML = `
            <style>
            .cookie-banner {
                all: unset;
                display: none;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                border: green 2px solid;
                text-shadow: none;
                background: #000000;
                color: green;
                text-align: center;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                gap: 10px;
                opacity: 0.2;
                transition: opacity 0.5s ease-out;
            }

            .cookie-banner:hover {
                opacity: 1; /* Fully visible when hovered */
            }

            .cookie-banner.hidden {
                opacity: 0;
                pointer-events: none;
            }

            .cookie-banner p {
                all: unset;
                font-family: "8bitoperator JVE2";
                font-size: 16px;
                text-align: center;
                margin: 4px;
            }

            .cookie-banner button {
                all: unset;
                font-family: "8bitoperator JVE2";
                font-size: 16px;
                padding: 0 5px;
                cursor: inherit;
                color: #00ff00;
            }

            .cookie-banner button:hover {
                color: white;
                opacity: 1;
            }

            @media print {
                .cookie-banner {
                    display: none !important;
                }
            }
            </style>
            <div class="cookie-banner">
                <p>This website may use third-party cookies in some pages.</p>
                <button>Accept</button>
                <button>Reject</button>
            </div>
        `;
    }

    checkCookies() {
        if (localStorage.getItem('cookies_accepted') === null) {
        this.shadow.querySelector(".cookie-banner").style.display = "flex";
        }
    }

    acceptCookies() {
        localStorage.setItem('cookies_accepted', 'true');
        this.fadeOutCookies();
    }

    rejectCookies() {
        localStorage.setItem('cookies_accepted', 'false');
        this.fadeOutCookies();
    }

    fadeOutCookies() {
        const banner = this.shadow.querySelector(".cookie-banner");
        banner.classList.add("hidden");
        setTimeout(function() { banner.style.display = "none"; }, 500); // Transition effect
    }
}

customElements.define("cookies-component", CookiesComponent);