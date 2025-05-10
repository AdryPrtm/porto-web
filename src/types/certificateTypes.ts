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

export type CertificateResponse = {
	success: boolean;
	message: string;
	data: Certificate;
};

export type AllCertificateResponse = {
	success: boolean;
	message: string;
	data: Certificate[];
};

export type CertificateRequest = {
	title: string;
	description: string;
	link: string;
	year: number;
};
