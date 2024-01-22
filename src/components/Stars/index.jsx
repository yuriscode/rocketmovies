import { FiStar } from 'react-icons/fi';
import { Container } from './styles';

const items = [...(new Array(5).keys())]

export function Stars({ isActive }) {
    return (
        <Container isActive={isActive}>
            {items.map(index =>
                <FiStar
                    key={`star_${index}`}
                />
            )}
        </Container>
    )
}
