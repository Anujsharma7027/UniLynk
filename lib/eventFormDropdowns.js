export const EVENT_FORM_DROPDOWNS = {
  club: ["Anuj Club", "Tech Club", "Cultural Club"],
  category: ["Workshop", "Competition", "Seminar", "Meetup"],
};

export const normalizeDropdownValue = (value) =>
  String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
