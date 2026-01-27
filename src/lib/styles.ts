export const tokens = {
  card: "bg-white/50 dark:bg-black/30 backdrop-blur-md rounded-3xl border border-black/5 dark:border-white/10 shadow-sm",
  cardHover:
    "hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-150",
  button: {
    base: "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
    ghost: "hover:bg-black/5 dark:hover:bg-white/10",
    size: {
      sm: "h-8 px-3 text-sm rounded-lg",
      md: "h-10 px-4 text-sm rounded-xl",
      lg: "h-12 px-6 text-base rounded-xl",
    },
  },
} as const;
