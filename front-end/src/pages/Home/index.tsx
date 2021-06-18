import React from 'react';
import { Container, Header, Content } from './styles';

export const Home: React.FC = () => {
  const handleSubmit = () => {
    return;
  }

  return (
    <Container>
      <Header>
        <h1>Cadastro de Cliente</h1>
      </Header>
      <Content>
        <form onSubmit={handleSubmit}>
          <h2>Insira seus dados abaixo:</h2>
          <div>
            <label>Nome completo</label>
            <input type="text" placeholder="Ex. Antônio da Silva"/>
          </div>
          <div>
            <label>Telefone</label>
            <input type="text" placeholder="Ex. Antônio da Silva"/>
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Ex. Antônio da Silva"/>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </Content>
    </Container>
  )
}
