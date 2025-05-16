import { format } from "date-fns";
import { TimelineItem } from "../components/timeline";
import { useGetAllExperiencesQuery } from "store/items/experienceAPI";
// import a renderer for EditorJsContent if you have one
// import { EditorJsRenderer } from "../components/EditorJsRenderer";

export const ExperienceFeatures: React.FC = () => {
	const { data, error, isLoading } = useGetAllExperiencesQuery();

	if (isLoading) return <p>Loading...</p>;
	if (error) return <div>Error: {error.toString()}</div>;

	return (
		<div className='space-y-6 border-l border-gray-800'>
			{data?.data.map((exp) => (
				<TimelineItem
					key={exp._id}
					title={exp.position}
					subtitle={exp.entity}
					date={`${format(new Date(exp.startDate), "MMMM yyyy")} - ${
						exp.endDate ? format(new Date(exp.endDate), "MMMM yyyy") : "Present"
					}`}
					// If you have a renderer for EditorJsContent, use it here
					// description={<EditorJsRenderer data={exp.description} />}
					description={exp.description}
				/>
			))}
		</div>
	);
};
