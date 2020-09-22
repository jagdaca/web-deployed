import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Jacob and I’m a Software engineer!" />
      </Thumbnail>
      <Details>
        <h1>Hello there, once again!</h1>
        <p>
          Thanks for visiting.
		  I am a software developer with skills and experiences on various programming languages.
		  If you want me in your team, let me know.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
