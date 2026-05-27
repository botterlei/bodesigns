export type PressItem = {
  source: string
  title: string
  href: string
  year?: string
  context?: string
}

export const press: PressItem[] = [
  {
    source: 'Businesswire',
    title: 'Verifone Carbon wins 2017 Design Award',
    href: 'https://www.businesswire.com/news/home/20170301005843/en/Verifone-Carbon-Wins-2017-DESIGN-AWARD',
    year: '2017',
    context: 'Verifone',
  },
  {
    source: 'TechCrunch',
    title:
      'American Express backs Mexican FinTech startup Clip as emerging markets warm to financial startups',
    href: 'https://techcrunch.com/2015/12/07/american-express-backs-mexican-fintech-startup-clip-as-emerging-markets-warm-to-financial-startups/',
    year: '2015',
    context: 'Clip',
  },
  {
    source: 'SlashGear',
    title: 'VISA president: "We’ve moved beyond NFC"',
    href: 'https://www.slashgear.com/visa-president-weve-moved-beyond-nfc-09227379/',
    year: '2013',
    context: 'VISA Checkout',
  },
  {
    source: 'TechCrunch',
    title: 'Facebook taps PlaySpan’s UltimatePay as payment option for credits',
    href: 'https://techcrunch.com/2010/10/13/facebook-taps-playspans-ultimatepay-as-payment-option-for-credits/',
    year: '2010',
    context: 'PlaySpan',
  },
  {
    source: 'TechCrunch',
    title: 'VISA buys virtual goods monetization platform PlaySpan for $190M in cash',
    href: 'https://techcrunch.com/2011/02/09/visa-buys-virtual-goods-monetization-platform-playspan-for-190-million-in-cash/',
    year: '2011',
    context: 'PlaySpan acquisition',
  },
  {
    source: 'TechCrunch',
    title: 'FanSnap is the new Kayak for event ticket searches',
    href: 'https://techcrunch.com/2009/03/13/fansnap-is-the-new-kayak-for-event-ticket-searches/',
    year: '2009',
    context: 'FanSnap',
  },
]
