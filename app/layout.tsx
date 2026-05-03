import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify Abandoned Product Alerter — Recover High-Value Carts',
  description: 'Get notified when customers abandon high-value items. Automated recovery campaigns for Shopify stores with AOV over $100.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c669cf65-78b7-4e3c-94f7-343bc70d8c9f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
