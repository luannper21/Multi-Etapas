import * as C from "@chakra-ui/react"

const FormEndereco = () => {
    return (
        <C.VStack>

<C.Heading as="h1" size="lg" textAlign="center">
        Formulário Endereço
      </C.Heading>
        <C.Input type="text" placeholder="Cep"/>
        <C.Input type="text" placeholder="Bairro"/>
        <C.Input type="text" placeholder="Cidade"/>
        <C.Input type="text" placeholder="UF"/>
        </C.VStack>
    )
    
    }
    


export default FormEndereco