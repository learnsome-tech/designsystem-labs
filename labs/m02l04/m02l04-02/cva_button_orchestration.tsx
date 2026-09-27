import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const cn = (...args: any[]) => twMerge(clsx(args));
const button = cva("rounded font-medium transition", {
  variants: {
    intent: {
      primary: "bg-blue-600 text-white",
      danger: "bg-red-600 text-white",
    },
    size: { sm: "h-8 px-3 text-xs", lg: "h-12 px-6 text-base" },
  },
  defaultVariants: { intent: "primary", size: "sm" },
});
const d = button();
const danger = button({ intent: "danger", size: "lg" });
const merged = cn(button({ size: "sm" }), "px-8");
console.log(`Default: ${d}`);
console.log(`Danger: ${danger}`);
console.log(`Override px-8: ${merged.includes("px-8")}`);
console.log(`Removed px-3: ${!merged.includes("px-3")}`);
