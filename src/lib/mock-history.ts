export interface HistoryItem {
  id: string;
  type: "error" | "explain";
  summary: string;
  memo: string;
  updated_date: string; // YYYY:MM:DD format
}

/**
 * MOCK DATA
 * ------------------------------------------------------------------
 * 実際のAPI連携時は、以下の変数をAPIレスポンスから取得するように変更してください。
 *
 * 例:
 * const response = await fetch('YOUR_API_URL/history');
 * const historyItems: HistoryItem[] = await response.json();
 * ------------------------------------------------------------------
 */
export const historyItems: HistoryItem[] = [
  {
    id: "1",
    type: "error",
    summary: "Next.jsのHydration Error",
    memo: "サーバーとクライアントのレンダリング結果の不一致",
    updated_date: "2024:01:27",
  },
  {
    id: "2",
    type: "explain",
    summary: "useEffectの依存配列について",
    memo: "無限ループを防ぐためのベストプラクティス",
    updated_date: "2024:01:26",
  },
  {
    id: "3",
    type: "error",
    summary: "AWS Lambdaのタイムアウト",
    memo: "処理時間が長すぎるため、メモリ割り当てを増やす必要がある",
    updated_date: "2024:01:25",
  },
  {
    id: "4",
    type: "explain",
    summary: "CSS Grid vs Flexbox",
    memo: "2次元レイアウトと1次元レイアウトの使い分け",
    updated_date: "2024:01:24",
  },
  {
    id: "5",
    type: "error",
    summary: "TypeScriptの型定義エラー",
    memo: "暗黙的なany型の回避方法",
    updated_date: "2024:01:23",
  },
  {
    id: "6",
    type: "explain",
    summary: "React Server Components",
    memo: "パフォーマンス向上のためのサーバーサイドレンダリング",
    updated_date: "2024:01:22",
  },
  {
    id: "7",
    type: "error",
    summary: "API CORSエラー",
    memo: "オリジン間リソース共有の設定ミス",
    updated_date: "2024:01:21",
  },
  {
    id: "8",
    type: "explain",
    summary: "Tailwind CSSのカスタマイズ",
    memo: "tailwind.config.jsでのテーマ拡張",
    updated_date: "2024:01:20",
  },
];
