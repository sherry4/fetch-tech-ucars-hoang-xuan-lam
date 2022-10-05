import React, { useState } from "react";

const defaultState = {
  isOpen: true,
  setIsOpen: () => {},
};

const MenuContext = React.createContext(defaultState);

const MenuProvider = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggleOpen,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;

export { MenuProvider };
