import './weekday-title-container.styles.css'

import { dayNames } from '../../consts/days-months'

const WeekDayTitles = () => {

    return(
        <div className='day-names-container'>
        {dayNames.map((day) => {
          return (
            <div className='day-names' key={day.shortName}>
              <h2>{day.shortName}</h2>
            </div>
          );
        })}
      </div>

    )
}

export default WeekDayTitles