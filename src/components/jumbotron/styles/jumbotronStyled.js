import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    font-family: 'SoDoSans', Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: -.01em;
    font-feature-settings: "calt";
    text-align:center;
`;

export const Group = styled.div`
    margin-bottom: 2rem;
`;

export const Frame = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: ${({ direction }) => direction};
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    text-align: center;

    :first-of-type:not(:last-of-type) {
        margin-bottom: 2rem;
    }
`;

export const Item = styled.div`
    display:flex;
    justify-content:center;
    width: ${({ width }) => `${width}%`};
`;

export const Info = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: 2.5rem 1.6rem;
`;

export const Title = styled.h1`
    font-size: 28px;
    font-weight:bold;
    margin:0;
`;

export const SubTitle = styled.h2`
    font-size: 24px;
    font-weight:normal;
    margin:1rem 0;
`;

export const Text = styled.p`
    font-size: 18px;
    margin-top:2rem;
`;

export const Image = styled.img`
    max-width:100%;
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ color }) => color};
    border-color: ${({ color }) => color};
    border-width:1px;
    border-style:solid;
    border-radius: 50px;
    padding: 7px 16px;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.2;
    transition: all .2s ease;
    cursor:pointer;
    margin-top:2rem;

    &:hover{
        background-color: ${({ color }) => `${color}20`};
    }
`;
