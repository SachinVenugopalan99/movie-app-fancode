import styled from "styled-components";

export const NavWrapper = styled.main`
    background: var(--darkGray);
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height:135px;
    padding: 5px;
    text-align: center;
    z-index: 10;
    
    .tabContainer{
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        margin-top: 12px;
    }
    .tabContainer::-webkit-scrollbar {
    display: none;
}
    .tab{
        padding: 8px;
        margin-left: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--mediumGray);
        font-size: 0.8rem;
        border-radius: 4px;
        cursor: pointer;
    }
    .activeTab{
        background: red;
    }
    `
    ;