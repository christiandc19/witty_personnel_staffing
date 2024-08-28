import React from 'react'
import {Helmet} from "react-helmet";
import './JobDetailHero.css'



const JobDetailHero = () => {
    return (

<>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Jobs - Witty Personnel</title>
            <link rel="canonical" href="https://wittypersonnel.com/about" />
        </Helmet>

        <div className='JobDetailHero'>
                <div className="JobDetailHeroContent">
                    <h1>Explore our Healthcare Jobs</h1>
                </div>
            </div>
</>
    )
}

export default JobDetailHero
