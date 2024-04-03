import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const SobreMi = function(){
    return (
    <Layout pageTitle="Sobre Mi">
    <p>Soy un tipo aburrido y me voy a divorciar</p>
    </Layout>
    )
}
export default SobreMi
export const Head = ()=> <Seo title= "Sobre Mi" />

