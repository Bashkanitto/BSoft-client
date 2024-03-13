import { useState } from 'react';
import PropTypes from 'prop-types';
export const TeamAccordion = ({ list }) => {
	const [activeQuestionId, setActiveQuestionId] = useState(null);

	const toggleTab = questionId => {
		setActiveQuestionId(activeQuestionId === questionId ? null : questionId);
	};

	return (
		<>
			{list.map((item, index) => (
				<div
					key={item.name}
					style={{
						height: activeQuestionId === index ? '400px' : '80px',
					}}
					className='flex items-center w-full overflow-hidden transition-all duration-700'
				>
					<button
						onClick={() => toggleTab(index)}
						style={{
							flexDirection: item.reverse == true ? 'row-reverse' : 'row',
							border: activeQuestionId == index ? '1px solid white' : '0',
							borderRadius: activeQuestionId == index ? '20px' : '0',
						}}
						className='w-full text-start md:px-4 focus:outline-none flex gap-2  p-10'
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
								className='w-1/2 rounded-[10px] object-cover transition-all duration-500'
								style={{
									height: activeQuestionId === index ? '320px' : '320px',
								}}
							/>
						)}
					</button>
				</div>
			))}
		</>
	);
};
TeamAccordion.propTypes = {
	list: PropTypes.array,
};
