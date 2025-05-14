// import { useEffect } from "react";
import { Intro } from "../components/intro";
import { useGetProfileQuery } from "store/user/userAPI";

export const IntroFeatures = () => {
	const { data, isLoading, error } = useGetProfileQuery();

	if (isLoading) return <p>Loading...</p>;
	if (error) return <div>Error: {error.toString()}</div>;

	return (
		<div>
			<Intro
				name={data?.data[0].name}
				description={data?.data[0].bio}
				imageUrl={data?.data[0].image}
			/>
		</div>
	);
};
