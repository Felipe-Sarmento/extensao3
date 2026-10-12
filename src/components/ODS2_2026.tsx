"use client";

import { useState } from "react";

function Navbar() {
  const links = [
    { href: "#dicas", label: "Dicas" },
    { href: "#servicos", label: "Serviços" },
    { href: "#passo-a-passo", label: "Passo a passo" },
    { href: "#comunidade", label: "Comunidade" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav className="bg-rose-800 p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-rose-100 hover:text-white text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-rose-50 py-16">
      <div className="container mx-auto flex flex-col items-center px-4 text-center">
        <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm mb-6">
          ODS 8 - Trabalho Decente e Crescimento Econômico
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-rose-900 mb-6">
          Inclusão econômica começa com informação
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl">
          Conhecer o próprio dinheiro e os serviços financeiros disponíveis é o
          primeiro passo para uma vida mais tranquila. Este espaço reúne
          orientações simples, gratuitas e acessíveis para toda a comunidade.
        </p>
      </div>
    </section>
  );
}

function TipsSection() {
  const categories = ["Todas", "Orçamento", "Poupança", "Dívidas", "Consumo consciente"];
  const [activeCategory, setActiveCategory] = useState("Todas");

  const tips = [
    {
      id: 1,
      title: "Anote tudo o que entra e sai",
      description:
        "Durante uma semana, registre cada gasto, mesmo os pequenos. Esse é o ponto de partida de qualquer orçamento.",
      category: "Orçamento",
    },
    {
      id: 2,
      title: "Separe contas fixas das variáveis",
      description:
        "Aluguel, água e luz costumam ser fixos; lazer e compras variam. Saber a diferença ajuda a planejar o mês.",
      category: "Orçamento",
    },
    {
      id: 3,
      title: "Defina metas realistas",
      description:
        "Estabeleça objetivos claros e alcançáveis, como economizar R$ 50 no próximo mês.",
      category: "Orçamento",
    },
    {
      id: 4,
      title: "Comece pequeno e constante",
      description:
        "Guardar um pouco toda semana cria o hábito de poupar, mesmo quando a quantia parece pequena.",
      category: "Poupança",
    },
    {
      id: 5,
      title: "Pague-se primeiro",
      description:
        "Separe o valor da poupança assim que receber, antes de começar a gastar.",
      category: "Poupança",
    },
    {
      id: 6,
      title: "Crie uma reserva de emergência",
      description:
        "Ter uma pequena reserva ajuda a lidar com imprevistos sem precisar recorrer a dívidas.",
      category: "Poupança",
    },
    {
      id: 7,
      title: "Liste todas as dívidas",
      description:
        "Anote quanto deve, para quem e com quais juros. Ver a situação com clareza é o primeiro passo para resolvê-la.",
      category: "Dívidas",
    },
    {
      id: 8,
      title: "Negocie e renegocie",
      description:
        "Procure o credor e busque acordos. Muitas dívidas podem ser parceladas ou renegociadas com condições melhores.",
      category: "Dívidas",
    },
    {
      id: 9,
      title: "Priorize as dívidas com juros maiores",
      description:
        "Quitar primeiro o que cresce mais rápido reduz o valor total pago ao final.",
      category: "Dívidas",
    },
    {
      id: 10,
      title: "Pesquise antes de comprar",
      description:
        "Comparar preços e condições evita gastos por impulso e ajuda a escolher a melhor opção.",
      category: "Consumo consciente",
    },
    {
      id: 11,
      title: "Diferencie necessidade de desejo",
      description:
        "Perguntar-se se aquilo é necessário agora ajuda a evitar compras que pesam no orçamento.",
      category: "Consumo consciente",
    },
    {
      id: 12,
      title: "Evite parcelar sem necessidade",
      description:
        "Parcelar pode parecer leve no mês, mas compromete a renda futura. Prefira pagar à vista quando possível.",
      category: "Consumo consciente",
    },
  ];

  const filteredTips =
    activeCategory === "Todas"
      ? tips
      : tips.filter((tip) => tip.category === activeCategory);

  return (
    <section id="dicas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-rose-900">
          Dicas de Educação Financeira
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Hábitos simples, aplicáveis no dia a dia, para organizar o dinheiro e
          tomar decisões mais conscientes.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-rose-800 text-white"
                  : "bg-white text-rose-800 border border-rose-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <div key={tip.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm mb-4">
                {tip.category}
              </span>
              <h3 className="text-xl font-bold mb-2 text-rose-800">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Conta digital",
      summary: "Conta gratuita oferecida por bancos e fintechs, acessada pelo celular.",
      items: [
        { label: "O que é", content: "Uma conta bancária digital, sem agência física, usada pelo aplicativo do celular." },
        { label: "Para que serve", content: "Guardar dinheiro, receber salários e benefícios, pagar contas e fazer transferências." },
        { label: "Como acessar", content: "Geralmente a abertura é gratuita pelo aplicativo, apenas com documento e CPF." },
      ],
    },
    {
      id: 2,
      title: "PIX",
      summary: "Transferência instantânea e gratuita entre contas, disponível 24 horas por dia.",
      items: [
        { label: "O que é", content: "Um sistema de pagamentos instantâneos criado pelo Banco Central." },
        { label: "Para que serve", content: "Enviar e receber dinheiro em segundos, pagar comerciantes e contas." },
        { label: "Como acessar", content: "Disponível no aplicativo do seu banco ou conta digital, sem custo para pessoas físicas." },
      ],
    },
    {
      id: 3,
      title: "Cooperativa de crédito",
      summary: "Instituição financeira sem fins lucrativos, formada pelos próprios associados.",
      items: [
        { label: "O que é", content: "Uma organização em que os clientes são também donos e participam das decisões." },
        { label: "Para que serve", content: "Oferecer conta, crédito e serviços financeiros, muitas vezes com taxas e juros menores." },
        { label: "Como acessar", content: "É preciso associar-se, geralmente vinculado a uma comunidade, profissão ou empresa." },
      ],
    },
    {
      id: 4,
      title: "Microcrédito",
      summary: "Empréstimo de pequeno valor voltado a quem tem pouca ou nenhuma garantia.",
      items: [
        { label: "O que é", content: "Uma linha de crédito de valor reduzido, pensada para pequenos empreendedores e famílias." },
        { label: "Para que serve", content: "Financiar um pequeno negócio, uma reforma ou uma necessidade urgente." },
        { label: "Como acessar", content: "Disponível em bancos públicos, cooperativas e organizações de microcrédito, com orientação de uso." },
      ],
    },
    {
      id: 5,
      title: "MEI - Microempreendedor Individual",
      summary: "Forma simplificada de formalizar quem trabalha por conta própria.",
      items: [
        { label: "O que é", content: "Um registro simplificado para pequenos empreendedores, com impostos reduzidos em uma única guia." },
        { label: "Para que serve", content: "Permite emitir nota fiscal, ter direitos previdenciários e acessar crédito com mais facilidade." },
        { label: "Como acessar", content: "O cadastro é gratuito pelo portal do Governo Federal (gov.br)." },
      ],
    },
  ];

  return (
    <section id="servicos" className="py-16 bg-rose-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-rose-900">
          Serviços Financeiros Acessíveis
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Muitos serviços financeiros são gratuitos ou de baixo custo e estão ao
          alcance de qualquer pessoa. Conheça os principais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-rose-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.summary}</p>

                {service.items.map((item, index) => (
                  <details key={index} className="mb-3">
                    <summary className="font-medium text-rose-700 cursor-pointer">
                      {item.label}
                    </summary>
                    <p className="mt-2 text-gray-700">{item.content}</p>
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

function GettingStarted() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Descubra quanto você ganha e gasta",
      description:
        "Some toda a renda do mês e acompanhe os gastos por alguns dias para entender sua situação real.",
      tip: "Guarde notas e comprovantes para não esquecer nenhum gasto.",
    },
    {
      id: 2,
      title: "Monte seu orçamento",
      description:
        "Organize as despesas em fixas e variáveis e defina quanto pretende gastar em cada categoria.",
      tip: "Comece com poucas categorias para não desanimar.",
    },
    {
      id: 3,
      title: "Abra uma conta digital",
      description:
        "Uma conta gratuita pelo celular facilita receber, pagar e acompanhar o dinheiro.",
      tip: "Confira se a instituição é autorizada pelo Banco Central.",
    },
    {
      id: 4,
      title: "Crie o hábito de poupar",
      description:
        "Separe um valor assim que receber, mesmo que pequeno, e trate a poupança como uma conta a pagar.",
      tip: "Guardar pouco toda semana vale mais do que esperar sobrar.",
    },
    {
      id: 5,
      title: "Organize e negocie dívidas",
      description:
        "Liste o que deve, priorize os juros mais altos e procure acordos com os credores.",
      tip: "Existem canais gratuitos de negociação de dívidas.",
    },
    {
      id: 6,
      title: "Planeje o próximo mês",
      description:
        "Ao final do mês, revise o que funcionou e ajuste o orçamento para o período seguinte.",
      tip: "Revisar e ajustar faz parte do processo.",
    },
  ];

  const checklist = [
    "Anotei toda a minha renda do mês",
    "Registrei meus gastos por alguns dias",
    "Separei despesas fixas das variáveis",
    "Defini metas para o mês",
    "Abri (ou conferi) minha conta digital",
    "Separei um valor para poupar",
    "Listei minhas dívidas e prioridades",
    "Planejei o próximo mês",
  ];

  return (
    <section id="passo-a-passo" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-rose-900">
          Como Começar Hoje
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Siga estas etapas para organizar sua vida financeira no seu ritmo.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`h-10 w-10 rounded-full flex items-center justify-center ${
                activeStep === step.id
                  ? "bg-rose-800 text-white"
                  : "bg-white text-rose-800 border border-rose-800"
              }`}
            >
              {step.id}
            </button>
          ))}
        </div>

        {steps
          .filter((step) => step.id === activeStep)
          .map((step) => (
            <div key={step.id} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-rose-800">
                Passo {step.id}: {step.title}
              </h3>
              <p className="text-gray-700 mb-6">{step.description}</p>

              <div className="bg-rose-50 p-4 rounded-md border-l-4 border-rose-700">
                <p className="font-medium text-rose-800">Dica:</p>
                <p className="text-gray-700">{step.tip}</p>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  disabled={activeStep === 1}
                  className={`px-4 py-2 rounded ${
                    activeStep === 1
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-rose-800 text-white hover:bg-rose-900"
                  }`}
                >
                  Passo anterior
                </button>

                <button
                  onClick={() => setActiveStep((prev) => Math.min(steps.length, prev + 1))}
                  disabled={activeStep === steps.length}
                  className={`px-4 py-2 rounded ${
                    activeStep === steps.length
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-rose-800 text-white hover:bg-rose-900"
                  }`}
                >
                  Próximo passo
                </button>
              </div>
            </div>
          ))}

        <div className="mt-12 bg-rose-50 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-rose-800">
            Checklist da organização financeira
          </h3>
          <ul className="space-y-3">
            {checklist.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1 h-5 w-5 shrink-0 rounded border border-rose-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CommunityWall() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Depoimento enviado para moderação! Obrigado pela contribuição.");
    setName("");
    setMessage("");
  };

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      message:
        "Comecei a anotar meus gastos e percebi onde estava perdendo dinheiro. No primeiro mês já consegui economizar.",
      date: "10/04/2026",
    },
    {
      id: 2,
      name: "João Pereira",
      message:
        "Abri uma conta digital gratuita e passei a usar o PIX. Ficou muito mais fácil organizar as contas de casa.",
      date: "23/03/2026",
    },
    {
      id: 3,
      name: "Ana Costa",
      message:
        "Renegociei uma dívida antiga em condições que cabiam no meu bolso. Achei que não teria saída e tinha.",
      date: "15/04/2026",
    },
    {
      id: 4,
      name: "Carlos Mendes",
      message:
        "Conheci a cooperativa de crédito do meu bairro e consegui um empréstimo com juros menores do que imaginava.",
      date: "05/04/2026",
    },
  ];

  return (
    <section id="comunidade" className="py-16 bg-rose-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-rose-900">
          Mural Comunitário
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.message}&rdquo;</p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-rose-700">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-rose-800">
            Compartilhe sua experiência
          </h3>
          <p className="text-gray-600 mb-6">
            Conte como você tem organizado seu dinheiro ou compartilhe uma dica
            que funcionou para você. Seu depoimento passa por moderação antes de
            ser publicado.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="wall-name" className="block text-sm font-medium text-gray-700 mb-1">
                Seu nome
              </label>
              <input
                type="text"
                id="wall-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="wall-message" className="block text-sm font-medium text-gray-700 mb-1">
                Sua mensagem
              </label>
              <textarea
                id="wall-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-rose-800 text-white font-medium rounded-md hover:bg-rose-900 transition duration-300"
            >
              Enviar depoimento
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const subjects = [
    "Dúvida",
    "Sugestão",
    "Relato de prática adotada",
    "Parceria",
    "Outro",
  ];

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-rose-900">
          Entre em Contato
        </h2>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <p className="text-gray-600 mb-6 text-center">
            Tem dúvidas ou sugestões? Preencha o formulário abaixo. Este é um
            canal educativo e não presta consultoria financeira individual.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">
                Assunto
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Selecione um assunto</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={5}
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-rose-800 text-white font-medium rounded-md hover:bg-rose-900 transition duration-300"
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-rose-900 text-rose-100 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Sobre o projeto</h3>
          <p className="text-sm">
            Projeto de extensão universitária sobre inclusão econômica e acesso a
            serviços financeiros (ODS 8).
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Fontes</h3>
          <ul className="text-sm space-y-2">
            <li>Banco Central do Brasil</li>
            <li>gov.br</li>
            <li>Serasa / SPC</li>
            <li>ONU - ODS 8</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Aviso</h3>
          <p className="text-sm">
            Conteúdo informativo e educativo. Não constitui consultoria
            financeira nem recomendação de investimento.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function ODS2_2026() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TipsSection />
        <ServicesSection />
        <GettingStarted />
        <CommunityWall />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
