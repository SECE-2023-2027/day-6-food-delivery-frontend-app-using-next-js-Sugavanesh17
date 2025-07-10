import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4 rounded-full">
          <Link href="/">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0kpZlS_4b13Rl89YoidLvpLpZ2K1U5-f3g&s"
              alt="FoodieTN Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <span className="text-xl font-bold text-orange-600">FoodieTN</span>
        </div>
        <ul className="flex items-center space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/help" className="hover:text-orange-600">
              Help
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className=" hover:text-orange-600 flex items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className=" hover:text-orange-600 flex items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9"
                />
              </svg>
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
