import { goalsList } from './Contants';

const Goals = () => {
	return (
		<section className='goals container-full xl:container mx-auto transition-all duration-300 flex md:flex-row gap-10 p-10 lg:flex-nowrap flex-wrap'>
			{goalsList.map(item => (
				<div
					key={item.name}
					className='relative flex flex-col p-10 gap-4 bg-center bg-cover'
					style={{ backgroundImage: `url(${item.img})` }}
				>
					<h4 className='font-bold text-2xl'>{item.title}</h4>
					<p className='text-sm'>{item.text}</p>
				</div>
			))}
		</section>
	);
};

export default Goals;
