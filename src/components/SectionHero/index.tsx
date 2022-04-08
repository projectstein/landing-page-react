import * as S from './styles'

import { HeaderProps, LogoProps } from 'types/api'

import Button from 'components/Button'
import Container from 'components/Container'
import Logo from 'components/Logo'
import React from 'react'
import { gaEvent } from 'utils/ga'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  logo: LogoProps
  header: HeaderProps
}

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

const SectionHero = ({ logo, header }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={header.button.url} onClick={onClick} wide>
              {header.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(header.image.url)}
          alt={header.image.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
