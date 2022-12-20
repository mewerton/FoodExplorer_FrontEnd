import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Container, ButtonEdit, ButtonDelete } from './styles'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../services/api';

import ImgBack from '../../assets/back.svg'
import alface from '../../assets/alface.png'
import tomate from '../../assets/tomate.png'
import rabanete from '../../assets/rabanete.png'
import paonaan from '../../assets/paonaan.png'
import prato from '../../assets/SaladaRavanello.png'



export function ProductAdmin(){

    
    const [data, setData] = useState("")
    const params = useParams()
    
    const avatarURL =  data && `${api.defaults.baseURL}/files/${data.avatar}`

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1);
      }

      useEffect(() => {
        async function fetchProduct() {
          const response = await api.get(`/products/${params.id}`);
          setData(response.data);
        }
    
        fetchProduct();
      }, []);


    //Função de adicionar e remover item precisa ser puxada do card cado lá já tenha preenchido.
    

    return(
        <Container>
            <HeaderAdmin/>
            <div className="productPage">
                <div className="product">
                    <div className="back">
                        <img src={ImgBack} alt="Voltar" />
                        <Link onClick={handleBack}>voltar</Link>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={avatarURL} alt="prato" height="390" />
                        </div>
                        <div className="info">
                            <div className="name">
                                <span>{data.title}</span>
                            </div>
                            <div className="description">
                                <span>{data.description}</span>
                            </div>
                            <div className="ingredients">
                                <div className="ingredient">
                                    <img src={alface} height="59" width="59" alt="alface" />
                                    <span>alface</span>
                                </div>
                                <div className="ingredient">
                                    <img src={tomate} height="59" width="59" alt="tomate" />
                                    <span>tomate</span>
                                </div>
                                <div className="ingredient">
                                    <img src={rabanete} height="59" width="59" alt="rabanete" />
                                    <span>rabanete</span>
                                </div>
                                <div className="ingredient">
                                    <img src={paonaan} height="59" width="59" alt="pão naan" />
                                    <span>pão naan</span>
                                </div>
                                
                            </div>
                            <div className="request">
                                <div className="value">
                                    <span>R$</span>
                                    <span>{data.value}</span>
                                </div>
                                <div className="requestItem">
                                    
                                    <ButtonEdit>
                                        <Link to="/edit/:id"><Button name="Editar prato"/></Link>
                                        
                                    </ButtonEdit>
                                    <ButtonDelete>

                                    <Link><Button name="Excluir prato"/></Link>
                                    </ButtonDelete>
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            
        </Container>
        
    )
}