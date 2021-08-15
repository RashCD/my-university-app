import React, {
  createContext,
  Dispatch,
  ReactChild,
  SetStateAction,
  useState,
} from 'react';

type UserContextTypes = {
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const UserContext = createContext<UserContextTypes>({
  loggedIn: false,
  setLoggedIn: () => {},
});

const UserProvider = (props: { children: ReactChild }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const implementation: UserContextTypes = {
    loggedIn,
    setLoggedIn,
  };

  return (
    <UserContext.Provider value={implementation}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
