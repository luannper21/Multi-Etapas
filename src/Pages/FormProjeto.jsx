import * as C from "@chakra-ui/react"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

const FormProjeto = () => {
    return (
        <C.VStack>
             <C.Heading as="h1" size="lg" textAlign="center">
        Formulário Projeto
      </C.Heading>
        <C.Input type="text" placeholder="Projeto"/>
        <C.Heading as="h1" size="lg" textAlign="center">
        Area
      </C.Heading>
        <Checkbox defaultChecked>CETCC</Checkbox>
        <Checkbox defaultChecked>CETAFAJU</Checkbox>
        <Checkbox defaultChecked>CETICC</Checkbox>
        <Checkbox defaultChecked>CETAFEST</Checkbox>
        <C.Input type="text" placeholder="Coordenador/Professor"/>
        </C.VStack>
    )
    
    }
    



export default FormProjeto