export default function TituloSection(props){

    return(
        <div className="centralizar"> 
            <h2 style={{color : "darkblue"}}>{props.titulo}</h2>
            <p>{props.subtitulo}</p>
        </div>
    )

}

