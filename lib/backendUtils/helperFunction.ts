import { format } from "path";

export const getPublicIdFromUrl = (url: string) => {
  const parts = url.split("/");
  const fileWithExt = parts.pop() || "";
  const folder = parts.pop() || "";
  const fileName = fileWithExt.split(".")[0];
  return `${folder}/${fileName}`;
};

export const formatDateMonthYear = (date?: string | Date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};
