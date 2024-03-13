import { useState } from 'react';
import PropTypes from 'prop-types';

export const TeamAccordion2 = ({ list }) => {
	const [activeQuestionId, setActiveQuestionId] = useState(null);

	const toggleTab = questionId => {
		setActiveQuestionId(activeQuestionId === questionId ? null : questionId);
	};

	return (
		<div>
			{list.map((item, index) => (
				<>
					<hr />
					<button
						key={index}
						onClick={() => toggleTab(index)}
						style={{
							height: activeQuestionId === index ? '400px' : '80px',
							flexDirection: item.reverse == true ? 'row-reverse' : 'row',
						}}
						className='flex items-center overflow-hidden transition-all duration-700 w-full text-start md:px-4 focus:outline-none gap-2  p-10 my-10'
					>
						<div
							style={{
								alignItems: item.reverse ? 'end' : 'start',
								textAlign: item.reverse ? 'end' : 'start',
								transform: `translateY(${
									activeQuestionId === index ? '0px' : '94px'
								})`,
							}}
							className='w-full flex mt-5 flex-col justify-between gap-2'
						>
							<h4 className='font-bold text-lg '>{item.name}</h4>
							<p>{item.role}</p>
							<p
								style={{
									opacity: activeQuestionId === index ? '1' : '0',
								}}
								className='w-full md:w-1/2 transition-all duration-700'
							>
								{item.text}
							</p>
						</div>
						{item.img && (
							<img
								src={item.img}
								className='hidden lg:flex rounded-[10px] object-cover transition-all duration-500'
								style={{
									height: activeQuestionId === index ? '320px' : '320px',
								}}
							/>
						)}
					</button>
				</>
			))}
		</div>
	);
};
TeamAccordion2.propTypes = {
	list: PropTypes.array,
};
