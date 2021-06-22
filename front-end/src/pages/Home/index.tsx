import React, { useState, useEffect } from 'react';
import { scroller, animateScroll as scroll } from 'react-scroll';

import api from '../../services/api';

import { Container, Header, Content, Form, Data, Footer } from './styles';

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

	// Get data from database
	useEffect(() => {
		api.get('/clients').then((response) => setClientes(response.data));
	}, []);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const { target } = e;

		const novoCadastro = {
			cliente: target.cliente.value,
			telefone: target.telefone.value,
			email: target.email.value,
		};

		if (id) {
			await api.put(`/clients/${id}`, novoCadastro);
			scroller.scrollTo(id, { smooth: true });
		} else {
			await api.post('/clients', novoCadastro);
			scroll.scrollToBottom();
		}
		api.get('/clients').then((response) => setClientes(response.data));

		setCliente('');
		setTelefone('');
		setEmail('');

		setFormEnviado(true);
		setTimeout(() => {
			setFormEnviado(false);
		}, 5000);

		target.reset();
	};

	const handleDelete = async (id: string) => {
		await api.delete(`/clients/${id}`);
		api.get('/clients').then((response) => setClientes(response.data));
	};

	const handleEdit = (id: string) => {
		async function loadData() {
			const dados = await api
				.get(`/clients/${id}`)
				.then((response) => response.data);
			console.log(dados);
			if (dados) {
				setId(dados.id);
				setCliente(dados.cliente);
				setTelefone(dados.telefone);
				setEmail(dados.email);
			} else {
				setClientes([]);
			}
		}
		loadData();
		scroll.scrollToTop();
	};

	return (
		<Container>
			<Header>
				<img src='icons/profile.png' alt='Cadastro' />
				<h1>Cadastro de Clientes</h1>
			</Header>
			<Content>
				<Form onSubmit={handleSubmit}>
					<h2>Insira seus dados abaixo</h2>
					<div>
						<label>Nome completo</label>
						<input
							type='text'
							name='cliente'
							value={cliente}
							onChange={(e) => setCliente(e.target.value)}
							required
							placeholder='Ex: Antônio da Silva'
						/>
					</div>
					<div>
						<label>Telefone</label>
						<input
							type='text'
							name='telefone'
							value={telefone}
							onChange={(e) => setTelefone(e.target.value)}
							required
							placeholder='Ex: (24) 99999-9999'
						/>
					</div>
					<div>
						<label>Email</label>
						<input
							type='email'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder='Ex: antonio.silva@email.com'
						/>
					</div>
					<button type='submit'>Salvar</button>
				</Form>
				{!!formEnviado && (
					<span className='success'>Cadastro salvo com sucesso!</span>
				)}
			</Content>
			<Content>
				<h2>Cadastros Realizados</h2>
				{!clientes && (
					<span className='noData'>Não existem cadastros realizados!</span>
				)}
				{clientes.map((cliente, indice) => (
					<Data key={indice}>
						<div className='leftData' id={cliente.id}>
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
							<button type='button' onClick={() => handleEdit(cliente.id)}>
								Alterar
							</button>
							<button type='button' onClick={() => handleDelete(cliente.id)}>
								Excluir
							</button>
						</div>
					</Data>
				))}
			</Content>
			<Footer>
				<p>
					Trabalho desenvolvido para 2AVD da disciplina de POO II do curso de
					Sistemas de Informação do UniFOA
				</p>
				<p>Danilo Duarte Ribeiro | Matrícula: 201801201</p>
			</Footer>
		</Container>
	);
};
