import { stackList } from './Contants';

const Courses = () => {
	const coursesList = [
		{
			name: 'ReactJs from Zero to Hero',
			img: 'images/imgCourse1.png',
		},
		{
			name: 'NodeJs from Zero to Hero',
			img: 'images/imgCourse2.png',
		},
		{
			name: 'Data Analysis with Python',
			img: 'images/imgCourse3.png',
		},
	];
	return (
		<section className='courses container-full lg:container mx-auto transition-all duration-300 flex flex-col gap-5 p-10'>
			<div className='devide flex flex-col md:flex-row'>
				<div className='devide-item'>
					<div className='courses-intro flex flex-col md:flex-row items-center gap-3 mb-4'>
						<span className='border rounded-lg p-2'>02</span>
						<h3 className='text-2xl text-center'>Мы предлагаем Курсы</h3>
					</div>
					<p className='w-full md:w-4/5 text-center md:text-start mb-4'>
						Здесь вы найдете широкий выбор обучающих программ, позволяющих
						расширить ваши знания и навыки в области информационных технологий.
						Независимо от вашего уровня подготовки и профессионального опыта, мы
						предлагаем курсы, отвечающие самым актуальным требованиям
						современной индустрии.
					</p>
				</div>
				<div className='stackBtns flex flex-wrap gap-3 w-full md:w-5/6 h-[70px]'>
					{stackList.map(item => (
						<button
							className='border rounded-lg flex p-2 items-center gap-2 h-[30px]'
							key={item}
						>
							<img className='w-[20px]' src={item.img} alt={item.name} />
							{item.name}
						</button>
					))}
				</div>
			</div>
			<div className='courses-items justify-between flex flex-wrap gap-10'>
				{coursesList.map(item => (
					<div key={item.name} className='relative'>
						<img
							className='w-[370px] h-[400px] rounded-2xl'
							src={item.img}
							alt='stackItem'
						/>
						<button className='absolute bottom-0 border rounded-lg p-1 text-sm m-2 hover:bg-white hover:text-black transition duration-500'>
							{item.name}
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Courses;
