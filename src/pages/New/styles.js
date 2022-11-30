import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
   
 
    >main{
        width: 1120px;
        display: flex;
        flex-direction: column;
        
    }

    .back{

        margin-top: 24px;
        display: flex;
        gap: 11px;


        >span{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 140%;

            color: ${({theme}) => theme.COLORS.GREY_100};

            cursor: pointer;

            :hover{
                color: ${({theme}) => theme.COLORS.BLUE_100};
                transition: 0.2s;
            }

            :active{
            transform: scale(0.97);
            transition: 0.02s;
            }
        }
    }
`

export const Form = styled.form`

    margin-top: 24px;
    
    >h1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;

        color: ${({theme}) => theme.COLORS.GREY_100};
    }

    .nameImage{
            margin-top: 30px;
            display: flex;
            gap: 32px;
           
            
    }

    .image, .name, .ingredients, .description, >span{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;

            color: ${({theme}) => theme.COLORS.GREY_200};

    }

    .name{
        width: 100%;
    }
    .input{
        margin-top: 8px;
        
        
    }
        
        
    .image{
             
        >button {
            
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            
            gap: 8px;
            
            white-space: nowrap;

            width: 229px;
            height: 45px;
            
            margin-top: 8px;
            
            border: 1px solid ${({theme}) => theme.COLORS.WHITE};
            border-radius: 5px;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;

            background: transparent;
            color: ${({theme}) => theme.COLORS.WHITE};

            :hover{
                color: ${({theme}) => theme.COLORS.BLUE_100};
                border: 1px solid ${({theme}) => theme.COLORS.BLUE_100};
            }
        }
    }
`