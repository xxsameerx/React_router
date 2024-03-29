import React from "react";
import { v4 as uuid } from "uuid";
const vansData = [
  {
    uuid: uuid(),
    name: "Modest Explorer",
    type: "Simple",
    price: 60,
    description:
      "The Modest Explorer is designed to get you into nature with solar panels, a composting toilet, water tank, and kitchenette.",
    imageUrl: `https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png`,
    hostId: "123",
  },
  {
    uuid: uuid(),
    name: "Beach Bum",
    type: "Rugged",
    price: 80,
    description:
      "Beach Bum is a portable home inspired by surfers with unique features for adventurous travelers.",
    imageUrl: `https://assets.scrimba.com/advanced-react/react-router/beach-bum.png`,
    hostId: "153",
  },
  {
    uuid: uuid(),
    name: "Reliable Red",
    type: "Luxury",
    price: 100,
    description:
      "Reliable Red is a cozy van for travelers, equipped with a small kitchen and ample space.",
    imageUrl: `https://assets.scrimba.com/advanced-react/react-router/reliable-red.png`,
    hostId: "123",
  },
  {
    uuid: uuid(),
    name: "Dreamfinder",
    type: "Simple",
    price: 65,
    description:
      "Dreamfinder is perfect for travel with a spacious interior, large windows, and easy-to-clean flooring.",
    imageUrl: `https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png`,
    hostId: "153",
  },
  {
    uuid: uuid(),
    name: "The Cruiser",
    type: "Luxury",
    price: 120,
    description:
      "The Cruiser offers comfort and luxury with spacious interiors, ample storage, and panoramic views.",
    imageUrl: `https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png`,
    hostId: "123",
  },
  {
    uuid: uuid(),
    name: "Green Wonder",
    type: "Rugged",
    price: 70,
    description:
      "Green Wonder is a stylish, eco-friendly van perfect for adventurous travelers seeking sustainability.",
    imageUrl: `https://assets.scrimba.com/advanced-react/react-router/green-wonder.png`,
    hostId: "154",
  },
];

export default vansData;
