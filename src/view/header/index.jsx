import React from 'react';

import {MondoraLogo1} from '../../images_js/images-header';
import {Container} from '../../css/header';




function Header() {
    return(
        <Container>
            <a href="https://mondora.com/"><img src={MondoraLogo1} alt="logo-1" /></a>
        </Container>
    );
}
 
export default Header;