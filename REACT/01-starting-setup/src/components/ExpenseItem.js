import "./ExpenseItem.css";

function ExpenseItem(props) {
	return (
		<div className="expense-item">
			<div>
				<div>Month</div>
				<div>Year</div>
				<div>Day</div>
			</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
