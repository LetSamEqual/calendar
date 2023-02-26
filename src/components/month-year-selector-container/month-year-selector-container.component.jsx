import "./month-year-selector-container.styles.css";

import { monthNames } from "../../consts/days-months";
import DaysInMonth from "../days-container/day-container.component";
import WeekDayTitles from "../weekday-title-container/weekday-title-container.component";

const MonthYearSelector = ({ setMonth, setYear, month, year }) => {
  const currentMonthName = monthNames[month];

  const goToNextMonthHandler = () => {
    if (month < 11) {
      setMonth(month + 1);
    } else {
      setMonth(0);
      setYear(year + 1);
    }
  };

  const goToLastMonthHandler = () => {
    if (month > 0) {
      setMonth(month - 1);
    } else {
      setMonth(11);
      setYear(year - 1);
    }
  };

  const goToNextYearHandler = () => {
    if (year < 2100) {
      setYear(year + 1);
    } else {
      return;
    }
  };

  const goToLastYearHandler = () => {
    if (year > 1900) {
      setYear(year - 1);
    } else {
      return;
    }
  };

  return (
    <div className='month-year-container'>
      <div className='current-month-container'>
        <h2 className="month-toggler" onClick={goToLastMonthHandler}>◀︎</h2>
        <h2>{currentMonthName}</h2>
        <h2 className="month-toggler" onClick={goToNextMonthHandler}>▶︎</h2>
      </div>

      <div className='current-year-container'>
        <h2 className="year-toggler" onClick={goToLastYearHandler}>◀︎</h2>
        <h3>{year}</h3>
        <h2 className="year-toggler" onClick={goToNextYearHandler}>▶︎</h2>
      </div>
    </div>
  );
};

export default MonthYearSelector;
