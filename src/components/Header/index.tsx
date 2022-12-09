/* eslint-disable prettier/prettier */
import { HeaderContainer } from './styles'
import LogoIgnite from '../../assets/logo-ignite.svg'

import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" title='timer' />
      <nav>
        <NavLink to='/'>
          <Timer size={24}/>
        </NavLink>
        <NavLink to='/history' title='histórico'>
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>)
}
