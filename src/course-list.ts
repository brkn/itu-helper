import {
  getFormElement,
  createWrappedCheckBox,
  getCourseRowElements,
  getFullCapacityCoursesListIndexes,
} from "./dom-utils";

function removeFullCoursesHandlerCreator() {
  const courseRows = getCourseRowElements();

  const fullCapacityCoursesListIndexes = getFullCapacityCoursesListIndexes(
    courseRows
  );

  const removeFullCourses = () => {
    fullCapacityCoursesListIndexes.forEach((fullCapacityCoursesListIndex) => {
      courseRows[fullCapacityCoursesListIndex].classList.add("removed");
    });
  };

  const revertRemovedCourses = () => {
    fullCapacityCoursesListIndexes.forEach((fullCapacityCoursesListIndex) => {
      courseRows[fullCapacityCoursesListIndex].classList.remove("removed");
    });
  };

  return function handleCheckboxChange(event: Event) {
    const isChecked = (event.currentTarget as HTMLInputElement).checked;

    if (isChecked) {
      removeFullCourses();
    } else {
      revertRemovedCourses();
    }
  };
}

function main() {
  const removeFullCoursesHandler = removeFullCoursesHandlerCreator();

  const removeFullCoursesCheckbox = createWrappedCheckBox(
    "Remove courses with full capacity",
    removeFullCoursesHandler
  );

  const formElement = getFormElement();

  formElement.appendChild(removeFullCoursesCheckbox);
}

main();
