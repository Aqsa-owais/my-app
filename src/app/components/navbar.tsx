import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav
        className="flex bg-black p-5 mb-100 h-30 w-full justify-start items-center "
        id="nav"
      >
        <img
          src="https://www.pngmart.com/files/8/Menu-PNG-Transparent-Picture.png"
          alt="logo"
          className="w-20 h-10 mr-5"
        />

        <Link href="/about" className="text-red-600 hover:text-white mx-4">
          About
        </Link>

        <Link href="/services" className="text-red-600 hover:text-white mx-4">
          Services
        </Link>

        <Link href="/contact" className="text-red-600 hover:text-white mx-4">
          Contact
        </Link>

        <Link href="/faq" className="text-red-600 hover:text-white mx-4">
          FAQ
        </Link>
        <Link href="/Products" className="text-red-600 hover:text-white mx-4">
        Products
      </Link>
      </nav>
      
    </div>
  );
}
