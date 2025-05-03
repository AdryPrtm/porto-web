export const Interest = () => {
	const links = ["React.js", "React.js", "React.js", "React.js"];

	return (
		<div className='relative flex flex-col space-y-4'>
			<h2 className='text-3xl font-bold'>INTEREST</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor
				non alias distinctio ea! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Itaque dolor non alias distinctio
			</p>
			<div className='flex flex-row space-x-4 justify-center'>
				{links.map((link, index) => (
					<div key={index} className={`flex flex-row space-x-4 items-center`}>
						{index !== 0 && <div className='rounded w-2 h-2 bg-white'></div>}
						<a href=''>{link}</a>
					</div>
				))}
			</div>
		</div>
	);
};
