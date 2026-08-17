import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface AppLink {
  /** Store display name of the app */
  name: string;
  /** Shown when the store name differs from what it was called during my time on it */
  note?: Localized;
  icon: string;
  appStore?: string;
  playStore?: string;
}

export interface Experience {
  company: string;
  url: string;
  location: Localized;
  role: Localized;
  period: Localized;
  summary: Localized;
  stack: string[];
  apps?: AppLink[];
}

export const experience: Experience[] = [
  {
    company: 'Spacely',
    url: 'https://corp.spacely.co.jp/',
    location: { en: 'Tokyo', ja: '東京' },
    role: { en: 'Software Engineer', ja: 'ソフトウェアエンジニア' },
    period: { en: '2023 – now', ja: '2023年〜現在' },
    summary: {
      en: "Native iOS and Android development for Spacely's spatial-data platform, which real estate teams use to capture, manage, and edit 360° VR content of buildings. Currently focused on iOS. On Android, I migrated legacy Epoxy and XML views to Jetpack Compose and built media features like 360° video playback for the Spacely Photo Task app.",
      ja: '不動産業界向けに建物の360° VRコンテンツを撮影・管理・編集できる、Spacelyの空間データプラットフォームでiOSとAndroidのネイティブアプリを開発しています。現在は主にiOSを担当。Androidでは、Spacely Photo TaskアプリのEpoxyとXMLで書かれた既存ビューのJetpack Compose移行や、360°動画再生などのメディア機能の実装を行いました。',
    },
    stack: ['Swift', 'Kotlin', 'Jetpack Compose', 'Coroutines & Flow', 'Realm', 'Retrofit'],
    apps: [
      {
        name: 'Spacely Photo Task',
        icon: '/apps/spacely-photo-task.png',
        appStore: 'https://apps.apple.com/jp/app/spacely-photo-task/id1523973976',
        playStore: 'https://play.google.com/store/apps/details?id=jp.co.spacely.phototask2',
      },
    ],
  },
  {
    company: 'Galileo',
    url: 'https://www.gally-tech.com/',
    location: { en: 'Nagoya, on-site at Toyota', ja: '名古屋（トヨタ上郷工場に常駐）' },
    role: { en: 'System Developer', ja: 'システムエンジニア' },
    period: { en: '2022 – 2023', ja: '2022〜2023年' },
    summary: {
      en: "Full-stack work on Freedom, Toyota's autonomous robotics platform, at the Kamigo Plant. Across four parallel projects, I was the frontend developer for two of its web systems, built the Freedom Push app that showed live robot status on Android, wrote Python and Flask APIs with JWT auth, and worked on migrating the Android codebase to MVVM and Clean Architecture.",
      ja: 'トヨタの自律ロボットプラットフォーム「Freedom」の開発に、上郷工場でフルスタックとして携わりました。4つの並行プロジェクトの中で、2つのWebシステムのフロントエンドを担当したほか、ロボットの稼働状況をリアルタイムに通知するAndroidアプリ「Freedom Push」の開発、PythonとFlaskによるJWT認証付きAPIの実装、AndroidコードベースのMVVM・クリーンアーキテクチャへの移行にも取り組みました。',
    },
    stack: ['Kotlin', 'Python', 'Flask', 'MVVM & Clean Architecture', 'Koin', 'Room'],
  },
  {
    company: 'TeraSystem',
    url: 'http://www.terasystem.com/',
    location: { en: 'Manila', ja: 'マニラ' },
    role: {
      en: 'Trainee to Analyst Programmer',
      ja: 'トレイニー → アナリストプログラマー',
    },
    period: { en: '2019 – 2022', ja: '2019〜2022年' },
    summary: {
      en: 'Native Android mobile banking apps for Philippine banks including LANDBANK, Overseas Filipino Bank, and RCBC. I built reusable Kotlin network layers, converted a legacy Java project to Kotlin, reviewed peer code, and supported releases to the Play Store.',
      ja: 'LANDBANK、Overseas Filipino Bank、RCBCなど、フィリピンの銀行向けAndroidモバイルバンキングアプリを開発しました。Kotlinによる再利用可能な通信レイヤーの構築、レガシーJavaプロジェクトのKotlin移行、コードレビュー、Google Playへのリリース対応を担当しました。',
    },
    stack: ['Kotlin', 'MVVM', 'Retrofit', 'Moshi', 'Firebase Crashlytics'],
    apps: [
      {
        name: 'LANDBANK Mobile Banking',
        icon: '/apps/landbank.png',
        appStore: 'https://apps.apple.com/ph/app/landbank-mobile-banking/id950232162',
        playStore: 'https://play.google.com/store/apps/details?id=com.landbank.mobilebanking',
      },
      {
        name: 'OFBank Mobile Banking',
        icon: '/apps/ofbank.png',
        appStore: 'https://apps.apple.com/ph/app/ofbank-mobile-banking/id1396335444',
        playStore:
          'https://play.google.com/store/apps/details?id=ph.gov.overseasfilipinobank.mobilebanking',
      },
      {
        name: 'RCBC Pulz',
        note: { en: 'formerly RCBC Mobile', ja: '旧RCBC Mobile' },
        icon: '/apps/rcbc.png',
        appStore: 'https://apps.apple.com/ph/app/rcbc-pulz/id1445403196',
        playStore: 'https://play.google.com/store/apps/details?id=com.rcbc.pulz',
      },
    ],
  },
];
