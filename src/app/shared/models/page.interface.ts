import { User } from "./user.model";
/**
 * Holds the Response Of List Of Users Returned from API
 */
export interface IPage{
    data:User[];
    page:number;
    per_page:number;
    total:number;
    total_pages:number;
}