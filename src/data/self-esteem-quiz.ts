export type SelfEsteemType = "confident" | "hardworker" | "modest" | "recovering";

export interface SEScores {
  confident: number;
  hardworker: number;
  modest: number;
  recovering: number;
}

export interface SEAnswer {
  text: string;
  scores: SEScores;
}

export interface SEQuestion {
  id: number;
  question: string;
  answers: SEAnswer[];
}

export const selfEsteemQuestions: SEQuestion[] = [
  {
    id: 1,
    question: "朝、鏡を見た時にどう感じる？",
    answers: [
      { text: "今日もいい感じ！と思える", scores: { confident: 3, hardworker: 1, modest: 0, recovering: 0 } },
      { text: "身だしなみを整えてから自信が出る", scores: { confident: 1, hardworker: 3, modest: 1, recovering: 0 } },
      { text: "あまり鏡を見たくない日が多い", scores: { confident: 0, hardworker: 1, modest: 2, recovering: 2 } },
      { text: "自分の顔を見ると落ち込むことがある", scores: { confident: 0, hardworker: 0, modest: 1, recovering: 3 } },
    ],
  },
  {
    id: 2,
    question: "友達に「すごいね！」と褒められたら？",
    answers: [
      { text: "素直に「ありがとう！」と喜べる", scores: { confident: 3, hardworker: 1, modest: 0, recovering: 0 } },
      { text: "嬉しいけど「まだまだ」と思う", scores: { confident: 1, hardworker: 3, modest: 1, recovering: 0 } },
      { text: "「そんなことないよ」と否定してしまう", scores: { confident: 0, hardworker: 1, modest: 3, recovering: 1 } },
      { text: "お世辞だと思ってしまう", scores: { confident: 0, hardworker: 0, modest: 1, recovering: 3 } },
    ],
  },
  {
    id: 3,
    question: "仕事や学校でミスをした時は？",
    answers: [
      { text: "次はうまくやろうと切り替えられる", scores: { confident: 3, hardworker: 1, modest: 0, recovering: 0 } },
      { text: "悔しいけど、倍の努力で取り返す", scores: { confident: 1, hardworker: 3, modest: 0, recovering: 0 } },
      { text: "周りにどう思われたか気になってしまう", scores: { confident: 0, hardworker: 1, modest: 3, recovering: 1 } },
      { text: "自分はダメだと何日も引きずる", scores: { confident: 0, hardworker: 0, modest: 1, recovering: 3 } },
    ],
  },
  {
    id: 4,
    question: "SNSで友達の充実した投稿を見たら？",
    answers: [
      { text: "「楽しそう！」と素直に思える", scores: { confident: 3, hardworker: 1, modest: 0, recovering: 0 } },
      { text: "刺激を受けて自分も頑張ろうと思う", scores: { confident: 1, hardworker: 3, modest: 0, recovering: 0 } },
      { text: "自分と比べて少し落ち込む", scores: { confident: 0, hardworker: 1, modest: 3, recovering: 1 } },
      { text: "見るのがつらくてSNSを閉じる", scores: { confident: 0, hardworker: 0, modest: 1, recovering: 3 } },
    ],
  },
  {
    id: 5,
    question: "新しいことに挑戦する時は？",
    answers: [
      { text: "ワクワクする！やってみよう", scores: { confident: 3, hardworker: 1, modest: 0, recovering: 0 } },
      { text: "不安だけど準備を万全にして臨む", scores: { confident: 1, hardworker: 3, modest: 1, recovering: 0 } },
      { text: "失敗が怖くてなかなか一歩が出ない", scores: { confident: 0, hardworker: 1, modest: 2, recovering: 2 } },
      { text: "どうせ自分にはできないと思う", scores: { confident: 0, hardworker: 0, modest: 1, recovering: 3 } },
    ],
  },
  {
    id: 6,
    question: "自分の意見を聞かれた時は？",
    answers: [
      { text: "自信を持って伝えられる", scores: { confident: 3, hardworker: 1, modest: 0, recovering: 0 } },
      { text: "しっかり考えてから慎重に伝える", scores: { confident: 1, hardworker: 3, modest: 1, recovering: 0 } },
      { text: "周りに合わせてしまうことが多い", scores: { confident: 0, hardworker: 0, modest: 3, recovering: 1 } },
      { text: "自分の意見に価値がないと感じる", scores: { confident: 0, hardworker: 0, modest: 1, recovering: 3 } },
    ],
  },
  {
    id: 7,
    question: "1人の時間はどう過ごす？",
    answers: [
      { text: "好きなことをして充実した時間を過ごす", scores: { confident: 3, hardworker: 1, modest: 0, recovering: 0 } },
      { text: "スキルアップや勉強に使う", scores: { confident: 1, hardworker: 3, modest: 0, recovering: 0 } },
      { text: "何をしていいかわからず不安になる", scores: { confident: 0, hardworker: 1, modest: 2, recovering: 2 } },
      { text: "ネガティブなことを考えてしまう", scores: { confident: 0, hardworker: 0, modest: 1, recovering: 3 } },
    ],
  },
  {
    id: 8,
    question: "「あなたの好きなところは？」と聞かれたら？",
    answers: [
      { text: "いくつか思い浮かぶ", scores: { confident: 3, hardworker: 1, modest: 0, recovering: 0 } },
      { text: "努力してきたことなら言える", scores: { confident: 1, hardworker: 3, modest: 0, recovering: 0 } },
      { text: "うーん…と考え込んでしまう", scores: { confident: 0, hardworker: 1, modest: 3, recovering: 1 } },
      { text: "正直、何も思い浮かばない", scores: { confident: 0, hardworker: 0, modest: 1, recovering: 3 } },
    ],
  },
  {
    id: 9,
    question: "誰かに断られた時は？",
    answers: [
      { text: "仕方ないなと思って次に進める", scores: { confident: 3, hardworker: 1, modest: 0, recovering: 0 } },
      { text: "理由を考えて改善しようとする", scores: { confident: 1, hardworker: 3, modest: 0, recovering: 0 } },
      { text: "嫌われたのかなと気になる", scores: { confident: 0, hardworker: 1, modest: 3, recovering: 1 } },
      { text: "自分に価値がないからだと思う", scores: { confident: 0, hardworker: 0, modest: 1, recovering: 3 } },
    ],
  },
  {
    id: 10,
    question: "5年後の自分をイメージすると？",
    answers: [
      { text: "今より成長した自分が楽しみ", scores: { confident: 3, hardworker: 1, modest: 0, recovering: 0 } },
      { text: "目標に向かって着実に進んでいたい", scores: { confident: 1, hardworker: 3, modest: 0, recovering: 0 } },
      { text: "うまくいってるか不安", scores: { confident: 0, hardworker: 1, modest: 3, recovering: 1 } },
      { text: "あまり想像したくない", scores: { confident: 0, hardworker: 0, modest: 1, recovering: 3 } },
    ],
  },
];

export interface SelfEsteemTypeInfo {
  type: SelfEsteemType;
  name: string;
  emoji: string;
  color: string;
  summary: string;
  traits: string[];
  advice: string[];
}

export const selfEsteemTypes: Record<SelfEsteemType, SelfEsteemTypeInfo> = {
  confident: {
    type: "confident",
    name: "🌟 自信満々タイプ",
    emoji: "🌟",
    color: "from-yellow-100 to-amber-50",
    summary: "自己肯定感が安定して高い状態。自分を信頼でき、他人の評価に左右されにくい。",
    traits: [
      "褒められると素直に喜べる",
      "失敗しても自分を責めすぎない",
      "新しいことに積極的にチャレンジできる",
      "自分の意見を堂々と言える",
    ],
    advice: [
      "今の自分を大切にしつつ、周りの人にもその温かさを分けてあげて",
      "自信があるからこそ、謙虚さも忘れずに",
      "あなたの前向きなエネルギーは、周りの人にも良い影響を与えています",
    ],
  },
  hardworker: {
    type: "hardworker",
    name: "🌸 がんばり屋タイプ",
    emoji: "🌸",
    color: "from-pink-100 to-rose-50",
    summary: "努力で自己肯定感を維持しているタイプ。頑張ることで自信を保っているが、休むことが苦手かも。",
    traits: [
      "「もっと頑張らなきゃ」が口癖",
      "成果を出すと安心できる",
      "休んでいると罪悪感を感じる",
      "完璧主義な一面がある",
    ],
    advice: [
      "頑張らない自分にも価値がある。それを少しずつ受け入れてみて",
      "「十分やってるよ」と自分に声をかける習慣を作ろう",
      "努力はあなたの素晴らしい武器。でも、それだけがあなたの価値じゃない",
    ],
  },
  modest: {
    type: "modest",
    name: "🌙 控えめタイプ",
    emoji: "🌙",
    color: "from-blue-100 to-indigo-50",
    summary: "他人の評価に左右されやすく、自分の良さに気づきにくいタイプ。でも、優しさと繊細さは大きな強み。",
    traits: [
      "褒められると否定してしまう",
      "周りの目が気になりやすい",
      "自分より他人を優先しがち",
      "比較して落ち込むことがある",
    ],
    advice: [
      "毎晩寝る前に「今日の自分の良かったところ」を1つだけ見つけてみて",
      "「ありがとう」と言われたら、笑顔で受け取る練習を",
      "あなたの繊細さは、人の痛みがわかるという素晴らしい能力です",
    ],
  },
  recovering: {
    type: "recovering",
    name: "🌧 回復途中タイプ",
    emoji: "🌧",
    color: "from-purple-100 to-violet-50",
    summary: "今は少しつらい時期かもしれない。でも、この診断を受けたこと自体が、変わりたいという証拠。",
    traits: [
      "自分を好きと言うことに抵抗がある",
      "将来に対して漠然とした不安がある",
      "「自分なんて」と思うことがある",
      "でも、心のどこかで変わりたいと思っている",
    ],
    advice: [
      "まず、今日この診断を受けた自分を褒めてあげて。それだけで十分すごいこと",
      "小さなことから始めよう。好きな飲み物を買う。それだけでいい",
      "つらい時は無理しないで。専門家に相談することも、強さの一つ",
      "あなたは今、回復の途中にいる。雨はいつか止むから",
    ],
  },
};
