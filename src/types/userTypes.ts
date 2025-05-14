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

export type User = {
	_id: string;
	name: string;
	bio: string;
	image: string;
	socials: [
		{
			appname: string;
			link: string;
		}
	];
};

export type UserResponse = {
	success: boolean;
	message: string;
	data: User[];
};

export type UserRequest = {
	name: string;
	bio: string;
	socials: [
		{
			appname: string;
			link: string;
		}
	];
};
