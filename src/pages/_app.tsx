import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'
import theme from '../../styles/theme'

const myTheme = extendTheme(theme)


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={myTheme}>
      <CSSReset/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
