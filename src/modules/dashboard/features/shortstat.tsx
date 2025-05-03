import { MdOutlineAnalytics } from "react-icons/md";

export const ShortStat = () => {
	return (
		<div className='w-full p-4'>
			<div className='flex flex-row justify-between space-x-4'>
				<div className='bg-white w-1/3 flex flex-col space-y-2 p-8 rounded-lg'>
					<MdOutlineAnalytics size={48} />
					<h1 className='text-4xl font-bold'>2131</h1>
					<h4>Total Pendaftar</h4>
				</div>
				<div className='bg-white w-1/3 flex flex-col space-y-2 p-8 rounded-lg'>
					<MdOutlineAnalytics size={48} />
					<h1 className='text-4xl font-bold'>2131</h1>
					<h4>Total Pendaftar</h4>
				</div>
				<div className='bg-white w-1/3 flex flex-col space-y-2 p-8 rounded-lg'>
					<MdOutlineAnalytics size={48} />
					<h1 className='text-4xl font-bold'>2131</h1>
					<h4>Total Pendaftar</h4>
				</div>
			</div>
		</div>
	);
};
