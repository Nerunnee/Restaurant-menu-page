const ourMenu = document.getElementById("menu");
const allFood = document.getElementById("all-btn");
const breakfast = document.getElementById("breakfast-btn");
const lunch = document.getElementById("lunch-btn");
const shakes = document.getElementById("shakes-btn");
const dinner = document.getElementById("dinner-btn");
const buttonContainer = document.querySelector("#btn-container");

const allMenu = [
  {
    foodCatigory: "Breakfast",
    foodImg: "./img/breakfast1.jpg",
    foodName: "Egg & Bacon Toast Rounds",
    foodPrice: "$12.99",
    foodDescription:
      "Fried eggs served on circular toasted bread with a side of black coffee.",
  },
  {
    foodCatigory: "Breakfast",
    foodImg: "./img/breakfast2.jpg",
    foodName: "Breakfast Tray",
    foodPrice: "$15.99",
    foodDescription:
      "Soft-boiled eggs on toast, served with fresh fruit (berries), orange juice, coffee, and a small flower.",
  },
  {
    foodCatigory: "Lunch",
    foodImg: "./img/lunch1.jpg",
    foodName: "Asian Lunch Bowls",
    foodPrice: "$11.99",
    foodDescription:
      "Rice bowls topped with fried eggs, vegetables, and savory toppings.",
  },
  {
    foodCatigory: "Lunch",
    foodImg: "./img/lunch2.jpg",
    foodName: "Chicken Katsu Don",
    foodPrice: "$12.99",
    foodDescription:
      "A breaded chicken cutlet served over white rice with green beans and shredded cabbage.",
  },
  {
    foodCatigory: "Shakes",
    foodImg: "./img/shake1.jpg",
    foodName: "Milk Shake",
    foodPrice: "$6.99",
    foodDescription:
      "A chocolate milkshake topped with whipped cream, chocolate syrup, and chocolate bar pieces.",
  },
  {
    foodCatigory: "Shakes",
    foodImg: "./img/shake2.jpg",
    foodName: "Oreo Shake",
    foodPrice: "$7.99",
    foodDescription:
      "A cookies-and-cream blended shake topped with whipped cream and Oreo cookies.",
  },
  {
    foodCatigory: "Dinner",
    foodImg: "./img/dinner1.jpg",
    foodName: "Teriyaki Chicken Rice Bowl",
    foodPrice: "$19.99",
    foodDescription:
      "Grilled glazed chicken served over rice with cucumbers, carrots, and sliced chili.",
  },
  {
    foodCatigory: "Dinner",
    foodImg: "./img/dinner2.jpg",
    foodName: "Assorted Nigiri Sushi",
    foodPrice: "$19.99",
    foodDescription:
      "A creative 'flying' display of various sushi, including Salmon, Tuna (Maguro), and Shrimp (Ebi).",
  },
];

const createFood = (allMenu) => {
  let all = "";

  allMenu.forEach((oneFood) => {
    all += `
    <div class="foodIntro">
     <img src="${oneFood.foodImg}" alt="Breakfast"/>
     <div class="foodIntro__text">
       <div class="foodIntro__namePrice">
         <h3>${oneFood.foodName}</h3>
         <h4>${oneFood.foodPrice}</h4>
        </div>
        <p>${oneFood.foodDescription}</p>
      </div>
    </div>
     `;
  });

  ourMenu.innerHTML = all;
};

const changeMenu = (category) => {
  const filteredMenu = allMenu.filter((food) => {
    return food.foodCatigory === category;
  });

  createFood(filteredMenu);
};

allFood.onclick = () => createFood(allMenu);
breakfast.onclick = () => changeMenu("Breakfast");
lunch.onclick = () => changeMenu("Lunch");
shakes.onclick = () => changeMenu("Shakes");
dinner.onclick = () => changeMenu("Dinner");

createFood(allMenu);

buttonContainer.addEventListener("click", function (btn) {
  if (btn.target.tagName === "BUTTON") {
    buttonContainer.querySelector(".active")?.classList.remove("active");

    btn.target.classList.add("active");
  }
});
