import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, prettyDOM } from "@testing-library/react";
import GenericInput from "./GenericInput";
import colors from "../../constants/colors"

test("Renderizar componente", () => {
  const data = {
    error: false,
    errorMessage: "",
    onChange: () => {},
    placeholder: "Prueba de input",
  };
  const component = render(<GenericInput placeholder={data.placeholder} />);

  // expect(component.container).toHaveTextContent(data.placeholder)
  component.getByText(data.placeholder);
});

test("Mostrar error en el placeholder", () => {
  const data = {
    error: true,
    errorMessage: "Please enter a link",
    onChange: () => {},
    placeholder: "Prueba de input",
  };

  const component = render(
    <GenericInput
      error={data.error}
      errorMessage={data.errorMessage}
      placeholder={data.placeholder}
    />
  );

  const textComponent = component.getByText(data.placeholder);
  fireEvent.click(textComponent);
  const divWrap = component.container.querySelector("div");
  expect(divWrap).toHaveStyle(`border: 3px solid ${colors.error}`)
  component.getByText(data.errorMessage);
});
