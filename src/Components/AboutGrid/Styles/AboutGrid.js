import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const GroupContent = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100%;
    padding: 40px 0;
  }
`;

export const Wrap = styled.div`
  width: 64%;
  display: block;
  text-align: center;
  font-weight: 300;

  @media (max-width: 1023px) {
    width: 90%;
  }
`;

export const Title = styled.p`
  color: #fff;
  margin: 0;
  font-size: 34px;
  font-weigth: 300;

  @media (max-width: 1023px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 22px;
  margin: 20px 0;

  @media (max-width: 1023px) {
    font-size: 12px;
    margin: 10px 0;
    width: 100%;
  }
`;

export const Button = styled(NavLink)`
  display: inline-block;
  border: 1px solid #fff;
  padding: 11px 20px;
  color: #fff;
  font-weight: 600;
  background-color: transparent;
  font-size: 16px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    border: none;
    color: ${(props) => props.theme.bgPrimary};
  }

  @media (max-width: 1023px) {
    font-size: 14px;
  }
`;

export const GroupImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100%;
    padding: 30px 0;
  }
`;

export const Content = styled.div`
  width: 80%;
  display: block;
  text-align: center;
  font-weight: 300;
`;

export const Image = styled.img`
  width: 50%;

  @media (max-width: 420px) {
    width: 100%;
  }
`;
