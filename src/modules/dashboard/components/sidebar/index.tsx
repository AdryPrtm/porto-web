import { MdSpaceDashboard } from "react-icons/md";
import { SidebarComponent } from "./comps";

export const Sidebar = () => {
	const menus = [
		{ icon: MdSpaceDashboard, title: "Dashboard", link: "/dashboard" },
		{ icon: MdSpaceDashboard, title: "Profile", link: "/dashboard/profile" },
		{
			icon: MdSpaceDashboard,
			title: "Experience",
			link: "/dashboard/experience",
		},
		{ icon: MdSpaceDashboard, title: "Project", link: "/dashboard/project" },
		{
			icon: MdSpaceDashboard,
			title: "Certificate",
			link: "/dashboard/certificate",
		},
	];

	return (
		<div className='h-screen w-1/4 flex flex-col bg-white'>
			{/* <div className='w-full flex flex-row items-center justify-center p-8'> */}
			{/* <img className='h-12' src='/assets/logo.png' alt='' /> */}
			{/* <h1 className='text-2xl font-extrabold'>DASHBOARD</h1> */}
			{/* </div> */}
			<div className='flex flex-col space-y-4 p-4'>
				{menus.map((menu, index) => (
					<SidebarComponent
						key={index}
						icon={menu.icon}
						title={menu.title}
						link={menu.link}
					/>
				))}
			</div>
		</div>
	);
};
