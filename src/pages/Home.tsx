import React from "react"
import { graphql } from "gatsby"


const Home = ({ data } : any) => {
  return (
    <div className="p-Home-main">
      {data.allWpPost.edges.map(({ node } :any) => (
        <div key={node.id} className="p-Home-block">
          <h2 className="p-Home-heading">{node.title}</h2>
          <div
            className="p-Home-desc"
            dangerouslySetInnerHTML={{ __html: node.excerpt }}
          />
        </div>
      ))}
    </div>
  )
};

export const query = graphql`
  query {
    allWpPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          excerpt
        }
      }
    }
  }
`

export default Home

