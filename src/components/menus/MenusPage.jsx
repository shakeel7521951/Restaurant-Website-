import React, { useState, useMemo, useEffect } from "react";
import MenuHeader from "./MenuHeader";
import MenuCategory from "./MenuCategory";
import MenuCard from "./MenuCard";
import AOS from "aos";
import "aos/dist/aos.css";

const MenusPage = () => {
  const [active, setActive] = useState("all");

  const categories = ["all", "starters", "main course", "desserts", "drinks"];

  

  // Filtered items
  const filtered = useMemo(
    () =>
      active === "all"
        ? menuItems
        : menuItems.filter((m) => m.category === active),
    [active, menuItems]
  );

  // Initialize AOS
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="relative bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div data-aos="fade-down" data-aos-duration="1000">
        <MenuHeader />
      </div>

      {/* Categories */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <MenuCategory
          categories={categories}
          active={active}
          setActive={setActive}
        />
      </div>

      {/* Menu Cards Grid */}
      <div className="relative max-w-7xl mx-auto px-6">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 my-12 text-xl">
            No items in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 -mt-12">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 150}
              >
                <MenuCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenusPage;
