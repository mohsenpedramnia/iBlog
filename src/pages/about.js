import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      This is my personal blog. Everything i know and learned came from someone
      else, so i share it with you.
    </p>
    <p>I'd love to talk! Email me at the address below:</p>
    <a href="mailto:mohsen.pedramnia@gmail.com">mohsen.pedramnia@gmail.com</a>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
