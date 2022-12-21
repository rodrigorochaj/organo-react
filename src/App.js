import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const times = [
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Sciense",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE95F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map((time) => time.nome)}
        aoCadastrarColaborador={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Team
          nome={time.nome}
          key={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
