import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, Header, Content, Form, Data } from './styles';

interface ClientesProps {
  id: string;
  cliente: string;
  telefone: string;
  email: string;
}

export const Home: React.FC = () => {
  const [clientes, setClientes] = useState<ClientesProps[]>([]);

  const [formEnviado, setFormEnviado] = useState(false);

  const [id, setId] = useState('');
	const [cliente, setCliente] = useState('');
	const [telefone, setTelefone] = useState('');
	const [email, setEmail] = useState('');

  useEffect(() => {
    api.get('/clients').then(response => setClientes(response.data));
  }, []);
  console.log(clientes);

	const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { target } = e;
    console.log(target);


    const novoCadastro = {
			cliente: target.cliente.value,
			telefone: target.telefone.value,
			email: target.email.value,
		};

    console.log(novoCadastro);

    await api.post('/clients', novoCadastro);
    // setClientes([...clientes, novoCadastro]);
    // parou aqui ------------------------------------------------------------------------


    setFormEnviado(true);
		setTimeout(() => {
			setFormEnviado(false);
		}, 5000);

		target.reset();
	};

  const handleDelete = async (id: string) => {
    await api.delete(`/clients/${id}`);
    api.get('/clients').then(response => setClientes(response.data));
  }

	return (
		<Container>
			<Header>
				<h1>Cadastro de Cliente</h1>
			</Header>
			<Content>
				<Form onSubmit={handleSubmit}>
					<h2>Insira seus dados abaixo</h2>
					<div>
						<label>Nome completo</label>
						<input type='text' name='cliente' placeholder='Ex: Antônio da Silva' />
					</div>
					<div>
						<label>Telefone</label>
						<input type='text' name='telefone' placeholder='Ex: (24) 99999-9999' />
					</div>
					<div>
						<label>Email</label>
						<input type='email' name='email' placeholder='Ex: antonio.silva@email.com' />
					</div>
					<button type='submit'>Salvar</button>
				</Form>
        {!!formEnviado && <span className='success'>Cadastro salvo com sucesso!</span>}
			</Content>
			<Content>
				<h2>Cadastros Realizados</h2>
				{clientes.map((cliente, indice) => (
          <Data key={indice}>
            <div className='leftData'>
              <div>
                <label>Nome completo</label>
                <span>{cliente.cliente}</span>
              </div>
              <div>
                <label>Telefone</label>
                <span>{cliente.telefone}</span>
              </div>
              <div>
                <label>Email</label>
                <span>{cliente.email}</span>
              </div>
            </div>
            <div className='rightData'>
              <button type='button'>Alterar</button>
              <button type='button' onClick={() => handleDelete(cliente.id)}>Excluir</button>
            </div>
				</Data>
        ))}
			</Content>
		</Container>
	);
};
