"use client"
import { useState } from "react";

export default function TipsSection13() {
  const categories = ["Todas", "Energia", "Água", "Transporte", "Consumo", "Resíduos"];
  const [activeCategory, setActiveCategory] = useState("Todas");

  const tips = [
    {
      id: 1,
      title: "Economize energia elétrica",
      description: "Desligue aparelhos que não estão em uso e utilize lâmpadas LED para reduzir o consumo de energia.",
      category: "Energia",
    },
    {
      id: 2,
      title: "Reduza o desperdício de água",
      description: "Feche a torneira ao escovar os dentes e reutilize água sempre que possível.",
      category: "Água",
    },
    {
      id: 3,
      title: "Prefira meios sustentáveis",
      description: "Utilize bicicleta, transporte público ou caronas para diminuir a emissão de gases poluentes.",
      category: "Transporte",
    },
    {
      id: 4,
      title: "Separe o lixo reciclável",
      description: "Faça a separação correta dos resíduos para facilitar a reciclagem e reduzir impactos ambientais.",
      category: "Resíduos",
    },
    {
      id: 5,
      title: "Consuma de forma consciente",
      description: "Evite compras desnecessárias e prefira produtos sustentáveis e duráveis.",
      category: "Consumo",
    },
    {
      id: 6,
      title: "Aproveite a luz natural",
      description: "Abra janelas e cortinas durante o dia para diminuir o uso de iluminação artificial.",
      category: "Energia",
    },
    {
      id: 7,
      title: "Capte água da chuva",
      description: "A água da chuva pode ser usada para limpeza de áreas externas e irrigação de plantas.",
      category: "Água",
    },
    {
      id: 8,
      title: "Reduza viagens curtas de carro",
      description: "Para pequenas distâncias, caminhar ajuda o meio ambiente e melhora a saúde.",
      category: "Transporte",
    },
    {
      id: 9,
      title: "Evite plásticos descartáveis",
      description: "Utilize garrafas reutilizáveis, sacolas ecológicas e recipientes duráveis.",
      category: "Resíduos",
    },
    {
      id: 10,
      title: "Valorize produtores locais",
      description: "Comprar de produtores da região reduz impactos do transporte e fortalece a economia local.",
      category: "Consumo",
    },
    {
      id: 11,
      title: "Desconecte aparelhos da tomada",
      description: "Mesmo desligados, alguns aparelhos continuam consumindo energia elétrica.",
      category: "Energia",
    },
    {
      id: 12,
      title: "Faça compostagem",
      description: "Transforme resíduos orgânicos em adubo natural para reduzir o volume de lixo.",
      category: "Resíduos",
    },
  ];

  const filteredTips = activeCategory === "Todas"
    ? tips
    : tips.filter(tip => tip.category === activeCategory);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">
          Ações Práticas para Reduzir os Impactos Climáticos
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Descubra hábitos simples que ajudam no combate às mudanças climáticas e na preservação ambiental.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <div key={tip.id} className="bg-white p-6 rounded-lg shadow-md">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
                {tip.category}
              </span>
              <h3 className="text-xl font-bold mb-2 text-blue-700">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
