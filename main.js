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
    description: "Amazing frosted sugar cookies that are mysterious",
  },

  {
    id: 4,
    name: "Gelato",
    type: "Ice Cream",
    tasteIsGood: true,
    imageUrl: "./assets/gelato.png",
    cookingStyle: "frozen",
    description: "Tasty Italian ice cream",
  },

  {
    id: 5,
    name: "Bread",
    type: "Bread",
    tasteIsGood: true,
    imageUrl: "./assets/bread.jpeg",
    cookingStyle: "baked",
    description: "You though it was bread, but it was me, Dio!",
  },

  {
    id: 6,
    name: "Doughnut",
    type: "Doughnut",
    tasteIsGood: true,
    imageUrl: "./assets/doughnut.jpeg",
    cookingStyle: "baked",
    description: "Thank God it's doughnut",
  },
];

// Utility Function
let renderToDom = (divId, htmlToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = htmlToRender;
};

// Cards on DOM function
const cardsOnDom = (array) => {
  let domString = "";
  for (const snack of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${snack.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${snack.name}</h5>
    <p class="card-text">${snack.description}</p>
    <button type="button" class="btn btn-danger" id="delete--${snack.id}">Delete</button>
</div>
</div>`
  }
  renderToDom("#app" , domString);
};

//Set domString to empty string
let domString = "";

//target the app div
const app = document.querySelector("#app");

// Render all snacks
for (let snack of snacks) {
  domString += `
        <div class="card" style="width: 18rem;">
        <img src="${snack.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${snack.name}</h5>
        <p class="card-text">${snack.description}</p>
        <button type="button" class="btn btn-danger" id="delete--${snack.id}">Delete</button>
    </div>
  </div>
  `;
  renderToDom("#app", domString);
}

//Render form
//target the form button on html
const formBtn = document.querySelector("#show-form");

// maybe target form button and add an event listener that changes the formBtn inner Html
formBtn.addEventListener("click", function () {
  app.innerHTML += `<form id="snack-add-form">
    <div class="mb-3">
      <label for="create snack" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="name">
    </div>
    <div class="mb-3">
      <label for="create snack" class="form-label">Type</label>
      <input type="text" class="form-control" id="type" aria-describedby="type" placeholder="type">
    </div>
    <div class="mb-3">
      <label for="create snack" class="form-label">tasteIsGood</label>
      <input type="text" class="form-control" id="tasteIsGood" aria-describedby="tasteIsGood" placeholder="true">
    </div>
    <div class="mb-3">
      <label for="create snack" class="form-label">Cooking Style</label>
      <input type="text" class="form-control" id="cookingStyle" aria-describedby="cookingStyle" placeholder="baked or frozen">
    </div>
    <div class="mb-3">
      <label for="describe the snack" class="form-label">Description</label>
      <input type="text" class="form-control" id="description" placeholder="this snack is...">
    </div>
    <div class="form-floating mb-3">
      <input type="url" class="form-control" id="image" placeholder="image" required>
      <label for="floatingInput">Image</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;


const form = document.querySelector("#snack-add-form");
// create snack function
const create = (e) => {
  e.preventDefault();

  // create new object
  const newSnackObj = {
    id: snacks.length + 1,
    name: document.querySelector("#name").value,
    type: document.querySelector("#type").value,
    tasteIsGood: document.querySelector("#tasteIsGood").value,
    imageUrl: document.querySelector("#image").value,
    cookingStyle: document.querySelector("#cookingStyle").value,
    description: document.querySelector("#description").value,
  };
  //push the new object to snack array
  snacks.push(newSnackObj);
  cardsOnDom(snacks);
  form.reset();
};
form.addEventListener("submit" , create);
});

//Delete
// Target app div


// 2. Add an event listener to capture clicks

app.addEventListener("click", (e) => {
  // console.log(e.target.id);

  // 3. check e.target.id includes "delete"
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");

    // 4. add logic to remove from array
    // .findIndex is an array method
    const index = snacks.findIndex((e) => e.id === Number(id));

    // .splice modifies the original array
    snacks.splice(index, 1);

    // 5. Repaint the DOM with the updated array
    cardsOnDom(snacks);
  }
});
