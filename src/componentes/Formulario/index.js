import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import times from '../../Listas/TimesLista'
import Botao from '../Botao'
import { useState } from 'react'

export function Formulario() {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    
    const aoSalvar = (evento)=> {
        /**Previne o comportamento padrão do navegador (recarregar a página) */
        evento.preventDefault()
        console.log("form enviado =>", nome, '/', cargo, '/', imagem)
    }


    return (
        <section className='box-formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                obrigatorio={true}
                placeholder='Digite seu Nome' 
                label='Nome'
                valor={nome}
                aoAlterar={valor => setNome(valor)} 
                />

                <CampoTexto
                obrigatorio={true}
                placeholder='Digite seu Cargo' 
                label='Cargo' 
                valor={cargo}
                aoAlterar={valor => setCargo(valor)}
                />

                <CampoTexto 
                placeholder='Insira o link do perfil do GitHub' 
                label='Imagem' 
                valor={imagem}
                aoAlterar={valor => setImagem(valor)}
                />

                <ListaSuspensa obrigatorio={true} item={times} label='Time' />
                <Botao onSubmit={aoSalvar} >
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario