import React, { useContext } from 'react'
import CoreContext from '../../contexts/core-context'
import Switch from '../switch'
import * as S from './styled'

const DarkModeSwitch: React.FC = () => {
  const coreContext = useContext(CoreContext)

  const _onChangeTheme = (value: boolean) => {
    coreContext?.changeTheme(value ? 'dark' : 'light')
  }

  return (
    <Switch
      onChange={_onChangeTheme}
      value={coreContext?.theme === 'dark'}
      enabledIcon={
        <S.StyledI className={`material-icons`}>brightness_3</S.StyledI>
      }
      disabledIcon={
        <S.StyledI isLight className={`material-icons`}>
          highlight
        </S.StyledI>
      }
    />
  )
}

export default DarkModeSwitch
