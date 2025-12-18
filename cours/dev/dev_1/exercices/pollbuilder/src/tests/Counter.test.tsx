import Counter from "../components/Counter";
import { render, screen } from "@testing-library/react";

describe("Counter", () => {
  const setup = () => {
    render(<Counter />);
  };
  it("should have a button", () => {
    setup();
    expect(
      screen.getByRole("button", { name: "Ajouter 1" })
    ).toBeInTheDocument();
  });
});
