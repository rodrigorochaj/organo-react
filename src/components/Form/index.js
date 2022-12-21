import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import "./style.css";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const submit = (evento) => {
    evento.preventDefault();
    props.aoCadastrarColaborador({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="form">
      <form onSubmit={submit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextField
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          obrigatorio={true}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <Dropdown
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          label="Time"
          itens={props.times}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
