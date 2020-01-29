import React from 'react';

import {Container, SubCont, FimgLeft, Info, TelMail, ContainerLink} from '../../css/footer';
import {MondoraLogoP, Gh, Ig, Fb, Lk, Tw, Yt} from '../../images_js/images-footer';




function Footer() {
    return(
        <Container>
            <SubCont>
                <FimgLeft src={MondoraLogoP} alt="logo-p" class="f-img-l" />
                    <Info>
                        &copy; 2018 mondora srl sb . All Rights Reserved.
                        <br />
                        Via Uberto Visconti di Modrone 33 , 20122, Milano - P.IVA 03680680968
                        <br />
                        Made with love &#x2764; in Valtellina
                        <br />
                        <TelMail>
                            <a href="tel:+3903421856456">
                                +39 0342 1856456
                            </a>&nbsp;-&nbsp;
                            <a href="mailto:info@mondora.com">
                                info@mondora.com
                            </a>
                        </TelMail>
                    </Info>
            </SubCont>
                <ContainerLink>
                    <img src={Gh} alt="gh" class="f-img-gh" />
                    <img src={Ig} alt="ig" class="f-img-2" />
                    <img src={Fb} alt="fb" class="f-img-2" />
                    <img src={Lk} alt="lk" class="f-img-2" />
                    <img src={Tw} alt="tw" class="f-img-2" />
                    <img src={Yt} alt="yt" class="f-img-2" />
                </ContainerLink>            
        </Container>
    );
}

export default Footer;
