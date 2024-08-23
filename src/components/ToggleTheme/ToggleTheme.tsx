'use client'

import { Button } from 'antd'
import { useContext } from 'react'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'
import { ThemeContext } from '@/context/ThemeContext'

const ToggleTheme = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext) as any

  return (
    <Button
      type='text'
      onClick={toggleDarkMode}
      icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
      size='large'
    />
  )
}

export default ToggleTheme
