import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/sidebar";
import { TopBar } from "./components/topbar";

export const DashboardRoute = () => {
	return (
		<div className='w-screen font-montserrat bg-slate-100'>
			<div className='w-full flex flex-row'>
				<Sidebar />
				<div className='w-full flex flex-col space-y-4'>
					<TopBar />
					<Outlet />
				</div>
			</div>
		</div>
	);
};
