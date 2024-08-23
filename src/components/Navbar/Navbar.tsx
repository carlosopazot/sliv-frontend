import { Header } from 'antd/es/layout/layout'
import './styles.css'
import { Flex, Select, Avatar } from 'antd'
import { UserOutlined, SearchOutlined } from '@ant-design/icons'
import Image from 'next/image'
import LogoSliv from '@/images/logos/sliv-white.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <Flex justify='space-between'>
          <Image src={LogoSliv} alt='Logo de Sliv' width={100} />
          <Select
            showSearch
            size='large'
            placeholder='Buscar cartas'
            style={{ width: 300 }}
            notFoundContent={null}
            suffixIcon={<SearchOutlined />}
          />
          <Avatar size={40} icon={<UserOutlined />} />
        </Flex>
      </div>
    </div>
  )
}

export default Navbar
