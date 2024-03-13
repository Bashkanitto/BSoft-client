import { teamList } from './Constants';
import { SectionName } from './SectionName';
import { TeamAccordion2 } from '../utils/TeamAccordion2';

const Team = () => {
	return (
		<section
			id='team'
			className='stack container-full lg:container mx-auto transition-all duration-300  flex flex-col gap-5 p-10'
		>
			<SectionName number={'03'}>Наша Команда</SectionName>

			<TeamAccordion2 list={teamList} />
		</section>
	);
};

export default Team;
