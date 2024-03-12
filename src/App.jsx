import Courses from './components/Courses';
import Header from './components/Header';
import Hero from './components/Hero';
import Stack from './components/Stack';

function App() {
	return (
		<div className='flex flex-col gap-10'>
			<Header />
			<Hero />
			<Stack />
			<Courses />
		</div>
	);
}

export default App;
