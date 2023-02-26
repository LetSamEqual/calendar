import "./day-container.styles.css";

import { getNumberOfDaysInMonth } from "../../utils/calendar.utils";

const DaysInMonth = ({
  firstDateSelected,
  secondDateSelected,
  selectFirstDate,
  selectSecondDate,
  month,
  year,
}) => {
  // works out how many days are in this month, prev month and next month, and what day the current month and next month starts on
  const numberOfDaysInCurrentMonth = getNumberOfDaysInMonth(year, month);
  const numberOfDaysLastMonth = getNumberOfDaysInMonth(year, month - 1);
  const numberOfDaysNextMonth = getNumberOfDaysInMonth(year, month + 1);
  const firstDayOfCurrentMonth = new Date(year, month).getDay();
  const firstDayOfNextMonth = new Date(year, month + 1).getDay();

  // callback to turn a month into an array of dates
  const getArrayOfDaysInMonth = (days) =>
    Array(days)
      .fill()
      .map((element, index) => index + 1);

  // uses above callback to get an array of dates for current and previous month

  const daysInCurrentMonth = getArrayOfDaysInMonth(numberOfDaysInCurrentMonth);
  const daysLastMonthArray = getArrayOfDaysInMonth(numberOfDaysLastMonth);
  const daysNextMonthArray = getArrayOfDaysInMonth(numberOfDaysNextMonth);

  // determines how many days from previous month to display on calendar and extracts them from above array of prev months dates

  const daysToRemove =
    firstDayOfCurrentMonth == 0 ? 6 : firstDayOfCurrentMonth - 1;
  const prevMonthDaysToDisplay = daysLastMonthArray.slice(
    numberOfDaysLastMonth - daysToRemove
  );

  // determines how many days from next month to displayer from calendar and extracts them from above array of next months dates

  const daysToAddFromNextMonthsArray =
    firstDayOfNextMonth == 0
      ? 1
      : firstDayOfNextMonth == 1
      ? null
      : 8 - firstDayOfNextMonth;
  const nextMonthsDaysToDisplay = daysNextMonthArray.slice(
    0,
    daysToAddFromNextMonthsArray
  );

  // capture date value of click

  const carpeDiem = (date) => {
    if (!firstDateSelected || secondDateSelected) {
      selectFirstDate(date);
      selectSecondDate("");

      return;
    } else if (firstDateSelected < date) {
      selectSecondDate(date);
    }
  };

  //changes classname for selected dates

  const changeClassname = (date) => {
    if (date == firstDateSelected) {
      return "days selected";
    } else if (date >= firstDateSelected && date <= secondDateSelected) {

      return "days selected";
    } else {
      return "days";
    }
  };

  const changeClassnamePrevNextMonth = (date) => {
    if (new Date(date) == new Date(firstDateSelected)) {
      return "days-last-next-month selected";
    } else if (date >= firstDateSelected && date <= secondDateSelected) {
      return "days-last-next-month selected";
    } else {
      return "days-last-next-month";
    }
  }

  // if date = firstDateSelected => classname = "days selected"
  // if date >= firstDateSelected => classname = "days selected"
  // else classname = 'days'

  return (
    <div className='day-container'>
      {prevMonthDaysToDisplay.map((day) => {
        const date = new Date(year, month - 1, day);

        return (
          <div
            className={changeClassnamePrevNextMonth(date)}
            key={day}
            onClick={() => carpeDiem(date)}
          >
            <h3>{day}</h3>
          </div>
        );
      })}

      {daysInCurrentMonth.map((day) => {
        const date = new Date(year, month, day);
        const lastMonth = new Date(year, month - 1, day);
        return (
          <div
            className={changeClassname(date)}
            key={day}
            onClick={() => carpeDiem(date)}
            id={date}
          >
            <h3>{day}</h3>
          </div>
        );
      })}

      {nextMonthsDaysToDisplay.map((day) => {
        const date = new Date(year, month + 1, day);

        return (
          <div
          className={changeClassnamePrevNextMonth(date)}
            key={day}
            onClick={() => carpeDiem(date)}
          >
            <h3>{day}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default DaysInMonth;
