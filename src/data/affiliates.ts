/**
 * アフィリエイトリンク一元管理
 *
 * ASPアカウント:
 *   afb (アフィリエイトB): ID attractmag（審査中 2026-03-31申請）
 *   A8.net: メディアID a26032694701
 *   アクセストレード: ID attractmag
 *   Amazonアソシエイト: ストアID attractmag-22
 *
 * ASP調査結果 (2026-03-31):
 *   Pairs → afb / A8.net（ペアーズ公式アフィリエイトページ経由）
 *   with → afb（A8.netからは撤退済み）
 *   Omiai → TCSアフィリエイト（A8/afb/アクセストレードは終了）
 *   cotree → もしもアフィリエイト / A8.net
 *   Unlace → 2024年3月サービス終了 → 削除済み
 *
 * リンク差し替え手順:
 *   1. afb管理画面 → プログラム検索 → 広告主名で検索 → 提携申請
 *   2. 承認後 → 広告リンク作成 → URLをここに貼り付け
 */

export type AffiliateItem = {
  id: string;
  name: string;
  description: string;
  detail?: string;
  url: string;
  tag?: string;
  category: "app" | "book" | "counseling" | "beauty";
  attachmentTypes?: string[]; // おすすめの愛着タイプ
  image?: string;
};

export const affiliateItems: AffiliateItem[] = [
  // ━━━ マッチングアプリ ━━━
  {
    id: "pairs",
    name: "Pairs（ペアーズ）",
    description: "国内最大級の会員数。真剣な出会いを探す人に",
    detail: "会員数2,000万人突破。心理テストや相性診断機能が充実していて、愛着スタイルを理解した上でのマッチングがしやすいの。安全対策もしっかりしてるから、初めてのアプリにもおすすめだよ。",
    // ASP: afb「Pairs」で提携申請 → 承認後にリンク差し替え
    url: "https://www.pairs.lv/",
    tag: "初めてならコレ",
    category: "app",
    attachmentTypes: ["安定型", "不安型"],
  },
  {
    id: "with",
    name: "with（ウィズ）",
    description: "心理学×AIマッチング。相性重視の人に",
    detail: "心理学に基づいた性格診断でマッチングしてくれるアプリ。愛着スタイルを学んだあなたなら、この診断結果をもっと深く理解できるはず。内面重視の出会いを探してるならここ。",
    // ASP: afb「with」で提携申請 → 承認後にリンク差し替え
    url: "https://with.is/",
    tag: "相性重視ならコレ",
    category: "app",
    attachmentTypes: ["不安型", "回避型"],
  },
  {
    id: "omiai",
    name: "Omiai",
    description: "婚活よりの真剣な出会い。将来を見据えたい人に",
    detail: "結婚を意識した真剣な出会いが多いアプリ。プロフィールの充実度が高くて、お互いの価値観を事前に知れるのが強み。安定した関係を築きたい人に向いてるよ。",
    // ASP: TCSアフィリエイト「Omiai」で提携申請（A8/afb/ATは終了）
    url: "https://fb.omiai-jp.com/",
    tag: "真剣婚活ならコレ",
    category: "app",
    attachmentTypes: ["安定型", "回避型"],
  },

  // ━━━ 書籍 ━━━
  {
    id: "book-aichaku",
    name: "愛着障害",
    description: "岡田尊司 著",
    detail: "愛着スタイルの原点を知るならこの一冊。自分の恋愛パターンの「なぜ？」が全部わかる。コラムで紹介してる愛着理論はこの本がベースだよ。",
    url: "https://www.amazon.co.jp/dp/4334036430?tag=attractmag-22",
    tag: "愛着理論の原点",
    category: "book",
  },
  {
    id: "book-toushi",
    name: "異性の心を上手に透視する方法",
    description: "アミール・レバイン 著",
    detail: "愛着理論を恋愛に応用した実用書。「なぜあの人にばかり惹かれるのか」の答えがここに。回避型の彼との付き合い方も具体的に書いてあるよ。",
    url: "https://www.amazon.co.jp/dp/4833450984?tag=attractmag-22",
    tag: "恋愛×愛着の実践書",
    category: "book",
  },
  {
    id: "book-kirawareru",
    name: "嫌われる勇気",
    description: "岸見一郎 / 古賀史健 著",
    detail: "自己肯定感の土台を作るアドラー心理学の名著。「嫌われたくない」から卒業するための考え方が詰まってる。恋愛だけじゃなく人生が変わる一冊。",
    url: "https://www.amazon.co.jp/dp/4478025819?tag=attractmag-22",
    tag: "自己肯定感UP",
    category: "book",
  },
  {
    id: "book-hannou",
    name: "反応しない練習",
    description: "草薙龍瞬 著",
    detail: "「彼の既読が遅いだけで頭がぐるぐるする」夜に、いちばん優しい本。ブッダの思考法で、悩みの正体を「ただの反応」と気づかせてくれるよ。考えすぎる人の処方箋。",
    url: "https://www.amazon.co.jp/dp/4041030404?tag=attractmag-22",
    tag: "考えすぎる人へ",
    category: "book",
  },
  {
    id: "book-self-compassion",
    name: "セルフ・コンパッション［新訳版］",
    description: "クリスティン・ネフ 著",
    detail: "「自分を友達みたいに扱っていい」って、初めて知った夜のための本。自己批判で消耗してる人ほど、この優しさが効く。テキサス大教授の実証研究ベース。",
    url: "https://www.amazon.co.jp/dp/4772418202?tag=attractmag-22",
    tag: "自分を責めがちな人へ",
    category: "book",
  },
  {
    id: "book-adult-children",
    name: "アダルト・チルドレンと家族",
    description: "斎藤学 著",
    detail: "「私の生きづらさに、ようやく名前がついた」って言いたくなる本。親との関係が今の恋愛にどう影響してるか、優しく解きほぐしてくれるよ。",
    url: "https://www.amazon.co.jp/dp/4313860010?tag=attractmag-22",
    tag: "生きづらさに名前を",
    category: "book",
  },
  {
    id: "book-sensai",
    name: "「気がつきすぎて疲れる」が驚くほどなくなる「繊細さん」の本",
    description: "武田友紀 著",
    detail: "「人といると疲れる」「相手の機嫌に振り回される」夜のための一冊。HSP気質の私たちが、もう少し楽に生きるためのヒントが詰まってる。累計60万部のロングセラー。",
    url: "https://www.amazon.co.jp/dp/4864106266?tag=attractmag-22",
    tag: "人疲れする人へ",
    category: "book",
  },
  {
    id: "book-sasshinai",
    name: "察しない男 説明しない女",
    description: "五百田達成 著",
    detail: "「なんでわかってくれないの？」が「あ、こういう脳の違いだったんだ」に変わる本。彼との会話のすれ違いに納得できる、コミュ違いの取扱説明書。",
    url: "https://www.amazon.co.jp/dp/4799315277?tag=attractmag-22",
    tag: "コミュ違いに悩む人へ",
    category: "book",
  },

  // ━━━ カウンセリング ━━━
  {
    id: "cotree",
    name: "cotree（コトリー）",
    description: "オンラインカウンセリング。テキスト相談もOK",
    detail: "自分だけで解決できない恋愛の悩みは、プロに頼るのも大事な選択肢。テキストカウンセリングなら、好きな時間に相談できるよ。臨床心理士・公認心理師が対応してくれるの。",
    // ASP: もしもアフィリエイト or A8.net「cotree」で提携申請
    url: "https://cotree.jp/",
    tag: "テキスト相談OK",
    category: "counseling",
  },
  // Unlace（アンレース）は2024年3月にサービス終了のため削除 (2026-03-31)
];

// カテゴリ別に取得するヘルパー
export function getItemsByCategory(category: AffiliateItem["category"]) {
  return affiliateItems.filter((item) => item.category === category);
}
