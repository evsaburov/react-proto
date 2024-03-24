import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';

function App() {

	const data = [
		{
			title: 'test',
			text: 'test',
			data: '1.1.1111'
		},
		{
			title: 'test2',
			text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quasi, quae odit in quaerat placeat iusto nesciunt aliquam unde, ab repudiandae repellendus reiciendis explicabo ipsam veniam libero ducimus laboriosam debitis.,',
			data: '1.1.1112'
		}

	];

	return (<>
		<h1>Заголовок</h1>
		<p>Текст</p>
		<Button />
		<CardButton>
			<JournalItem title={data[0].title} text={data[0].text} date={new Date()} />
		</CardButton>
		<JournalItem title={data[1].title} text={data[1].text} date={new Date()} />

	</>);

}

export default App;
