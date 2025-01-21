import React, { useState } from 'react'
import EmployeeSidebar from './EmployeeSidebar'
import EmployeeHeader from './EmployeeHeader'
import { base_url } from '../Utils/base_url'
import axios from 'axios';

function CertificateList() {

  const [certificate, setCertificate] = useState([]);
  const getCertificate = async () => {
    try {
      const resp = await axios.get(``)
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div>

        <EmployeeSidebar/>

        <section className="main-content-section">
            <EmployeeHeader/>

            <div className="header-div header-two">
              <div className='title-name'>
                <h5>Certificate List</h5>
                  <p><a onClick={() => window.location.reload()} style={{cursor:"pointer", color:"#099ded"}}>Home</a> <i class="fa-solid fa-caret-right"></i> Certificate List</p> 
              </div> 
            </div>

            <div className="training-list">
              <div className="training-list-header">
                <h4 style={{color: "#fff"}}>All Certificate's</h4> 
              </div>

              <div className="training-list-body">
                <div className='assessment-data'>
                  <div className='assessment-header'>
                    <h5>Certificate title</h5>
                    <h5>Download</h5>
                  </div>


                </div>
              </div>
            </div>

        </section>

    </div>
  )
}

export default CertificateList