'use client'

import { useEffect, useRef } from 'react'
import { PricingCard } from './PricingCard'

interface PricingSectionProps {
  onPlanSelect?: (planName: string) => void
}

export function PricingSection({ onPlanSelect }: PricingSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handlePlanClick = (planName: string) => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    onPlanSelect?.(planName)
  }

  return (
    <section id="pricing" ref={sectionRef} className="section-padding bg-deep-black">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-serif text-soft-gold mb-4 text-shadow-gold">
            Nossos Planos
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Soluções premium desenhadas para Pequenas e Médias Empresas. 
            Invista no seu terreno digital com preços transparentes e justos.
          </p>
        </div>

        {/* Pricing Cards - Improved mobile spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Plano Presença - Updated with Barbearias */}
          <div className="animate-on-scroll" style={{ transitionDelay: '0ms' }}>
            <PricingCard
              name="Plano Presença"
              subtitle='O "Menu Digital"'
              idealFor="Restaurantes, Cafés, Bares, Barbearias e Pequenos Comércios"
              setupCost={249}
              monthlyCost={15}
              monthlyDescription="Alojamento/Manutenção"
              features={[
                'Página Única Premium (Landing Page)',
                'Menu/Catálogo Digital Visual Otimizado',
                'Visualização de Menus ou Catálogos de Serviços/Cortes',
                'Formulário de Reserva via Formspree',
                'Botão Flutuante de WhatsApp (perfeito para barbearias)',
                'Integração com Google Maps',
                '100% RGPD Compliant',
                'Tempo de Carga <2s',
              ]}
              ctaText="Solicitar Orçamento"
              onCtaClick={() => handlePlanClick('Plano Presença')}
            />
          </div>

          {/* Card 2: Plano Profissional (Popular) */}
          <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <PricingCard
              name="Plano Profissional"
              subtitle='O "Crescimento"'
              idealFor="Clínicas, Escritórios, Prestadores de Serviço"
              setupCost={449}
              monthlyCost={20}
              monthlyDescription="Alojamento/Manutenção"
              features={[
                'Site Multi-páginas (Até 5 páginas)',
                'SEO Local Básico (Configuração Google)',
                'Formulários de Orçamento Avançados',
                'Galeria de Imagens Otimizada',
                '100% RGPD Compliant',
                'Tempo de Carga <2s',
                'Suporte Prioritário',
              ]}
              ctaText="Solicitar Orçamento"
              onCtaClick={() => handlePlanClick('Plano Profissional')}
            />
          </div>

          {/* Card 3: Plano Gestão Total */}
          <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <PricingCard
              name="Plano Gestão Total"
              subtitle='O "Chave na Mão"'
              idealFor="Negócios que precisam de gestão digital completa"
              setupCost={599}
              monthlyCost={49}
              monthlyDescription="Gestão Ativa"
              features={[
                'Tudo do Plano Profissional',
                'Atualizações Mensais de Conteúdo',
                'Gestão Ativa do Google Meu Negócio',
                'Relatório de Performance Mensal',
                'Consultoria Digital Incluída',
                '100% RGPD Compliant',
                'Tempo de Carga <2s',
              ]}
              isPremium={true}
              ctaText="Solicitar Orçamento"
              onCtaClick={() => handlePlanClick('Plano Gestão Total')}
            />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400 animate-on-scroll">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>100% RGPD Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Tempo de Carga &lt;2s</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>Lighthouse 95+</span>
          </div>
        </div>
      </div>
    </section>
  )
}
