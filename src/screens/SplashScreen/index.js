import React, { useEffect } from 'react'
import { Text, Logo, Container } from '../../components'
import logoImage from '../../../assets/logowars.png'
import { NavigationRouteContext } from '@react-navigation/native'

export const SplasshScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 1000)
  }, [navigation])

  return (
    <Container align="center" justify="center">
      <Logo />
      <Text>StarWars Wiki Blade.</Text>
    </Container>
  )
}
