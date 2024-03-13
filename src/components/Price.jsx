import { priceList } from './Contants';

const Price = () => {
	return (
		<section className='goals container-full xl:container mx-auto transition-all duration-300 flex flex-col gap-10 p-10'>
			<div className='courses-intro flex flex-col md:flex-row items-center gap-3 mb-4'>
				<span className='border rounded-lg p-2'>04</span>
				<h3 className='text-2xl text-center'>Курсы по доступной цене</h3>
			</div>
			<div className='flex justify-center gap-10 flex-wrap lg:flex-nowrap'>
				{priceList.map(item => (
					<div
						key={item.name}
						className='border flex rounded-xl p-10 items- w-1/2'
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
