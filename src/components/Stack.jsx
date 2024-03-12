import { stackList } from './Contants';

const Stack = () => {
	return (
		<section className='stack container-full lg:container mx-auto transition-all duration-300  flex flex-col gap-5 p-10'>
			<div className='stack-intro flex flex-col md:flex-row items-center gap-3'>
				<span className='border rounded-lg p-2'>O1</span>
				<h3 className='text-2xl text-center'>
					Стэк технологий с которыми работаем
				</h3>
			</div>
			<p className='w-full md:w-1/2 text-center md:text-start'>
				Наш подход к обучению строится на практике. Вы не только узнаете теорию,
				но и примените ее на практике через реальные проекты и задачи.
			</p>
			<div className='stack-items flex flex-wrap justify-center xl:justify-between'>
				{stackList.map(item => (
					<img className='p-5' key={item.name} src={item.img} alt='stackItem' />
				))}
			</div>
		</section>
	);
};

export default Stack;
