import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'

const Sales = ({ salesBalance }) => (
  <Block
    shadow
    offset
    border='green'
  >
    <Row>
      <Layout>
        <Text size='large' color='gray400'>
          € {salesBalance}
        </Text>
      </Layout>
      <Layout>
        <Text size='xsmall' color='gray400'>
          Сумма продаж
        </Text>
      </Layout>
      <Layout basis='25px' />
      <Layout>
        <Column>
          <Layout>
            <Text
              color='blue400'
              size='xsmall'
            >
              Деньги
            </Text>
            <Space />
            <Text
              color='blue400'
              size='xsmall'
            >
              &#10095;
            </Text>
          </Layout>
        </Column>
      </Layout>
    </Row>
  </Block>
)

export default Sales
