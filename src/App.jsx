import Courses from './components/Courses';
import Goals from './components/Goals';
import Header from './components/Header';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Team from './components/Team';

function App() {
	return (
		<div className='flex flex-col gap-10'>
			<Header />
			<Hero />
			<Stack />
			<Courses />
			<Team />
			<Goals />
		</div>
	);
}

export default App;
