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
				<div key={item.question} className='border-t'>
					<button
						onClick={() => toggleTab(index)}
						className='w-full text-start py-4 focus:outline-none'
					>
						<h4 className='font-bold text-lg'>{item.question}</h4>
					</button>
					{activeQuestionId === index && (
						<div className='pb-4 w-full md:w-2/3'>
							<p>{item.answer}</p>
						</div>
					)}
				</div>
			))}
		</div>
	);
};
Accordion.propTypes = {
	list: PropTypes.array,
};
