import React from 'react';
import Logo0 from '../../../src/assets/images/clientes/clientes/baja.png'
import Logo1 from '../../../src/assets/images/clientes/clientes/asador.png'
import Logo2 from '../../../src/assets/images/clientes/clientes/bugambilia.png'
import Logo3 from '../../../src/assets/images/clientes/clientes/cien-foto.png'
import Logo4 from '../../../src/assets/images/clientes/clientes/asador-cuu.png'
import Logo5 from '../../../src/assets/images/clientes/clientes/farmapiel.png'
import Logo6 from '../../../src/assets/images/clientes/clientes/flujodigital.png'
import Logo7 from '../../../src/assets/images/clientes/clientes/hospital-same.png'
import Logo8 from '../../../src/assets/images/clientes/clientes/icorptti.png'
import Logo9 from '../../../src/assets/images/clientes/clientes/incottech.png'
import Logo10 from '../../../src/assets/images/clientes/clientes/ittiva.png'
import Logo11 from '../../../src/assets/images/clientes/clientes/jamka.png'
import Logo12 from '../../../src/assets/images/clientes/clientes/lupita-alvarado.png'
import Logo13 from '../../../src/assets/images/clientes/clientes/marshall.png'
import Logo14 from '../../../src/assets/images/clientes/clientes/mireles.png'
import Logo15 from '../../../src/assets/images/clientes/clientes/mojarrafeliz.png'
import Logo16 from '../../../src/assets/images/clientes/clientes/mora.png'
import Logo17 from '../../../src/assets/images/clientes/clientes/tostaderia.png'

const BrandList = [
    {
        image: Logo0
    },
    {
        image: Logo1
    },
    {
        image: Logo2
    },
    {
        image: Logo3
    },
    {
        image: Logo4
    },
    {
        image: Logo5
    },
    {
        image: Logo6
    },
    {
        image: Logo7
    },
    {
        image: Logo8
    },
    {
        image: Logo9
    },
    {
        image: Logo10
    },
    {
        image: Logo11
    },
    {
        image: Logo12
    },
    {
        image: Logo13
    },
    {
        image: Logo14
    },
    {
        image: Logo15
    },
    {
        image: Logo16
    },
    {
        image: Logo17
    },
    
]

const mystyle={
    //filter: "grayscale(100%)",
    width: "300px",
}

const BrandOne = ({brandStyle}) => {
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((data, index) => (
                <li key={index}>
                   <img style={mystyle} src={`${data.image}`} alt="Brand Image" />
                </li>
            ))}
        </ul>
    )
}

export default BrandOne;
