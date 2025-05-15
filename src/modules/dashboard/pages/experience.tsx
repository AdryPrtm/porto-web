// components/ExperienceForm.tsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ExperienceRequest } from "types/experienceTypes";
import Editor from "../components/form/editor/editor";
import { usePostExperienceMutation } from "store/items/experienceAPI";
import { OutputData } from "@editorjs/editorjs";
import { useToken } from "hooks/useToken";

export const ExperienceForm = () => {
	const [postExperience, { isLoading, isSuccess, isError }] =
		usePostExperienceMutation();

	const token = useToken();
	console.log(token);

	const [formData, setFormData] = useState({
		entity: "",
		position: "",
		type: "full-time",
		startDate: null as Date | null,
		endDate: null as Date | null,
		description: {} as OutputData,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleDateChange = (name: string, date: Date | null) => {
		setFormData({ ...formData, [name]: date });
	};

	const handleEditorChange = (data: OutputData) => {
		setFormData((prev) => ({ ...prev, description: data }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			await postExperience(formData as ExperienceRequest).unwrap();
			alert("Experience submitted successfully!");
			setFormData({
				entity: "",
				position: "",
				type: "full-time",
				startDate: null,
				endDate: null,
				description: {} as OutputData,
			});
		} catch (err) {
			alert(`Error submitting experience. ${err}`);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-6 bg-white p-6 rounded-lg shadow-md'
		>
			<div className='flex flex-col'>
				<label htmlFor='entity' className='mb-2 font-medium text-gray-700'>
					Entity
				</label>
				<input
					id='entity'
					name='entity'
					type='text'
					value={formData.entity}
					onChange={handleChange}
					className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
					required
				/>
			</div>

			<div className='flex flex-col'>
				<label htmlFor='position' className='mb-2 font-medium text-gray-700'>
					Position
				</label>
				<input
					id='position'
					name='position'
					type='text'
					value={formData.position}
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
					holder='editorjs-container'
				/>
			</div>

			<div className='flex flex-col'>
				<label htmlFor='type' className='mb-2 font-medium text-gray-700'>
					Type
				</label>
				<select
					id='type'
					name='type'
					value={formData.type}
					onChange={handleChange}
					className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
					required
				>
					<option value='full-time'>Full-Time</option>
					<option value='part-time'>Part-Time</option>
					<option value='contract'>Contract</option>
					<option value='internship'>Internship</option>
				</select>
			</div>

			<div className='flex flex-col'>
				<label htmlFor='startDate' className='mb-2 font-medium text-gray-700'>
					Start Date
				</label>
				<DatePicker
					selected={formData.startDate}
					onChange={(date) => handleDateChange("startDate", date)}
					dateFormat='yyyy-MM-dd'
					className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			<div className='flex flex-col'>
				<label htmlFor='endDate' className='mb-2 font-medium text-gray-700'>
					End Date
				</label>
				<DatePicker
					selected={formData.endDate}
					onChange={(date) => handleDateChange("endDate", date)}
					dateFormat='yyyy-MM-dd'
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

export const Experiences = () => {
	return (
		<div className='max-w-lg mx-auto mt-10'>
			<ExperienceForm />
		</div>
	);
};
