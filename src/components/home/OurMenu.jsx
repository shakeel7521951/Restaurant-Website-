import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken Steak",
    description:
      "A perfectly seasoned chicken breast grilled to juicy perfection, topped with aromatic herb butter and served alongside roasted seasonal vegetables and creamy mashed potatoes. A true favorite for meat lovers.",
    price: "$14.99",
    image:
      "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Main Course",
  },
  {
    id: 2,
    name: "Creamy Mushroom Pasta",
    description:
      "Al dente pasta tossed in a velvety garlic-infused mushroom sauce with a hint of parmesan and herbs. Finished with a drizzle of olive oil and served hot for an irresistible Italian dining experience.",
    price: "$12.50",
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Main Course",
  },
  {
    id: 3,
    name: "Fresh Garden Salad",
    description:
      "A refreshing blend of crisp lettuce, cherry tomatoes, black olives, cucumbers, and carrots tossed in a light lemon vinaigrette. Perfect for a healthy start to your meal or as a light standalone dish.",
    price: "$8.99",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Starters",
  },
  {
    id: 4,
    name: "Spicy Buffalo Wings",
    description:
      "Crispy, golden-fried chicken wings tossed in our signature buffalo sauce with just the right kick of heat. Served with a side of creamy ranch dip and celery sticks for the perfect balance of flavor.",
    price: "$9.99",
    image:
      "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Starters",
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    description:
      "An indulgent dessert with a soft, moist cake exterior and a warm, molten chocolate center that oozes with every bite. Served with a scoop of vanilla ice cream and a dusting of cocoa for pure bliss.",
    price: "$6.99",
    image:
      "https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&",
    category: "Desserts",
  },
  {
    id: 6,
    name: "Classic Cheesecake",
    description:
      "A smooth and creamy New York-style cheesecake with a buttery biscuit crust, topped with a layer of luscious strawberry syrup. A timeless dessert that melts in your mouth with every bite.",
    price: "$7.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXp_S9E3ibLDtFUoBCP0xrcBHr6dsntshGQQ&s",
    category: "Desserts",
  },
  {
    id: 7,
    name: "Fresh Orange Juice",
    description:
      "Made from freshly squeezed, hand-picked oranges to preserve natural sweetness and vitamins. Served chilled to rejuvenate your senses with a burst of citrus freshness.",
    price: "$4.50",
    image:
      "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Drinks",
  },
  {
    id: 8,
    name: "Iced Coffee Delight",
    description:
      "A rich blend of espresso, milk, and ice, topped with whipped cream and drizzled with chocolate syrup. The ultimate cool treat for coffee lovers seeking a smooth, refreshing caffeine kick.",
    price: "$5.99",
    image:
      "https://i.pinimg.com/736x/51/9e/c4/519ec48a46be853c6db1b70c88470c8b.jpg",
    category: "Drinks",
  },
];

const OurMenu = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="text-white min-h-screen py-12 px-6 md:px-20 bg-[#f8f9fa]">
      {/* Header Section */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#060145] tracking-wide">
          Our Delicious Menu
        </h1>
        <p className="text-gray-800 text-lg max-w-3xl mx-auto leading-relaxed">
          Discover flavors crafted with passion — from sizzling starters to
          heavenly desserts. Every dish is a masterpiece made for your delight.
        </p>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className="group bg-white text-gray-800 w-[90%] sm:w-[85%] lg:w-[340px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover group-hover:-translate-y-2 transition-all duration-500"
            />
            <div className="p-6 flex flex-col justify-between h-[260px]">
              <div>
                <h3 className="text-2xl font-bold text-[#060145]">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <span className="text-[#060145] font-semibold text-lg">
                  {item.price}
                </span>
                <button className="bg-[#060145] cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-[#0a087d] transition duration-300 font-semibold">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
