import Link from "next/link";
import { historyItems } from "@/lib/mock-history";
import { tokens } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function HistoryPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight leading-tight">
            History
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            AIとの会話履歴一覧です。
          </p>
        </header>

        {/* Gallery / Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {historyItems.map((item, index) => (
            <Link
              key={item.id}
              href={`/chat/${item.id}`}
              className="block group focus:outline-none"
            >
              <article
                className={cn(
                  tokens.card,
                  tokens.cardHover,
                  "h-full p-6 flex flex-col justify-between relative overflow-hidden group-focus:ring-2 ring-blue-500/50 ring-offset-2 dark:ring-offset-gray-950",
                  // Make the first item span 2 columns and 2 rows on large screens for Bento effect
                  index === 0 && "md:col-span-2 md:row-span-2"
                )}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium border",
                        item.type === "error"
                          ? "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800"
                          : "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                      )}
                    >
                      {item.type === "error" ? "Error Fix" : "Explanation"}
                    </span>
                    <time
                      className="text-sm text-gray-400 font-mono"
                      dateTime={item.updated_date.replace(/:/g, "-")}
                    >
                      {item.updated_date}
                    </time>
                  </div>

                  <h2
                    className={cn(
                      "font-bold text-gray-900 dark:text-gray-100",
                      index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                    )}
                  >
                    {item.summary}
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {item.memo}
                  </p>
                </div>

                {/* Decorative gradient blob for visual depth */}
                <div
                  className={cn(
                    "absolute -right-10 -bottom-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    item.type === "error" ? "bg-red-500/20" : "bg-blue-500/20"
                  )}
                />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
