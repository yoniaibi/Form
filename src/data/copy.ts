export const COPY = {
  nav: {
    wordmark: 'FORM.',
    links: ['The System', 'The Science', 'Journal'] as string[],
    cta: 'Join the waitlist',
  },
  hero: {
    eyebrow: 'FACE PERFORMANCE SYSTEM',
    headline: 'Not skincare.\nNot makeup.\nThe system that does both.',
    sub: 'Results today. Transformation by week six.',
    cta_primary: 'Join the waitlist',
    cta_secondary: 'See the system',
    disclaimer: 'Free to join. Early access + founding-member pricing.',
  },
  waitlist: {
    headline: 'Get early access.',
    sub: 'Join the waitlist. Founding members get £5 off for life.',
    placeholder: 'Your email address',
    button: 'Join now',
    success: "You're on the list. We'll be in touch.",
    count_prefix: 'Join',
  },
  system: {
    eyebrow: 'THE SYSTEM',
    headline: 'Four products. One routine. Under 60 seconds.',
    sub:
      'Treat overnight. Reset in the morning. Hold all day. ' +
      'The subscription that ships exactly 30 days of the system.',
  },
  routine: {
    eyebrow: 'THE ROUTINE',
    headline: 'Night, morning, pocket.',
    sub: 'One loop. Four steps. The only protocol your face needs.',
  },
  science: {
    eyebrow: 'THE SCIENCE',
    headline: "Products that feel like they're working.\nBecause they are.",
    sub:
      'Every product in the FORM system has a calibrated sensation — ' +
      'a signal that something is happening. Not irritation. Activation.',
  },
  pricing: {
    eyebrow: 'PRICING',
    headline: '£34.99 / month.',
    sub: 'One kit. Four products. Exactly 30 days. Free shipping.',
    sub2: 'Cancel anytime. No contracts. Founding member rate locked for life.',
    oneoff: 'Or buy once at £39.99',
  },
  compare: {
    eyebrow: 'WHY FORM',
    headline: 'Nobody else does both.',
  },
  footer: {
    rp: 'Responsible Person: [RP NAME], [ADDRESS], United Kingdom',
    legal:
      'All products comply with UK Cosmetics Regulation (GB). ' +
      'Batch codes and safety assessments available on request.',
    links: ['The System', 'The Science', 'Journal', 'Shipping', 'Returns', 'Contact'] as string[],
  },
} as const;
