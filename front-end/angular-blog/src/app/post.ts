import { Author } from "./author";

export interface Post{
    id?:number;
    category: string;
    title: string;
    author:Author,
    description: string;
    publish_date: Date;
}