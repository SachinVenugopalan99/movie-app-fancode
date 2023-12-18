import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Content } from "./SearchBar.styles";
import searchIcon from '../../assets/search-icon.svg';
// Types
type Props = {
  setSearchQuery: any;
}

const SearchBar: React.FC<Props> = ({ setSearchQuery }) => {
  const [state, setState] = useState("");
  const handleChange = (e:any) => {
    setState(e.currentTarget.value);
  };

  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchQuery(state);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setSearchQuery, state]);

  return (
    <React.Fragment>
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="Search Movie"
            onChange={handleChange}
            value={state}
          />
        </Content>
      </Wrapper>
    </React.Fragment>
  );
};

export default SearchBar;
