export const SectionName = ({ number, children }) => {
	return (
		<div className='devide flex flex-col md:flex-row'>
			<div className='devide-item'>
				<div className='courses-intro flex flex-col md:flex-row items-center gap-3 mb-4'>
					<span className='border rounded-lg py-2 px-3'>{number}</span>
					<h3 className='text-2xl text-center'>{children}</h3>
				</div>
			</div>
		</div>
	);
};
