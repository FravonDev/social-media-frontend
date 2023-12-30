import { render } from "@testing-library/react";
import { DefaultButton } from ".";

describe("DefaultInput component", () => {
  it("should render correctly", () => {
    const { getByText } = render(<DefaultButton buttonContent={'Login'} />);

    const button = getByText("Login");

    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });
});
