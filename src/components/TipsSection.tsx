"use client"
import { useState } from "react";

export default function TipsSection() {
  const categories = ["Todas", "Geladeira", "Cozinha", "Compras", "Consumo", "Armazenamento"];
  const [activeCategory, setActiveCategory] = useState("Todas");

  const tips = [
    {
      id: 1,
      title: "Lista de compras inteligente",
      description: "Faça um planejamento semanal das refeições e crie uma lista de compras baseada nesse planejamento.",
      category: "Compras",
    },
    {
      id: 2,
      title: "Organize sua geladeira",
      description: "Coloque os alimentos mais perecíveis à vista primeiro",
      category: "Geladeira",
    },
    {
      id: 3,
      title: "Congelamento correto",
      description: "Porcione os alimentos antes de congelar e etiquete com data para controle de validade.",
      category: "Armazenamento",
    },
    {
      id: 4,
      title: "Reaproveite talos e cascas",
      description: "Muitas partes de alimentos que normalmente descartamos são nutritivas e podem ser usadas em receitas.",
      category: "Cozinha",
    },
    {
      id: 5,
      title: "Compre frutas em diferentes estágios",
      description: "Adquira algumas maduras para consumo imediato e outras verdes para consumir ao longo da semana.",
      category: "Compras",
    },
    {
      id: 6,
      title: "Fique atento às promoções",
      description: "Só compre em maior quantidade se tiver certeza de que vai consumir antes de estragar.",
      category: "Consumo",
    },
    {
      id: 7,
      title: "Armazene legumes corretamente",
      description: "Alguns vegetais devem ser guardados separados para evitar amadurecimento acelerado.",
      category: "Armazenamento",
    },
    {
      id: 8,
      title: "Prepare marmitas com sobras",
      description: "Use sobras do jantar para preparar marmitas para o almoço do dia seguinte.",
      category: "Cozinha",
    },
    {
      id: 9,
      title: "Conserve pães por mais tempo",
      description: "Guarde pães em local seco e fresco, ou congele-os em porções individuais.",
      category: "Armazenamento",
    },
    {
      id: 10,
      title: "Monitoramento de validade",
      description: "Organize os produtos na despensa por data de validade e verifique regularmente.",
      category: "Consumo",
    },
    {
      id: 11,
      title: "Controle a temperatura da geladeira",
      description: "Mantenha sua geladeira entre 1°C e 5°C para prolongar a vida útil dos alimentos.",
      category: "Geladeira",
    },
    {
      id: 12,
      title: "Aproveite o poder das sobras",
      description: "Crie novas refeições utilizando as sobras do dia anterior de forma criativa.",
      category: "Cozinha",
    },
  ];

  const filteredTips = activeCategory === "Todas" 
    ? tips 
    : tips.filter(tip => tip.category === activeCategory);

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
          Dicas Práticas para Evitar o Desperdício
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600 border border-green-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <div key={tip.id} className="bg-white p-6 rounded-lg shadow-md">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm mb-4">
                {tip.category}
              </span>
              <h3 className="text-xl font-bold mb-2 text-green-700">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
