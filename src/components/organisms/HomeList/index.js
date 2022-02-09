import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://23670.cdn.simplo7.net/static/23670/sku/quadros-quadro-decorativo-velcro-darth-vader-star-wars--p-1582384116874.jpg',
  },
  {
    id: 1,
    image_url:
      'https://images-americanas.b2w.io/produtos/2640283951/imagens/8cm-star-wars-figura-brinquedos-mestre-yoda-baby/2640283951_1_large.jpg',
  },
]

export const HomeList = () => {
  return (
    <FlatList
      horizontal
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  )
}
