"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function RestaurantClient({ restaurant }) {
  const [tab, setTab] = useState("order");

  if (!restaurant) {
    return (
      <>
        <Navbar />
        <div className="p-6 text-center text-red-600 font-semibold">
          Restaurant not found.
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-60 object-cover rounded-b-lg"
        style={{ marginTop: 0 }}
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">{restaurant.name}</h1>
        {/* Tab Bar */}
        <div className="flex space-x-6 border-b mb-4">
          <button
            className={`py-2 px-4 -mb-px border-b-2 text-sm font-medium focus:outline-none ${
              tab === "order"
                ? "border-orange-600 text-orange-600 bg-orange-50"
                : "border-transparent text-gray-500 hover:text-orange-600"
            }`}
            onClick={() => setTab("order")}
          >
            Order Online
          </button>
          <button
            className={`py-2 px-4 -mb-px border-b-2 text-sm font-medium focus:outline-none ${
              tab === "dineout"
                ? "border-orange-600 text-orange-600 bg-orange-50"
                : "border-transparent text-gray-500 hover:text-orange-600"
            }`}
            onClick={() => setTab("dineout")}
          >
            Dineout
          </button>
        </div>

        {/* Alert/Info Box */}
        <div className="bg-orange-100 border border-orange-300 text-orange-800 px-4 py-2 rounded mb-4 text-sm">
          UPI or Credit is not accepted at some restaurants. They should be made till 11:00 AM for service.
        </div>

        {/* Info Box */}
        <div className="bg-white border border-gray-200 shadow-sm rounded p-4 mb-6 flex flex-col gap-2">
          <div className="flex flex-wrap gap-6 items-center text-base">
            <span className="font-semibold text-gray-800">
              <b>{restaurant.rating}</b> <span className="text-yellow-500">★</span>
            </span>
            <span className="text-gray-700">{restaurant.price}</span>
            <span className="text-gray-700">{restaurant.cuisine}</span>
            <span className={restaurant.status.includes("Closed") ? "text-red-600" : "text-green-600 font-semibold"}>
              {restaurant.status}
            </span>
          </div>
        </div>

        {tab === "order" && (
          <>
            <h2 className="text-lg font-semibold mb-4">Recommended</h2>
            <div className="space-y-3">
              {restaurant.recommended.map((dish) => (
                <div
                  key={dish.id}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded shadow-sm hover:shadow p-3"
                >
                  <div className="flex-1 pr-4">
                    <div className="font-medium text-base mb-1">{dish.name}</div>
                    <div className="text-gray-700 text-sm mb-1">₹{dish.price}</div>
                  </div>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-24 h-20 object-cover rounded"
                  />
                </div>
              ))}
            </div>
            <div className="h-24" />
          </>
        )}
        {tab === "dineout" && (
          <div className="text-gray-500 text-center py-8">Dineout info coming soon.</div>
        )}
      </div>
    </>
  );
} 