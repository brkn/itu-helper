import {JSDOM} from "jsdom";

import {
  getFormElement,
  getCourseRowElements,
  createLabel,
  createWrappedCheckBox,
  createCheckboxInput,
} from "./dom-utils";

const mockEmptyEventHandler = (event: Event) => {
  console.log(event);
};

describe("getFormElement", () => {
  beforeAll(async () => {
    const dom = await JSDOM.fromFile("mocks/course-page.html");
    (global as any).document = dom.window.document;
  });

  test("should return a form element, not null", () => {
    const returned = getFormElement();

    expect(returned).not.toBeNull();
  });
});

describe("getCourseRowElements", () => {
  beforeAll(async () => {
    const dom = await JSDOM.fromFile("mocks/course-page.html");
    (global as any).document = dom.window.document;
  });

  test("should return an HTML collection, not null", () => {
    const returned = getCourseRowElements();

    expect(returned).not.toBeNull();
  });
});


describe("createWrappedCheckBox", () => {
  test("should create a label element succesfully", () => {
    const title = "this is title";

    const checkBoxWrapper = createWrappedCheckBox(title, mockEmptyEventHandler);

    const labelOfCheckbox = checkBoxWrapper.getElementsByTagName("label")[0];
    const mockLabel = createLabel("this-is-title", title);

    expect(labelOfCheckbox).toStrictEqual<HTMLLabelElement>(mockLabel);
  });

  test("should create a checkbox input element succesfully", () => {
    const title = "this is title";

    const checkBoxWrapper = createWrappedCheckBox(title, mockEmptyEventHandler);

    const inputOfCheckbox = checkBoxWrapper.getElementsByTagName("input")[0];
    const mockInput = createCheckboxInput(title, mockEmptyEventHandler);

    expect(inputOfCheckbox).toStrictEqual<HTMLInputElement>(mockInput);
  });

  test("should add classname correctly to wrapper div", () => {
    const checkBoxWrapper = createWrappedCheckBox(
      "title-1-2",
      mockEmptyEventHandler
    );
    const classname = checkBoxWrapper.getAttribute("class");

    expect(classname).toBe("title-1-2 checkbox-wrapper");
  });
});

describe("createLabel", () => {
  test("should raise error when given empty string for title", () => {
    expect(() => createLabel("forId", "")).toThrowError();
  });

  test("should raise error when given empty string for forId", () => {
    expect(() => createLabel("", "title")).toThrowError();
  });

  test("should create a label succesfully", () => {
    const mockLabel = document.createElement("label");
    mockLabel.setAttribute("for", "forId");
    mockLabel.insertAdjacentText("afterbegin", "title");

    const label = createLabel("forId", "title");

    expect(label).toStrictEqual<HTMLLabelElement>(mockLabel);
  });
});

describe("createCheckboxInput", () => {
  test("should raise error when given empty string for id", () => {
    expect(() => createCheckboxInput("", mockEmptyEventHandler)).toThrowError();
  });

  test("should create a checkbox input succesfully", () => {
    const mockInput = document.createElement("input");
    mockInput.setAttribute("type", "checkbox");
    mockInput.setAttribute("id", "input-id");

    const input = createCheckboxInput("input-id", mockEmptyEventHandler);

    expect(input).toStrictEqual<HTMLInputElement>(mockInput);
  });
});
