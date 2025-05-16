// components/ProjectForm.tsx
import React, { useState } from "react";
import Editor from "../components/form/editor/editor";
import { OutputData } from "@editorjs/editorjs";
import { usePostProjectMutation } from "store/items/projectAPI";

export const ProjectForm = () => {
	const [postProject, { isLoading, isSuccess, isError }] =
		usePostProjectMutation();

	const [formData, setFormData] = useState({
		title: "",
		description: {} as OutputData,
		technology: "",
		project_thumbnail_image: "",
		year: "",
		link: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleEditorChange = (data: OutputData) => {
		setFormData((prev) => ({ ...prev, description: data }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			await postProject(formData).unwrap();
			alert("Project submitted successfully!");
			setFormData({
				title: "",
				description: {} as OutputData,
				technology: "",
				project_thumbnail_image: "",
				year: "",
				link: "",
			});
		} catch (err) {
			console.error("Error submitting project:", err);
			alert(`Error submitting project. ${err}`);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-6 bg-white p-6 rounded-lg shadow-md'
		>
			<div className='flex flex-col'>
				<label htmlFor='title' className='mb-2 font-medium text-gray-700'>
					Title
				</label>
				<input
					id='title'
					name='title'
					type='text'
					value={formData.title}
					onChange={handleChange}
					className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
					required
				/>
			</div>

			<div className='flex flex-col'>
				<label className='mb-2 font-medium text-gray-700'>Description</label>
				<Editor
					data={formData.description}
					onChange={handleEditorChange}
					holder='project-editorjs-container'
				/>
			</div>

			<div className='flex flex-col'>
				<label htmlFor='technology' className='mb-2 font-medium text-gray-700'>
					Technology
				</label>
				<input
					id='technology'
					name='technology'
					type='text'
					value={formData.technology}
					onChange={handleChange}
					className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
					required
				/>
			</div>

			<div className='flex flex-col'>
				<label htmlFor='year' className='mb-2 font-medium text-gray-700'>
					Year
				</label>
				<input
					id='year'
					name='year'
					type='month'
					value={formData.year}
					onChange={handleChange}
					className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
					required
				/>
			</div>

			<div className='flex flex-col'>
				<label htmlFor='link' className='mb-2 font-medium text-gray-700'>
					Project Link
				</label>
				<input
					id='link'
					name='link'
					type='url'
					value={formData.link}
					onChange={handleChange}
					className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
					placeholder='https://your-project-link.com'
				/>
			</div>

			<div className='flex flex-col'>
				<label
					htmlFor='project_thumbnail_image'
					className='mb-2 font-medium text-gray-700'
				>
					Thumbnail Image URL
				</label>
				<input
					id='project_thumbnail_image'
					name='project_thumbnail_image'
					type='text'
					value={formData.project_thumbnail_image}
					onChange={handleChange}
					className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			<button
				type='submit'
				className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition'
				disabled={isLoading}
			>
				{isLoading ? "Submitting..." : "Submit"}
			</button>

			{isSuccess && <p className='text-green-600'>Submitted successfully.</p>}
			{isError && <p className='text-red-600'>Submission failed.</p>}
		</form>
	);
};
