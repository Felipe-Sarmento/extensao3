'use client'
import { useState } from "react";

export default function RecipesSection13() {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const categories = [
    "Todas",
    "Reciclagem",
    "Energia",
    "Água",
    "Mobilidade",
    "Educação",
    "Natureza",
  ];

  const projects = [
    {
      id: 1,
      title: "Painéis solares residenciais",
      description: "A energia solar reduz emissões de carbono e ajuda a diminuir o consumo de energia tradicional.",
      category: "Energia",
      accordions: [
        { label: "Como funciona", content: "Painéis solares captam a luz do sol e transformam em energia elétrica para uso doméstico." },
        { label: "Benefícios", content: "Redução da conta de energia e menor impacto ambiental." },
      ],
    },
    {
      id: 2,
      title: "Sistema de reaproveitamento de água",
      description: "A reutilização da água ajuda a preservar recursos hídricos e reduzir desperdícios.",
      category: "Água",
      accordions: [
        { label: "Aplicações", content: "Pode ser utilizada em jardins, limpeza e descargas sanitárias." },
        { label: "Importância", content: "Contribui para o uso mais consciente da água potável." },
      ],
    },
    {
      id: 3,
      title: "Campanhas de conscientização",
      description: "A educação ambiental incentiva mudanças de hábitos e ações sustentáveis na comunidade.",
      category: "Educação",
      accordions: [
        { label: "Exemplos", content: "Palestras, oficinas, campanhas em escolas e ações comunitárias." },
        { label: "Impacto", content: "Mais pessoas passam a compreender os efeitos das mudanças climáticas." },
      ],
    },
    {
      id: 4,
      title: "Uso de bicicletas nas cidades",
      description: "O incentivo ao transporte sustentável reduz a emissão de gases poluentes.",
      category: "Mobilidade",
      accordions: [
        { label: "Vantagens", content: "Menos trânsito, menos poluição e melhoria da saúde." },
        { label: "Desafios", content: "Necessidade de ciclovias e maior segurança urbana." },
      ],
    },
    {
      id: 5,
      title: "Plantio de árvores",
      description: "Árvores ajudam na absorção de carbono e melhoram a qualidade do ar.",
      category: "Natureza",
      accordions: [
        { label: "Importância", content: "Auxiliam na redução das temperaturas e preservação da biodiversidade." },
        { label: "Como participar", content: "Participe de ações locais de reflorestamento e preservação ambiental." },
      ],
    },
    {
      id: 6,
      title: "Coleta seletiva comunitária",
      description: "A separação correta dos resíduos fortalece os programas de reciclagem.",
      category: "Reciclagem",
      accordions: [
        { label: "Materiais recicláveis", content: "Papel, plástico, vidro e metal podem ser reciclados." },
        { label: "Benefícios", content: "Redução da poluição e geração de empregos sustentáveis." },
      ],
    },
  ];

  const filteredProjects = activeCategory === "Todas"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">
          Projetos e Ideias Sustentáveis
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Conheça iniciativas simples que ajudam no combate às mudanças climáticas e promovem conscientização ambiental.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-2 text-blue-700">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {project.accordions.map((accordion, index) => (
                  <details key={index} className="mb-3">
                    <summary className="font-medium text-blue-600 cursor-pointer">{accordion.label}</summary>
                    <p className="mt-2 text-gray-700">{accordion.content}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
