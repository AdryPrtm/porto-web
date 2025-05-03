import React, { useState } from "react";
// import Output from "editorjs-react-renderer";
import { EditorJsContent } from "modules/user/types/editor";
import { FaXmark } from "react-icons/fa6";
import { TimelineCard } from "./details";

type TimelineItemProps = {
	title: string;
	subtitle: string;
	date: string;
	description: EditorJsContent;
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
	title,
	subtitle,
	date,
	description,
}) => {
	const [opened, setOpened] = useState(false);

	const handleOpen = () => {
		return setOpened(!opened);
	};

	return (
		<div className='relative pl-6 pb-6'>
			<div onClick={() => handleOpen()} className='flex flex-row items-center'>
				{opened ? (
					<div className='absolute flex items-center justify-center -left-2 w-4 h-4 bg-yellow-400 rounded-full transition-all duration-300'>
						<FaXmark
							size={12}
							color='black'
							className='transition-transform duration-300'
						/>
					</div>
				) : (
					<div className='absolute -left-1 w-2 h-2 bg-yellow-400 rounded-full transition-all duration-300'></div>
				)}

				<h3 className='text-xl font-semibold text-white'>{title}</h3>
			</div>
			<h4 className='text-lg text-gray-400'>{subtitle}</h4>
			<p className='text-sm text-gray-500 uppercase tracking-wide'>{date}</p>

			{/* <div className='text-gray-300 mt-2'>
				<Output data={description} />
			</div> */}

			{opened && (
				<div
					className={`absolute left-8 top-0 align-middle z-50 transition-all duration-300 ${
						opened ? "animate-fade-in" : "animate-fade-out"
					}`}
				>
					<TimelineCard
						title={title}
						subtitle={subtitle}
						date={date}
						description={description}
						imageUrl={"/public/assets/placeholder.png"}
					/>
				</div>
			)}
		</div>
	);
};
