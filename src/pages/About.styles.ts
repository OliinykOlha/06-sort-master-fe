import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface LinkWrapperProps {
  external?: boolean;
}

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #2e7d32;
  cursor: pointer;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  padding: 10px;
  width: 250px;
  height: 300px;
  border-radius: 6px;
  border: 2px solid black;
  box-shadow: 2px 2px 8px #2e7d32;
  color: #4e9c56;
  font-family: Arial, Helvetica, sans-serif;
  text-indent: 20px;
  text-align: justify;

  &:hover {
    background-color: #d1e2d2;
  }
`;

export const Image = styled.img`
  width: 90%;
  height: auto;
  border-radius: 6px;
`;

export const LinkWrapper = styled.div<LinkWrapperProps>`
  width: 100%;
  margin-top: auto;
  text-align: ${({ external }) => (external ? "left" : "center")};
`;

export const StyledLink = styled(Link)`
  padding-bottom: 40px;
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  color: #06450c;

  &:hover {
    background-color: #c6f7cb;
  }
`;

export const ImageLink = styled(Link)`
  display: block;
  img {
    width: 100%;
    max-height: 150px;
    border-radius: 6px;
    object-fit: cover;
    margin-bottom: 12px;
    cursor: pointer;
    transition: transform 0.3s;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;
