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
        <h1>Hello There!</h1>
        <p>
          I hope you like this page.
		  I am a software developer with skills and experiences on various programming languages.
		  Please contact me if you think I can be a great addition to your team.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
