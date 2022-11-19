import { Member } from "./member";

export interface Page {
    pageNo: number;
    pageContent: Member[];
}