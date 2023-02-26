import { useState } from "react";

import "./calendar.styles.css";

import WeekDayTitles from "../weekday-title-container/weekday-title-container.component";
import MonthYearSelector from "../month-year-selector-container/month-year-selector-container.component";
import DaysInMonth from "../days-container/day-container.component";
import DatesSelected from "../dates-selected/dates-selected.component";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentDay, setCurrentDay] = useState(new Date().getDay());
  const [firstDateSelected, setFirstDateSelected] = useState();
  const [secondDateSelected, setSecondDateSelected] = useState();

  return (
    <div className='calendar-container'>
      <div className='month-year-container'>
        <MonthYearSelector
          setMonth={setCurrentMonth}
          setYear={setCurrentYear}
          month={currentMonth}
          year={currentYear}
        />
      </div>
      <div>
        <WeekDayTitles />
      </div>
      <div className='calendar-dates-container'>
        <DaysInMonth
          firstDateSelected={firstDateSelected}
          secondDateSelected={secondDateSelected}
          selectFirstDate={setFirstDateSelected}
          selectSecondDate={setSecondDateSelected}
          month={currentMonth}
          year={currentYear}
        />
      </div>
      <div>
        {firstDateSelected && <DatesSelected
          firstDateSelected={firstDateSelected}
          secondDateSelected={secondDateSelected}
        />}
      </div>
    </div>
  );
};

export default Calendar;