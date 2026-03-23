const types = [
  {
    name: "安定型",
    emoji: "💚",
    color: "from-green-100 to-emerald-50 border-green-300",
    desc: "自分も相手も信頼できる",
    pct: "約50%",
  },
  {
    name: "不安型",
    emoji: "💗",
    color: "from-pink-100 to-rose-50 border-pink-300",
    desc: "愛情を確認したくなる",
    pct: "約20%",
  },
  {
    name: "回避型",
    emoji: "💙",
    color: "from-blue-100 to-sky-50 border-blue-300",
    desc: "親密さから距離を取りたくなる",
    pct: "約25%",
  },
  {
    name: "恐れ型",
    emoji: "💜",
    color: "from-purple-100 to-violet-50 border-purple-300",
    desc: "近づきたいけど怖い",
    pct: "約5%",
  },
];

export function AttachmentTypeCards() {
  return (
    <div className="my-8 grid grid-cols-2 gap-3">
      {types.map((type) => (
        <div
          key={type.name}
          className={`bg-gradient-to-br ${type.color} border rounded-xl p-4 text-center`}
        >
          <p className="text-2xl mb-1">{type.emoji}</p>
          <p className="font-bold text-charcoal text-sm">{type.name}</p>
          <p className="text-xs text-charcoal/60 mt-1">{type.desc}</p>
          <p className="text-xs text-charcoal/40 mt-1">{type.pct}</p>
        </div>
      ))}
    </div>
  );
}
