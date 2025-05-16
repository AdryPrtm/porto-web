import { memo, useState } from "react";
import Output from "editorjs-react-renderer";
import { EditorJsContent } from "types/editorTypes";

interface CardProps {
	title: string;
	date: string;
	subtitle: string;
	link?: string;
	description?: EditorJsContent;
	imageUrl?: string;
}

export const CardWimages = memo(
	({ title, date, subtitle, link, description, imageUrl }: CardProps) => {
		const [showMore, setShowMore] = useState(false);
		return (
			<div className='flex flex-wrap justify-center gap-4'>
				<div className='bg-black border border-gray-700 text-white rounded-lg overflow-hidden shadow-md flex flex-col mx-6 sm:mx-4 md:mx-1'>
					{/* Image */}

					<div className='h-48 w-full'>
						<img
							src={imageUrl ? imageUrl : "/assets/placeholder.png"}
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Content */}
					<div className='flex flex-col justify-between flex-grow p-4'>
						<div className='space-y-2'>
							<h3
								className={`text-xl font-semibold mb-1 ${
									showMore ? "" : "line-clamp-1"
								}`}
							>
								{title}
							</h3>
							<div className='flex justify-between text-sm text-gray-400 mb-2'>
								<span>{date}</span>
							</div>
							<div
								className={`text-sm text-gray-400 ${
									showMore ? "" : "line-clamp-1"
								}`}
							>
								{subtitle}
							</div>

							{/* Description truncated */}
							<div
								className={`text-gray-300 mb-2 transition-all duration-300 ease-in-out ${
									showMore ? "" : "line-clamp-3"
								}`}
							>
								<Output data={description} />
							</div>
							<button
								onClick={() => setShowMore((prev) => !prev)}
								className='text-blue-400 text-sm hover:underline'
							>
								{showMore ? "Show less" : "Show more"}
							</button>
						</div>

						{/* Button */}
						<div className='mt-4'>
							{link ? (
								<a
									href={link}
									target='_blank'
									className='block text-center bg-white text-black px-4 py-2 text-sm font-medium rounded hover:bg-gray-300 transition'
								>
									Project Link
								</a>
							) : (
								<div className='block text-center border border-gray-900 text-stone-500 px-4 py-2 text-sm font-medium rounded'>
									No Available link
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
);
