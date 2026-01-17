import { clsx, type ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]) => clsx(inputs);

export const formatPhone = (phone: string) => phone.replace(/\s+/g, " ");
