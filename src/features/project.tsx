import { memo, useMemo } from "react";
import { format } from "date-fns";
import { CardWimages } from "../components/cards/cardImages";
import { useGetProjectsQuery } from "../store/apiSlice";

export const ProjectFeatures = memo(() => {
  const { data: projects, error, isLoading } = useGetProjectsQuery();

  const sortedProjects = useMemo(() => {
    if (!projects) return [];
    return [...projects]
      .sort(
        (a, b) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      )
      .map((proj) => {
        return {
          ...proj,
          formattedDate: format(new Date(proj.startDate), "MMMM yyyy"),
          technologiesString: proj.technologies.join(", "),
          description: proj.description,
        };
      });
  }, [projects]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.toString()}</p>;
  if (!projects?.length) return <p>No Project data available.</p>;

  return (
    <div className="w-full flex flex-col space-y-4">
      <h1 className="text-2xl font-bold text-center sm:text-left">Project</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProjects.map((proj) => (
          <CardWimages
            key={proj.id}
            title={proj.title}
            date={proj.formattedDate}
            subtitle={proj.technologiesString}
            link={proj.liveUrl}
            description={proj.description}
            imageUrl={proj.imageUrl}
          />
        ))}
      </div>
    </div>
  );
});
