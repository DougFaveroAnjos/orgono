import './Formulario.css'
import CampoTexto from '../CampoTexto'

export function Formulario() {
    return (
        <section className='box-formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto placeholder='Digite seu Nome' label='Nome' />
                <CampoTexto placeholder='Digite seu Cargo' label='Cargo' />
                <CampoTexto placeholder='Insira o link do perfil do GitHub' label='Imagem' />
            </form>
        </section>
    )
}

export default Formulario