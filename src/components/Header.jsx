import { ArrowUpRight, AlignCenter } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className='container flex justify-between mx-auto h-[95px] items-center'>
			<img src='/images/logo.png' alt='logo' />
			<nav className='hidden lg:flex gap-10 '>
				<a href='#'>Главная</a>
				<a href='#'>О Нас</a>
				<a href='#'>Курсы</a>
				<a href='#'>Отзывы</a>
				<a href='#'>Прайс</a>
				<a href='#'>Команда</a>
				<a href='#'>Контакты</a>
			</nav>
			<nav
				onClick={handleMenuOpen}
				style={{ display: isMenuOpen ? 'none' : 'flex' }}
				className='mobileMenu absolute top-0 bg-slate-800 w-full flex-col items-center'
			>
				<a href='#'>Главная</a>
				<a href='#'>О Нас</a>
				<a href='#'>Курсы</a>
				<a href='#'>Отзывы</a>
				<a href='#'>Прайс</a>
				<a href='#'>Команда</a>
				<a href='#'>Контакты</a>
			</nav>
			<button onClick={handleMenuOpen} className='flex lg:hidden'>
				<AlignCenter />
			</button>
			<button className='border p-2 hover:bg-white hover:text-black transition rounded-lg text-sm flex gap-1 items-center'>
				Отправить запрос
				<ArrowUpRight className='bg-white rounded-full text-black w-4 h-4' />
			</button>
		</header>
	);
};

export default Header;
