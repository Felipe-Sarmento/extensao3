"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">EcoAlimento</h3>
        </div>
      </div>
    </footer>
  );
}
