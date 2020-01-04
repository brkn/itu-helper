export const getFormElement = () => document.querySelector(
  "#body > table > tbody > tr:nth-child(1) > td > table:nth-child(3) > tbody > tr > td:nth-child(2) > form"
) as HTMLFormElement;

export const createLabel = (forId: string, text: string) => {
  if (forId === "") {
    throw new Error("forId cannot be empty string");
  }

  if (text === "") {
    throw new Error("text cannot be empty string");
  }

  const label = document.createElement("label");

  label.setAttribute("for", forId.split(" ").join("-"));
  label.insertAdjacentText("afterbegin", text);

  return label;
};

export const createCheckboxInput = (
  id: string,
  handleCheckboxChange: (event: Event) => void
) => {
  if (id === "") {
    throw new Error("id cannot be empty string");
  }

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", id.split(" ").join("-"));
  checkBox.addEventListener("change", handleCheckboxChange);

  return checkBox;
};

export const createWrappedCheckBox = (
  title: string,
  handleCheckboxChange: (event: Event) => void
) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute(
    "class",
    `${title
      .toLowerCase()
      .split(" ")
      .join("-")} checkbox-wrapper`
  );

  const checkBox = createCheckboxInput(title, handleCheckboxChange);
  const label = createLabel(title, title);

  wrapper.append(label);
  wrapper.append(checkBox);

  return wrapper;
};
