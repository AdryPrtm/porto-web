import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface SidebarComponentProps {
	icon: IconType;
	title: string;
	link: string;
}

export const SidebarComponent = ({
	icon: Icon,
	title,
	link,
}: SidebarComponentProps) => {
	const navigate = useNavigate();

	return (
		<div
			onClick={() => navigate(link)}
			className='flex items-center space-x-4 p-4 bg-slate-300 rounded-lg'
		>
			<Icon size={24} />
			<h2 className='text-lg'>{title}</h2>
		</div>
	);
};
