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
					key={item.name}
					style={{
						height: activeQuestionId === index ? '200px' : '80px',
					}}
					className='flex border-t w-full overflow-hidden transition-all duration-700'
				>
					<button
						onClick={() => toggleTab(index)}
						className='w-full text-start py-4 px-0 md:px-4 focus:outline-none'
					>
						<h4
							style={
								{
									// paddingTop: activeQuestionId === index ? '0px' : '40px',
								}
							}
							className='font-bold text-lg pb-2 transition duration-500'
						>
							{item.name}
						</h4>

						<div
							style={{
								opacity: activeQuestionId === index ? '1' : '0',
							}}
							className='w-full flex justify-between items-center transition-all duration-500'
						>
							<p className='w-1/2'>{item.text}</p>
						</div>
					</button>
				</div>
			))}
		</div>
	);
};
Accordion.propTypes = {
	list: PropTypes.array,
};
