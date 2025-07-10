export default function TopChainCard({ name, image }) {
  return (
    <div className="min-w-[200px] bg-white rounded shadow hover:shadow-md border border-gray-100 flex-shrink-0 mx-1 p-3">
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded-t mb-2"
      />
      <div className="p-2 text-center text-sm font-medium">{name}</div>
    </div>
  );
} 