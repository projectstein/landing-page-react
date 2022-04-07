import * as S from './styles'

import Button from 'components/Button'
import Container from 'components/Container'
import Logo from 'components/Logo'
import { LogoProps } from 'types/api'
import React from 'react'
import { gaEvent } from 'utils/ga'

type Props = {
  logo: LogoProps
}

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

const SectionHero = ({ logo }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>React Avançado</S.Title>
          <S.Description>
            Crie aplicações reais com NextJS, Strapi, GraphQL e mais!
          </S.Description>
          <S.ButtonWrapper>
            <Button
              href="https://www.udemy.com/course/react-avancado/?couponCode=PROMOABR22"
              onClick={onClick}
              wide
            >
              Comprar
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src="/img/hero-illustration.svg"
          alt="Ilustração de um desenvolvedor em frente a um computador com várias linhas de código."
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
