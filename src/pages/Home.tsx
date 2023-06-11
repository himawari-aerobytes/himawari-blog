import React from "react"
import { graphql } from "gatsby"
import Box from '@mui/material/Box';
import SideBar from "../components/SideBar";
import NavigationBar from "../components/NavigationBar";



const Home = ({ data } : any) => {
  return (
    <>
    <NavigationBar/>
    <Box sx={{display:'flex',flexDirection:'row'}}>
      <SideBar/>
      <Box sx={{mx:5}}>
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
    </Box>
    </Box>
    
    
    </>
  )
};

export const query = graphql`
  query {
    allWpPost(sort: { date:ASC }) {
      edges {
        node {
          id
          title
          excerpt
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    layout: CONSTRAINED
                    transformOptions: { cropFocus: CENTER }
                    width: 500
                    height: 280
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Home

