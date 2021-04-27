import styled from 'styled-components/macro';

export const Container = styled.header`
  position: relative;
  display:flex;
  align-items:center;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,.1),0 2px 2px rgba(0,0,0,.06),0 0 2px rgba(0,0,0,.07);
`;

export const Logo = styled.img`
  max-width:100%;
  width:40px;
  height: 40px;
  margin: 1rem;
`;

export const MenuBtn = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  position: absolute;
  top:50%;
  right:0;
  transform:translate(-50%,-50%);
  border:none;
  background-color: transparent;
  border-radius: 10rem;
  height:48px;
  width:48px;
  cursor:pointer;
  transition: all 0.2s;

  &:hover{
    background-color: #f1f1f1;
  }
`;

export const Icon = styled.img`
  width:24px;
  height:24px;
`;
