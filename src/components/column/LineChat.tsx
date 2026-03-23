interface Message {
  sender: "me" | "him";
  text: string;
  read?: boolean;
}

interface LineChatProps {
  label?: string;
  messages: Message[];
}

export function LineChat({ label, messages }: LineChatProps) {
  return (
    <div className="my-6">
      {label && (
        <p className="text-sm font-bold text-charcoal/60 mb-2 text-center">{label}</p>
      )}
      <div className="bg-[#8CAAB9] rounded-2xl p-4 space-y-3 max-w-sm mx-auto shadow-md">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                msg.sender === "me"
                  ? "bg-[#5BCB5B] text-white rounded-br-sm"
                  : "bg-white text-charcoal rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface LineChatCompareProps {
  good: { label: string; messages: Message[] };
  bad: { label: string; messages: Message[] };
}

export function LineChatCompare({ good, bad }: LineChatCompareProps) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p className="text-center text-sm font-bold text-pink-dark mb-2">⭕ {good.label}</p>
        <div className="bg-[#8CAAB9] rounded-2xl p-4 space-y-3 shadow-md">
          {good.messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                msg.sender === "me" ? "bg-[#5BCB5B] text-white rounded-br-sm" : "bg-white text-charcoal rounded-bl-sm"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-center text-sm font-bold text-charcoal/40 mb-2">❌ {bad.label}</p>
        <div className="bg-[#8CAAB9] rounded-2xl p-4 space-y-3 shadow-md opacity-80">
          {bad.messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                msg.sender === "me" ? "bg-[#5BCB5B] text-white rounded-br-sm" : "bg-white text-charcoal rounded-bl-sm"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
