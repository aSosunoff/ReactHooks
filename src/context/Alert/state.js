import React from "react";
import { AlertContext } from "./context";

export const AlertState = ({ children }) => {
	return <AlertContext.Provider>{children}</AlertContext.Provider>;
};
