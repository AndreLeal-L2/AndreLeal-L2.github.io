'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PricingSection } from '@/components/PricingSection'
import { ServicesSection } from '@/components/ServicesSection'
import { PropriedadeVsAluguer } from '@/components/PropriedadeVsAluguer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

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
          {/* Logo Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="Arara Web Logo"
              width={300}
              height={300}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
              priority
            />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-serif text-soft-gold mb-8 leading-tight">
            Presença Digital de Elite<br className="hidden md:block" /> para Negócios Locais
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Sites premium para Pequenas e Médias Empresas. Rápidos, seguros e 100% RGPD compliant.
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
              <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">100% RGPD Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-medium">Tempo de Carga &lt;2s</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="font-medium">Lighthouse 95+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - New Feature Cards */}
      <ServicesSection />

      {/* Propriedade vs Aluguer Comparison */}
      <PropriedadeVsAluguer />

      {/* Pricing Section - 3 Tier */}
      <PricingSection />

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-deep-black">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-serif text-soft-gold mb-4 text-shadow-gold">
                Solicite um Orçamento
              </h2>
              <p className="text-gray-400">
                Preencha o formulário abaixo e responderemos em até 24 horas úteis.
              </p>
            </div>
            
            {submitStatus === 'success' ? (
              <div className="bg-green-600/20 border border-green-600 text-green-400 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mensagem Enviada!</h3>
                <p className="mb-4">Obrigado pelo seu contacto. Responderemos em breve.</p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="text-soft-gold hover:text-light-gold underline font-medium"
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
                      className="input-gold"
                      placeholder="Seu nome completo"
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
                      className="input-gold"
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
                      className="input-gold"
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
                      className="input-gold"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Plano de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-gold"
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
                    className="input-gold resize-none"
                    placeholder="Diga-nos um pouco sobre o seu negócio (ex: sou dono de uma barbearia e gostaria de incluir o serviço de fotografia)."
                  />
                </div>
                
                {submitStatus === 'error' && (
                  <div className="bg-red-600/20 border border-red-600 text-red-400 p-4 rounded-lg text-center">
                    <p>Ocorreu um erro ao enviar. Por favor, tente novamente.</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gold-solid disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      A enviar...
                    </span>
                  ) : (
                    'Enviar Pedido de Orçamento'
                  )}
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-soft-gold">Arara Web</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Presença digital premium para Pequenas e Médias Empresas. Sites rápidos, seguros e 100% RGPD compliant.
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
            <p>&copy; 2025 Arara Web. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  )
}
