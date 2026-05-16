#!/usr/bin/env python3
"""
コラム カバー画像チェッカー

src/content/columns/*.mdx の frontmatter `coverImage` フィールドが
public/ 配下に実在するかを検証する。

存在しない場合は ❌ で報告し、終了コード 1 を返す。
pre-commit hook と CI から呼び出される。

使い方:
  python3 scripts/check-cover-images.py                 # 全コラム
  python3 scripts/check-cover-images.py path/to/x.mdx   # 個別ファイル
"""

import os
import re
import sys
import glob

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COLUMNS_DIR = os.path.join(PROJECT_ROOT, "src/content/columns")
PUBLIC_DIR = os.path.join(PROJECT_ROOT, "public")


def parse_frontmatter(mdx_path):
    """frontmatter から coverImage / coverEmoji / title / slug を抜き出す"""
    with open(mdx_path, "r", encoding="utf-8") as f:
        content = f.read()

    match = re.match(r"^---\n(.+?)\n---", content, re.DOTALL)
    if not match:
        return None

    fm_text = match.group(1)
    result = {}
    for key in ("coverImage", "coverEmoji", "title", "slug"):
        m = re.search(rf'^{key}:\s*"([^"]+)"', fm_text, re.MULTILINE)
        if m:
            result[key] = m.group(1)
    return result


def check_one(mdx_path):
    """1ファイル検証。返値: (status, message)
    status: "ok" / "warn" / "error"
    """
    fm = parse_frontmatter(mdx_path)
    if not fm:
        return ("error", f"frontmatter not found")

    slug = fm.get("slug", os.path.basename(mdx_path).replace(".mdx", ""))
    cover_image = fm.get("coverImage")
    cover_emoji = fm.get("coverEmoji")

    # CDN URL（http/https）はチェック対象外
    if cover_image and cover_image.startswith(("http://", "https://")):
        return ("ok", f"CDN URL: {cover_image[:50]}...")

    # ローカルパス指定あり
    if cover_image:
        # /images/columns/foo.png → public/images/columns/foo.png
        local_path = os.path.join(
            PUBLIC_DIR, cover_image.lstrip("/")
        )
        if os.path.isfile(local_path):
            size_kb = os.path.getsize(local_path) // 1024
            return ("ok", f"{cover_image} ({size_kb}KB)")
        else:
            return ("error",
                    f"❌ coverImage指定あり ({cover_image}) but file MISSING")

    # coverImage 未指定。emoji フォールバックあり
    if cover_emoji:
        return ("warn", f"coverImage未指定。emoji fallback: {cover_emoji}")

    return ("error", "coverImage も coverEmoji も未指定")


def main():
    targets = sys.argv[1:] if len(sys.argv) > 1 else sorted(
        glob.glob(os.path.join(COLUMNS_DIR, "*.mdx"))
    )

    print("📷 コラムカバー画像チェック")
    print("━" * 60)

    errors = 0
    warnings = 0
    ok_count = 0
    error_list = []

    for path in targets:
        if not os.path.isfile(path):
            print(f"⚠️  ファイルなし: {path}")
            continue
        slug = os.path.basename(path).replace(".mdx", "")
        status, msg = check_one(path)
        icon = {"ok": "✅", "warn": "⚠️ ", "error": "❌"}[status]
        print(f"{icon} {slug}: {msg}")
        if status == "error":
            errors += 1
            error_list.append(slug)
        elif status == "warn":
            warnings += 1
        else:
            ok_count += 1

    print("━" * 60)
    print(f"合計 {len(targets)}件: ✅ {ok_count} / ⚠️ {warnings} / ❌ {errors}")

    if errors > 0:
        print(f"\n🔴 修復が必要なコラム ({errors}件):")
        for slug in error_list:
            print(f"   - {slug}")
        print("\n対応:")
        print("  A. カバー画像を生成して public/images/columns/{slug}-cover.png に配置")
        print("  B. frontmatter から coverImage 行を削除 → coverEmoji フォールバック")
        sys.exit(1)

    sys.exit(0)


if __name__ == "__main__":
    main()
