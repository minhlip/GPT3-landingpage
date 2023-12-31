import React from 'react'
import {Footer,Blog,Features,GPT3,Header,Possibility} from './Containers'
import { Article,Brand,CTA,Navbar,Feature } from './Components'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <GPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App