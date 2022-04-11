import React from 'react';
import Logo0 from '../../../src/assets/images/clientes/logo0.png'
import Logo1 from '../../../src/assets/images/clientes/logo1.jpeg'
import Logo2 from '../../../src/assets/images/clientes/logo2.png'
import Logo3 from '../../../src/assets/images/clientes/logo3.png'
import Logo4 from '../../../src/assets/images/clientes/logo4.png'
import Logo5 from '../../../src/assets/images/clientes/logo5.png'
import Logo6 from '../../../src/assets/images/clientes/logo6.png'
import Logo7 from '../../../src/assets/images/clientes/logo7.png'
import Logo8 from '../../../src/assets/images/clientes/Logo8.png'
import Logo9 from '../../../src/assets/images/clientes/logo9.png'
import Logo10 from '../../../src/assets/images/clientes/logo10.png'
import Logo11 from '../../../src/assets/images/clientes/logo11.png'
import Logo12 from '../../../src/assets/images/clientes/logo12.png'
import Logo13 from '../../../src/assets/images/clientes/logo13.png'
import Logo14 from '../../../src/assets/images/clientes/logo14.jpg'
import Logo15 from '../../../src/assets/images/clientes/logo15.png'

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
