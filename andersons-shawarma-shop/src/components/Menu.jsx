import React from "react";
import MenuItem from "../data/MenuItem";

export default function MenuSection() {
  const menuItems = [
    {
      id: 1,
      title: "Beef Shawarma",
      image: "/images/minibeef.jpg",
      price: 2500,
      category: "Beef Shawarma",
      options: [
        "Mini Beef Shawarma",
        "Regular Beef Shawarma",
        "Jumbo Beef Shawarma",
      ],
    },
    {
      id: 2,
      title: "Chicken Shawarma",
      image: "/images/minichicken.jpg",
      price: 2300,
      category: "Chicken Shawarma",
      options: [
        "Mini Chicken Shawarma",
        "Regular Chicken Shawarma",
        "Jumbo Chicken Shawarma",
      ],
    },
    {
      id: 3,
      title: "Mixed Grilled Shawarma",
      image: "/images/mixgrill.jpg",
      price: 2700,
      category: "Mixed Grilled Shawarma",
      options: [
        "Mini Mix Shawarma",
        "Regular Mix Shawarma",
        "Family Mix Shawarma",
      ],
    },
    {
      id: 4,
      title: "Burger",
      image: "/images/burger.jpg",
      price: 2000,
      category: "Burger",
      options: [
        "Beef Burger",
        "Chicken Burger",
        "Double Stack",
        "Cheese Burger",
      ],
    },
    {
      id: 5,
      title: "French Fries",
      image: "/images/frenchfries.jpg",
      price: 1200,
      category: "French Fries",
      options: ["Small Fries", "Medium Fries", "Large Fries", "Loaded Fries"],
    },
    {
      id: 6,
      title: "Drinks",
      image: "/images/soda.jpg",
      price: 800,
      category: "Drinks",
      options: ["Coke", "Pepsi", "Fanta", "Sprite", "Water"],
    },
  ];

  return (
    <section className="text-[#d9d9d9] py-16 px-16S md:px-24 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-night">
        Our Menu
      </h2>

      {/* Grid of Menu Cards */}
      <div className="grid gap-10 sm:grid-cols-2">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            options={item.options}
          />
        ))}
      </div>
    </section>
  );
}
