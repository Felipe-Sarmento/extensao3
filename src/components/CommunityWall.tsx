"use client"
import { useState } from 'react';

export default function CommunityWall() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria a lógica para enviar o depoimento para moderação
    alert('Depoimento enviado para moderação! Obrigado pela contribuição.');
    setName('');
    setMessage('');
  };
  
  // Exemplos de depoimentos para demonstração
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      message: 'Comecei a planejar minhas compras e reduzi meu desperdício em 50% logo no primeiro mês!',
      date: '10/04/2025'
    },
    {
      id: 2,
      name: 'João Pereira',
      message: 'As dicas de armazenamento me ajudaram muito. Meus vegetais agora duram muito mais tempo na geladeira.',
      date: '23/03/2025'
    },
    {
      id: 3,
      name: 'Ana Costa',
      message: 'Experimentei as receitas de reaproveitamento e minha família adorou! Nunca mais jogo talos e cascas fora.',
      date: '15/04/2025'
    },
    {
      id: 4,
      name: 'Carlos Mendes',
      message: 'Organizei um grupo no meu condomínio para compartilhar alimentos próximos ao vencimento. Tem sido uma experiência incrível!',
      date: '05/04/2025'
    }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">
          Mural Comunitário
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">"{testimonial.message}"</p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-amber-700">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-amber-700">
            Compartilhe sua experiência
          </h3>
          <p className="text-gray-600 mb-6">
            Conte como você tem combatido o desperdício de alimentos ou compartilhe uma dica que funcionou para você!
            Seu depoimento passará por moderação antes de ser publicado.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Seu nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Sua mensagem
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={4}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-4 py-2 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition duration-300"
            >
              Enviar depoimento
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
