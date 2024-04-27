import type React from "react";
import { createContext, useContext, useState } from "react";

// Define the shape of your user object
interface User {
	id: number;
	username: string;
	email: string;
}

// Define the shape of your context
interface UserContextType {
	user: User | null;
	setUser: (user: User | null) => void;
	isLoggedIn: boolean;
	login: () => void;
	logout: () => void;
}

// Create a context with initial values
const UserContext = createContext<UserContextType>({
	user: null,
	setUser: () => {},
	isLoggedIn: true,
	login: () => {},
	logout: () => {},
});

interface UserProviderProps {
	children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const login = () => {
		setIsLoggedIn(true);
	};

	const logout = () => {
		setIsLoggedIn(false);
	};

	return (
		<UserContext.Provider value={{ user, setUser, isLoggedIn, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
