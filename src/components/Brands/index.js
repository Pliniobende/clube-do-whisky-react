import React from 'react';
import sample from '../../images/sample.jpg';
import { BandsContainer, Brand, BrandInfo, BrandWrapper } from './Brands.styles';

const Brands = () => {
    return (
        <>
            <BandsContainer>
                <BrandWrapper>
                <Brand>
                    <img src={sample} alt="sample" />
                </Brand>
                <BrandInfo>
                    <p>Nome</p>
                    <p>Categoria</p>
                    <p>Classificação</p>
                </BrandInfo>
                </BrandWrapper>
                <BrandWrapper>
                <Brand>
                    <img src={sample} alt="sample" />
                </Brand>
                <BrandInfo>
                    <p>Nome</p>
                    <p>Categoria</p>
                    <p>Classificação</p>
                </BrandInfo>
                </BrandWrapper>
                <BrandWrapper>
                <Brand>
                    <img src={sample} alt="sample" />
                </Brand>
                <BrandInfo>
                    <p>Nome</p>
                    <p>Categoria</p>
                    <p>Classificação</p>
                </BrandInfo>
                </BrandWrapper>
                
            </BandsContainer>
            
        </>
    )
}

export default Brands;
