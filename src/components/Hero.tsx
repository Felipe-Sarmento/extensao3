import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
            Combata o desperdício de alimentos
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            Juntos podemos criar um futuro mais sustentável, economizar dinheiro 
            e proteger nosso planeta através de práticas simples no dia a dia.
          </p>
        </div>
        <div className="lg:w-1/2 relative">
          <Image
            src="/globe.svg"
            alt="Ilustração sobre preservação de alimentos"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
