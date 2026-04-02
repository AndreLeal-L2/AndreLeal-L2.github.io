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
  isPremium?: boolean
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
  isPremium = false,
  ctaText = 'Solicitar Orçamento',
  onCtaClick,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col h-full rounded-xl overflow-hidden transition-all duration-500 ${
        isPopular
          ? 'bg-forest-green border-2 border-soft-gold shadow-2xl shadow-soft-gold/20 scale-105 z-10'
          : isPremium
          ? 'bg-gradient-to-b from-dark-gray to-deep-black border border-soft-gold/40'
          : 'bg-dark-gray border border-gray-800 hover:border-soft-gold/50'
      }`}
    >
      {/* Badge */}
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-soft-gold via-light-gold to-soft-gold text-deep-black text-center py-2 font-bold text-sm uppercase tracking-wider shadow-lg">
          Mais Popular
        </div>
      )}
      
      {isPremium && !isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white text-center py-2 font-semibold text-sm uppercase tracking-wider">
          Premium
        </div>
      )}

      <div className={`p-6 ${isPopular || isPremium ? 'pt-14' : ''} flex-grow`}>
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif text-soft-gold mb-1">{name}</h3>
          <p className="text-sm text-gray-400 italic mb-2">{subtitle}</p>
          <p className="text-xs text-forest-green font-medium">
            Ideal para: {idealFor}
          </p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-6 pb-6 border-b border-gray-700/50">
          <div className="mb-2">
            <span className="text-5xl font-bold text-soft-gold text-shadow-gold">{setupCost}€</span>
          </div>
          <span className="text-sm text-gray-400 block mb-3">Pagamento Único</span>
          <div className="inline-flex items-center gap-2 bg-forest-green/30 px-4 py-2 rounded-full">
            <span className="text-green-400 font-bold text-lg">+ {monthlyCost}€/mês</span>
            <span className="text-gray-500 text-sm">({monthlyDescription})</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPopular ? 'text-soft-gold' : 'text-green-400'}`}
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
          className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            isPopular || isPremium
              ? 'bg-soft-gold text-deep-black hover:bg-light-gold shadow-lg shadow-soft-gold/30'
              : 'bg-transparent border-2 border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-deep-black'
          }`}
        >
          {ctaText}
        </button>
      </div>
    </div>
  )
}
