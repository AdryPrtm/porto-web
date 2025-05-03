export type ParagraphBlock = {
	type: "paragraph";
	data: {
		text: string;
	};
};

export type HeaderBlock = {
	type: "header";
	data: {
		text: string;
		level: number;
	};
};

export type ListBlock = {
	type: "list";
	data: {
		style: "ordered" | "unordered";
		items: string[];
	};
};

export type EditorJsBlock = ParagraphBlock | HeaderBlock | ListBlock;

export interface EditorJsContent {
	time: number;
	blocks: EditorJsBlock[];
}
