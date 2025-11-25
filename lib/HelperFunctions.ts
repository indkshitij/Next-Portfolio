export const getColorByName = (name: string): string => {
  switch (name.toLowerCase()) {
    case "github":
      return "#24292e";
    case "linkedin":
      return "#0A66C2";
    case "instagram":
      return "#E1306C";
    case "leetcode":
      return "#FFA116";
    case "email":
      return "#EA4335";
    case "linktree":
      return "#43E660";
    default:
      return "#6B7280"; 
  }
};
