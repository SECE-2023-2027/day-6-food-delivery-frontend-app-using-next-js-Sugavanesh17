import DeliveryRestaurantCard from "./DeliveryRestaurantCard";

export default function DeliveryRestaurantsSection({ restaurants }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-6 mt-10">Restaurants with online food delivery in Tamil Nadu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {restaurants.map((res, idx) => (
          <DeliveryRestaurantCard
            key={idx}
            name={res.name}
            image={res.image}
            cuisine={res.cuisine}
            price={res.price}
            rating={res.rating}
            deliveryTime={res.deliveryTime}
            href={`/restaurant/${idx}`}
          />
        ))}
      </div>
    </div>
  );
} 