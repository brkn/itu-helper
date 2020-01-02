import {
  getFormElement, createWrappedCheckBox
} from "./dom-utils";

function main() {
  const removeFullCoursesCheckbox = createWrappedCheckBox(
    "Remove courses with full capacity"
  );

  const formElement = getFormElement();

  formElement.appendChild(removeFullCoursesCheckbox);
}

main();
