import './ExpenseDate.css'

function ExpenseDate(props) {
    const date = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return(
        <div className="expense-date">
            <div className= "expense-date__month">{date}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__tear">{year}</div>
        </div>
    );
}
export default ExpenseDate;