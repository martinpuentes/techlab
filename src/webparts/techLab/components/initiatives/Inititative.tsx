
import './initiative.css'
import styled from 'styled-components'
import React from "react";
import { imagesAssets } from "../../mocks/ImagesAssets";

export const Initiative = ({order, justify, initiatives}) =>{

    const lines = initiatives.split('\n');

    const StyledSection = styled.section`
        
        display: flex;
        width: 80%;
        height: 26rem;
        margin: auto;
        flex-direction: ${order};
        justify-content: ${justify};
        border: 1px solid #B3B3B3;
        border-radius: 1rem;
        margin-bottom: 2rem;

        @media (max-width: 768px) {
            flex-direction: column;
            height: auto;
        }
        
    `

    const StyledImg = styled.img`
        width: 45rem;
        height: auto;
        object-fit: cover;
        border-radius: 1rem;

        @media (max-width: 768px) {
            width:100%
        }

    `

    const containerStyle={
        display : 'flex',
        width:'80%',
        height:'26rem',
        margin: 'auto',
        justifyContent:justify,
        border: '1px solid #B3B3B3',
        borderRadius:'1rem',
        marginBottom: '2rem',
        flexDirection:order
    }

    console.log(order)
    const imageStyle={
        width: '45rem',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '1rem',
        
    }

    return(
        
        <StyledSection>
            <div className='list-container'>
                <h3>Titulo de iniciativa</h3>
                <ul className='list'>
                    {
                        lines.map((item, i) => {
                            return(
                                <li>item</li>
                            )
                             
                         })
                    }
                
                
                
            </ul>
            </div>
            <StyledImg  src={imagesAssets(`./imageninitiative.png`)}/>
        
        </StyledSection>
            
    )
}

