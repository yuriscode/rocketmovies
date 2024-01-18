import { Container } from './styles'

export function Input({ placeholder }){
    return(
        <Container 
            type='text' 
            placeholder={placeholder}
        />
    )
}