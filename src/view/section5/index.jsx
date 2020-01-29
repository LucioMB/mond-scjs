import React from 'react';
import styled from 'styled-components';

import {Brothers} from '../../images_js/images-section5';
import { BkgImgB } from '../../images_js/bkg-img-b';


const Container = styled.div`
    background-image: url(${BkgImgB});
    background-size: 800px;
    padding-right: 10px;

    & h2 {
    text-align: center;
    color: #fff;
    padding: 300px 0 40px 0;
}
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;
`;

const BrImg = styled.img`
    width: 1000px;
    height: auto;
    padding: 100px 0 100px 0;
`;


function Section5() {
    return(
            <Container>
                <SubContainer>
                    <BrImg src={Brothers} alt="brothers-1" />
                    <div>
                        <h2>
                            Abaut Mondora
                        </h2>
                            We are a team of open-minded and kind people who always offer each other help to overcome obstacles and create cutting edge solutions to problems.
                    </div>
                </SubContainer>
            </Container>
    );
}

export default Section5;