import type { ReactElement } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Button from '../components/button'
import Subtitle from '../components/subtitle'
import ButtonCounter from '../components/buttonCounter'
import SubtitleCounter from '../components/subtitleCounter'
import Link from 'next/link'

export default function Page() {
  console.log(`Page1 got called`)

  return (
    <Wrapper>
      <Title>Page1</Title>
      <Button />
      <Subtitle />
      <p>
        <ButtonCounter />
        <SubtitleCounter />
      </p>
      <p>
        <Link href="/page2">
          <a>Goto Page 2</a>
        </Link>
      </p>
    </Wrapper>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
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
  color: red;
  text-align: center;
`
