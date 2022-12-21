import "./style.css";

const Collaborator = (props) => {
  return (
    <div className="collaborator">
      <div className="cabecalho" style={{ backgroundColor: props.background }}>
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
