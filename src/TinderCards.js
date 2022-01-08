import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  // Normal Way: same as people = []
  // people.push('abc', 'def') is same as
  // setPeople([...people, 'abc', 'def'])

  const [people, setPeople] = useState([
    {
      name: "Andrew Garfield",
      url: "https://assets-prd.ignimgs.com/2021/12/28/amazing-spiderman-3-andrew-garfield-1640735299847.jpg",
    },
    {
      name: "Tom Holland",
      url: "https://www.cheatsheet.com/wp-content/uploads/2021/11/Tom-Holland-5-1200x800.jpg",
    },
  ]);

  return (
    <div className="tindercards">
      <h1>TeanDer</h1>

      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
