const Footer = () => {
	return (
		<header className='container flex justify-between mx-auto h-[95px] items-center p-5'>
			<img src='/images/logo.png' alt='logo' />
			<nav className='hidden lg:flex gap-10 '>
				<a href='#main'>Главная</a>
				<a href='#stack'>О Нас</a>
				<a href='#courses'>Курсы</a>
				<a href='#reviews'>Отзывы</a>
				<a href='#price'>Прайс</a>
				<a href='#team'>Команда</a>
				<a href='#contact'>Контакты</a>
			</nav>
			<div className='flex gap-5'>
				<a
					href='https://www.instagram.com/bsoft_smavy/'
					className='border p-2 hover:bg-white hover:text-black transition rounded-lg text-sm flex gap-1 items-center'
				>
					instagram
				</a>
				<button className='border p-2 hover:bg-white hover:text-black transition rounded-lg text-sm flex gap-1 items-center'>
					Tik Tok
				</button>
			</div>
		</header>
	);
};

export default Footer;
