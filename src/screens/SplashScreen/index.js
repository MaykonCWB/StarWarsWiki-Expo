import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, Logo, Container } from '../../components'
import logoImage from '../../../assets/logowars.png'

export const SplasshScreen = () => {
  return (
    <Container align="center" justify="center">
      <Logo />
      <Text>StarWars Wiki Blade.</Text>
      <StatusBar style="auto" />
    </Container>
  )
}
