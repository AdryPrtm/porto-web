import { MdSpaceDashboard } from "react-icons/md";
import { SidebarComponent } from "./comps";

export const Sidebar = () => {
	return (
		<div className='h-screen w-1/4 flex flex-col bg-white'>
			<div className='w-full flex flex-row items-center justify-center space-x-4 p-4'>
				<img className='h-12' src='/assets/logo.png' alt='' />
				<h1 className='text-2xl font-extrabold'>DASHBOARD</h1>
			</div>
			<div className='flex flex-col space-y-4 p-4'>
				<SidebarComponent icon={MdSpaceDashboard} title='Dashboard' />
				<SidebarComponent icon={MdSpaceDashboard} title='Dashboard' />
				<SidebarComponent icon={MdSpaceDashboard} title='Dashboard' />
				<SidebarComponent icon={MdSpaceDashboard} title='Dashboard' />
				<SidebarComponent icon={MdSpaceDashboard} title='Dashboard' />
			</div>
		</div>
	);
};
