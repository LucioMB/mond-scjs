import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 80px;
`;

const SubContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 30px 0 40px;

`;

const SubContainer3 = styled.div`
    padding-right: 50px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 12px;
    color: #111;

    & h4 {
        padding-bottom: 20px;
    }
`;


function Section2() {
    return(
        <Container>
            <SubContainer>
                <h2>
                    What we can do for you
                </h2>
                    Our aim is to create benefit for all stakeholders through software solutions designed for positve impact.
                    Together with our customers and suppliers, we support humans and nature with projects that benefit the community and land.
            </SubContainer>
            <SubContainer2>
                    <SubContainer3>
                        <h4>
                            Failure party
                        </h4>
                        
                            We are a team of explorers who are allowed to have Failure Parties when we try to learn something new and mess up.
                    </SubContainer3>
                    <SubContainer3>
                        <h4>
                            Passions
                        </h4>
                            This mix of qualities and passion allows us to push boundaries and keep learning and innovating. So if you have a challenging for us... bring it on!
                    </SubContainer3>
                    <SubContainer3>
                        <h4>
                            Experimenting
                        </h4>
                            Right now we are experimenting with, and would like to work more on: Machine Learning, Artificial Intelligence, Augmented Reality, Blockchain Technology... and more
                    </SubContainer3>
            </SubContainer2>
        </Container>
    );
}

export default Section2;