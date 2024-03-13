import { stackList } from './Constants';
import { SectionName } from './SectionName';

const Stack = () => {
	return (
		<section
			id='about'
			className='stack container-full lg:container mx-auto transition-all duration-300  flex flex-col gap-5 p-10'
		>
			<SectionName number={'01'}>
				Стэк Технологии с которыми работаем
			</SectionName>

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
