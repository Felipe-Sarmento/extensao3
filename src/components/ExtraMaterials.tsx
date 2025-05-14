"use client"
import Image from "next/image";
import Link from "next/link";

export default function ExtraMaterials() {
  const materials = [
    {
      id: 1,
      title: "Guia Completo de Armazenamento de Alimentos",
      description: "Aprenda a aumentar a vida útil dos alimentos com técnicas corretas de armazenamento.",
      type: "E-book",
      image: "/file.svg",
      link: "#",
    },
    {
      id: 2,
      title: "Receitas Sustentáveis para Iniciantes",
      description: "30 receitas fáceis que aproveitam alimentos que normalmente seriam descartados.",
      type: "E-book",
      image: "/file.svg",
      link: "#",
    },
    {
      id: 3,
      title: "Compostagem Doméstica",
      description: "Aprenda como começar sua própria compostagem em casa, mesmo em apartamentos.",
      type: "Vídeo",
      image: "/file.svg",
      link: "#",
    },
    {
      id: 4,
      title: "Calendário Sazonal de Alimentos",
      description: "Saiba quais frutas e vegetais estão na safra em cada mês do ano para comprar produtos mais frescos e econômicos.",
      type: "PDF",
      image: "/file.svg",
      link: "#",
    },
    {
      id: 5,
      title: "Métodos de Conservação Natural",
      description: "Como preservar alimentos usando técnicas como fermentação, desidratação e congelamento.",
      type: "Curso",
      image: "/file.svg",
      link: "#",
    },
    {
      id: 6,
      title: "Impacto Ambiental do Desperdício",
      description: "Dados e infográficos sobre como o desperdício de alimentos afeta o meio ambiente.",
      type: "Infográfico",
      image: "/file.svg",
      link: "#",
    },
    {
      id: 7,
      title: "Dicas para Pais: Ensinando Crianças Sobre Desperdício",
      description: "Atividades e conversas para ensinar os pequenos sobre a importância de não desperdiçar comida.",
      type: "Cartilha",
      image: "/file.svg",
      link: "#",
    },
    {
      id: 8,
      title: "Planejamento de Refeições para a Semana",
      description: "Template para ajudar no planejamento semanal de refeições e lista de compras.",
      type: "Planilha",
      image: "/file.svg",
      link: "#",
    },
  ];

  const materialTypes = Array.from(new Set(materials.map(material => material.type)));

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-800">
          Materiais Extras
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Recursos complementares para aprofundar seus conhecimentos e aprimorar suas práticas sustentáveis no dia a dia.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material) => (
            <Link key={material.id} href={material.link} className="group">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="h-48 bg-green-50 p-4 flex items-center justify-center">
                  <Image
                    src={material.image}
                    alt={material.title}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm mb-3">
                    {material.type}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-green-700 group-hover:text-green-600">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 flex-grow mb-4">{material.description}</p>
                  <div className="text-green-600 font-medium flex items-center">
                    <span>Download</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-green-700 text-center">
            Solicite Materiais Específicos
          </h3>
          
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Qual tipo de material você gostaria de ver?
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-md bg-white">
                <option value="">Selecione uma opção</option>
                {materialTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
                <option value="outro">Outro (especifique)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Qual assunto você gostaria de aprender mais?
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md bg-white"
                rows={4}
                placeholder="Descreva o assunto ou tópico que você gostaria de ver coberto em materiais futuros..."
              ></textarea>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Seu email (para enviarmos o material quando disponível)
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md bg-white"
                placeholder="seu@email.com"
              />
            </div>
            
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 w-full"
            >
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
