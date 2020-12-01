import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const TitleLabel = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

interface Props {}

const Header = ({ }: Props) => {
  return(
    <Container>
      <TitleLabel>Todo List App</TitleLabel>
    </Container>
  );
};
export default Header;