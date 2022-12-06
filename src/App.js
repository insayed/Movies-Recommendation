import React from "react";
import "./styles.css";
import { useState } from "react";

const foodMenu = {
  Action: [
    { name: "Hulk", Price: "⭐⭐⭐⭐" },
    { name: "Black Adam", Price: "⭐⭐⭐⭐" },
    { name: "Top Gun", Price: "⭐⭐⭐" }
  ],

  Bollywood: [
    { name: "Dhoom 3", Price: "⭐⭐⭐⭐⭐" },
    { name: "Kalank", Price: "⭐⭐⭐⭐" },
    { name: "Chup chup ke", Price: "⭐⭐⭐" }
  ],
  Comedy: [
    { name: "Notice", Price: "⭐⭐⭐⭐" },
    { name: "Free Guy", Price: "⭐⭐⭐" },
    { name: "Hating Game", Price: "⭐⭐" }
  ],
  Fiction: [
    { name: "Lucy", Price: "⭐⭐⭐⭐⭐" },
    { name: "Gravity", Price: "⭐⭐⭐⭐⭐" },
    { name: "Interstellar", Price: "⭐⭐⭐⭐⭐" }
  ]
};

export default function App() {
  const [selectedfood, setfood] = useState(" FOOD-MENU");
  function DishClickHandler(food) {
    setfood(food);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "40px", color: "#4ade80" }}>
        Best Movies to Watch!
      </h1>
      <p>
        {" "}
        Get Comfortable and grab some <strong>POPCORN!</strong>
      </p>

      <div>
        {Object.keys(foodMenu).map((food) => (
          <button
            onClick={() => DishClickHandler(food)}
            style={{
              cursor: "pointer",
              background: "#fda4af",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {food}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodMenu[selectedfood] &&
            foodMenu[selectedfood].map((dish) => (
              <li
                key={dish.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  backgroundColor: "#5eeaF4",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                {" "}
                <div
                  style={{
                    fontSize: "larger"
                  }}
                >
                  {" "}
                  {dish.name}{" "}
                </div>
                <div style={{ fontSize: "smaller" }}> {dish.Price} </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
