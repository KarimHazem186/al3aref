// import { cva } from "class-variance-authority";

// export const button = cva("transition-opacity duration-200 cursor-pointer", {
//   variants: {
//     variant: {
//       underline: "underline hover:no-underline hover:opacity-80",
//       solid: "bg-white text-black hover:bg-gray-100",
//     },
//     size: {
//       sm: "text-xs px-1 py-1",
//       md: "text-sm px-4 py-2",
//       lg: "text-lg px-6 py-3",
//     },
//   },
//   defaultVariants: {
//     variant: "underline",
//     size: "sm",
//   },
// });
import { cva } from "class-variance-authority";

export const button = cva("transition-opacity duration-200 cursor-pointer", {
  variants: {
    variant: {
      underline: "underline hover:no-underline hover:opacity-80",
      solid: "bg-white text-black hover:bg-gray-100",
      link: "underline p-0 hover:no-underline hover:opacity-80", // 👈 جديد
    },
    size: {
      xs: "text-[10px]", 
      sm: "text-xs px-1 py-1",
      md: "text-sm px-4 py-2",
      lg: "text-lg px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "underline",
    size: "sm",
  },
});
