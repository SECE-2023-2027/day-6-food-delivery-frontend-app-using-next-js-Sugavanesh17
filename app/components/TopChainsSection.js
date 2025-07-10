import { useRef } from "react";
import TopChainCard from "./TopChainCard";

export default function TopChainsSection({ chains }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-6 mt-2">Top restaurant chains in Tamil Nadu</h2>
      <div className="flex items-center mb-10">
        <button
          onClick={scrollLeft}
          className="px-3 py-1 mr-4 bg-gray-200 rounded hover:bg-gray-300"
        >
          &#8592;
        </button>
        <div
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300"
          style={{ scrollBehavior: "smooth" }}
        >
          {chains.map((chain, idx) => (
            <TopChainCard key={idx} name={chain.name} image={chain.image} />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="px-3 py-1 ml-4 bg-gray-200 rounded hover:bg-gray-300"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
} 