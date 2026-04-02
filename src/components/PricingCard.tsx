'use client'

interface PricingCardProps {
  name: string
  subtitle: string
  idealFor: string
  setupCost: number
  monthlyCost: number
  monthlyDescription: string
  features: string[]
  isPopular?: boolean
  ctaText?: string
  onCtaClick?: () => void
}

export function PricingCard({
  name,
  subtitle,
  idealFor,
  setupCost,
  monthlyCost,
  monthlyDescription,
  features,
  isPopular = false,
  ctaText = 'Solicitar este Plano',
  onCtaClick,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col h-full rounded-xl overflow-hidden transition-all duration-300 ${
        isPopular
          ? 'bg-forest-green border-2 border-soft-gold shadow-2xl shadow-soft-gold/20 scale-105 z-10'
          : 'bg-dark-gray border border-gray-700 hover:border-soft-gold/50'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-soft-gold text-deep-black text-center py-2 font-semibold text-sm uppercase tracking-wider">
          Melhor Valor
        </div>
      )}

      <div className={`p-6 ${isPopular ? 'pt-14' : ''} flex-grow`}>
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif text-soft-gold mb-1">{name}</h3>
          <p className="text-sm text-gray-400 italic mb-2">{subtitle}</p>
          <p className="text-xs text-forest-green font-medium">
            Ideal para: {idealFor}
          </p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-6 pb-6 border-b border-gray-700">
          <div className="mb-2">
            <span className="text-4xl font-bold text-soft-gold">{setupCost}€</span>
            <span className="text-sm text-gray-400 ml-2">(Pagamento Único)</span>
          </div>
          <div className="text-sm">
            <span className="text-green-400 font-semibold">+ {monthlyCost}€/mês</span>
            <span className="text-gray-500 ml-1">({monthlyDescription})</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-soft-gold flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="p-6 pt-0">
        <button
          onClick={onCtaClick}
          className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
            isPopular
              ? 'bg-soft-gold text-deep-black hover:bg-light-gold hover:shadow-lg hover:shadow-soft-gold/30'
              : 'border-2 border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-deep-black'
          }`}
        >
          {ctaText}
        </button>
      </div>
    </div>
  )
}
