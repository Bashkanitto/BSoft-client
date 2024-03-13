import { reviewsList } from './Constants';
import { SectionName } from './SectionName';
import { ReviewStarRating } from '../utils/ReviewStartRating';

const Reviews = () => {
	return (
		<section
			id='reviews'
			className='container-full lg:container customStyle-container flex flex-col gap-5 p-2 md:p-10'
		>
			<SectionName number={'06'}>От наших любим клиентов</SectionName>
			<div className='justify-center lg:justify-between flex flex-col gap-10'>
				{reviewsList.map(item => (
					<div
						key={item.name}
						style={{ alignSelf: item.reverse ? 'end' : 'start' }}
						className='border p-4 rounded-2xl w-full lg:w-1/2'
					>
						<p className='text-sm mb-5'>{item.text}</p>
						<div className='flex justify-between'>
							<h6>
								{item.name} / {item.role} / {item.study}
							</h6>
							<ul>
								<ReviewStarRating count={item.review} />
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Reviews;
