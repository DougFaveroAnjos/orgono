import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import times from '../../Listas/TimesLista'
import Botao from '../Botao'

export function Formulario() {
    
    const aoSalvar = (evento)=> {
        /**Previne o comportamento padrão do navegador (recarregar a página) */
        evento.preventDefault()
        console.log("form enviado")
    }


    return (
        <section className='box-formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} placeholder='Digite seu Nome' label='Nome' />
                <CampoTexto obrigatorio={true} placeholder='Digite seu Cargo' label='Cargo' />
                <CampoTexto placeholder='Insira o link do perfil do GitHub' label='Imagem' />
                <ListaSuspensa obrigatorio={true} item={times} label='Time' />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario