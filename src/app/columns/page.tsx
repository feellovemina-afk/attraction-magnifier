import { getAllColumns } from "@/lib/columns";
import { ColumnsClient } from "./ColumnsClient";

export const metadata = {
  title: "コラム | Attraction Magnifier",
  description: "恋愛・自己理解・メンタル。心理学で読み解く「なぜ？」を深掘りコラムでお届け。",
};

export default function ColumnsPage() {
  const columns = getAllColumns();
  return <ColumnsClient columns={columns} />;
}
