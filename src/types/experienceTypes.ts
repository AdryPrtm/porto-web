import { EditorJsContent } from "./editorTypes";

export type Experience = {
	_id: string;
	entity: string;
	position: string;
	description: EditorJsContent;
	type: string;
	startDate: Date;
	endDate: Date;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
};

export type ExperienceResponse = {
	success: boolean;
	message: string;
	data: Experience;
};

export type AllExperienceResponse = {
	success: boolean;
	message: string;
	data: Experience[];
};

export type ExperienceRequest = {
	entity: string;
	position: string;
	description: EditorJsContent;
	type: string;
	startDate: Date;
	endDate: Date;
};
