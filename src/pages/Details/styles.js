import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 105px auto;
grid-template-areas: 
"header"
"content";

.Cards{
    display: flex;
    justify-content: center;
}
`
export const Links = styled.ul`

list-style: none;

display: flex;
justify-content: center;

>li{
    margin-top: 0px;
}

`