/**
 * アフィリエイトリンク一元管理
 * リンクURLは承認後に実際のアフィリエイトリンクに差し替える
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

  // ━━━ カウンセリング ━━━
  {
    id: "cotree",
    name: "cotree（コトリー）",
    description: "オンラインカウンセリング。テキスト相談もOK",
    detail: "自分だけで解決できない恋愛の悩みは、プロに頼るのも大事な選択肢。テキストカウンセリングなら、好きな時間に相談できるよ。臨床心理士・公認心理師が対応してくれるの。",
    url: "https://cotree.jp/",
    tag: "テキスト相談OK",
    category: "counseling",
  },
  {
    id: "unlace",
    name: "Unlace（アンレース）",
    description: "24時間チャットカウンセリング。定額制で安心",
    detail: "月額定額でいつでもチャット相談できるサービス。恋愛の悩みって夜中にふっと重くなるよね。そんな時に24時間相談できるのは心強いよ。",
    url: "https://www.unlace.net/",
    tag: "24時間定額制",
    category: "counseling",
  },
];

// カテゴリ別に取得するヘルパー
export function getItemsByCategory(category: AffiliateItem["category"]) {
  return affiliateItems.filter((item) => item.category === category);
}
