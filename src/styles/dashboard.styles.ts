// dashboard.styles.ts
import clsx from "clsx";

export const container = clsx(
  "mx-auto",
  "py-10",
  "px-4",
  "text-white"
);

export const title = clsx(
  "text-3xl",
  "font-bold",
  "mb-8",
  "text-center"
);

export const form = clsx(
  "mb-10",
  "p-6",
  "bg-gray-900",
  "rounded-lg",
  "shadow"
);

export const input = clsx(
  "p-2",
  "rounded",
  "bg-gray-700",
  "text-white",
  "border",
  "border-gray-600"
);

export const translationInput = clsx(
  "p-1",
  "rounded",
  "bg-gray-700",
  "text-white",
  "border",
  "border-gray-600",
  "text-xs",
  "text-center"
);

export const addButton = clsx(
  "px-4",
  "py-2",
  "bg-blue-500",
  "text-white",
  "rounded",
  "hover:bg-blue-700"
);

export const listContainer = clsx(
  "space-y-4",
  "flex",
  "flex-wrap",
  "gap-8",
  "justify-center"
);

export const card = clsx(
  "p-4",
  "bg-gray-800",
  "rounded-lg",
  "shadow-md",
  "w-60"
);

export const deleteButton = clsx(
  "text-red-300",
  "cursor-pointer"
);

export const dragHandle = clsx(
  "absolute",
  "top-2",
  "right-2",
  "cursor-move",
  "text-gray-400",
  "text-sm"
);

export const deleteWrapper = clsx(
  "absolute",
  "top-0",
  "left-0",
  "w-8",
  "h-8",
  "rounded-full",
  "flex",
  "items-center",
  "justify-center"
);

export const label = (lang: string) =>
  clsx(
    "text-sm",
    "mb-4",
    {
      "text-blue-300": lang === "en",
      "text-blue-400": lang === "fa",
      "text-blue-500": lang === "ar",
      "text-gray-400": !["en", "fa", "ar"].includes(lang),
    }
  );
