import { useEffect } from "react";
import { fetchProjects } from "../store/thunks/projectThunk";
import { format } from "date-fns";
import { useAppDispatch, useAppSelector } from "../store";
import { TimelineItem } from "../components/timeline";

export const ProjectFeatures = () => {
	const dispatch = useAppDispatch();
	const { projects, loading, error } = useAppSelector((state) => state.project);

	// const [open, setOpen] = useState(false);

	useEffect(() => {
		dispatch(fetchProjects());
	}, [dispatch]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!projects.length) return <p>No project data available.</p>;

	// const handleOpen = () => {};

	return (
		<div className='space-y-6 border-l border-gray-800'>
			{projects.map((proj) => (
				<TimelineItem
					key={proj._id}
					title={proj.title}
					subtitle={proj.technology}
					date={format(new Date(proj.createdAt), "MMMM yyyy")}
					description={proj.description}
				/>
			))}
		</div>
	);
};
