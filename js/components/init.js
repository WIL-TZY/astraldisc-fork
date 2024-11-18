class InitComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.initRouteRewrite();
    }

    initRouteRewrite() {
        const isDev = window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1'); // || window.location.search.includes('dev=true');

        if (isDev) {
            console.log('Development Mode');

            // Rewrite routes (for Development Mode)
            document.addEventListener('DOMContentLoaded', () => {
                const links = document.querySelectorAll('a');

                links.forEach(link => {
                    link.addEventListener('click', (event) => {
                        event.preventDefault();
                        let path = link.getAttribute('href');
                        
                        // Make the path absolute in case it's a relative URL
                        const fullPath = new URL(path, window.location.href).href;

                        // Try loading the page without .html
                        fetch(fullPath)
                            .then(response => {
                                if (response.ok) {
                                    // The page is found without .html
                                    const directoryPath = `${fullPath}.html`;
                                    window.location.href = directoryPath;
                                    console.log(`(1)Navigating to: ${directoryPath}`);
                                } else {
                                    // If the page is not found, try adding .html
                                    const htmlPath = `${fullPath}.html`;
                                    window.location.href = htmlPath;
                                    console.log(`(2)Navigating to: ${htmlPath}`);
                                }
                            })
                            .catch(error => {
                                // If fetch fails due to network error
                                console.error('Fetch error:', error);
                                
                                // Fallback to .html if there's an error
                                const fallbackPath = `${fullPath}.html`; 
                                window.location.href = fallbackPath;
                                console.log(`Navigating to: ${fallbackPath}`);
                            });
                    });
                });
            });
        }
    }
}

customElements.define('init-component', InitComponent);