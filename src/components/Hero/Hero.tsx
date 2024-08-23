import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import { Flex, Button } from 'antd'
import LogoSliv from '@/images/logos/sliv-white.svg'
import Image from 'next/image'
import './styles.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <Flex
          className='hero_container'
          vertical
          gap={24}
          align='center'
          justify='center'
        >
          <Image src={LogoSliv} alt='Logo de Sliv' width={200} />
          <Flex vertical gap={8}>
            <Title className='hero_container-title' level={2}>
              Marketplace de cartas coleccionables
            </Title>
            <Text className='hero_container-subtitle'>
              Compra, vende y colecciona cartas de tus juegos favoritos
            </Text>
          </Flex>
          <Flex gap={8}>
            <Button type='primary' size='large'>
              Ver todas las cartas
            </Button>
            <Button size='large'>Buscar una carta</Button>
          </Flex>
        </Flex>
      </div>
    </div>
  )
}

export default Hero
