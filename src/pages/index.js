// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout.js'
import { StaticImage } from 'gatsby-plugin-image'
// Step 2: Define your component
const IndexPage = () => {
return (
  <Layout pageTitle='Pagina de Inicio'>
    <p>Robar mola</p>
    <StaticImage src="https://www.caracolviajero.com.es/blog/wp-content/uploads/2020/05/palacio-real-aranjuez.jpg" alt='exterior del palacio real en Aranjuez'/>
    <StaticImage src='../images/estanquechinescos.jpg' alt='estanque chinescos'/>
  </Layout>

)
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>


// Step 3: Export your component
export default IndexPage

  