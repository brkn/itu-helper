export const getFormElement = () => document.querySelector<HTMLFormElement>(
  "#body > table > tbody > tr:nth-child(1) > td > table:nth-child(3) > tbody > tr > td:nth-child(2) > form"
) as HTMLFormElement;

export const getCourseRowElements = () => (
  document.querySelector<HTMLTableSectionElement>(
    "#body > table > tbody > tr:nth-child(1) > td > table:nth-child(3) > tbody > tr > td:nth-child(2) > table > tbody"
  ) as HTMLTableSectionElement).children;

export const getCapacity = (courseRow: HTMLTableRowElement) => {
  const cellElement = courseRow.querySelector<HTMLTableCellElement>(
    "td:nth-child(9)"
  ) as HTMLTableCellElement;

  return Number(cellElement.innerText);
};

export const getEnrolled = (courseRow: HTMLTableRowElement) => {
  const cellElement = courseRow.querySelector<HTMLTableCellElement>(
    "td:nth-child(10)"
  ) as HTMLTableCellElement;

  return Number(cellElement.innerText);
};

export const getMajorsList = (courseRow: HTMLTableRowElement) => {
  const cellElement = courseRow.querySelector<HTMLTableCellElement>(
    "td:nth-child(12)"
  ) as HTMLTableCellElement;

  return cellElement.innerText.split(", ");
};

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

export const createTextInput = (
  id: string,
  handleTextInputChange: (event: Event) => void
) => {
  if (id === "") {
    throw new Error("id cannot be empty string");
  }

  const textInput = document.createElement("input");
  textInput.setAttribute("type", "text");
  textInput.setAttribute("id", id.split(" ").join("-"));
  textInput.addEventListener("change", handleTextInputChange);

  return textInput;
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
      .join("-")} checkbox-input-wrapper`
  );

  const checkBox = createCheckboxInput(title, handleCheckboxChange);
  const label = createLabel(title, title);

  wrapper.append(label);
  wrapper.append(checkBox);

  return wrapper;
};

export const createWrappedTextInput = (
  title: string,
  handleTextInputChange: (event: Event) => void
) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute(
    "class",
    `${title
      .toLowerCase()
      .split(" ")
      .join("-")} text-input-wrapper`
  );

  const textInput = createTextInput(title, handleTextInputChange);
  const label = createLabel(title, title);

  wrapper.append(label);
  wrapper.append(textInput);

  return wrapper;
};
