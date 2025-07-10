export default function Error({ message }) {
  return (
    <div className="container mx-auto px-4 py-6 text-center text-red-600 font-semibold">
      <p>Error: {message || "Something went wrong."}</p>
    </div>
  );
}
