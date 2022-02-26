import * as React from "react"
import { graphql } from "gatsby"
import { Link } from 'gatsby'
import { Button } from 'antd'

const NotFoundPage = () => {

  return (
    <div align="center" style={{ padding: 80 }}>
      <h1>404: ขออภัยไม่พบหน้าที่คุณต้องการ</h1>
      <Button.Group size="large">
        <Button type="primary" size="large">
          <Link to="/">กลับหน้าหลัก</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`