import {
  getFormElement,
  createWrappedCheckBox,
} from "./dom-utils";

const handleCheckboxChange = (event: Event) => {
  console.log((event.currentTarget as HTMLInputElement).checked);
};

function main() {
  const removeFullCoursesCheckbox = createWrappedCheckBox(
    "Remove courses with full capacity",
    handleCheckboxChange,
  );

  const formElement = getFormElement();

  formElement.appendChild(removeFullCoursesCheckbox);
}

main();
