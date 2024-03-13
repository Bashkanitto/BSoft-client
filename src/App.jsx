import Courses from './components/Courses';
import Goals from './components/Goals';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Price from './components/Price';
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
			<Price />
			<Footer />
		</div>
	);
}

export default App;
