import { useState } from 'react';
import { teamList } from './Contants';
import { SectionName } from './SectionName';
import { Accordion } from '../utils/Accordion';

const Team = () => {
	return (
		<section
			id='team'
			className='stack container-full lg:container mx-auto transition-all duration-300  flex flex-col gap-5 p-10'
		>
			<SectionName number={'03'}>Наша Команда</SectionName>

			<Accordion list={teamList} />
		</section>
	);
};

export default Team;
