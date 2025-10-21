export type LocalQueryArgs =
  | "profile"
  | "projects"
  | "experiences"
  | "certificates";
export type LocalQueryError = { status: number; data: string };

export interface Profile {
  id: string;
  name: string;
  email: string;
  bio: string;
  profilePicture: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate: string | null;
  credentialId: string;
  credentialUrl: string;
}
