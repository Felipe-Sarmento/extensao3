import Link from "next/link";

export default function Navbar13() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          EcoClima
        </Link>
      </div>
    </nav>
  );
}
