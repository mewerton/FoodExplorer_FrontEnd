import { Container } from "./styles";
import Logo from '../../assets/logoblue.svg'
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { Input } from '../Input'
import { ButtonText } from "../ButtonText";
import { ButtonRequest } from "../ButtonRequest";



export function Header(){
    return(
    <Container>
        
    <div className="logo">
        <img src={Logo} alt="Logo"/>
        <span>food explorer</span>
    </div>
    <ButtonText name="Meus favoritos"/>
    
    <Input placeholder="Busque pelas opções de pratos" icon={FiSearch}/>
    
    <ButtonRequest name="Meu pedido (0)"/>
    
    <ButtonText icon={FiLogOut} />
   
    </Container>

    )
}