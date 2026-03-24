import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お悩み相談 | モテ力倍増プランナー",
  description:
    "恋愛・LINE・自己肯定感のお悩みを匿名で相談できます。心理学ベースのアドバイスであなたの恋を応援。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
