import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'

function ViewTrainingRequestList() {
  return (
    <div>

        <style>
            {`
            body{
            background-color: rgba(46, 7, 63, 0.1);
            padding: 20px;
            }
            .create-training-budget{
            background-color: #ffffff;
            padding: 1.5rem;
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
            .all-list-request{
            margin-top: 2rem;
            padding: 1rem;
            border: 1px solid rgba(0,0,0,0.3);
            border-radius: 8px;
            }
            .all-list-request h5{
            margin-bottom: 1.5rem;
            }
            `}
        </style>

        <div>
            <Sidebar/>

            <section className="main-content-section">
                <Header/>

                <div className='create-training-budget'>
                    <div className="title-text">
                        <h2>View Training <span style={{ fontWeight: "300" }}> Request</span></h2>
                    </div>

                    <div className='all-list-request'>
                        <h5>All Training Request list</h5>

                        <table id="example" class="table table-striped table-bordered" cellspacing="0" style={{fontSize:"14px"}} >
                            <thead>
                                <tr>
                                    <th>Sr.No.</th>
                                    <th>Employee ID</th>
                                    <th>Name</th>
                                    <th>Training Name</th>
                                    <th>Status</th>
                                    <th>Valid till</th>
                                    <th>Eligible</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>12345</td>
                                    <td>Vivek Gupta</td>
                                    <td>Jarvis</td>
                                    <td>Taken</td>
                                    <td>02-07-2025</td>
                                    <td>Yes</td>
                                    <td>Very Excited for it.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
      
    </div>
  )
}

export default ViewTrainingRequestList
