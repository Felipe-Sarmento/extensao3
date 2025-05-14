import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          EcoAlimento
        </Link>
      </div>
    </nav>
  );
}
