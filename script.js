const ourMenu = document.getElementById("menu");
const allFood = document.getElementById("all-btn");
const breakfast = document.getElementById("breakfast-btn");
const lunch = document.getElementById("lunch-btn");
const shakes = document.getElementById("shakes-btn");
const dinner = document.getElementById("dinner-btn");

const allMenu = [
  {
    foodCatigory: "Breakfast",
    foodImg: "./img/breakfast1.jpg",
    foodName: "Breakfast",
    foodPrice: "$15.99",
    foodDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque adipisci molestiae",
  },
  {
    foodCatigory: "Breakfast",
    foodImg: "./img/breakfast2.jpg",
    foodName: "Breakfast",
    foodPrice: "$15.99",
    foodDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque adipisci molestiae",
  },
  {
    foodCatigory: "Lunch",
    foodImg: "./img/lunch1.jpg",
    foodName: "Breakfast",
    foodPrice: "$15.99",
    foodDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque adipisci molestiae",
  },
  {
    foodCatigory: "Lunch",
    foodImg: "./img/lunch2.jpg",
    foodName: "Breakfast",
    foodPrice: "$15.99",
    foodDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque adipisci molestiae",
  },
  {
    foodCatigory: "Shakes",
    foodImg: "./img/shakes1.jpg",
    foodName: "Breakfast",
    foodPrice: "$15.99",
    foodDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque adipisci molestiae",
  },
];

// let index = 0;

// const createOneFood = () => {
//   const selectedFood = allMenu[index];
//   ourMenu.innerHTML = `
//      <div class="foodIntro">
//       <img src="${selectedFood.foodImg}" alt="Breakfast"/>
//       <div class="foodIntro__text">
//         <div class="foodIntro__namePrice">
//           <h3>${selectedFood.foodName}</h3>
//           <h4>${selectedFood.foodPrice}</h4>
//         </div>
//         <p>${selectedFood.foodDescription}</p>
//       </div>
//     </div>
//     `;
// };

// const foodRender = () => {
//   allMenu.map((oneFood) => {
//     return (oneFood += createOneFood());
//   });
// };

const createOneFood = () => {
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

const changeMenu = (catigory) => {
  const filteredMenu = allMenu.filter((negFood) => {
    if (filter === "breakfast") if (filter === "shakes");
    return negFood.foodCatigory;
  });

  createOneFood();
};

allFood.onclick = () => createOneFood();
breakfast.onclick = () => changeMenu("breakfast");
shakes.onclick = () => changeMenu("shakes");
