import React from "react";
import MenuItem from "../../data/MenuItem";

export default function MenuSection() {
  const menuItems = [
    {
      id: 1,
      title: "Beef Shawarma",
      image: "/images/minibeef.jpg",
      price: 2500,
      category: "Beef Shawarma",
      options: ["Mini", "Regular", "Jumbo"],
    },
    {
      id: 2,
      title: "Chicken Shawarma",
      image: "/images/minichicken.jpg",
      price: 2300,
      category: "Chicken Shawarma",
      options: ["Mini", "Regular", "Jumbo"],
    },
    {
      id: 3,
      title: "Mixed Grilled Shawarma",
      image: "/images/mixgrill.jpg",
      price: 2700,
      category: "Mixed Shawarma",
      options: ["Mini Mixed", "Regular Mixed", "Family Mixed"],
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
    <section className="text-[#d9d9d9] py-12 sm:py-16 lg:py-24 px-4 sm:px-8 md:px-24 lg:px-24">
      <h2 className="text-2xl sm:text-4xl md:text-5xl mb-12 sm:mb-12 text-center font-night tracking-wide">
        Our Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
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
