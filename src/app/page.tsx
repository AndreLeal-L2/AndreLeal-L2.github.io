'use client'

import { PricingSection } from '@/components/PricingSection'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/maqlbgew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Novo Pedido de Orçamento - ${formData.name}`,
          _replyto: formData.email,
        })
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen bg-deep-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-black/50 to-deep-black" />
        
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-soft-gold mb-6">
            Arara Web
          </h1>
          <h2 className="text-2xl md:text-4xl font-serif text-soft-gold mb-8">
            Presença Digital de Elite para Negócios Locais
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Sites rápidos, seguros e em conformidade com o RGPD
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact" className="btn-primary">
              Solicitar Orçamento Grátis
            </a>
            <a href="#services" className="btn-secondary">
              Ver Serviços
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-soft-gold font-bold">100%</span>
              <span>RGPD Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-soft-gold font-bold">&lt;2s</span>
              <span>Tempo de Carregamento</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-soft-gold font-bold">95+</span>
              <span>Lighthouse Score</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-deep-black">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-serif text-center text-soft-gold mb-12">
            Soluções Web Profissionais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="card-dark">
              <div className="w-12 h-12 bg-soft-gold/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soft-gold mb-3">Web Design Premium</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sites elegantes e funcionais, otimizados para conversão e experiência do usuário.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-dark">
              <div className="w-12 h-12 bg-soft-gold/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soft-gold mb-3">SEO Local</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Destaque-se nas pesquisas locais e atraia mais clientes da sua área.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-dark">
              <div className="w-12 h-12 bg-soft-gold/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soft-gold mb-3">RGPD Compliant</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Conformidade total com o Regulamento Geral de Proteção de Dados.
              </p>
            </div>

            {/* Card 4 */}
            <div className="card-dark">
              <div className="w-12 h-12 bg-soft-gold/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soft-gold mb-3">Performance</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sites ultra-rápidos com tempo de carregamento inferior a 2 segundos.
              </p>
            </div>

            {/* Card 5 */}
            <div className="card-dark">
              <div className="w-12 h-12 bg-soft-gold/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soft-gold mb-3">Responsive Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Experiência perfeita em todos os dispositivos: desktop, tablet e mobile.
              </p>
            </div>

            {/* Card 6 */}
            <div className="card-dark">
              <div className="w-12 h-12 bg-soft-gold/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-soft-gold mb-3">Suporte Técnico</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Suporte contínuo e manutenção para garantir o funcionamento perfeito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Why Section */}
      <section className="section-padding bg-dark-gray">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-serif text-center text-soft-gold mb-12">
            O Porquê
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            A sua presença digital não pode depender de aluguel. É tempo de ser dono do seu terreno digital.
            Criamos soluções web profissionais para Pequenas e Médias Empresas (PMEs), 
            com resultados mensuráveis e crescimento sustentável.
          </p>
        </div>
      </section>

      <PricingSection />

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-deep-black">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-serif text-center text-soft-gold mb-12">
            Solicite um Orçamento
          </h2>
          
          <div className="max-w-2xl mx-auto">
            {submitStatus === 'success' ? (
              <div className="bg-green-600/20 border border-green-600 text-green-400 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2">Mensagem Enviada!</h3>
                <p>Obrigado pelo seu contacto. Responderemos em breve.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-4 text-soft-gold hover:text-light-gold underline"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-soft-gold transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-soft-gold transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-soft-gold transition-colors"
                      placeholder="+351 900 000 000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-soft-gold transition-colors"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg text-white focus:outline-none focus:border-soft-gold transition-colors"
                  >
                    <option value="">Selecione um plano</option>
                    <option value="plano-presenca">Plano Presença (249€ + 15€/mês)</option>
                    <option value="plano-profissional">Plano Profissional (449€ + 20€/mês)</option>
                    <option value="plano-gestao">Plano Gestão Total (599€ + 49€/mês)</option>
                    <option value="custom">Orçamento Personalizado</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-soft-gold transition-colors resize-none"
                    placeholder="Descreva o seu projeto ou dúvida..."
                  />
                </div>
                
                {submitStatus === 'error' && (
                  <div className="bg-red-600/20 border border-red-600 text-red-400 p-4 rounded-lg">
                    Ocorreu um erro ao enviar. Por favor, tente novamente.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'A enviar...' : 'Enviar Pedido de Orçamento'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-gray border-t border-gray-800 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif text-soft-gold mb-4">Arara Web</h3>
              <p className="text-gray-400 text-sm">
                Presença digital profissional para empresas locais. Sites rápidos, seguros e em conformidade com o RGPD.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-serif text-soft-gold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>ararawebsolutions@gmail.com</p>
                <p>Portugal</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-serif text-soft-gold mb-4">Horário</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Segunda - Sexta: 9h - 18h</p>
                <p>Sábado: 10h - 14h</p>
                <p>Domingo: Encerrado</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Arara Web. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
