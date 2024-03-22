import React, { useContext } from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from "../Button";

import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, Wrapper, UserPicture } from "./styles";
import { AuthContext } from '../../context/auth';
import { Link } from 'react-router-dom';

const Header = () => {
  const {user, handleSignOut} = useContext(AuthContext);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to= "/">
            <img src={logo} alt="Logo da dio" />
          </Link>
          {user.id ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
        {user.id ? (
              <>
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                <a href="/" onClick={handleSignOut}>Sair</a>
              </>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>)}
        </Row>
      </Container>
    </Wrapper>
  )
}

export {Header}