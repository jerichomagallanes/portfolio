import type { Lang } from '../i18n/ui';

export interface Photo {
  src: string;
  alt: Record<Lang, string>;
  caption: Record<Lang, string>;
  need: string;
}

export const portrait: Photo = {
  src: '/photos/5d425ab6.jpg',
  alt: {
    en: 'Jericho standing in front of red autumn leaves by a river in Osaka',
    ja: '大阪の川沿い、紅葉の前に立つJericho',
  },
  caption: { en: '', ja: '' },
  need: 'Portrait of you. Chest-up, daylight, simple background',
};

export const snapshots: Photo[] = [
  {
    src: '/photos/afcc9e4e.jpg',
    alt: {
      en: 'A hiker on a rocky ridge above a cloud-filled valley in the Nagano mountains',
      ja: '長野の山、雲のかかった谷を望む尾根を歩く登山者',
    },
    caption: { en: 'Nagano, 2026', ja: '長野、2026' },
    need: 'Travel. A favorite view from a trip',
  },
  {
    src: '/photos/99d74ff0.jpg',
    alt: {
      en: 'Sitting on the rocks by the moat with Osaka Castle behind',
      ja: '大阪城を背に、堀のそばの岩に座っているところ',
    },
    caption: { en: 'Osaka Castle, 2026', ja: '大阪城、2026' },
    need: 'Osaka. A street or neighborhood you like',
  },
  {
    src: '/photos/cc1ac073.jpg',
    alt: {
      en: 'Home-cooked kare-kare: fresh ingredients laid out, and the finished plate with crispy pork and vegetables',
      ja: '自炊した料理：並べた食材と、豚肉と野菜を盛り付けた一皿',
    },
    caption: { en: 'From my kitchen', ja: '自炊ごはん' },
    need: 'Food. Something you cooked',
  },
  {
    src: '/photos/31702558.jpg',
    alt: {
      en: 'The sea framed by the mouth of a coastal cave in Kanagawa',
      ja: '神奈川、海食洞の入り口から見える海',
    },
    caption: { en: 'Kanagawa, 2026', ja: '神奈川、2026' },
    need: 'Day trip. A train, coast, or trail shot',
  },
];
