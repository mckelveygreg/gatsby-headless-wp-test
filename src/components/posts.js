import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Posts = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)
  return (
    <div>
      {data.allWordpressPost.edges.map((post, key) => {
        return (
          <div key={key}>
            <h3>{post.node.title}</h3>
            <Link to={`/post/${post.node.slug}`}>Read More</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
