import React from 'react';
import sample from '../../images/sample.jpg';
import Card from '../Card';
import Grid from '../Grid'
import { BandsContainer, Brand, BrandInfo } from './Brands.styles';

const Brands = () => {
    return (
        <>
            <BandsContainer>
             
                <Grid>
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                    <Card image={sample} clickable={true} />
                </Grid>
          
                
            </BandsContainer>
            
        </>
    )
}

export default Brands;
