import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"

const code = () => (
    <Layout>
        <Wrap>
            <h1>Code</h1>
        </Wrap>
    </Layout>
)


const Wrap = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;

h1{
    font-size: 13vw;
    font-family: 'Righteous';
    color: white;
}
`
export default code