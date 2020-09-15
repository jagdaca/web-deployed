import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/common'
import starIcon from 'assets/icons/star.svg'
import forkIcon from 'assets/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

export const Projects = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 8
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
