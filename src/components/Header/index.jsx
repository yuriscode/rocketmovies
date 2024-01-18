import { Container, Profile } from './styles';
import { Input } from '../Input';

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input placeholder='Pesquisar pelo título'/>

            <Profile>
                <div>
                    <strong>
                        Yuri Marques
                    </strong>
                    <span>
                        <a href="">sair</a>
                    </span>
                </div>
                <img 
                    src="https://github.com/yuriscode.png" 
                    alt="Foto do usuário" 
                />

            </Profile>
        </Container>
        )
}