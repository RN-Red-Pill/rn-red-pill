import { createContext, useContext, useState } from "react";

// Create a context with initial values
const UserContext = createContext({
	user: null,
	setUser: () => {},
	isLoggedIn: true,
	login: () => {},
	logout: () => {},
});

export const UserProvider = ({ children }) => {
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
