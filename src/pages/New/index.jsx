import { Container, Content } from './styles';

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { TextArea } from '../../components/TextArea'

import { FiArrowLeft } from 'react-icons/fi';

export function New() {
    return (
        <Container>
            <Header />
            <Content>
                <ButtonText title='Voltar' icon={FiArrowLeft} />
                <h1>Novo filme</h1>

                <div className="input-wrapper">
                    <Input placeholder='Título' />
                    <Input placeholder='Sua nota (de 0 a 5)' />
                </div>

                <TextArea placeholder='Observações' />
            </Content>
        </Container>
    )
}