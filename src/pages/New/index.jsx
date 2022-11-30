import { Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import { FiUpload } from 'react-icons/fi'

import ImgBack from '../../assets/back.svg'

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <div className="back">
                        <img src={ImgBack} alt="Voltar" />
                        <span>voltar</span>
                </div>
                <Form>
                    <h1>Adicionar prato</h1>
                    <div className="nameImage">
                        <div className="image">
                            <span>Imagem do prato</span>
                            <button><FiUpload size={24}/>Selecione imagem</button>
                        </div>
                        <div className="name">
                            <p>Nome</p>
                            <div className="input">
                                <Input/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="ingredients"></div>
                    <div className="description"></div>

                </Form>
            </main>

            {/* <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
            <Input placeholder="Ex.: Salada Ceasar"/> */}
            
            
        </Container>
    )
}