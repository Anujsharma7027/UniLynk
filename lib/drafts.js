export const createDraft = () => {
  const id = `draft_${Date.now()}`;

  const draft = {
    _id: id,
    title: "Untitled Form",
    description: "",
    club: "",
    genre: "",
    questions: [],
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(`draft-${id}`, JSON.stringify(draft));

  return draft;
};

export const getDraft = (id) => {
  const raw = localStorage.getItem(`draft-${id}`);
  return raw ? JSON.parse(raw) : null;
};

export const saveDraft = (draft) => {
  localStorage.setItem(`draft-${draft._id}`, JSON.stringify(draft));
};

export const listDrafts = () => {
  const drafts = [];

  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("draft-")) {
      drafts.push(JSON.parse(localStorage.getItem(key)));
    }
  });

  return drafts;
};

export const deleteDraft = (id) => {
  localStorage.removeItem(`draft-${id}`);
};
