import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'

function ConductCAT() {
  return (
    <div>
        <style>
            {`
            .conduct-cat-container{
            background-color: #ffffff;
            padding: 1rem;
            border-radius: 10px;
            }
             .title-text{
            background-color: #2E073F;
            color: #ffffff;
            height: 8rem;
            padding: 2rem;
            border-top-right-radius: 1rem;
            border-top-left-radius: 1rem;
            }
            `}
        </style>

    <div style={{ backgroundColor: "rgba(46, 7, 63, 0.1)", padding: "20px", height: "100vh" }}>
        <Sidebar/>

        <section className="main-content-section">
            <Header/>

            <div className='conduct-cat-container'>
                <div className="title-text">
                    <h2>Conduct <span style={{ fontWeight: "300" }}>CAT</span></h2>
                </div>
            </div>
        </section>
    </div>
      
    </div>
  )
}

export default ConductCAT
