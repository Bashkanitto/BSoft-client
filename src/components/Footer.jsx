const Footer = () => {
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
			<div className='flex gap-5'>
				<button className='border p-2 hover:bg-white hover:text-black transition rounded-lg text-sm flex gap-1 items-center'>
					instagram
				</button>
				<button className='border p-2 hover:bg-white hover:text-black transition rounded-lg text-sm flex gap-1 items-center'>
					Tik Tok
				</button>
			</div>
		</header>
	);
};

export default Footer;
