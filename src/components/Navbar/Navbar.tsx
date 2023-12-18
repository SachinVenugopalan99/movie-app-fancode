import React, {FC} from 'react'
import { NavWrapper } from './Navbar.style';
import SearchBar from '../SearchBar';

interface NavBarProps {
 tabs: any;
 setSearchQuery: any;
 activeTab: any;
 setActiveTab: any;
 searchQuery: string;
}

const Navbar:FC<NavBarProps> = ({tabs, setSearchQuery, activeTab, setActiveTab, searchQuery}) => {
  return (
    <NavWrapper>
        <SearchBar setSearchQuery={setSearchQuery}/>
        {!searchQuery ? 
              <div className={`tabContainer`}>
       {tabs?.map((item: any) => (
        <div className={`tab ${activeTab === item?.name && 'activeTab'}`}
        key={item?.id}
        onClick={() =>setActiveTab(item?.name === activeTab ? '' : item?.name)}
        >
            {item?.name}
            </div>
       ))}
      </div>
        : null}

    </NavWrapper>
  )
}

export default Navbar
