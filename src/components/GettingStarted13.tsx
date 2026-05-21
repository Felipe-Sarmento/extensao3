'use client'
import { useState } from "react";

export default function GettingStarted13() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Avalie seus hábitos",
      description: "Observe durante alguns dias quais hábitos geram maior consumo de água, energia e resíduos.",
      tip: "Anote práticas que podem ser melhoradas na sua rotina.",
    },
    {
      id: 2,
      title: "Reduza o consumo de energia",
      description: "Desligue aparelhos sem uso e prefira equipamentos eficientes energeticamente.",
      tip: "Troque lâmpadas comuns por LED.",
    },
    {
      id: 3,
      title: "Economize água",
      description: "Adote práticas conscientes para evitar desperdícios no dia a dia.",
      tip: "Banhos mais curtos ajudam bastante.",
    },
    {
      id: 4,
      title: "Pratique o consumo consciente",
      description: "Compre apenas o necessário e prefira empresas sustentáveis.",
      tip: "Evite produtos descartáveis.",
    },
    {
      id: 5,
      title: "Separe resíduos recicláveis",
      description: "A reciclagem reduz impactos ambientais e reaproveita materiais.",
      tip: "Utilize lixeiras separadas.",
    },
    {
      id: 6,
      title: "Utilize transportes sustentáveis",
      description: "Sempre que possível, substitua o carro por bicicleta ou transporte público.",
      tip: "Pequenas mudanças reduzem emissões de carbono.",
    },
    {
      id: 7,
      title: "Compartilhe conhecimento",
      description: "Conscientize amigos e familiares sobre práticas sustentáveis.",
      tip: "A educação ambiental gera impacto coletivo.",
    },
    {
      id: 8,
      title: "Participe de ações ambientais",
      description: "Engaje-se em projetos ambientais, mutirões e campanhas sustentáveis.",
      tip: "Ações coletivas ampliam os resultados positivos.",
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">
          Como Contribuir com o Combate às Mudanças Climáticas
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Siga estas etapas para desenvolver hábitos mais sustentáveis e ajudar na preservação do planeta.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`h-10 w-10 rounded-full flex items-center justify-center ${
                activeStep === step.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
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
              <div className="flex flex-col gap-8">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4 text-blue-700">
                    Passo {step.id}: {step.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{step.description}</p>

                  <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-600">
                    <p className="font-medium text-blue-800">Dica:</p>
                    <p className="text-gray-700">{step.tip}</p>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                      disabled={activeStep === 1}
                      className={`px-4 py-2 rounded ${
                        activeStep === 1
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
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
                          : "bg-blue-600 text-white hover:bg-blue-700"
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
          <h3 className="text-xl font-bold mb-4 text-blue-700">Checklist sustentável</h3>

          <div className="space-y-3">
            {[
              "Reduzir o consumo de energia elétrica",
              "Economizar água diariamente",
              "Separar resíduos recicláveis",
              "Evitar plásticos descartáveis",
              "Utilizar meios de transporte sustentáveis",
              "Consumir de forma consciente",
              "Participar de ações ambientais",
              "Compartilhar conhecimento sobre mudanças climáticas",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <ol
                  id={`check-${index}`}
                  className="mt-1"
                />
                <li className="text-gray-700">{item}</li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
