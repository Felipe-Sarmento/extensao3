'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RecipesSection() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  
  const categories = [
    "Todas", 
    "Sobras", 
    "Cascas", 
    "Talos", 
    "Arroz", 
    "Pão", 
    "Vegetais"
  ];
  
  const recipes = [
    {
      id: 1,
      title: "Bolo de casca de banana",
      description: "Um delicioso bolo aproveitando as cascas de banana que normalmente iriam para o lixo.",
      ingredients: ["4 cascas de banana", "2 ovos", "1 xícara de açúcar", "2 xícaras de farinha de trigo", "1/2 xícara de óleo", "1 colher de fermento"],
      instructions: "Bata todos os ingredientes líquidos no liquidificador com as cascas de banana bem lavadas. Misture com os ingredientes secos e asse por 35 minutos.",
      image: "/bolo-de-casaca-de-banana.webp",
      categories: ["Cascas", "Sobras"],
    },
    {
      id: 2,
      title: "Bolinho de arroz",
      description: "Aproveite o arroz que sobrou do almoço ou jantar para fazer deliciosos bolinhos.",
      ingredients: ["2 xícaras de arroz cozido", "1 ovo", "3 colheres de farinha de trigo", "Temperos a gosto", "Óleo para fritar"],
      instructions: "Misture todos os ingredientes, molde os bolinhos com as mãos e frite em óleo quente até dourar.",
      image: "/bolinho_de_arroz.jpg",
      categories: ["Sobras", "Arroz"],
    },
    {
      id: 3,
      title: "Farofa de casca de legumes",
      description: "Uma farofa saborosa feita com cascas de legumes que seriam descartadas.",
      ingredients: ["Cascas de cenoura, batata, abobrinha", "1/2 cebola picada", "2 dentes de alho", "1 xícara de farinha de mandioca", "Sal e temperos"],
      instructions: "Refogue as cascas bem lavadas e picadas com cebola e alho. Adicione a farinha e temperos e misture bem até dourar.",
      image: "/farofa_de_casaca.jpg",
      categories: ["Cascas", "Vegetais"],
    },
    {
      id: 4,
      title: "Pão de ló com pão dormido",
      description: "Transforme pão amanhecido em uma sobremesa deliciosa.",
      ingredients: ["4 pães franceses dormidos", "1 lata de leite condensado", "1 xícara de leite", "3 ovos", "Essência de baunilha", "Açúcar para caramelizar"],
      instructions: "Pique o pão, molhe com leite e misture com os demais ingredientes. Asse em forma caramelizada por 40 minutos em banho-maria.",
      image: "/Bolo-de-pao.webp",
      categories: ["Sobras", "Pão"],
    },
    {
      id: 5,
      title: "Caldo verde com talos",
      description: "Um clássico caldo verde aproveitando talos de couve e outros vegetais.",
      ingredients: ["Talos de couve e espinafre", "2 batatas", "1 cebola", "2 dentes de alho", "Azeite", "Sal e pimenta"],
      instructions: "Refogue a cebola e o alho, adicione os talos bem picados e as batatas. Cubra com água e cozinhe até as batatas ficarem macias. Bata tudo no liquidificador.",
      image: "/Sopa-com-talos-de-espinafre-1.jpg",
      categories: ["Talos", "Vegetais"],
    },
    {
      id: 6,
      title: "Lasanha de sobras",
      description: "Uma deliciosa lasanha feita com as sobras de carne e vegetais da semana.",
      ingredients: ["Sobras de carne ou frango", "Sobras de vegetais refogados", "Massa de lasanha", "Molho de tomate", "Queijo ralado"],
      instructions: "Pique as sobras de carne e vegetais, misture com o molho. Monte camadas com massa, mistura de sobras e queijo. Asse até dourar.",
      image: "/lasanha de sobras.jpg",
      categories: ["Sobras"],
    },
  ];
  
  const filteredRecipes = activeCategory === "Todas"
    ? recipes
    : recipes.filter(recipe => recipe.categories.includes(activeCategory));

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-800">
          Receitas de Reaproveitamento
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Descubra como transformar possíveis resíduos em pratos saborosos e nutritivos.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-4 bg-green-50">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {recipe.categories.map((category, index) => (
                    <span key={index} className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-700">{recipe.title}</h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                
                <details className="mb-4">
                  <summary className="font-medium text-green-600 cursor-pointer">Ingredientes</summary>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-700">{ingredient}</li>
                    ))}
                  </ul>
                </details>
                
                <details>
                  <summary className="font-medium text-green-600 cursor-pointer">Modo de Preparo</summary>
                  <p className="mt-2 text-gray-700">{recipe.instructions}</p>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
