
import './CampoTexto.css'


export function CampoTexto(props){

    const aoDigitar = (e) => {
        /**Varre o input toda vez que for digitado algo novo*/
        props.aoAlterar(e.target.value)
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            {/** Value = Pega o valor que foi atribuido na função 'aoDigitar()' e define como o valor do input
             *   onChange = Define que qualquer alteração feita no input execute uma função
             *   Placeholder = Texto que vai dentro do input
             *   Required = Define aquele campo como obrigatório
             */}
            <input value={props.valor} onChange={aoDigitar} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
    )
}

export default CampoTexto