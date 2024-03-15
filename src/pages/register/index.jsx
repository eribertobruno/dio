import React from 'react'

import { api } from "../../services/api";

import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Header } from '../../components/Header'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

import { Column, Container, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
  nome: yup.string().required(),
  email: yup.string().email('email não é valido').required('Campo Obrigatorio'),
  password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatorio'),
})
.required();


const Register = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors} } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={1}>
              <Input name="nome" errorMessage={errors?.nome?.message}  control={control} placeholder="Nome Completo" leftIcon={<MdPerson />}/>
              <Input name="email" errorMessage={errors?.email?.message}  control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
              <Input name="password" errorMessage={errors?.password?.message}   control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
          </Wrapper>
        </Column>
      </Container>
    </>
    )
}

export {Register}