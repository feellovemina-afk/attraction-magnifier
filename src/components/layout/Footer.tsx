import Link from "next/link";
import { siteConfig } from "@/data/site-config";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.94a8.2 8.2 0 0 0 4.76 1.52V7.01a4.85 4.85 0 0 1-1-.32z" />
    </svg>
  );
}

function NoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm1.5 4v2h11V7h-11zm0 4v2h8v-2h-8zm0 4v2h5v-2h-5z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "TikTok",
    href: siteConfig.social.tiktok,
    icon: TikTokIcon,
    description: "恋愛心理を60秒で",
    color: "hover:text-[#ff0050] hover:border-[#ff0050]/30",
  },
  {
    name: "note",
    href: siteConfig.social.note,
    icon: NoteIcon,
    description: "深掘り記事はこちら",
    color: "hover:text-[#41c9b4] hover:border-[#41c9b4]/30",
  },
  {
    name: "X",
    href: siteConfig.social.x,
    icon: XIcon,
    description: "日常の恋愛ヒント",
    color: "hover:text-charcoal hover:border-charcoal/30",
  },
];

const footerNav = [
  { label: "診断", href: "/quiz" },
  { label: "コラム", href: "/columns" },
  { label: "お悩み相談", href: "/contact" },
  { label: "My Picks", href: "/picks" },
  { label: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="border-t border-pink-light/30 mt-16">
      {/* SNS導線セクション */}
      <div className="bg-gradient-to-b from-transparent to-pink-light/10 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-sm text-charcoal/50 mb-6 tracking-wide">
            SNSでも発信中
          </p>
          <div className="flex justify-center gap-4 sm:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-2 px-5 py-4 rounded-2xl border border-pink-light/30 bg-white/60 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${social.color}`}
              >
                <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs font-medium">{social.name}</span>
                <span className="text-[10px] text-charcoal/40 group-hover:text-charcoal/60 transition-colors hidden sm:block">
                  {social.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* フッターナビ + コピーライト */}
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-5">
        <div className="flex justify-center">
          <img
            src="/profile-icon.png"
            alt="モテ力倍増プランナー"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-charcoal/40 hover:text-pink-dark transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-center gap-2 text-xs text-charcoal/30">
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
        </div>
      </div>
    </footer>
  );
}
