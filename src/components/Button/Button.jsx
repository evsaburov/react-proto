import './Button.css';
import { useState } from 'react'; 'React';

function Button() {

	const [text, setText] = useState('save');

	const clicked = () => {
		setText('close');
		console.log('hello');
	};

	return (
		< button onClick = { clicked } className = 'button accent' >
			{ text }
		</button >
	);
}

export default Button;
