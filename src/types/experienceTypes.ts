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

export type AllExperienceResponse = Experience[];
