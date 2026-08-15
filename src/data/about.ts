import type { Lang } from '../i18n/ui';

const ust = (label: string) =>
  `<a href="https://www.ust.edu.ph/" target="_blank" rel="noopener" class="hover:text-accent underline decoration-1 underline-offset-4 transition-colors">${label}</a>`;

export const story: Record<Lang, string[]> = {
  en: [
    `I grew up in the Philippines, studied IT at the ${ust('University of Santo Tomas')}, and have been building mobile apps since 2019, starting in Manila. In 2022 I moved to Japan to study Japanese in Osaka, worked in Nagoya for a while, then came back to Osaka, where I've been since 2023.`,
    "Outside work I keep a simple, deliberate week: the gym, cooking at home, and days off somewhere I haven't been, sometimes with friends, sometimes solo. I like meeting people from other parts of the world, and I'm usually in the middle of learning something. Mostly I'm just trying to do good work and see as much of the world as I can along the way.",
  ],
  ja: [
    `フィリピンで育ち、${ust('サント・トーマス大学')}でITを学び、2019年にマニラでモバイルアプリ開発のキャリアを始めました。2022年に留学生として来日し、大阪で日本語を学んだあと名古屋で働き、2023年にまた大阪に戻ってきました。`,
    '仕事の外では、シンプルで規則的な毎日を送っています。ジムと自炊、休みの日はまだ行ったことのない場所へ。友達と出かけることもあれば、ひとり旅も好きです。世界のいろいろな場所の人と話すのが好きで、いつも何かしら学んでいます。あとは、良い仕事をしながら、少しずつ世界を見てまわれたらと思っています。',
  ],
};
