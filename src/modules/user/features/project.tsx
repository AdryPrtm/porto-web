import { memo, useMemo } from "react";
import { format } from "date-fns";
import { useGetAllProjectsQuery } from "store/items/projectAPI";
import { CardWimages } from "../components/cards/cardImages";

export const ProjectFeatures = memo(() => {
	const { data, error, isLoading } = useGetAllProjectsQuery();
	console.log(data);

	const sortedProjects = useMemo(() => {
		if (!data?.data) return [];
		return [...data.data]
			.sort(
				(a, b) =>
					new Date(b.year + "-01").getTime() -
					new Date(a.year + "-01").getTime()
			)
			.map((proj) => ({
				...proj,
				formattedDate: format(new Date(proj.year), "MMMM yyyy"),
				imageUrl: proj.project_thumbnail_image,
			}));
	}, [data]);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.toString()}</p>;
	if (!data?.data?.length) return <p>No Project data available.</p>;

	return (
		<div className='w-full flex flex-col space-y-4'>
			<h1 className='text-2xl font-bold text-center sm:text-left'>Project</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{sortedProjects.map((proj) => (
					<CardWimages
						key={proj._id}
						title={proj.title}
						date={proj.formattedDate}
						subtitle={proj.technology}
						link={proj.link}
						description={proj.description}
						imageUrl={proj.imageUrl}
					/>
				))}
			</div>
		</div>
	);
});
