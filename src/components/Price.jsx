import { priceList } from './Contants';
import { SectionName } from '../components/SectionName';

const Price = () => {
	return (
		<section className='goals container-full xl:container mx-auto transition-all duration-300 flex flex-col gap-10 p-10'>
			<SectionName number={'05'}>Курсы по Доступной Цене</SectionName>
			<div className='flex justify-center gap-10 flex-wrap lg:flex-nowrap'>
				{priceList.map(item => (
					<div
						key={item.name}
						className='border flex rounded-xl p-4 md:p-10 w-full lg:w-1/2'
					>
						<div>
							<h4 className='font-bold text-3xl mb-2'>{item.title}</h4>
							<p className='text-xs'>{item.description}</p>
							<div className='flex justify-between items-center'>
								<ul className='pl-2 my-10 list-disc text-sm '>
									{item.list.map(item => (
										<li className='py-1' key={item}>
											{item}
										</li>
									))}
								</ul>
								<img src={item.img} className='w-1/3 h-1/2 hidden lg:flex' />
							</div>
							<h4 className='text-2xl font-bold'>{item.price}</h4>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Price;
