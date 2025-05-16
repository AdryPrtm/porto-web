import { useGetAllCertificatesQuery } from "store/items/certificateAPI";
import { Certificate } from "../components/certificate";

export const CertificateFeatures = () => {
	const { data, error, isLoading } = useGetAllCertificatesQuery();

	if (isLoading) return <p>Loading...</p>;

	if (error) return <div>Error: {error.toString()}</div>;
	// if (!certificates?.length) return <p>No certificate data available.</p>;

	return (
		<div className='w-full flex flex-col space-y-4'>
			<h1 className='text-2xl font-bold text-center sm:text-left'>
				CERTIFICATE
			</h1>
			<div className='border border-gray-800 p-6 rounded-xl'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{data?.data.map((cert) => (
						<Certificate
							key={cert._id}
							title={cert.title}
							description={cert.description}
							link={cert.link}
							year={cert.year}
							id={cert._id}
						/>
					))}
					{/* <div className='border border-gray-800 px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:font-bold transition-colors duration-300'>
						<div className='flex justify-center'>
							<h2>SHOW ALL CERTIFICATES</h2>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};
