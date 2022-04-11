import * as S from './styles'

import CardModule from 'components/CardModule'
import Container from 'components/Container'
import Heading from 'components/Heading'
import React from 'react'
import { SectionModulesProps } from 'types/api'
import content from './content'

const SectionModules = ({ title, modules }: SectionModulesProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {modules.map(({ title, subtitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
