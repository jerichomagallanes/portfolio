import type { Experience } from './experience';

export const projects: Experience[] = [
  {
    company: 'Trainr',
    url: 'https://jerichomagallanes.github.io/Trainr/',
    location: { en: 'Outside work', ja: '仕事の外で' },
    role: { en: 'Personal project', ja: '個人開発' },
    period: { en: '2025 – now', ja: '2025年〜現在' },
    summary: {
      en: 'A workout planner for iOS and Android. It builds a week of training from your goal, equipment and schedule, adjusts a session on the day when time, equipment or an injury gets in the way, and progresses the next week from what you actually logged. Everything runs on the device, including a small language model that reads the free-text "Adjust today" note, so no training data leaves the phone. I build and maintain both native apps and the release pipeline: GitHub Actions builds once and promotes the same binary from internal testing to the stores, with subscriptions through RevenueCat.',
      ja: 'iOS/Android向けのワークアウトプランナー。目標・手持ちの器具・予定から1週間のメニューを組み、時間や器具、体の不調で予定どおりにいかない日はその場で調整し、実際に記録した内容から翌週を進めます。プランの生成も、「今日を調整」の自由記述を読む小さな言語モデルも端末上で動き、トレーニングのデータは外に出ません。両OSのネイティブアプリと、GitHub Actionsで一度ビルドした同じバイナリを内部テストからストアへ昇格させるリリースパイプライン（サブスクリプションはRevenueCat）の開発・運用を担当しています。',
    },
    credit: {
      en: '1.0 visual design in collaboration with a friend',
      ja: '1.0のビジュアルデザインは友人と共同で制作',
    },
    stack: [
      'Kotlin',
      'Jetpack Compose',
      'Room',
      'Swift',
      'SwiftUI',
      'SwiftData',
      'llama.cpp',
      'RevenueCat',
      'GitHub Actions',
    ],
    apps: [
      {
        name: 'Trainr: Workout Planner',
        icon: '/apps/trainr.png',
        appStore: 'https://apps.apple.com/jp/app/trainr-workout-planner/id6809207852',
        playStore: 'https://play.google.com/store/apps/details?id=com.jericx.trainr',
      },
    ],
  },
];
