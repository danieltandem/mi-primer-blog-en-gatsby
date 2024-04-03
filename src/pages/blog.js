import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
export const query = graphql`
query {
    allFile {
        nodes {
            name
        }
        }
    }`
const Blog = ({data}) =>{
    return(
    <Layout pageTitle='Blog'>
    <ul>
    {data.allFile.nodes.map(node=> (
    <li>{node.name}</li>
    ))}
    </ul>
    </Layout>
    )
}
export default Blog
export const Head = ()=> <Seo title= "Blog" />

