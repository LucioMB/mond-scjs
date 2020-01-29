import styled from 'styled-components';

export const Container = styled.footer`
background-color: #20272f;
padding: 0 0 50px 0;

display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const SubCont = styled.div`
display: flex;
flex-direction: row;
`;

export const FimgLeft = styled.img`
display: flex;
flex-direction: row;
height: 70px;
padding: 30px 10px 0 20px;
`;

export const Info = styled.text`
display: flex;
flex-direction: column;
font-weight: lighter;
font-size: 11px;
color: #fff;
text-align: left;
width: 500px;
padding: 40px 0px 0 0;
margin: 0 0px 0 0;

& a {
color: #fff;
font-size: 11px;
font-weight: normal;
text-decoration: none;
}
`;

export const TelMail = styled.text`
padding: 20px 0 0 0;

`;

export const ContainerLink = styled.div`
padding: 30px 30px 0 0;
`;
