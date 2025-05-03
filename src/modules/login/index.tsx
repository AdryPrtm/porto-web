import React, { useState } from "react";

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log("Email:", email);
		console.log("Password:", password);
	};

	return (
		<div className='flex justify-center items-center h-screen'>
			<form
				onSubmit={handleSubmit}
				className='w-80 p-5 border border-gray-300 rounded-md shadow-md'
			>
				<h2 className='text-center text-2xl font-bold mb-5'>Login</h2>
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block text-sm font-medium text-gray-700 mb-1'
					>
						Email
					</label>
					<input
						type='email'
						id='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='password'
						className='block text-sm font-medium text-gray-700 mb-1'
					>
						Password
					</label>
					<input
						type='password'
						id='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						required
					/>
				</div>
				<button
					type='submit'
					className='w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
