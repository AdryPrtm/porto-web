import {
	FaArrowRight,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaRegCopyright,
	FaTwitter,
} from "react-icons/fa";

export const Contact = () => {
	return (
		<div className='bg-stone-950'>
			<div className='container mx-auto p-14 flex flex-col space-y-8'>
				<div className='flex flex-row space-x-20'>
					<div className='flex flex-col space-y-2'>
						<h3 className='font-semibold text-lg'>REACH ME</h3>
						<div className='flex flex-row items-center space-x-2'>
							<a href=''>Email</a>
							<FaArrowRight size={12} />
						</div>
					</div>
					<div className='flex flex-col space-y-2'>
						<h3 className='font-semibold text-lg'>SOCIAL</h3>
						<div className='flex flex-row space-x-4 text-2xl'>
							<FaLinkedin />
							<FaGithub />
							<FaInstagram />
							<FaTwitter />
						</div>
					</div>
				</div>
				<div className='flex flex-col space-y-4'>
					<div className='border border-stone-800'></div>
					<div className='flex flex-row justify-end items-center space-x-4 text-sm text-stone-800'>
						<FaRegCopyright size={10} />
						<p>Mabaryok</p>
					</div>
				</div>
			</div>
		</div>
	);
};
