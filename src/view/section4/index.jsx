import React from 'react';
import styled from 'styled-components';

import {BarrV, Impact} from '../../images_js/images-section4';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
    z-index: 2;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SubContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 0 0;

    & h2 {
    padding: 120px 0 20px 0;
}
`;

const BarrImg = styled.img`
    height: 500px;
    width: auto;
    padding: 0px 0 0 0;
    margin: -150px 0 0 0;
`;

const DivImg = styled.div`
    margin: 0 0 0 100px;
    padding: 0 0 0 600px;
`;

const BigImg = styled.img`
    width: 1400px;
    height: auto;
`;


function Section4() {
    return(
        <Container>
            <SubContainer>
                <SubContainer2>
                    <DivImg>
                        <BarrImg src={BarrV} alt="barr-v" />
                    </DivImg>
                    <div>
                        <h2>
                            Benefit Project
                        </h2>
                        We are a team of open-minded and kind people who always offer each other help to
                        overcome obstacles and create cutting edge solutions to problems.
                    </div>
                </SubContainer2>
                <br />
                <BigImg src={Impact} alt="impacts-1" class="s4-img-2" />
            </SubContainer>
        </Container>
    );
}

export default Section4;