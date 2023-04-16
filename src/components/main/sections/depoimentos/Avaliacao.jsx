export default function Avaliacao(props) {
    return (
        <div className="avaliacao">
            <div>
                <img src={`./img/${props.foto}`} alt="" />
            </div>
            <p className="nome">{props.nome}</p>
            <p className="ava1">{props.avaliacao1}</p>
            <p>{props.avaliacao2}</p>
        </div>
    )
}