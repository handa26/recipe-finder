class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
            .search-container {
                width: auto;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 200px;
                display: flex;
                position: sticky;
                top: 20px;
                background-color: white;
            }
            .search-container > input {
                width: 85%;
                padding: 16px;
                border: 0;
                border: 1px solid #e67e22;
                font-weight: bold;
                border-top-left-radius: 200px;
                border-bottom-left-radius: 200px;
            }
            .search-container > input:focus {
                outline: 0;
                border-bottom: 2px solid #e67e22;
            }
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            .search-container >  input::placeholder {
                color: #e67e22;
                font-weight: normal;
            }
            .search-container > button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: #e67e22;
                color: white;
                border: 0;
                text-transform: uppercase;
                border-top-right-radius: 200px;
                border-bottom-right-radius: 200px;
            }
            @media screen and (max-width: 550px) {
                .search-container {
                    flex-direction: column;
                    position: static;
                    padding: 40px;
                    border-radius: 10px;
                }

                .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                    border-bottom: 1px solid #e67e22;
                    border-radius: 10px;
                }

                .search-container > button {
                    width: 100%;
                    border-radius: 10px;
                }
            }
       </style>
       <div id="search-container" class="search-container">
           <input placeholder="Search Meals" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);