import { useState } from "react";
import { usePostCertificateMutation } from "store/items/certificateAPI";

export const Certificates = () => {
	const [certificate, setCertificate] = useState({
		title: "",
		description: "",
		link: "",
		year: "",
	});

	const [postCertificate, { isLoading, isSuccess, isError }] =
		usePostCertificateMutation();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setCertificate((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await postCertificate({
				...certificate,
				year: Number(certificate.year),
			}).unwrap();
			alert("Certificate created successfully!");
			setCertificate({ title: "", description: "", link: "", year: "" });
		} catch (err) {
			alert(`Failed to create certificate. ${err}`);
		}
	};

	return (
		<div className='w-full p-8'>
			<div className='bg-white flex flex-col p-4 space-y-4 rounded-lg'>
				<h1 className='font-bold text-xl'>Create Certificate</h1>
				<form onSubmit={handleSubmit}>
					<div className='flex flex-col space-y-4'>
						<div className='flex flex-col space-y-2'>
							<label className='font-semibold'>Title</label>
							<input
								type='text'
								name='title'
								value={certificate.title}
								onChange={handleInputChange}
								className='border border-gray-300 rounded-lg p-2'
								required
							/>
						</div>
						<div className='flex flex-col space-y-2'>
							<label className='font-semibold'>Description</label>
							<input
								type='text'
								name='description'
								value={certificate.description}
								onChange={handleInputChange}
								className='border border-gray-300 rounded-lg p-2'
								required
							/>
						</div>
						<div className='flex flex-col space-y-2'>
							<label className='font-semibold'>Link</label>
							<input
								type='text'
								name='link'
								value={certificate.link}
								onChange={handleInputChange}
								className='border border-gray-300 rounded-lg p-2'
								required
							/>
						</div>
						<div className='flex flex-col space-y-2'>
							<label className='font-semibold'>Year</label>
							<input
								type='number'
								name='year'
								value={certificate.year}
								onChange={handleInputChange}
								className='border border-gray-300 rounded-lg p-2'
								required
							/>
						</div>
						<button
							type='submit'
							disabled={isLoading}
							className='bg-blue-600 text-white py-2 px-4 rounded-lg'
						>
							{isLoading ? "Submitting..." : "Generate Certificate"}
						</button>
						{isSuccess && (
							<p className='text-green-600'>
								Certificate created successfully.
							</p>
						)}
						{isError && (
							<p className='text-red-600'>Error creating certificate.</p>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};
