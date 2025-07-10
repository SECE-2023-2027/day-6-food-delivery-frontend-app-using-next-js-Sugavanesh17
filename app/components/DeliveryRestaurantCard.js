import Link from "next/link";

export default function DeliveryRestaurantCard({ name, image, cuisine, price, rating, deliveryTime, href }) {
  return (
    <Link href={href}>
      <div className="bg-white rounded shadow hover:shadow-md border border-gray-100 cursor-pointer flex flex-col p-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-t mb-3"
        />
        <div className="p-3 flex-1 flex flex-col justify-between">
          <div>
            <div className="font-semibold text-base mb-2">{name}</div>
            <div className="text-xs text-gray-500 mb-2">{cuisine}</div>
            <div className="text-xs text-gray-700 mb-2">{price}</div>
          </div>
          <div className="flex items-center justify-between mt-3 text-xs">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">
              {rating} ★
            </span>
            <span className="text-gray-500">{deliveryTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 