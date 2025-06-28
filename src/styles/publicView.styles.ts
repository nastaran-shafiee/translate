import clsx from "clsx";

export const inputClass = clsx(
  "p-2",
  "rounded",
  "bg-gray-700",
  "text-white"
);

export const cardClass = clsx(
  "p-4",
  "flex",
  "flex-col",
  "bg-gray-800",
  "rounded-lg",
  "transition-all",
  "duration-300",
  "hover:bg-gray-750",
  "w-60",
  "min-h-60",
  "items-center"
);

export const mainTitleClass = clsx(
  "text-2xl",
  "font-bold"
);

export const cardTitleClass = clsx(
  "text-lg",
  "font-semibold",
  "mb-8",
  "text-blue-200",
  "text-center"
);

export const getLabelColor = (lang: string) =>
  clsx({
    "text-blue-300": lang === "en",
    "text-blue-400": lang === "fa",
    "text-blue-500": lang === "ar",
    "text-gray-400": !["en", "fa", "ar"].includes(lang),
  });
