export type LoginCredentials = {
	username: string;
	password: string;
};

export type LoginResponse = {
	success: boolean;
	message: string;
	token: string;
};

export type TokenState = {
	token: string;
};
