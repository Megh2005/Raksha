import { create } from 'zustand';
export interface jobType {
    id: string;
    name: string;
    img: string | null;
    author: string;
    salary: string | null;
    location: string;
    employmentType: string | null;
    description: Date;
}