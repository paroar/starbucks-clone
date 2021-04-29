import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    font-family: 'SoDoSans', Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: -.01em;
    font-feature-settings: "calt";
    text-align:center;
`;

export const Content = styled.div`
    max-width: 1400px;
`;

export const Group = styled.div`
    margin-bottom: 2rem;
`;

export const FeatureGroup = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom: 2rem;

    @media (min-width: 1000px){
        flex-direction: row;
    }
`;

export const Frame = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    text-align: center;

    @media (min-width:800px){
        flex-direction: ${({ direction }) => (direction === 'column' ? 'row' : direction)};
    }
`;

export const Feature = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    text-align: center;

    &:first-of-type{
        margin-bottom: 2rem;
    }

    @media (min-width:1000px){
        width: 50%;
        margin-bottom: 0rem !important;

        &:first-of-type{
            margin-right: 1rem;
        }

        &:last-of-type{
            margin-left: 1rem;
        }
    }
`;

export const FeatureItem = styled.div`
    display:flex;
    justify-content:center;
`;

export const Item = styled.div`
    display:flex;
    justify-content:center;

    @media (min-width:800px){
        width: 50%;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: 2.5rem 1.6rem;
`;

export const Title = styled.h1`
    font-size: 18px;
    font-weight:bold;
    margin:0;

    @media (min-width: 400px){
        font-size: 24px;
    }

    @media (min-width: 800px){
        font-size: 28px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 14px;
    font-weight:normal;
    margin:1rem 0;

    @media (min-width: 400px){
        font-size: 18px;
    }

    @media (min-width: 800px){
        font-size: 24px;
    }


    
`;

export const Text = styled.p`
    font-size: 12px;
    margin-top:2rem;

    @media (min-width: 400px){
        font-size: 14px;
    }

    @media (min-width: 800px){
        font-size: 18px;
    }
`;

export const Image = styled.img`
    height: auto;
    max-width: 100%;
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
