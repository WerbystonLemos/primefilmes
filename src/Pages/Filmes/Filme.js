import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css';

export default function Filme(){

    const { id }                    = useParams();
    const [ filme, setFilme ]       = useState({});
    const [ loading, setLoading ]   = useState(true);
    const navigate                  = useNavigate();

    useEffect( () => {
        async function loadFilme()
        {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '8eef1f105dfbb5e8939df12d84546a10',
                    language: 'pt-BR'
                }
            })
            .then( (response) => {
                setFilme(response.data)
                console.log(filme)
                setLoading(false);
            })
            .catch( (e) => {
                alert("Filme não encontrado")
                navigate("/", {
                    replace: true
                });
                return
                // console.log("Filme não encontrado")
                // console.log(e)
            })
    
        }
        loadFilme();
        
        return () => {
            console.log("Componente desontado!");
        }
    }, [])

    if(loading)
    {
        return(
            <div className='filme-info'>
                Carregando detalhes...
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            
            <h3>SINOPSE</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className='area-buttons'>
                <button>Salvar</button>
                <button>
                    <a target="_black" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}