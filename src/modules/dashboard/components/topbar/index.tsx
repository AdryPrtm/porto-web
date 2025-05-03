import { MdKeyboardArrowDown, MdNotificationsNone } from "react-icons/md";

export const TopBar = () => {
	return (
		<div className='w-full bg-white'>
			<div className='flex flex-row justify-end items-center p-6 px-8 space-x-12'>
				<div className=''>
					<MdNotificationsNone size={36} />
				</div>
				<div className='flex flex-row items-center space-x-4'>
					<img className='h-12' src='/public/assets/logo.png' alt='' />
					<div className='flex flex-row items-center space-x-4'>
						<div className='flex flex-col'>
							<h2 className='text-xl font-bold'>Adryan Pratama</h2>
							<h4 className='text-sm'>Administrator</h4>
						</div>
						<MdKeyboardArrowDown size={24} />
					</div>
				</div>
			</div>
		</div>
	);
};
