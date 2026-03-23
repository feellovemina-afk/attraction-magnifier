import { NextResponse } from "next/server";

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || "";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nickname, category, message } = body;

    if (!message || message.trim().length === 0) {
      return NextResponse.json({ error: "メッセージを入力してください" }, { status: 400 });
    }

    // Send to Slack
    if (SLACK_WEBHOOK_URL) {
      const slackPayload = {
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "💌 新しいお悩みが届きました！",
              emoji: true,
            },
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*👤 ニックネーム:*\n${nickname || "匿名さん"}`,
              },
              {
                type: "mrkdwn",
                text: `*📂 カテゴリ:*\n${category || "未選択"}`,
              },
            ],
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*💬 お悩み:*\n${message}`,
            },
          },
          {
            type: "context",
            elements: [
              {
                type: "mrkdwn",
                text: `📅 ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}`,
              },
            ],
          },
          {
            type: "divider",
          },
        ],
      };

      await fetch(SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(slackPayload),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}
