import PropTypes from 'prop-types';
import { Star } from 'lucide-react';

export const ReviewStarRating = ({ count, outOf = 5 }) => {
	const stars = Array.from({ length: outOf }, (_, index) => (
		<Star key={index} fill={index < count ? 'currentColor' : 'none'} />
	));

	return <div className='flex gap-1 w-20'>{stars}</div>;
};

ReviewStarRating.propTypes = {
	count: PropTypes.number.isRequired,
	outOf: PropTypes.number,
};
