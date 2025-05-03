import { LuExternalLink } from "react-icons/lu";

interface CertificateProps {
	title: string;
	description: string;
	link: string;
	year: number;
	id: string;
}

export const Certificate = ({
	title,
	description,
	link,
	year,
	id,
}: CertificateProps) => {
	return (
		<div className='flex flex-col space-y-1'>
			<h2 className='text-xl font-bold'>{title}</h2>
			<h3 className='text-gray-400'>{description}</h3>
			<p className='text-gray-500'>Issued {year}</p>
			<p className='text-gray-600'>ID: {id}</p>
			<div className='border w-fit p-1 px-4 rounded-lg mt-2 hover:bg-white hover:text-black hover:font-bold transition-colors duration-300'>
				<a
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					className='flex flex-row items-center space-x-2'
				>
					<span>Show Credential</span>
					<LuExternalLink />
				</a>
			</div>
		</div>
	);
};
