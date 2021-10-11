import React from "react";
import {
  UserinformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./Userinformation.style";

interface UserinformationProps {
  picture: string;
  nome: string;
  rating: number;
  description?: string;
}

const Userinformation: React.FC<UserinformationProps> = (props) => {
  return (
    <UserinformationContainer>
      <AvatarStyled src={props.picture}> {props.nome[0]} </AvatarStyled>
      <UserName> {props.nome} </UserName>
      <RatingStyled readOnly value={props.rating} />
      <UserDescription> {props.description} </UserDescription>
    </UserinformationContainer>
  );
};

export default Userinformation;
