import { Question } from "@/types/quiz";

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "パートナーからLINEの返信が遅いとき、どう感じる？",
    answers: [
      { text: "忙しいのかなと思って気にしない", scores: { secure: 3, anxious: 0, avoidant: 1, fearful: 0 } },
      { text: "不安になって何度もスマホを確認する", scores: { secure: 0, anxious: 3, avoidant: 0, fearful: 1 } },
      { text: "こちらも返信を遅らせてバランスを取る", scores: { secure: 0, anxious: 0, avoidant: 3, fearful: 1 } },
      { text: "嫌われたかもと心配するけど聞けない", scores: { secure: 0, anxious: 1, avoidant: 1, fearful: 3 } },
    ],
  },
  {
    id: 2,
    question: "デートの後、あなたはどんな気持ち？",
    answers: [
      { text: "楽しかった！次はいつ会えるかな", scores: { secure: 3, anxious: 1, avoidant: 0, fearful: 0 } },
      { text: "楽しかったけど、彼も楽しんでたか不安", scores: { secure: 0, anxious: 3, avoidant: 0, fearful: 1 } },
      { text: "楽しかったけど、少し1人の時間がほしい", scores: { secure: 0, anxious: 0, avoidant: 3, fearful: 1 } },
      { text: "楽しかった反面、距離が近づきすぎた気がする", scores: { secure: 0, anxious: 0, avoidant: 1, fearful: 3 } },
    ],
  },
  {
    id: 3,
    question: "好きな人との関係で一番大切なことは？",
    answers: [
      { text: "お互いを尊重し合える信頼関係", scores: { secure: 3, anxious: 0, avoidant: 1, fearful: 0 } },
      { text: "いつも一緒にいて愛情を確認し合うこと", scores: { secure: 0, anxious: 3, avoidant: 0, fearful: 0 } },
      { text: "それぞれの自由な時間と空間があること", scores: { secure: 0, anxious: 0, avoidant: 3, fearful: 1 } },
      { text: "愛されたいけど、傷つきたくない", scores: { secure: 0, anxious: 1, avoidant: 0, fearful: 3 } },
    ],
  },
  {
    id: 4,
    question: "ケンカした後、あなたはどうする？",
    answers: [
      { text: "冷静に話し合って解決したい", scores: { secure: 3, anxious: 0, avoidant: 0, fearful: 0 } },
      { text: "仲直りするまで何度も連絡してしまう", scores: { secure: 0, anxious: 3, avoidant: 0, fearful: 1 } },
      { text: "しばらく距離を置いて頭を冷やす", scores: { secure: 1, anxious: 0, avoidant: 3, fearful: 0 } },
      { text: "謝りたいけど拒絶されるのが怖くて動けない", scores: { secure: 0, anxious: 1, avoidant: 0, fearful: 3 } },
    ],
  },
  {
    id: 5,
    question: "彼が他の女性と楽しそうに話していたら？",
    answers: [
      { text: "友達なんだろうなと思える", scores: { secure: 3, anxious: 0, avoidant: 1, fearful: 0 } },
      { text: "嫉妬で胸が苦しくなる", scores: { secure: 0, anxious: 3, avoidant: 0, fearful: 1 } },
      { text: "自分も自分の世界を大事にしようと思う", scores: { secure: 0, anxious: 0, avoidant: 3, fearful: 0 } },
      { text: "やっぱり私じゃダメなのかもと落ち込む", scores: { secure: 0, anxious: 1, avoidant: 0, fearful: 3 } },
    ],
  },
  {
    id: 6,
    question: "「好き」と言葉で伝えることについて",
    answers: [
      { text: "自然に伝えられる。相手にも伝えてほしい", scores: { secure: 3, anxious: 1, avoidant: 0, fearful: 0 } },
      { text: "自分からたくさん伝えるけど、相手からの言葉が足りないと不安", scores: { secure: 0, anxious: 3, avoidant: 0, fearful: 0 } },
      { text: "言葉にするのが照れくさい。態度で示したい", scores: { secure: 0, anxious: 0, avoidant: 3, fearful: 1 } },
      { text: "伝えたい気持ちはあるのに、怖くて言えない", scores: { secure: 0, anxious: 0, avoidant: 1, fearful: 3 } },
    ],
  },
  {
    id: 7,
    question: "恋愛において、過去の経験はどう影響してる？",
    answers: [
      { text: "いい経験も悪い経験も成長の糧になった", scores: { secure: 3, anxious: 0, avoidant: 0, fearful: 0 } },
      { text: "過去に振られた経験が今も尾を引いている", scores: { secure: 0, anxious: 3, avoidant: 0, fearful: 1 } },
      { text: "深入りすると傷つくと学んだから慎重", scores: { secure: 0, anxious: 0, avoidant: 3, fearful: 1 } },
      { text: "好きになることそのものが怖い", scores: { secure: 0, anxious: 0, avoidant: 1, fearful: 3 } },
    ],
  },
  {
    id: 8,
    question: "理想のデートの頻度は？",
    answers: [
      { text: "週1〜2回、お互いの予定に合わせて", scores: { secure: 3, anxious: 0, avoidant: 0, fearful: 0 } },
      { text: "できれば毎日でも会いたい", scores: { secure: 0, anxious: 3, avoidant: 0, fearful: 0 } },
      { text: "月2〜3回くらいがちょうどいい", scores: { secure: 0, anxious: 0, avoidant: 3, fearful: 1 } },
      { text: "会いたいけど、会うと緊張するから悩む", scores: { secure: 0, anxious: 0, avoidant: 1, fearful: 3 } },
    ],
  },
  {
    id: 9,
    question: "パートナーに弱みを見せることについて",
    answers: [
      { text: "信頼している人には自然に見せられる", scores: { secure: 3, anxious: 0, avoidant: 0, fearful: 0 } },
      { text: "見せすぎてしまって後から後悔することがある", scores: { secure: 0, anxious: 3, avoidant: 0, fearful: 1 } },
      { text: "弱みを見せるのは苦手。1人で解決したい", scores: { secure: 0, anxious: 0, avoidant: 3, fearful: 0 } },
      { text: "見せたいけど、引かれるのが怖い", scores: { secure: 0, anxious: 1, avoidant: 0, fearful: 3 } },
    ],
  },
  {
    id: 10,
    question: "もし今の恋愛を一言で表すなら？",
    answers: [
      { text: "安心できる居場所", scores: { secure: 3, anxious: 0, avoidant: 0, fearful: 0 } },
      { text: "不安と幸せのジェットコースター", scores: { secure: 0, anxious: 3, avoidant: 0, fearful: 1 } },
      { text: "自由でいたい気持ちとの戦い", scores: { secure: 0, anxious: 0, avoidant: 3, fearful: 0 } },
      { text: "近づきたいけど近づけない矛盾", scores: { secure: 0, anxious: 0, avoidant: 1, fearful: 3 } },
    ],
  },
];
