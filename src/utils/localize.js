export const localize = (field, lang) => {
  if (!field) return "";
  if (typeof field === "string") return field;
  if (Array.isArray(field)) return field;
  if (typeof field === "object") return field[lang] || field.en || "";
  return String(field);
};
