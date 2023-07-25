const snacks = [
  {
    id: 1,
    name: "Chocolate Chip Cookie",
    type: "Cookie",
    tasteIsGood: true,
    imageUrl: "./assets/chocolateChipCookie.jpeg",
    cookingStyle: "baked",
    description: "Fresh baked chocolate chip cookies",
  },

  {
    id: 2,
    name: "Frosted Sugar Cookie",
    type: "Cookie",
    tasteIsGood: true,
    imageUrl: "./assets/sugarCookies.jpeg",
    cookingStyle: "baked",
    description: "Amazing frosted sugar cookies that are mysterious",
  },

  {
    id: 3,
    name: "Frosted Sugar Cookie",
    type: "Cookie",
    tasteIsGood: true,
    imageUrl: "./assets/sugarCookies.jpeg",
    cookingStyle: "baked",
    description: "Amazing frosted sugar cookies that are mysterious"
  },

  {
    id: 4,
    name: "Gelato",
    type: "Ice Cream",
    tasteIsGood: true,
    imageUrl: "./assets/gelato.png",
    cookingStyle: "frozen",
    description: "Tasty Italian ice cream"
  },

  {
    id: 5,
    name: "Bread",
    type: "Bread",
    tasteIsGood: true,
    imageUrl: "./assets/bread.jpeg",
    cookingStyle: "baked",
    description: "You though it was bread, but it was me, Dio!"
  },

  {
    id: 6,
    name: "Doughnut",
    type: "Doughnut",
    tasteIsGood: true,
    imageUrl: "./assets/doughnut.jpeg",
    cookingStyle: "baked",
    description: "Thank God it's doughnut"
  }
];

let domString = "";
let app = document.querySelector("#app");

for (let snack of snacks) {
  domString += `
        <div class="card" style="width: 18rem;">
        <img src="${snack.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${snack.name}</h5>
        <p class="card-text">${snack.description}</p>
    </div>
  </div>
  `;
}
app.innerHTML = domString;
