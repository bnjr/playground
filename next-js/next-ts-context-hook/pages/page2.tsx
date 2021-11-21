import type { NextPage } from 'next'
import styled from 'styled-components'
import Button from '../components/button'
import Subtitle from '../components/subtitle'
import { ThemeProvider } from '../providers/themeContext'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Title>useContext Hook page2</Title>
      <Button />
      <Subtitle />
      <p>
        <Link href="/">
          <a>Goto Page 1</a>
        </Link>
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding-top: 150px;
  display: grid;
  justify-items: center;
`

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: blue;
  text-align: center;
`

export default Home
