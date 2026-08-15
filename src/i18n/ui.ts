export type Lang = 'en' | 'ja';

export const ui = {
  en: {
    meta: {
      title: 'Jericho Isaac Magallanes',
      description:
        'Jericho Isaac Magallanes, a Filipino software engineer based in Osaka, building native apps for iOS and Android.',
    },
    nav: {
      about: 'About',
      work: 'Work',
      contact: 'Contact',
      switchLabel: '日本語',
      switchHref: '/ja/',
      themeLabel: 'Switch theme',
    },
    hero: {
      place: 'OSAKA',
      tagline:
        "I'm a Filipino software engineer based in Osaka, building native apps for iOS and Android.",
      ctaKnow: 'Get to know me ↓',
      ctaTouch: 'Get in touch',
    },
    about: {
      eyebrow: 'About',
      heading: "Hi, I'm Jericho!",
    },
    snapshots: {
      eyebrow: 'Snapshots',
      prev: 'Previous photos',
      next: 'Next photos',
      goTo: 'Go to photo set',
      view: 'View photo',
      close: 'Close',
    },
    work: {
      eyebrow: 'Work',
      heading: 'Experience',
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Say hello!',
      body: "My inbox is open. Whether it's work, a question, or just to say hi, I'll get back to you.",
    },
  },
  ja: {
    meta: {
      title: 'Jericho Isaac Magallanes',
      description:
        '大阪在住のフィリピン人ソフトウェアエンジニア、Jericho Isaac Magallanesのポートフォリオ。',
    },
    nav: {
      about: '自己紹介',
      work: '経歴',
      contact: '連絡先',
      switchLabel: 'English',
      switchHref: '/',
      themeLabel: 'テーマを切り替える',
    },
    hero: {
      place: '大阪',
      tagline:
        '大阪を拠点に、iOSとAndroidのネイティブアプリを開発しているフィリピン出身のソフトウェアエンジニアです。',
      ctaKnow: '自己紹介へ ↓',
      ctaTouch: '連絡する',
    },
    about: {
      eyebrow: '自己紹介',
      heading: 'はじめまして、Jerichoです！',
    },
    snapshots: {
      eyebrow: 'スナップ',
      prev: '前の写真へ',
      next: '次の写真へ',
      goTo: '写真セットへ移動',
      view: '写真を見る',
      close: '閉じる',
    },
    work: {
      eyebrow: '経歴',
      heading: 'これまでの仕事',
    },
    contact: {
      eyebrow: '連絡先',
      heading: 'お気軽にどうぞ！',
      body: 'メールはいつでも歓迎です。お仕事の話でも、ちょっとした質問でも、あいさつだけでも、ちゃんと返信します。',
    },
  },
} as const;
