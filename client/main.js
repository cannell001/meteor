import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";

const aliens = [
  {
    firstName: "Ryu",
    lastName: "Smith",
    email: "ryu32@gmail.com",
    longAgo: "4 Months",
    duration: "1 month",
    experience: "experiments",
    color: "blue",
    picture: [],
    _id: 1
  },
  {
    firstName: "Yoshi",
    lastName: "Dino",
    email: "ydino@yahoomail.com",
    longAgo: "17 years",
    duration: "3 days",
    experience: "nothing",
    color: "green",
    picture: [],
    _id: 2
  }
];

const renderAliens = function(alienList) {
  return alienList.map(function(alien) {
    return (
      <p key={alien._id}>
        {alien.firstName} has a {alien.color} color.
      </p>
    );
  });
};

Meteor.startup(function() {
  let jsx = <div>{renderAliens(aliens)}</div>;
  ReactDOM.render(jsx, document.getElementById("app"));
});
