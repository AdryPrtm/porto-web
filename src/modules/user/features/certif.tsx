import { useEffect } from "react";
import { fetchCertificates } from "../store/thunks/certificateThunk";
import { useAppDispatch, useAppSelector } from "../store";
import { Certificate } from "../components/certificate";

export const CertificateFeatures = () => {
	const dispatch = useAppDispatch();
	const { certificates, loading, error } = useAppSelector(
		(state) => state.certificate
	);

	useEffect(() => {
		dispatch(fetchCertificates());
	}, [dispatch]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!certificates.length) return <p>No certificate data available.</p>;

	return (
		<div className='w-full flex flex-col space-y-4'>
			<h1 className='text-2xl font-bold'>CERTIFICATE</h1>
			<div className='border border-gray-800 p-6 rounded-xl'>
				<div className='flex flex-col space-y-6'>
					{certificates.map((cert) => (
						<Certificate
							key={cert._id}
							title={cert.title}
							description={cert.description}
							link={cert.link}
							year={cert.year}
							id={cert._id}
						/>
					))}
					<div className='border border-gray-800 px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:font-bold transition-colors duration-300'>
						<div className='flex justify-center'>
							<h2>SHOW ALL CERTIFICATES</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
