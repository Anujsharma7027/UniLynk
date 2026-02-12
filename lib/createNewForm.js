export const createNewForm = () => {
  const savedForms =
    JSON.parse(localStorage.getItem("unilynk-forms")) || [];

  const newForm = {
    id: Date.now().toString(),
    title: "Untitled Form",
    description: "",
    club: "",
    genre: "",
    createdAt: new Date().toISOString(),
    questions: 0,
  };

  const updatedForms = [newForm, ...savedForms];

  localStorage.setItem(
    "unilynk-forms",
    JSON.stringify(updatedForms)
  );

  return newForm;
};
