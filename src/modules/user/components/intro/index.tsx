interface IntroProps {
	name: string;
	description: string;
	imageUrl: string;
}

export const Intro = ({ name, description, imageUrl }: IntroProps) => {
	return (
		<div className='relative flex flex-row justify-around items-center'>
			<div className='relative w-1/2 flex flex-col space-y-4 z-10'>
				<div className='flex flex-row items-center space-x-4'>
					<div className='border-b w-8'></div>
					<h4 className='text-xl'>Hello,</h4>
				</div>
				<h1 className='font-russo text-7xl'>{name}</h1>
				<h3 className='text-xl line-clamp-3'>{description}</h3>
			</div>
			<div className='relative w-1/4 z-10'>
				<img
					src={imageUrl ? imageUrl : "/public/assets/placeholder.png"}
					alt='photo'
					className='rounded-4xl -rotate-6 hover:rotate-0 transition-transform duration-300'
				/>
			</div>
		</div>
	);
};
