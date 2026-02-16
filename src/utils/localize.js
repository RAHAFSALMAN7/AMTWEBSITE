export const localize = (field, lang) => {
  if (!field) return "";
  if (typeof field === "string" || typeof field === "number") return String(field);
  if (Array.isArray(field)) return field;
  if (typeof field === "object") {
    return field[lang] || field.en || field.ar || "";
  }
  return String(field);
};
