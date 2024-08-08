import { Star } from "lucide-react";

type RatingProps = {
	rating: number;
};

const Rating = ({ rating }: RatingProps) => {
	return [...Array(5)].map((_, index) => (
		<Star
			key={index}
			className={`size-4 ${
				index <= rating ? "text-[#ffc107]" : "text-[#e4e5e9]"
			}`}
		/>
	));
};

export default Rating;
