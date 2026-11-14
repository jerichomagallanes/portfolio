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
    src: '/photos/39a10859.jpg',
    alt: {
      en: 'A big three-ball snowman grinning in the snow at Tomamu, with the resort towers behind it',
      ja: 'トマムの雪原でにっこり笑う大きな雪だるま、後ろにはリゾートのタワー',
    },
    caption: { en: 'Tomamu, 2023', ja: 'トマム、2023' },
    need: 'Winter. A snow trip',
  },
  {
    src: '/photos/4354c2ae.jpg',
    alt: {
      en: 'The carved wooden spires of the Sanctuary of Truth in Pattaya, framed by trees',
      ja: '木々の間から見える、パタヤのサンクチュアリ・オブ・トゥルースの木彫りの尖塔',
    },
    caption: { en: 'Pattaya, 2024', ja: 'パタヤ、2024' },
    need: 'Travel. A favorite view from a trip',
  },
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
    src: '/photos/3626f94d.jpg',
    alt: {
      en: 'Jericho in a navy hanbok smiling in the courtyard of Gyeongbokgung Palace in Seoul',
      ja: 'ソウルの景福宮の庭で、紺色の韓服を着て笑うJericho',
    },
    caption: { en: 'Seoul, 2026', ja: 'ソウル、2026' },
    need: 'Travel. A city you visited',
  },
];
