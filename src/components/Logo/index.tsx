import * as S from './styles'

import { LogoProps } from 'types/api'
import React from 'react'
import { getImageUrl } from 'utils/getImageUrl'

const Logo = ({ url, alternativeText }: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
