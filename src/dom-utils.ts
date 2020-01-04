import {getIsCourseFull} from "./course-utils";

export const getFormElement = () => document.querySelector<HTMLFormElement>(
  "#body > table > tbody > tr:nth-child(1) > td > table:nth-child(3) > tbody > tr > td:nth-child(2) > form"
) as HTMLFormElement;

export const getCourseRowElements = () => (
  document.querySelector<HTMLTableSectionElement>(
    "#body > table > tbody > tr:nth-child(1) > td > table:nth-child(3) > tbody > tr > td:nth-child(2) > table > tbody"
  ) as HTMLTableSectionElement).children;

export const getFullCapacityCoursesListIndexes = (
  courseRows: HTMLCollection
) => {
  const indexes = [] as number[];

  for (
    let courseRowIndex = 2;
    courseRowIndex < courseRows.length;
    courseRowIndex += 1
  ) {
    const element = courseRows[courseRowIndex];

    if (getIsCourseFull(element)) {
      indexes.push(courseRowIndex);
    }
  }

  return indexes;
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
