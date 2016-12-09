import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Rates from './Rates'
import Activations from './Activations'

const ServicePlans = () => (
  <Column>
    <Layout grow={1} />
    <Layout basis='924px'>
      <Row>
        <Layout>
          <Activations />
        </Layout>
        <Layout>
          <Rates />
        </Layout>
        <Layout basis='20px' />
      </Row>
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default ServicePlans
