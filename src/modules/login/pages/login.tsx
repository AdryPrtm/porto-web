import { useToken } from "hooks/useToken";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "store/user/userLoginAPI";

export const LoginPage: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loginUser, { isLoading, error }] = useLoginUserMutation();
	const token = useToken();
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await loginUser({ username, password }).unwrap();
			navigate("/dashboard");
			console.log(token);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<form
				onSubmit={handleSubmit}
				className='bg-white p-8 rounded shadow-md w-full max-w-sm'
			>
				<h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
				{error && (
					<div className='mb-4 text-red-500 text-sm text-center'>
						{"data" in error || "Login failed"}
					</div>
				)}
				<div className='mb-4'>
					<label className='block mb-1 text-gray-700'>Email</label>
					<input
						type='text'
						className='w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						autoFocus
					/>
				</div>
				<div className='mb-6'>
					<label className='block mb-1 text-gray-700'>Password</label>
					<input
						type='password'
						className='w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button
					type='submit'
					className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
					disabled={isLoading}
				>
					{isLoading ? "Logging in..." : "Login"}
				</button>
			</form>
		</div>
	);
};
