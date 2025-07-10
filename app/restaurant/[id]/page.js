// app/restaurant/[id]/page.js

import RestaurantClient from "./RestaurantClient";

const restaurants = [
  {
    name: "Sangeetha Veg",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800&h=300&fit=crop",
    deliveryTime: "25 mins",
    rating: "4.2",
    price: "₹250 for two",
    cuisine: "South Indian, Vegetarian, Dosa, Idli",
    status: "Open for delivery",
    recommended: [
      {
        id: "idli",
        name: "Idli",
        price: 40,
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
      {
        id: "dosa",
        name: "Dosa",
        price: 60,
        image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
      {
        id: "pongal",
        name: "Pongal",
        price: 55,
        image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
      {
        id: "vada",
        name: "Medu Vada",
        price: 50,
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
      {
        id: "sambar-rice",
        name: "Sambar Rice",
        price: 70,
        image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
    ],
  },
  {
    name: "Murugan Idli Shop",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=800&h=300&fit=crop",
    deliveryTime: "20 mins",
    rating: "4.3",
    price: "₹200 for two",
    cuisine: "South Indian, Idli, Chutney",
    status: "Open for delivery",
    recommended: [
      {
        id: "idli",
        name: "Idli",
        price: 40,
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
      {
        id: "vada",
        name: "Medu Vada",
        price: 50,
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
      {
        id: "pongal",
        name: "Pongal",
        price: 55,
        image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
      {
        id: "chutney",
        name: "Chutney Plate",
        price: 30,
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
      {
        id: "rava-dosa",
        name: "Rava Dosa",
        price: 65,
        image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
    ],
  },
  {
    name: "Anjappar",
    image: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&w=800&h=300&fit=crop",
    deliveryTime: "30 mins",
    rating: "4.0",
    price: "₹400 for two",
    cuisine: "Chettinad, Biryani, Non-Veg",
    status: "Closed for delivery",
    recommended: [
      {
        id: "chicken-curry",
        name: "Chicken Curry",
        price: 150,
        image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
      {
        id: "mutton-biryani",
        name: "Mutton Biryani",
        price: 180,
        image: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
      {
        id: "fish-fry",
        name: "Fish Fry",
        price: 120,
        image: "https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
      {
        id: "egg-curry",
        name: "Egg Curry",
        price: 90,
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
      {
        id: "parotta",
        name: "Parotta",
        price: 40,
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=80&h=80&fit=crop",
      },
    ],
  },
];

export default async function RestaurantPage({ params }) {
  const { id } = await params;
  const restaurant = restaurants[id];
  return <RestaurantClient restaurant={restaurant} />;
}
