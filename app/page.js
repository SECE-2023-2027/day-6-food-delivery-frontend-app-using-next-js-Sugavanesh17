// app/page.js
"use client";

import Navbar from "./components/Navbar";
import TopChainsSection from "./components/TopChainsSection";
import DeliveryRestaurantsSection from "./components/DeliveryRestaurantsSection";

const topChains = [
  {
    name: "Sangeetha Veg",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&h=300&fit=crop",
  },
  {
    name: "Murugan Idli Shop",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=400&h=300&fit=crop",
  },
  {
    name: "Anjappar",
    image: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&w=400&h=300&fit=crop",
  },
  {
    name: "A2B (Adyar Ananda Bhavan)",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&h=300&fit=crop",
  },
  {
    name: "Junior Kuppanna",
    image: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&w=400&h=300&fit=crop",
  },
  {
    name: "Kumar Mess",
    image: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&w=400&h=300&fit=crop",
  },
  {
    name: "Saravana Bhavan",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=400&h=300&fit=crop",
  },
];

const deliveryRestaurants = [
  {
    name: "Sangeetha Veg",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=400&h=300&fit=crop",
    cuisine: "South Indian, Vegetarian, Dosa, Idli",
    price: "₹250 for two",
    rating: "4.2",
    deliveryTime: "25 mins",
  },
  {
    name: "Murugan Idli Shop",
    image: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&w=400&h=300&fit=crop",
    cuisine: "South Indian, Idli, Chutney",
    price: "₹200 for two",
    rating: "4.3",
    deliveryTime: "20 mins",
  },
  {
    name: "Anjappar",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=400&h=300&fit=crop",
    cuisine: "Chettinad, Biryani, Non-Veg",
    price: "₹400 for two",
    rating: "4.0",
    deliveryTime: "30 mins",
  },
  {
    name: "A2B (Adyar Ananda Bhavan)",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&h=300&fit=crop",
    cuisine: "Sweets, Snacks, South Indian",
    price: "₹300 for two",
    rating: "4.1",
    deliveryTime: "22 mins",
  },
  {
    name: "Junior Kuppanna",
    image: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&w=400&h=300&fit=crop",
    cuisine: "Kongu, Non-Veg, Meals",
    price: "₹350 for two",
    rating: "4.0",
    deliveryTime: "28 mins",
  },
  {
    name: "Kumar Mess",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=400&h=300&fit=crop",
    cuisine: "Chettinad, Non-Veg, Meals",
    price: "₹320 for two",
    rating: "4.1",
    deliveryTime: "24 mins",
  },
  {
    name: "Saravana Bhavan",
    image: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&w=400&h=300&fit=crop",
    cuisine: "South Indian, Veg, Tiffin",
    price: "₹270 for two",
    rating: "4.4",
    deliveryTime: "21 mins",
  },
  {
    name: "Madurai Pandiyan Mess",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=400&h=300&fit=crop",
    cuisine: "Madurai, Non-Veg, Meals",
    price: "₹330 for two",
    rating: "4.2",
    deliveryTime: "27 mins",
  },
  {
    name: "Dindigul Thalappakatti",
    image: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&w=400&h=300&fit=crop",
    cuisine: "Biryani, Non-Veg, South Indian",
    price: "₹390 for two",
    rating: "4.3",
    deliveryTime: "29 mins",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <TopChainsSection chains={topChains} />
        <DeliveryRestaurantsSection restaurants={deliveryRestaurants} />
        <div className="h-32" />
      </div>
    </>
  );
}
