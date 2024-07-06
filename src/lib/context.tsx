"use client";

import { createContext, useContext } from "react";

interface FileContextType {
	file: File | null;
	setFile: (file: File | null) => void;
}

export const FileContext = createContext<FileContextType | undefined>(
	undefined
);

// eslint-disable-next-line import/prefer-default-export
export const useFile = () => {
	const context = useContext(FileContext);
	if (!context) {
		throw new Error("useFile must be used within a FileProvider");
	}
	return context;
};
