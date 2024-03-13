import { useState } from 'react';
import PropTypes from 'prop-types';
export const Accordion = ({ list }) => {
	const [activeQuestionId, setActiveQuestionId] = useState(null);

	const toggleTab = questionId => {
		setActiveQuestionId(activeQuestionId === questionId ? null : questionId);
	};

	return (
		<div>
			{list.map((item, index) => (
				<div
					key={item.question}
					style={{
						height: activeQuestionId === index ? '400px' : '80px',
					}}
					className='flex items-center border-t w-full overflow-hidden transition-all duration-700'
				>
					<button
						onClick={() => toggleTab(index)}
						className='w-full text-start py-4 px-0 md:px-4 focus:outline-none'
					>
						<h4 className='font-bold text-lg'>{item.name}</h4>
						<div className='py-4 w-full flex  justify-between items-center'>
							<p className='w-1/2'>{item.text}</p>
							{item.img && (
								<img
									src={item.img}
									alt=''
									className='w-[300px] rounded-[15%] object-cover object-10'
									style={{
										height: activeQuestionId === index ? '400px' : '80px',
									}}
								/>
							)}
						</div>
						{/* )} */}
					</button>
				</div>
			))}
		</div>
	);
};
Accordion.propTypes = {
	list: PropTypes.array,
};
