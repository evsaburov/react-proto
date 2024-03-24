import './JournalItem.css';

function JournalItem({ title, text, date }) {

	const formateDate = new Intl.DateTimeFormat('ru-Ru').format(date);

	return (
		<>
			<h2 className='journal-item__header'>{title}</h2>
			<h2 className='journal-item__body'>
				<h2 className='journal-item__date'>{formateDate}</h2>
				<h2 className='journal-item__text'>{text}</h2>
			</h2>
		</>
	);
}
export default JournalItem;
