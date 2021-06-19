import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	background-color: #eee;
`;

export const Header = styled.header`
	width: 100%;
	max-width: 700px;
	margin: 0 auto;
	padding: 30px 0;
	border-bottom: 1px solid #ddd;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    text-align: center;
    height: 5rem;
    margin-bottom: 20px;
  }

	h1 {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const Content = styled.div`
	width: 100%;
	max-width: 700px;
	margin: 0 auto;
	padding: 30px;

	h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1px solid #ddd;
		padding-top: 30px;
	}

	.success {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #21ab47;
		font-weight: 600;
		margin-top: 20px;
	}

  .noData {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #e30000;
		font-weight: 600;
		margin-top: 20px;
	}
`;

export const Form = styled.form`
	width: 650px;
	margin: 0 auto;
	padding: 30px;
	border-radius: 0.8rem;
	background-color: #fff;
	box-shadow: 5px 5px 26px 5px rgba(0, 0, 0, 0.15);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		padding: 0;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		margin-top: 30px;

		label {
			font-size: 0.8rem;
		}

		input {
			margin-top: 5px;
			border: 1px solid #ddd;
			border-radius: 0.8rem;
			padding: 5px 10px;
			width: 500px;
			font-size: 0.95rem;
			transition: 0.2s;
		}

		input:focus {
			border: 1px solid #21ab47;
		}
	}

	button {
		margin-top: 30px;
		height: 30px;
		width: 100px;
		border: 0;
		border-radius: 0.8rem;
		background-color: #21ab47;
		color: #fff;
		font-weight: 600;
		transition: 0.2s;
	}

	button:hover {
		width: 130px;
		filter: brightness(85%);
	}

	@media (max-width: 900px) {
		width: 100%;

		div {
			input {
				width: 15rem;
			}
		}
	}
`;

export const Data = styled.div`
	width: 650px;
	margin: 0 auto;
	padding: 40px 30px;
	border-radius: 0.8rem;
	background-color: #fff;
	box-shadow: 5px 5px 26px 5px rgba(0, 0, 0, 0.15);
	margin-top: 30px;

	display: flex;
	align-items: center;
	justify-content: center;

	.leftData {
		width: 50%;
		padding-left: 50px;

		div {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			margin-top: 30px;

			label {
				font-size: 0.8rem;
			}

			span {
				margin-top: 5px;
			}
		}

		div:first-child {
			margin-top: 0;
		}
	}

	.rightData {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		padding-right: 50px;

		button {
			height: 30px;
			width: 100px;
			border: 0;
			border-radius: 0.8rem;
			background-color: #007ecc;
			color: #fff;
			font-weight: 600;
			transition: 0.2s;
		}

		button:last-child {
			margin-top: 30px;
			background-color: #e30000;
		}

		button:hover {
			width: 130px;
			margin-right: -15px;
			filter: brightness(85%);
		}
	}

	@media (max-width: 900px) {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.leftData {
			padding: 0;
			margin: 0 auto;
      width: 100%;

			div {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
		}

    .rightData {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 30px auto 0 auto;

      button {
        padding: 0 10px;
      }

      button:last-child {
        margin: 0;
        margin-left: 20px;
      }

      button:hover {
			width: 100px;
			margin-right: 0;
			filter: brightness(85%);
		}
    }
	}
`;

export const Footer = styled.footer`
	width: 100%;
	max-width: 700px;
	margin: 0 auto;
	padding: 30px 0;
	border-top: 1px solid #ddd;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 0.75rem;
  }

  p:first-child {
    margin-bottom: 5px;
  }
`;
