import React, { useState } from "react";
import MenuHeader from "../components/menus/MenuHeader";
import MenuCategory from "../components/menus/MenuCategory";
import MenuCard from "../components/menus/MenuCard";
import { motion } from "framer-motion";

const MenusPage = () => {
  const [active, setActive] = useState("all");

  const categories = ["all", "starters", "main course", "desserts", "drinks"];

  const menuItems = [
    {
      id: 1,
      category: "starters",
      name: "Bruschetta",
      description:
        "Grilled bread topped with fresh tomatoes, garlic, and basil.",
      price: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpB2zw-hsXo_2SgJ5rhByP0ablhGAgoVwk5M9PhLQDSMd_5QPXol-TrQyZLtwSw_Pt58&usqp=CAU",
    },
    {
      id: 2,
      category: "main course",
      name: "Grilled Salmon",
      description: "Fresh salmon fillet grilled to perfection with herbs.",
      price: 18,
      img: "https://img.frozenfish.direct/wp-content/uploads/2021/05/grilled-salmon-steaks-italian-style-73599286.jpg.webp",
    },
    {
      id: 3,
      category: "desserts",
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a gooey molten center.",
      price: 8,
      img: "https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&",
    },
    {
      id: 4,
      category: "drinks",
      name: "Mojito",
      description: "Refreshing cocktail with mint leaves and lime.",
      price: 7,
      img: "https://www.foodandwine.com/thmb/e8AvEfBBfwjg3xmt6E__rRvSZlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mojito-FT-RECIPE1022-2000-85cdb1eb59454847b713713e32e365c0.jpg",
    },
    {
      id: 5,
      category: "main course",
      name: "Steak with Vegetables",
      description: "Juicy grilled steak served with seasonal vegetables.",
      price: 22,
      img: "https://nugget-markets-01.s3.us-west-1.amazonaws.com/nugget/p/grilled-herb-garlic-flank-steak-roasted-vegetables-recipe-0170-ocaja8vdkhsboq14.jpg",
    },
    {
      id: 6,
      category: "starters",
      name: "Caesar Salad",
      description:
        "Crisp romaine lettuce with parmesan, croutons, and Caesar dressing.",
      price: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_QHLySdpuhk3weCNYHxYp6tc2naOquvCQQ&s",
    },
    {
      id: 7,
      category: "main course",
      name: "Pasta Carbonara",
      description: "Creamy pasta with pancetta, parmesan, and fresh herbs.",
      price: 16,
      img: "https://leitesculinaria.com/wp-content/uploads/2024/04/spaghetti-carbonara-1200.jpg",
    },
    {
      id: 8,
      category: "desserts",
      name: "Tiramisu",
      description:
        "Classic Italian dessert with mascarpone, coffee, and cocoa.",
      price: 9,
      img: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2024/09/THUMB-VIDEO-2_rev1-56.jpeg",
    },
    {
      id: 9,
      category: "drinks",
      name: "Strawberry Smoothie",
      description: "Fresh strawberries blended with yogurt and honey.",
      price: 6,
      img: "https://www.allrecipes.com/thmb/aMLtmuAFr01C66eai_OtGRF0Xu4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20792-b-and-ls-strawberry-smoothie-ddmfs-0321-3x4-hero-f9aad20d876448a49a3561bec1da6363.jpg",
    },
    {
      id: 10,
      category: "starters",
      name: "Stuffed Mushrooms",
      description:
        "Baked mushrooms stuffed with cheese, herbs, and breadcrumbs.",
      price: 8,
      img: "https://www.allrecipes.com/thmb/oSmkmY45dr_9IkVk5ZTNdLowPf8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-JF-15184-Mouth-Watering-Mushrooms-ddmfs-2x1-e6418200bc6e44f7971b53ef7b675bb7.jpg",
    },
    {
      id: 11,
      category: "main course",
      name: "Chicken Teriyaki",
      description:
        "Grilled chicken glazed with teriyaki sauce, served with rice.",
      price: 17,
      img: "https://www.budgetbytes.com/wp-content/uploads/2022/04/Teriyaki-Chicken-plate.jpg",
    },
    {
      id: 12,
      category: "desserts",
      name: "Cheesecake",
      description: "Creamy cheesecake with a buttery graham cracker crust.",
      price: 8,
      img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FSeries%2F2024-07-how-to-make-perfect-cheesecake%2Fhow-to-make-perfect-cheesecake-319",
    },
  ];

  const filtered =
    active === "all"
      ? menuItems
      : menuItems.filter((m) => m.category === active);

  return (
    <div>
      <MenuHeader />
      <MenuCategory
        categories={categories}
        active={active}
        setActive={setActive}
      />

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mb-24"
      >
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default MenusPage;
