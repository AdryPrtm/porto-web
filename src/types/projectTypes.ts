import { OutputData } from "@editorjs/editorjs";
import { EditorJsContent } from "./editorTypes";

export type Project = {
	_id: string;
	title: string;
	description: EditorJsContent;
	technology: string;
	project_thumbnail_image?: string;
	year: string;
	link?: string;
	createdAt: string;
	updatedAt: string;
};

export type ProjectResponse = {
	success: boolean;
	message: string;
	data: Project;
};

export type AllProjectResponse = {
	success: boolean;
	message: string;
	data: Project[];
};

export type ProjectRequest = {
	title: string;
	description: OutputData;
	technology: string;
	project_thumbnail_image: string;
	year: string;
	link?: string;
};
