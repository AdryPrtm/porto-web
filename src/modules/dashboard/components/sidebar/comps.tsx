import { IconType } from "react-icons";

interface SidebarComponentProps {
	icon: IconType;
	title: string;
}

export const SidebarComponent = ({
	icon: Icon,
	title,
}: SidebarComponentProps) => {
	return (
		<div className='flex items-center space-x-4 p-4 bg-slate-300 rounded-lg'>
			<Icon size={24} />
			<h2 className='text-lg'>{title}</h2>
		</div>
	);
};
