import { useState } from 'react';
import { teamList } from './Contants';
import { SectionName } from './SectionName';

const Team = () => {
	const [isActiveTab, setIsActiveTab] = useState(false);

	const toggleTab = e => {
		setIsActiveTab(e);
	};

	return (
		<section
			id='team'
			className='stack container-full lg:container mx-auto transition-all duration-300  flex flex-col gap-5 p-10'
		>
			<SectionName number={'03'}>Наша Команда</SectionName>

			{teamList.map(item => (
				<button
					onClick={e => toggleTab(e)}
					key={item.name}
					style={{
						flexDirection: item.reverse ? 'row-reverse' : 'row',
						border: isActiveTab ? '1px solid white' : 'none',
					}}
					className='flex items-center gap-10 justify-between'
				>
					<div className=' flex flex-col text-start p-10'>
						<div
							className='flex gap-10'
							style={{ flexDirection: item.reverse ? 'row-reverse' : 'row' }}
						>
							<h3 className='font-bold text-lg mb-2'>{item.name}</h3>
							<p className='mb-10'>{item.role}</p>
						</div>
						<p>{item.text}</p>
					</div>
					<img
						style={{
							width: '400px',
							height: isActiveTab ? '400px' : '100px',
							objectFit: 'cover',
							objectPosition: ' 100% 20%',
						}}
						src={item.img}
					/>
				</button>
			))}
		</section>
	);
};

export default Team;
