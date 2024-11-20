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

                        // Try loading the page
                        fetch(fullPath)
                            .then(response => {
                                if (response.ok) {
                                    // The page is found with .html
                                    if (fullPath.includes(".html")) {
                                        window.location.href = fullPath;
                                        console.log(`(1)Navigating to: ${fullPath}`);
                                    }
                                    // The path leads to a directory
                                    else {
                                        const directoryPath = `${fullPath}`; // `${fullPath}.html`;
                                        window.location.href = directoryPath;
                                        console.log(`(2)Navigating to: ${directoryPath}`);
                                    }
                                // The page is not found
                                } else {
                                    // If the page is not found, try adding .html
                                    const htmlPath = `${fullPath}.html`;
                                    
                                    // Try loading the page with the new url
                                    fetch(htmlPath)
                                        .then(htmlResponse => {
                                            if (htmlResponse.ok) {
                                                // If .html page is found, navigate to it
                                                console.log(`(3)Navigating to: ${htmlPath}`);
                                                window.location.href = htmlPath;
                                            } else {
                                                // If both attempts fail, redirect to the 404 page
                                                console.log('(4)Page not found, redirecting to 404');
                                                window.location.href = '/404.html';
                                            }
                                        })
                                        .catch(error => { // fetch fails due to network error
                                            console.error('(5)Error fetching .html:', error);
                                        });
                                }
                            })
                            .catch(error => { // fetch fails due to network error
                                console.error('(6)Fetch error:', error);
                            });
                    });
                });
            });
        }
    }
}

customElements.define('init-component', InitComponent);