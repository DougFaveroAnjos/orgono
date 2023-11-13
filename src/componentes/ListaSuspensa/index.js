import './ListaSuspensa.css'

export function ListaSuspensa(props){

    const aoSelecionar = (e) => {
        /**pega a informação que está escrita no menu retratil*/
        props.aoAlterar(e.target.value)
    }

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
            onChange={aoSelecionar}
            value={props.valor}
            required={props.obrigatorio}>
                {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>

    )
}

export default ListaSuspensa