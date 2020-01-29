import React from 'react';
import styled from 'styled-components';

//import '../../css/section1/section1.css';
import {BarraB, Mondora2} from '../../images_js/images-section1';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
`;

const SubContainer = styled.text`
    vertical-align: middle;
    text-justify: auto;
    margin-left: 20px;
    padding-right: 10px;
    padding-top: 0px; 
`;

const BarrImg = styled.img`
    width: 220px;
    height: 750px;
`;

const MondImg = styled.img`
    width: 1800px;
    height: 600px;
    padding-left: 0px;
    padding-right: 0px;
`;


function Section1() {
    return(
        <Container>
            <SubContainer>
                <h2>
                Welcome to the :mOndOra world!
                </h2>
                Our aim is to create benefit for all stakeholders by designing and building software solutions
                that maximise positive impact. Together with our customers and suppliers, we support
                humans and nature with projects that benefit the community and land.
            </SubContainer>
            <BarrImg src={BarraB} alt="barr" />
            <MondImg src={Mondora2} alt="mondora-2a" />
        </Container>

    );
}

export default Section1;