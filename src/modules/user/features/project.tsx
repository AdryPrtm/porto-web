import { format } from "date-fns";
import { TimelineItem } from "../components/timeline";
import { useGetAllProjectsQuery } from "store/items/projectAPI";

export const ProjectFeatures: React.FC = () => {
	const { data, error, isLoading } = useGetAllProjectsQuery();

	// const [open, setOpen] = useState(false);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	// const handleOpen = () => {};

	return (
		<div className='space-y-6 border-l border-gray-800'>
			{data.map((data) => (
				<TimelineItem
					key={data._id}
					title={data.title}
					subtitle={data.technology}
					date={format(new Date(data.createdAt), "MMMM yyyy")}
					description={data.description}
				/>
			))}
		</div>
	);
};
