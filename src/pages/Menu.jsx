import React, { useState } from "react";
import MenuHeader from "../components/menus/MenuHeader";
import MenuCategory from "../components/menus/MenuCategory";
import MenuCard from "../components/menus/MenuCard";
import img1 from ".././assets/1menu.jpg";
import img2 from ".././assets/2menu.jpg";
import img3 from ".././assets/3menu.jpg";
import img4 from ".././assets/4menu.jpg";
import img5 from ".././assets/5menu.jpg";
import img6 from ".././assets/menu1.jpg";
import img7 from ".././assets/menu2.jpg";
import img8 from ".././assets/menu3.jpg";
import img9 from ".././assets/menu4.jpg";
import img10 from ".././assets/menu5.jpg";
import { motion } from "framer-motion";

const MenusPage = () => {
  const [active, setActive] = useState("all");

  const categories = ["all", "starters", "main course", "desserts", "drinks"];

  const menuItems = [
  {
    id: 1,
    category: "starters",
    name: "Bruschetta al Pomodoro",
    description:
      "Crispy grilled bread topped with ripe tomatoes, fresh basil, and a drizzle of olive oil.",
    price: 7,
    img: img1,
  },
  {
    id: 2,
    category: "main course",
    name: "Herb-Grilled Salmon",
    description:
      "Tender salmon fillet seasoned with fresh herbs and grilled to perfection, served with lemon butter sauce.",
    price: 19,
    img: img2,
  },
  {
    id: 3,
    category: "desserts",
    name: "Molten Chocolate Lava Cake",
    description:
      "Decadent warm chocolate cake with a rich, flowing center and a scoop of vanilla ice cream.",
    price: 9,
    img: img3,
  },
  {
    id: 4,
    category: "drinks",
    name: "Classic Mojito",
    description:
      "A refreshing blend of fresh mint, lime juice, sugar, and sparkling soda with a hint of rum.",
    price: 8,
    img: img4,
  },
  {
    id: 5,
    category: "main course",
    name: "Grilled Steak & Seasonal Vegetables",
    description:
      "Juicy sirloin steak grilled to your liking, paired with roasted seasonal vegetables and herb butter.",
    price: 24,
    img:img5,
  },
  {
    id: 1,
    category: "starters",
    name: "Bruschetta al Pomodoro",
    description:
      "Crispy grilled bread topped with ripe tomatoes, fresh basil, and a drizzle of olive oil.",
    price: 7,
    img: img6,
  },
  {
    id: 2,
    category: "main course",
    name: "Herb-Grilled Salmon",
    description:
      "Tender salmon fillet seasoned with fresh herbs and grilled to perfection, served with lemon butter sauce.",
    price: 19,
    img: img7,
  },
  {
    id: 3,
    category: "desserts",
    name: "Molten Chocolate Lava Cake",
    description:
      "Decadent warm chocolate cake with a rich, flowing center and a scoop of vanilla ice cream.",
    price: 9,
    img: img8,
  },
  {
    id: 4,
    category: "drinks",
    name: "Classic Mojito",
    description:
      "A refreshing blend of fresh mint, lime juice, sugar, and sparkling soda with a hint of rum.",
    price: 8,
    img: img9,
  },
  {
    id: 5,
    category: "main course",
    name: "Grilled Steak & Seasonal Vegetables",
    description:
      "Juicy sirloin steak grilled to your liking, paired with roasted seasonal vegetables and herb butter.",
    price: 24,
    img:img10,
  },
  {
    id: 6,
    category: "starters",
    name: "Classic Caesar Salad",
    description:
      "Crisp romaine tossed with creamy Caesar dressing, shaved parmesan, and crunchy garlic croutons.",
    price: 8,
    img: "https://cdn.pixabay.com/photo/2022/04/20/14/39/burger-7145332_1280.png",
  },
  {
    id: 7,
    category: "main course",
    name: "Pasta alla Carbonara",
    description:
      "Authentic Italian pasta with pancetta, egg yolk, parmesan, and cracked black pepper in a creamy sauce.",
    price: 17,
    img: "https://cdn.pixabay.com/photo/2021/09/28/15/21/pizza-6664791_1280.jpg",
  },
  {
    id: 8,
    category: "desserts",
    name: "Classic Tiramisu",
    description:
      "Layers of espresso-soaked ladyfingers and mascarpone cream, finished with rich cocoa powder.",
    price: 9,
    img: "https://media.istockphoto.com/id/2167797581/photo/close-up-shot-of-a-young-adult-is-seen-enjoying-a-taiwanese-style-spicy-dumplings-braised.jpg?s=2048x2048&w=is&k=20&c=gstnvatDTlocJs9-zcBDzu4e3G7eXg25Nj6qOI1GSz4=",
  },
  {
    id: 9,
    category: "drinks",
    name: "Strawberry Bliss Smoothie",
    description:
      "A creamy blend of fresh strawberries, yogurt, and honey for a refreshing and healthy treat.",
    price: 7,
    img: "https://cdn.pixabay.com/photo/2017/03/10/13/49/fast-food-2132863_1280.jpg",
  },
  {
    id: 10,
    category: "starters",
    name: "Cheese-Stuffed Mushrooms",
    description:
      "Oven-baked mushrooms filled with herbed cream cheese and breadcrumbs, golden and delicious.",
    price: 9,
    img: "https://media.istockphoto.com/id/1151788047/photo/cold-rice-noodles.jpg?s=2048x2048&w=is&k=20&c=OMsVU-eyUuBumAS57NLF4repo_6ivpHPcORldedaVAA=",
  },
  {
    id: 11,
    category: "main course",
    name: "Chicken Teriyaki Bowl",
    description:
      "Grilled chicken glazed in house-made teriyaki sauce, served with steamed rice and sesame vegetables.",
    price: 18,
    img: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
  },
  {
    id: 12,
    category: "desserts",
    name: "New York Cheesecake",
    description:
      "Rich and creamy cheesecake with a buttery graham cracker crust and a hint of vanilla.",
    price: 9,
    img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FSeries%2F2024-07-how-to-make-perfect-cheesecake%2Fhow-to-make-perfect-cheesecake-319",
  },
  {
    id: 6,
    category: "starters",
    name: "Classic Caesar Salad",
    description:
      "Crisp romaine tossed with creamy Caesar dressing, shaved parmesan, and crunchy garlic croutons.",
    price: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_QHLySdpuhk3weCNYHxYp6tc2naOquvCQQ&s",
  },
  {
    id: 7,
    category: "main course",
    name: "Pasta alla Carbonara",
    description:
      "Authentic Italian pasta with pancetta, egg yolk, parmesan, and cracked black pepper in a creamy sauce.",
    price: 17,
    img: "https://leitesculinaria.com/wp-content/uploads/2024/04/spaghetti-carbonara-1200.jpg",
  },
  {
    id: 8,
    category: "desserts",
    name: "Classic Tiramisu",
    description:
      "Layers of espresso-soaked ladyfingers and mascarpone cream, finished with rich cocoa powder.",
    price: 9,
    img: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2024/09/THUMB-VIDEO-2_rev1-56.jpeg",
  },
  {
    id: 9,
    category: "drinks",
    name: "Strawberry Bliss Smoothie",
    description:
      "A creamy blend of fresh strawberries, yogurt, and honey for a refreshing and healthy treat.",
    price: 7,
    img: "https://www.allrecipes.com/thmb/aMLtmuAFr01C66eai_OtGRF0Xu4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20792-b-and-ls-strawberry-smoothie-ddmfs-0321-3x4-hero-f9aad20d876448a49a3561bec1da6363.jpg",
  },
  {
    id: 10,
    category: "starters",
    name: "Cheese-Stuffed Mushrooms",
    description:
      "Oven-baked mushrooms filled with herbed cream cheese and breadcrumbs, golden and delicious.",
    price: 9,
    img: "https://www.allrecipes.com/thmb/oSmkmY45dr_9IkVk5ZTNdLowPf8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-JF-15184-Mouth-Watering-Mushrooms-ddmfs-2x1-e6418200bc6e44f7971b53ef7b675bb7.jpg",
  },
  {
    id: 11,
    category: "main course",
    name: "Chicken Teriyaki Bowl",
    description:
      "Grilled chicken glazed in house-made teriyaki sauce, served with steamed rice and sesame vegetables.",
    price: 18,
    img: "https://www.budgetbytes.com/wp-content/uploads/2022/04/Teriyaki-Chicken-plate.jpg",
  },
  {
    id: 12,
    category: "desserts",
    name: "New York Cheesecake",
    description:
      "Rich and creamy cheesecake with a buttery graham cracker crust and a hint of vanilla.",
    price: 9,
    img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FSeries%2F2024-07-how-to-make-perfect-cheesecake%2Fhow-to-make-perfect-cheesecake-319",
  },

  // --- 6 NEW ITEMS ---
  {
    id: 13,
    category: "starters",
    name: "Garlic Butter Shrimp",
    description:
      "Succulent shrimp sautéed in garlic butter and white wine, finished with a hint of lemon.",
    price: 11,
    img: "https://umamiology.com/wp-content/uploads/2024/03/Umamiology-Garlic-Butter-Shrimp-RecipeCard1.jpg",
  },
  {
    id: 14,
     category: "main course",
    name: "Grilled Steak & Seasonal Vegetables",
    description:
      "Juicy sirloin steak grilled to your liking, paired with roasted seasonal vegetables and herb butter.",
    price: 24,
    img: "https://nugget-markets-01.s3.us-west-1.amazonaws.com/nugget/p/grilled-herb-garlic-flank-steak-roasted-vegetables-recipe-0170-ocaja8vdkhsboq14.jpg",
  },
  {
    id: 15,
     category: "drinks",
    name: "Classic Mojito",
    description:
      "A refreshing blend of fresh mint, lime juice, sugar, and sparkling soda with a hint of rum.",
    price: 8,
    img: "https://www.foodandwine.com/thmb/e8AvEfBBfwjg3xmt6E__rRvSZlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mojito-FT-RECIPE1022-2000-85cdb1eb59454847b713713e32e365c0.jpg",
  },
  {
    id: 16,
    category: "desserts",
    name: "Molten Chocolate Lava Cake",
    description:
      "Decadent warm chocolate cake with a rich, flowing center and a scoop of vanilla ice cream.",
    price: 9,
    img: "https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&",
  },
  {
    id: 17,
   category: "main course",
    name: "Herb-Grilled Salmon",
    description:
      "Tender salmon fillet seasoned with fresh herbs and grilled to perfection, served with lemon butter sauce.",
    price: 19,
    img: "https://img.frozenfish.direct/wp-content/uploads/2021/05/grilled-salmon-steaks-italian-style-73599286.jpg.webp",
  },
  {
    id: 18,
    category: "starters",
    name: "Bruschetta al Pomodoro",
    description:
      "Crispy grilled bread topped with ripe tomatoes, fresh basil, and a drizzle of olive oil.",
    price: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpB2zw-hsXo_2SgJ5rhByP0ablhGAgoVwk5M9PhLQDSMd_5QPXol-TrQyZLtwSw_Pt58&usqp=CAU",
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
