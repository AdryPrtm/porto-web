import { EditorJsContent } from "./editorTypes";

export type Project = {
	_id: string;
	title: string;
	description: EditorJsContent;
	technology: string;
	project_thumbnail_image: string;
	createdAt: string;
	updatedAt: string;
};

export type AllProjectResponse = Project[];
