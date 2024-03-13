import { useState } from 'react';
import PropTypes from 'prop-types';

export const TeamAccordion2 = ({ list }) => {
	const [activeQuestionId, setActiveQuestionId] = useState(null);

	const toggleTab = questionId => {
		setActiveQuestionId(activeQuestionId === questionId ? null : questionId);
	};

	return (
		<>
			{list.map((item, index) => (
				<button
					key={index}
					onClick={() => toggleTab(index)}
					style={{
						height: activeQuestionId === index ? '400px' : '80px',
						flexDirection: item.reverse == true ? 'row-reverse' : 'row',
						border: activeQuestionId == index && '1px solid white',
						borderTop: '1px solid white',
						borderRadius: activeQuestionId == index ? '20px' : '0',
					}}
					className='flex items-center overflow-hidden transition-all duration-700 w-full text-start md:px-4 focus:outline-none gap-2  p-10'
				>
					<div
						style={{
							alignItems: item.reverse ? 'end' : 'start',
							textAlign: item.reverse ? 'end' : 'start',
						}}
						className='w-full flex  flex-col justify-between gap-2'
					>
						<h4 className='font-bold text-lg '>{item.name}</h4>
						<p>{item.role}</p>
						<p
							style={{
								opacity: activeQuestionId === index ? '1' : '0',
							}}
							className='w-1/2'
						>
							{item.text}
						</p>
					</div>
					{item.img && (
						<img
							src={item.img}
							className=' rounded-[10px] object-cover transition-all duration-500'
							style={{
								height: activeQuestionId === index ? '320px' : '320px',
							}}
						/>
					)}
				</button>
			))}
		</>
	);
};
TeamAccordion2.propTypes = {
	list: PropTypes.array,
};
