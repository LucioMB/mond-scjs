import React from 'react';
import styled from 'styled-components';

import {Img1, Img2, Img3, Img4} from '../../images_js/images-section3';
import {BkgImg} from '../../images_js/bkg-img';
 

const Container = styled.div`
    background-image: url(${BkgImg});
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    row-gap: 20px; 
    align-items: center;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    width: 100%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 10px;
    font-weight: normal;
    position: relative;
    z-index: 3;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    column-gap: 20px;
    align-items: center;
    margin: 0 0 0 0;
    width: 100%;

    & h2 {
    align-items: center;
    padding: 80px 0 30px 0;
    }
`;

const SubContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 100px 0px;
    padding-right: 0px;
    width: 100%; 
`;

const SlImg = styled.img`
    width: 250px;
    height: 200px;
    border-bottom: 8px solid;
    border-color: #ffca03;
    padding: 0 0 0 0;
    margin: 0 0 0 0;
`;

const SubContainer3 = styled.div`
    margin: 0 50px 0 50px;
    padding: 20px 0px 20px 0px;
    background-color: #fff;
`;

const SubContainer4 = styled.div`
    padding: 10px 20px 0px 20px;

    & h5 {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: normal;
    font-size: 14px;
    color: #000;
    padding: 20px 0 20px 0;
}
`;

const SectorInput = styled.input`
    background-color: #ffda03;
    padding: 5px 10px 5px 10px;
    font-weight: normal;
    font-size: 14px;
    border: 4px solid #ffda03;
    border-radius: 3px;
    margin: 0 0 50px 0;
`;


 function Section3() {
     return(
        <Container>
            <SubContainer>
                <h2>
                    From our blog
                </h2>
                <SubContainer2>
                    <SubContainer3>
                        <SlImg src={Img1} alt="img-1" />
                        <br />
                        <SubContainer4>
                        IRENE BRAMBILLA
                        <h5>
                            The Power of Awareness
                        </h5>
                            Thu, 10 Oct 2019 09:22:40 GMT
                        </SubContainer4>
                    </SubContainer3>
                    <SubContainer3>
                        <SlImg src={Img2} alt="img-2" />
                        <br />
                        <SubContainer4>
                        IRENE BRAMBILLA
                        <h5>
                            La forza della consapevolezza
                        </h5>
                            Thu, 10 Oct 2019 09:19:43 GMT
                        </SubContainer4>
                    </SubContainer3>
                    <SubContainer3>
                        <SlImg src={Img3} alt="img-3" />
                        <br />
                        <SubContainer4>
                        IRENE BRAMBILLA
                        <h5>
                            Mettiamoci al lavoro!
                        </h5>
                            Thu, 26 Set 2019 08:24:23 GMT
                        </SubContainer4>
                    </SubContainer3>
                    <SubContainer3>
                        <SlImg src={Img4} alt="img-4" />
                        <br />
                        <SubContainer4>
                        IRENE BRAMBILLA
                        <h5>
                            Let's Get to Work!
                        </h5>
                            Thu, 26 Set 2019 08:20:16 GMT
                        </SubContainer4>
                    </SubContainer3>
                </SubContainer2>
                <a href="https://bcalmbcorp.com/" target="_blank" rel="noopener noreferrer"><SectorInput type="submit" value="visit our blog" /></a>
            </SubContainer>
        </Container>
     );
}

export default Section3;