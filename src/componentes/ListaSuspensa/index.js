import './ListaSuspensa.css'

export function ListaSuspensa(props){
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>

    )
}

export default ListaSuspensa