import "./ExpenseItem.css";

function ExpenseItem() {
	return (
		<div className="expense-item">
			<div>Dzisiejsza data</div>
			<div className="expense-item__description">
				<h2>Dupa Insurence</h2>
				<div className="expense-item__price">500$$$</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
