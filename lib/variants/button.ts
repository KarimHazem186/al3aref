import { cva } from "class-variance-authority";

export const button = cva("transition-opacity duration-200 cursor-pointer", {
  variants: {
    variant: {
      underline: "underline hover:no-underline hover:opacity-80",
      solid: "bg-white text-black hover:bg-gray-100",
    },
    size: {
      sm: "text-xs px-2 py-1",
      md: "text-sm px-4 py-2",
      lg: "text-lg px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "underline",
    size: "sm",
  },
});
