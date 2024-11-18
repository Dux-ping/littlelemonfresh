import { render, screen } from "@testing-library/react";
import Reservation from "../pages/Reservation";

test("Renders the Reservation heading", () => {
  render(<Reservation />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});
