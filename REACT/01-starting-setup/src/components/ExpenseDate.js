import './ExpenseDate.css'

function ExpenseDate(props) {
	const month = props.date.toLocaleString("en-EN", { month: "long" });
	const year = props.date.getFullYear();
	const day = props.date.toLocaleString("en-EN", { day: "2-digit" });

	return (
		<div className = "expense-date">
			<div className = "expanse-date__day">{day}</div>
			<div className = "expanse-date__month">{month}</div>
			<div className = "expense-date__year">{year}</div>
		</div>
	);
}

export default ExpenseDate;
