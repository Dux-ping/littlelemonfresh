import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"; // Extinde matcher-ele Jest pentru teste DOM
import Reservation from "../pages/Reservation"; // Componenta de testat

// Curățare globală după fiecare test
afterEach(() => {
  cleanup(); // Curăță DOM-ul creat de fiecare test
  jest.clearAllTimers(); // Șterge toate timerele active
});

describe("Form validation logic", () => {
  test("shows error if name is too short", async () => {
    render(<Reservation />);
    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Jo" } });
    const submitButton = screen.getByText("Reserve Now");
    fireEvent.click(submitButton);
    expect(
      await screen.findByText("Name must be at least 3 characters long", {}, { timeout: 3000 })
    ).toBeInTheDocument();
  });

  test("shows error if phone number is invalid", async () => {
    render(<Reservation />);
    const phoneInput = screen.getByLabelText("Phone Number");
    fireEvent.change(phoneInput, { target: { value: "123" } });
    const submitButton = screen.getByText("Reserve Now");
    fireEvent.click(submitButton);
    expect(
      await screen.findByText(
        "Phone number must be between 10 and 12 digits",
        {},
        { timeout: 3000 }
      )
    ).toBeInTheDocument();
  });

  test("shows error if date is empty", async () => {
    render(<Reservation />);
    const dateInput = screen.getByLabelText("Date");
    fireEvent.change(dateInput, { target: { value: "" } });
    const submitButton = screen.getByText("Reserve Now");
    fireEvent.click(submitButton);
    expect(await screen.findByText("Date is required", {}, { timeout: 3000 })).toBeInTheDocument();
  });

  test("shows error if time is outside opening hours", async () => {
    render(<Reservation />);
    const timeInput = screen.getByLabelText("Time");
    fireEvent.change(timeInput, { target: { value: "23:00" } });
    const submitButton = screen.getByText("Reserve Now");
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(
        "You are outside opening hours. Please select a time between 10:00 AM and 10:00 PM.",
        {},
        { timeout: 3000 }
      )
    ).toBeInTheDocument();
  });

  test("shows error if number of people is empty", async () => {
    render(<Reservation />);
    const peopleInput = screen.getByLabelText("Number of People");
    fireEvent.change(peopleInput, { target: { value: "" } });
    const submitButton = screen.getByText("Reserve Now");
    fireEvent.click(submitButton);
    expect(
      await screen.findByText("Number of people is required", {}, { timeout: 3000 })
    ).toBeInTheDocument();
  });

  test("shows error if location is not selected", async () => {
    render(<Reservation />);
    const locationSelect = screen.getByLabelText("Occasion");
    fireEvent.change(locationSelect, { target: { value: "" } });
    const submitButton = screen.getByText("Reserve Now");
    fireEvent.click(submitButton);
    expect(
      await screen.findByText("Location is required", {}, { timeout: 3000 })
    ).toBeInTheDocument();
  });
});
