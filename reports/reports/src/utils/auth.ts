import { authPages } from "@/constants/auth";

export const isAuthPage = (path: string): boolean => authPages.includes(path);
