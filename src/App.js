import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';



function App() {
  return (
    <div className="App">
      <Banner />      
      <CampoTexto placeholder='Digite seu Nome' label='Nome'/>
      <CampoTexto placeholder='Digite seu Cargo' label='Cargo'/>
      <CampoTexto placeholder='Insira a URL da sua imagem' label='Imagem'/>
    </div>
  );
}

export default App;
