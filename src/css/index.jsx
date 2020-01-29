import styled from 'styled-components';

export const Html = styled.html`
    box-sizing: border-box;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
`;

export const Body = styled.body`
    background-color: #fff;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 14px;
    color: #777;

    & h2 {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 32px;
    font-weight: bold;
    color: #333;
    padding: 200px 0 30px 0px;
    }

    & h3 {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
    font-weight: bold;
    color: #444;
    }
`;