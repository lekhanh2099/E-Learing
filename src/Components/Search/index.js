import React, { createContext, useContext, useState } from "react";
import {
  Overlay,
  Title,
  Warning,
  Filter,
  SelectGroup,
  SelectName,
  SelectValue,
  Value,
  Relevant,
  Results,
  Group,
} from "./styles/SearchStyles";

const ToggleContext = createContext();

export default function Search({ children, ...restProps }) {
  return <Search {...restProps}>{children}</Search>;
}

Search.Overlay = function SearchOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Search.Title = function SearchTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Search.Warning = function SearchWarning({ children, ...restProps }) {
  return <Warning {...restProps}>{children}</Warning>;
};

Search.Filter = function SeachFilter({ children, ...restProps }) {
  return <Filter {...restProps}>{children}</Filter>;
};

Search.SelectGroup = function SearchSelectGroup({ children, ...restPops }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <SelectGroup {...restPops}>{children}</SelectGroup>
    </ToggleContext.Provider>
  );
};

Search.SelectName = function SearchSelectName({ children, ...restPops }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <SelectName
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restPops}
    >
      {children}
      {toggleShow ? (
        <span className="material-icons">expand_less</span>
      ) : (
        <span className="material-icons">expand_more</span>
      )}
    </SelectName>
  );
};

Search.SelectValue = function SearchSelectValue({ children, ...restPops }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? (
    <SelectValue {...restPops}>{children}</SelectValue>
  ) : null;
};

Search.Value = function SeachValue({ children, ...restProps }) {
  return <Value {...restProps}>{children}</Value>;
};

Search.Relevant = function SeachRelevant({ children, ...restProps }) {
  return <Relevant {...restProps}>{children}</Relevant>;
};

Search.Results = function SeachResults({ children, ...restProps }) {
  return <Results {...restProps}>{children}</Results>;
};

Search.Group = function SeachGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
