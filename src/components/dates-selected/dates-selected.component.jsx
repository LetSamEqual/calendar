import "./dates-selected.styles.css";

const DatesSelected = ({ firstDateSelected, secondDateSelected }) => {
  const dayOne = new Date(firstDateSelected);
  const dayTwo = new Date(secondDateSelected);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="dates-selected">
      <h2>
        Booking for: {dayOne.toLocaleDateString("en-AU", options)} to{" "}
        {dayTwo == "Invalid Date" ? "" : dayTwo.toLocaleDateString("en-AU", options)}
      </h2>
    </div>
  );
};

export default DatesSelected;
