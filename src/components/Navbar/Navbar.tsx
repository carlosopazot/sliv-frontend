'use client'

import { Flex, Select, Avatar } from 'antd'
import { UserOutlined, SearchOutlined } from '@ant-design/icons'
import ToggleTheme from '@/components/ToggleTheme/ToggleTheme'
import Image from 'next/image'
import LogoSlivWhite from '@/images/logos/sliv-white.svg'
import LogoSlivBlack from '@/images/logos/sliv-black.svg'
import './styles.css'

import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'

const Navbar = () => {
  const { isDarkMode } = useContext(ThemeContext) as any

  return (
    <div className={`navbar ${isDarkMode ? 'dark' : ''}`}>
      <div className='container'>
        <Flex align='center' justify='space-between' gap={8}>
          <Image
            src={isDarkMode ? LogoSlivWhite : LogoSlivBlack}
            alt='Logo de Sliv'
            width={100}
          />
          <Select
            showSearch
            size='large'
            placeholder='Buscar cartas'
            style={{ width: 300 }}
            notFoundContent={null}
            suffixIcon={<SearchOutlined />}
          />
          <Flex gap={8}>
            <ToggleTheme />
            <Avatar size={40} icon={<UserOutlined />} />
          </Flex>
        </Flex>
      </div>
    </div>
  )
}

export default Navbar
