'use client'

import { PricingCard } from './PricingCard'

interface PricingSectionProps {
  onPlanSelect?: (planName: string) => void
}

export function PricingSection({ onPlanSelect }: PricingSectionProps) {
  const handlePlanClick = (planName: string) => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    // Call the callback if provided
    onPlanSelect?.(planName)
  }

  return (
    <section id="pricing" className="section-padding bg-deep-black">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-soft-gold mb-4">
            Nossos Pacotes
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Soluções web profissionais para Pequenas e Médias Empresas. 
            Escolha o plano que melhor se adapta ao seu negócio.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Plano Presença */}
          <PricingCard
            name="Plano Presença"
            subtitle='O "Menu Digital"'
            idealFor="Restaurantes, Cafés, Bares, Pequenos Comércios"
            setupCost={249}
            monthlyCost={15}
            monthlyDescription="Alojamento/Manutenção"
            features={[
              'Página Única Premium (Landing Page)',
              'Menu/Catálogo Digital Visual Otimizado (Mobile-First)',
              'Formulário de Reserva via Formspree',
              'Botão Flutuante de WhatsApp',
              'Integração com Google Maps',
              '100% RGPD Compliant',
              'Tempo de Carga <2s',
            ]}
            ctaText="Solicitar este Plano"
            onCtaClick={() => handlePlanClick('Plano Presença')}
          />

          {/* Card 2: Plano Profissional (Popular) */}
          <PricingCard
            name="Plano Profissional"
            subtitle='O "Crescimento"'
            idealFor="Clínicas, Escritórios de Advogados, Prestadores de Serviço"
            setupCost={449}
            monthlyCost={20}
            monthlyDescription="Alojamento/Manutenção"
            features={[
              'Site Multi-páginas (Até 5 páginas: Início, Sobre, Serviços, Galeria, Contacto)',
              'SEO Local Básico (Configuração Google)',
              'Formulários de Orçamento Avançados (Formspree)',
              'Galeria de Imagens Otimizada',
              '100% RGPD Compliant',
              'Tempo de Carga <2s',
            ]}
            isPopular={true}
            ctaText="Solicitar este Plano"
            onCtaClick={() => handlePlanClick('Plano Profissional')}
          />

          {/* Card 3: Plano Gestão Total */}
          <PricingCard
            name="Plano Gestão Total"
            subtitle='O "Chave na Mão"'
            idealFor="Negócios que precisam de gestão digital completa"
            setupCost={599}
            monthlyCost={49}
            monthlyDescription="Gestão Ativa"
            features={[
              'Tudo do Plano Profissional',
              'Atualizações Mensais de Conteúdo (1x/mês)',
              'Gestão Ativa do Google Meu Negócio',
              'Relatório de Performance Simples Mensal (Acessos e Cliques no WhatsApp)',
              '100% RGPD Compliant',
              'Tempo de Carga <2s',
            ]}
            ctaText="Solicitar este Plano"
            onCtaClick={() => handlePlanClick('Plano Gestão Total')}
          />
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
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
