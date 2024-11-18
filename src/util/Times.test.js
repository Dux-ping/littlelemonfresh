import { initializeTimes, updateTimes } from "./times";

test("initializeTimes returns the correct initial state", () => {
  const initialState = initializeTimes();
  expect(initialState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same state provided", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const newState = updateTimes(state, { type: "UPDATE_TIMES" });
  expect(newState).toEqual(state);
});
