import { format } from "date-fns";
import { TimelineItem } from "../components/timeline";
import { useGetExperiencesQuery } from "../store/apiSlice";

export const ExperienceFeatures: React.FC = () => {
  const { data: experiences, error, isLoading } = useGetExperiencesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <div>Error: {error.toString()}</div>;

  if (!experiences?.length) {
    return <p>No experience data available.</p>;
  }

  return (
    <div className="space-y-6 border-l border-gray-800">
      {experiences.map((exp) => (
        <TimelineItem
          key={exp.id}
          title={exp.title}
          subtitle={`${exp.company} - ${exp.location}`}
          date={`${format(new Date(exp.startDate), "MMMM yyyy")} - ${
            exp.endDate ? format(new Date(exp.endDate), "MMMM yyyy") : "Present"
          }`}
          description={
            <ul className="list-disc pl-5 space-y-1">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      ))}
    </div>
  );
};
