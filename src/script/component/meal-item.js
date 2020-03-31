class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
               .recipe {
                border-radius: 10px;
                box-shadow: 0px 5px 20px rgb(71, 71, 71);
                margin: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
                align-items: center;
                min-width: 40%;
                padding: 50px;
                margin-top: 110px;
               }

               img {
                width: auto;
                height: auto;
                border-radius: 30%;
               }

               h2 {
                font-size: 180%;
                word-spacing: 2px;
                text-align: center;
                margin-bottom: 30px;
                margin-top: 15px;
                letter-spacing: 1px;
               }

               h2:after {
                display: block;
                height: 2px;
                background-color: #e67e22;
                content: " ";
                width: 100px;
                margin: 0 auto;
                margin-top: 30px;
               }

               img {
                width: 400px;
                height: auto;
                border-radius: 30%;
              }

               @media only screen and (max-width: 480px) {
                img {
                    width: 200px;
                    height: auto;
                    border-radius: 20px;
                }
               }
           </style>
           <div class="recipe">
                <h2>${this._meal.strMeal}</h2>
                <img src="${this._meal.strMealThumb}" alt="Fan Art">
                <p>${this._meal.strInstructions}</p>
           </div>`;
    }
}

customElements.define("meal-item", MealItem);