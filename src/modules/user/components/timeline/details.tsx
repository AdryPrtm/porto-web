import React from "react";
import Output from "editorjs-react-renderer";
import { EditorJsContent } from "modules/user/types/editor";

type TimelineCardProps = {
	title: string;
	subtitle: string;
	date: string;
	description: EditorJsContent;
	imageUrl: string;
};

export const TimelineCard: React.FC<TimelineCardProps> = ({
	title,
	subtitle,
	date,
	description,
	imageUrl,
}) => {
	return (
		<div className='rounded-2xl overflow-hidden bg-gray-900 shadow-lg w-full max-w-md mx-auto'>
			<div className='h-40 flex items-center justify-center'>
				<img
					src={imageUrl}
					alt='Project thumbnail'
					width={160}
					height={160}
					className='object-cover w-full h-full'
				/>
			</div>

			<div className='p-5'>
				<h3 className='text-xl font-bold text-gray-200 mb-1'>{title}</h3>
				<p className='text-sm text-gray-500 mb-1'>{subtitle}</p>
				<p className='text-xs text-gray-400 uppercase mb-4'>{date}</p>
				<div className='text-gray-200 text-sm mb-4'>
					<Output data={description} />
				</div>
				<button className='w-full'>View Project</button>
			</div>
		</div>
	);
};
