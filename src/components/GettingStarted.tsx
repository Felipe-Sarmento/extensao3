'use client'
import { useState } from "react";
import Image from "next/image";

export default function GettingStarted() {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: "Faça um diagnóstico",
      description: "Comece observando por uma semana quais alimentos você costuma jogar fora com mais frequência. Anote as quantidades aproximadas para ter uma ideia do seu padrão de desperdício atual.",
      tip: "Use um caderninho ou aplicativo de notas para registrar todos os alimentos descartados por 7 dias.",
      image: "/file.svg",
    },
    {
      id: 2,
      title: "Planeje suas compras",
      description: "Antes de ir ao supermercado, verifique o que já tem em casa e faça uma lista. Planeje um cardápio semanal para comprar apenas o necessário.",
      tip: "Use aplicativos de lista de compras que permitem salvar listas frequentes.",
      image: "/file.svg",
    },
    {
      id: 3,
      title: "Organize sua cozinha",
      description: "Arrume sua geladeira e despensa de forma que os alimentos mais antigos fiquem à vista, seguindo o princípio 'primeiro a entrar, primeiro a sair'.",
      tip: "Use etiquetas com datas nos alimentos armazenados para controle visual.",
      image: "/file.svg",
    },
    {
      id: 4,
      title: "Aprenda a conservar",
      description: "Estude as melhores formas de armazenar cada tipo de alimento. Alguns vegetais duram mais na geladeira, outros fora dela.",
      tip: "Guarde vegetais folhosos em recipientes com papel-toalha para absorver a umidade.",
      image: "/file.svg",
    },
    {
      id: 5,
      title: "Conheça porções adequadas",
      description: "Aprenda a cozinhar nas quantidades certas para o seu consumo, evitando o excesso de comida preparada.",
      tip: "Use medidores de porção ou uma balança de cozinha para calibrar as quantidades certas.",
      image: "/file.svg",
    },
    {
      id: 6,
      title: "Reaproveite com criatividade",
      description: "Aprenda receitas de reaproveitamento e crie o hábito de transformar sobras em novos pratos saborosos.",
      tip: "Reserve um dia na semana para criar refeições apenas com o que já tem na geladeira.",
      image: "/file.svg",
    },
    {
      id: 7,
      title: "Monitore seu progresso",
      description: "Depois de aplicar as primeiras mudanças, faça novo diagnóstico para ver a redução no desperdício.",
      tip: "Compare seu desperdício atual com o inicial e calcule a economia financeira que você já obteve.",
      image: "/file.svg",
    },
    {
      id: 8,
      title: "Compartilhe e inspire",
      description: "Divida suas experiências com amigos e familiares, incentivando mais pessoas a adotarem práticas sustentáveis.",
      tip: "Use nossas redes sociais para compartilhar suas histórias de sucesso na redução de desperdício.",
      image: "/file.svg",
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-800">
          Como Começar
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Siga este guia passo a passo para implementar hábitos sustentáveis na sua rotina e reduzir significativamente o desperdício de alimentos em sua casa.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`h-10 w-10 rounded-full flex items-center justify-center ${
                activeStep === step.id
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600 border border-green-600"
              }`}
            >
              {step.id}
            </button>
          ))}
        </div>
        
        {steps
          .filter((step) => step.id === activeStep)
          .map((step) => (
            <div key={step.id} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-green-100 p-6 rounded-full">
                    <Image
                      src={step.image}
                      alt={`Passo ${step.id}`}
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-green-700">
                    Passo {step.id}: {step.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{step.description}</p>
                  
                  <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-600">
                    <p className="font-medium text-green-800">Dica:</p>
                    <p className="text-gray-700">{step.tip}</p>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <button
                      onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                      disabled={activeStep === 1}
                      className={`px-4 py-2 rounded ${
                        activeStep === 1
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700"
                      }`}
                    >
                      Passo anterior
                    </button>
                    
                    <button
                      onClick={() => setActiveStep(prev => Math.min(steps.length, prev + 1))}
                      disabled={activeStep === steps.length}
                      className={`px-4 py-2 rounded ${
                        activeStep === steps.length
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700"
                      }`}
                    >
                      Próximo passo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-green-700">Checklist para começar agora</h3>
          
          <div className="space-y-3">
            {[
              "Faça um inventário da sua despensa e geladeira",
              "Crie um plano de refeições para os próximos 7 dias",
              "Prepare uma lista de compras baseada no seu plano",
              "Organize sua geladeira por tipo de alimento e data de validade",
              "Identifique e congele alimentos que não serão usados imediatamente",
              "Escolha uma receita de reaproveitamento para testar esta semana",
              "Implemente um sistema para monitorar o que você descarta",
              "Compartilhe seu compromisso com sua família ou nas redes sociais"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <ol
                  id={`check-${index}`}
                  className="mt-1"
                />
                <li
                  className="text-gray-700"
                >
                  {item}
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
