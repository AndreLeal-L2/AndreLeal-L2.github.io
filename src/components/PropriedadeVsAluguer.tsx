'use client'

import { useEffect, useRef } from 'react'

export function PropriedadeVsAluguer() {
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

  const aluguerItems = [
    { text: 'Dependência de algoritmos de terceiros', icon: 'warning' },
    { text: 'Sem controlo sobre a sua audiência', icon: 'warning' },
    { text: 'Conteúdo perdido em feeds saturados', icon: 'warning' },
    { text: 'Sem propriedade dos seus dados', icon: 'warning' },
    { text: 'Sujeito a mudanças de políticas', icon: 'warning' },
  ]

  const propriedadeItems = [
    { text: '100% controlo sobre a sua presença digital', icon: 'check' },
    { text: 'Propriedade total dos seus dados e clientes', icon: 'check' },
    { text: 'Autoridade profissional e credibilidade', icon: 'check' },
    { text: 'Experiência personalizada para visitantes', icon: 'check' },
    { text: 'Investimento de longo prazo no seu negócio', icon: 'check' },
  ]

  const WarningIcon = () => (
    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  )

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-soft-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )

  return (
    <section ref={sectionRef} className="section-padding bg-dark-gray/50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-serif text-soft-gold mb-4 text-shadow-gold">
            Propriedade vs. Aluguer
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A escolha que define o futuro digital do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Aluguer/Redes Sociais */}
          <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <div className="bg-dark-gray/50 border border-gray-800 rounded-xl p-8 h-full opacity-70">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-gray-400">Aluguer Digital</h3>
              </div>

              <ul className="space-y-4">
                {aluguerItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <WarningIcon />
                    <span className="text-gray-500">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <p className="text-sm text-red-400 text-center">
                  "Construir sobre terreno alugado é arriscado"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Propriedade/Seu Site */}
          <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-forest-green/30 to-dark-gray border border-soft-gold/30 rounded-xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-soft-gold/10 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-12 h-12 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-soft-gold">Propriedade Digital</h3>
              </div>

              <ul className="space-y-4 relative z-10">
                {propriedadeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-soft-gold/10 rounded-lg border border-soft-gold/30 relative z-10">
                <p className="text-sm text-soft-gold text-center font-medium">
                  "Seja dono do seu terreno digital"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
