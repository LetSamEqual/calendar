import { dayNames } from "../consts/days-months";

export const getNumberOfDaysInMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

export const getSortedDays = (year, month) => {
  const dayIndex = getNumberOfDaysInMonth(year, month);
  const firstHalf = dayNames.slice(0, dayIndex);
  console.log(firstHalf);
};

