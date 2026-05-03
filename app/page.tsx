export default function Home() {
  const faqs = [
    {
      q: 'How does it connect to my Shopify store?',
      a: 'You install a simple webhook in your Shopify admin. We receive cart and checkout events in real time — no app store approval needed.'
    },
    {
      q: 'What counts as an abandoned high-value item?',
      a: 'Any cart containing a product above your configured price threshold (default $100) that has not converted after 1 hour triggers an alert and recovery email.'
    },
    {
      q: 'Can I customize the recovery emails?',
      a: 'Yes. After subscribing you get access to the dashboard where you can edit subject lines, body copy, timing, and discount codes sent via Resend.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Shopify Recovery Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Get notified when customers abandon{' '}
          <span className="text-[#58a6ff]">high-value items</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Tracks when shoppers add expensive products to cart but never check out. Fires targeted recovery emails automatically — so you win back revenue while you sleep.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start recovering carts — $19/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No Shopify app store required.</p>

        {/* Social proof strip */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <p className="text-2xl font-bold text-white">68%</p>
            <p className="text-xs text-[#8b949e] mt-1">avg cart abandonment rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">$18</p>
            <p className="text-xs text-[#8b949e] mt-1">avg revenue recovered per alert</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">&lt;5 min</p>
            <p className="text-xs text-[#8b949e] mt-1">setup time</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-8">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited Shopify webhooks',
              'Automated email recovery via Resend',
              'Configurable price threshold',
              'Campaign performance dashboard',
              'Custom discount codes in emails',
              'Email support'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} Shopify Abandoned Product Alerter. All rights reserved.
      </footer>
    </main>
  )
}
