import TituloSection from "../TituloSection";
import Avaliacao from "./Avaliacao";

export default function Depoimentos(){

    const todosClientes = [

        {   
            foto: "foto01.jpg",
            nome:"Ana Bruk",
            avaliacao1:"Estou muito satisfeita", 
            avaliacao2:"Recomendo essa corretora para todos"
        },
        {
            foto:"foto02.jpg",
            nome:"Dani Skuls",
            avaliacao1:"Estou muito feliz",
            avaliacao2:"Recomendo, foi a melhor escolha que fiz"
        },
        {
            foto:"foto03.jpg",
            nome:"Carla Wolf", 
            avaliacao1:"Estou muito contente",
            avaliacao2:"Recomendo, amei a minha aquisição, com certeza vocês também vão"
        },
        {
            foto:"foto04.jpg",
            nome:"Michael Scofield", 
            avaliacao1:"Serviço de qualidade",
            avaliacao2:"Serviu perfeitamente para minhas necessidades."
        },
        {
            foto:"foto05.jpg",
            nome:"Marie Carter", 
            avaliacao1:"Realmente muito bom !",
            avaliacao2:"Me ajudou muito, eu recomendo a todos !!"
        }
    ]

    const showClientes = () =>{

        let cliente = todosClientes;
        let sort1 = Math.floor(Math.random()*(4-0)+1);
        let sort2 = Math.floor(Math.random()*(4-0)+1);

        while(sort1 == sort2){

            sort2 = Math.floor(Math.random()*(4-0)+1);
        }

     
        cliente.splice(sort1,1);
        cliente.splice(sort2-1,1);


        // console.log(cliente);

        
      return cliente.map((cliente) => <Avaliacao nome={cliente.nome} foto={cliente.foto} avaliacao1={cliente.avaliacao1} avaliacao2={cliente.avaliacao2}/>);
    }

    

    return(
        <section> 
            <TituloSection titulo="Clientes felizes. Novos amigos ;)" subtitulo="(DEPOIMENTOS DE ALGUNS CLIENTES REAIS" />
            <div className="containerAvaliacoes">
                {showClientes()}
            </div>
            {/* <Avaliacao foto={clientes[0].foto} nome={clientes[0].nome} avaliacao1={clientes[0].avaliacao1} avaliacao2={clientes[0].avaliacao2}/>
            <Avaliacao foto="foto02.jpg" nome="Dani Skuls" avaliacao1="Estou muito feliz" avaliacao2="Recomendo, foi a melhor escolha que fiz"/>
            <Avaliacao foto="foto03.jpg" nome="Carla Wolf" avaliacao1="Estou muito contente" avaliacao2="Recomendo, amei a minha aquisição, com certeza vocês também vão"/> */}
        </section>
    )

}