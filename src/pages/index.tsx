import { 
  Flex, 
  Text,
  Image, 
  Heading, 
  Input,
  Button,
} from '@chakra-ui/react'

import { useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import Modal from './modal'
import { useRouter } from 'next/router'

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object().shape({
  cpf: yup.string().required('CPF é obrigatório').min(11, "Mínimo da caracteres para CPF é 11"),
  email: yup.string().email("Digite um email válido").required('Email é obrigatório!'),
  passWord: yup.string().required('Senha é obrigatório!').min(8, 'Senha deve conter um mínimo de 8 dígitos'),
  confirmPassWord: yup.mixed().required('Campo necessário').test(
    "match",
    "As senhas Não conicidem !", // your error message
    function () {
      return this.parent.passWord === this.parent.confirmPassWord;
    }
  )
  
});


export default function Home() {




  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });


  const [setDirection] = useMediaQuery("(max-width: 400px)")
  const [setHiddenImage] = useMediaQuery("(max-width: 600px)")
  const [showPassWord, setShowPassword] = useState(false)


 const router = useRouter()

 const handleClickSubmit = (user) => {
    console.log(user.cpf)
    router.push('/modal', )

 }



  const handleShowPassWord = () => {
    setShowPassword(!showPassWord)
  }

  useEffect(() => {

  },[showPassWord])

  return (

    <>
      <Flex
        width={'100%'}
        height='100vh'
        justifyContent='center'

      >
        <Flex  
        flexDir='column' 
        alignItems='flex-start'
        display={setHiddenImage ? 'none' : 'flex'}
    >
          <Flex 
          alignItems='center' 
          position='absolute'
          w={['7rem','10rem']} 
          justifyContent='space-between' 
          margin={['1rem 0 0 1rem','2rem 0 0 2rem']}
          >
            <Image 
              src='/arrow-left.svg'
              alt='Botão Voltar'
              w={['1.5rem','2.5rem']}
            />
            <Text 
            color='#9B51E0'
            fontSize={['1rem','1.5rem']}
            >Retornar</Text>
          </Flex>
          <Image 
            src='/cadastro.png' 
            alt='Imagem de uma mulher sentada na frente do computador'
            w={[100, 200, 300]}
            margin='auto'
            marginLeft={['10vw','10vw','2rem', '20vw']}
            display={setHiddenImage ? 'none' : 'flex'}

          />
        </Flex>
        <Flex
          width={['88vw','50vw','50vw','35vw']}
          height={['95%','85%','95%','85%','90%']}
          bgColor='gray.500'
          flexDir='column'
          alignItems='center'
          borderRadius={['30px']}
          margin='auto'
          maxH='700px'
          maxW='500px'
        >

        <Flex marginTop='2rem' marginBottom='2rem' justifyContent='space-between'>
          <Flex flexDir='column' margin='1rem 0.5rem'>
            <Text
                fontWeight='bold'
                fontSize={['1.2rem','1.5rem','1.5rem','1.8rem']}
                color='blue.500'
              >Cadastrar Candidato</Text>
            <Heading flex='strech' fontWeight={['bold', 'normal']} fontSize={['0.6rem','0.8rem']} textAlign='left'>Cadastre-se e encontre a oportunidade que deseja</Heading>
          </Flex>
          <Flex >
            <Image
            w={['60px','150px','70px','90px']}
            h={['60px','150px','70px','90px']}

            src='/logoGria.png' 
            alt='Logo Gria'></Image>
          </Flex>
        </Flex>
        <Flex
        as='form' 
        onSubmit={handleSubmit(handleClickSubmit)} 
        flexDir='column'
        w='100%'
        h='100%'
        alignItems='center' 
        justifyContent='center'>
            <Input
              width={['80%','80%']}
              placeholder='CPF'
              borderRadius='none'
              backgroundColor='white.500'
              marginBottom='1rem'
              id='cpf'
              {...register("cpf")}
              
            >
              
            </Input>
            {errors.cpf && <Text color='red.100'>{errors.cpf.message}</Text>}
            
            <Input
              width='80%'
              placeholder='Email'
              borderRadius='none'
              backgroundColor='white.500'
              marginBottom='1rem'
              id='email'
              {...register('email')}
              
            >
            </Input>
            {errors.email && <Text color='red.100'>{errors.email.message}</Text>}

            <Flex w='100%' display='flex' justifyContent='center' alignItems='center' mb='1rem'>
              <Input
                width='80%'
                placeholder='Senha'
                type={showPassWord ? 'text' : 'password'}
                borderRadius='none'
                backgroundColor='white.500'
                id='passWord'
                {...register('passWord')}
                
              />
                          
              <Image 
              src={'/show-password.svg'} 
              alt='Botão mostrar senha'
              w={['30px']}
              position='absolute'
              right={['20%','32%','14%','15%','13%','23%']}
              onClick={handleShowPassWord}
              zIndex='999'
              >
              </Image>              
            </Flex>
            {errors.passWord && <Text color='red.100'>{errors.passWord.message}</Text>}

            <Flex w='100%' display='flex' justifyContent='center' alignItems='center'>
              <Input
                width='80%'
                placeholder='Confirmar Senha'
                type={showPassWord ? 'text' : 'password'}
                borderRadius='none'
                backgroundColor='white.500'
                id='confirmPassword'
                {...register('confirmPassWord')}
              />
              <Image 
              src={'/show-password.svg'} 
              alt='Botão mostrar senha'
              w={['30px']}
              position='absolute'
              right={['20%','32%','14%','15%','13%','23%']}
              onClick={handleShowPassWord}
              zIndex='999'
              >
              </Image>
            </Flex>
            {errors.confirmPassWord && <Text color='red.100'>{errors.confirmPassWord.message}</Text>}


            <Button 
              w='80%'
              mt={['2rem','1rem','0.5rem','2rem']}
              bgColor='gray.600' 
              color='gray.700'
              type='submit'
              _hover={{                
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
              }}
              >
              Cadastrar
            </Button>

            <Button 
              w={['80%']}
              mt='1rem'
              border='1px solid #1071e6'
              color='blue.500'
              bgColor='#FFF'
              fontSize={['0.8rem','0.8rem','0.8rem','0.9rem']}
              >
              Já possui cadastro? Faça Loguim Aqui
            </Button>
        </Flex>
        </Flex>
      </Flex>
    
    </>
    
  )
}
