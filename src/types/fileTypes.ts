export type File = {
	cv_file?: {
		url: string;
		download: number;
	};
	profile_image?: string;
	project_thumbnail_image?: string;
};

export type FileResponse = {
	success: boolean;
	message: string;
	data: File[];
};

export type FileRequest = {
	id: string;
	cv_file?: {
		url: string;
		download: number;
	};
	profile_image?: string;
	project_thumbnail_image?: string;
};
