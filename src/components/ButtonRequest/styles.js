import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 11px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    width: 216px;
    height: 56px;

    background: ${({theme}) => theme.COLORS.RED_700};
    color: ${({theme}) => theme.COLORS.WHITE};;
    border-radius: 5px;
    cursor: pointer;
    
    white-space: nowrap; 

    :hover{
        opacity: 0.8;
        transition: 0.2s;
    }

`