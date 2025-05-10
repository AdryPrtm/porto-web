export type Certificate = {
	_id: string;
	title: string;
	description: string;
	link: string;
	year: number;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

export type AllCertificateResponse = Certificate[];
