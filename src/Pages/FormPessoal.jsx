import * as C from "@chakra-ui/react"
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'



const FormPessoal = () => {

    const [gender, setGender] = useState('masculino')
return (
    <C.VStack spacing={4} align="stretch">
         <C.Heading as="h1" size="lg" textAlign="center">
        Formulário Pessoal
      </C.Heading>
    <C.Input type="text" placeholder="Nome"/>
    <C.Input type="text" placeholder="CPF"/>
    <C.Input type="email" placeholder="Email"/>

    <C.FormControl>
        <C.FormLabel>Gênero</C.FormLabel>
        <RadioGroup onChange={setGender} value={gender}>
          <Stack direction='row'>
            <Radio value='masculino'>Masculino</Radio>
            <Radio value='feminino'>Feminino</Radio>
          </Stack>
        </RadioGroup>
      </C.FormControl>

    </C.VStack>

)

}

export default FormPessoal