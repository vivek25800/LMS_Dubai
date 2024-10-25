import React from 'react'
import SidebarTwo from './SidebarTwo'
import TopBar from './TopBar'
import StepsCourse from './StepsCourse'

function StartCourse() {
  return (
    <div style={{backgroundColor:"rgba(46, 7, 63, 0.1)"}}>

        <style>{`
        .sidebartwo-div{
            width: 22%;
            height: 100%;
            position: fixed;
            left: 0px;
            top: 0px;
            }
            .top-main-content{
            width: 78%;
            padding: 1rem;
            padding-left: 0px;
            height: 100vh;
            position: fixed;
            right: 0px;
            overflow: scroll;
            }
            .main-courses-div{
            display: flex;
            height: 100vh;
            }
             .main-content-div{
            background-color: #ffffff;
            border-radius: 10px;
            margin-top: 1rem;
            padding: 1rem;
            }
            .main-course-content{
            // border: 2px solid #000;
            width: 90%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            }
            .course-info-div{
            border: 1px solid rgba(0,0,0,0.2);
            width: 60%;
            padding: 1.3rem;
            border-radius: 10px;
            }
            .enroll-div{
            border: 1px solid rgba(0,0,0,0.2);
            width: 36%;
            border-radius: 10px;
            }
            .overview-div{
            border-bottom: 1px solid rgba(0,0,0,0.1);
            margin-bottom: 1rem;
            }
            .overview-div span{
            border-bottom: 2px solid #000;
            }
            .upper-content img{
            width: 100%;
            height: 300px;
            border-radius: 14px;
            margin-bottom: 1rem;
            }
            .aboutCourse-div button{
            width: 100%;
            background-color: #7A1CAC;
            margin-bottom: 1rem;
            }
            .aboutCourse-div button:hover{
            background-color: #481066;
            }
        `}</style>

        <div className='main-courses-div'>
            <div className='sidebartwo-div'>
                <SidebarTwo />
            </div>

            <section className='top-main-content'>
                <div>
                    <TopBar/>
                </div>
                <div className='main-content-div'>
                   <div className='overview-div'>
                        <span>Overview</span>
                   </div>
                   <div className='main-course-content'>
                      <div className='course-info-div'>
                        <div className='upper-content'>
                            <img src='photo_1.jpg' />
                            <div className='aboutCourse-div'>
                                <button>START</button>
                                <p>Data science is an interdisciplinary field that focuses on extracting knowledge and insights from data. It involves using various scientific methods, algorithms, and systems to process large sets of data and derive meaningful patterns. The field encompasses a wide range of areas such as statistics, machine learning, data mining, and big data technologies.  </p>
                            </div>
                        </div>
                        <div>
                            <h6>Steps:</h6>
                        </div>
                        <div className='lower-content'>
                            <StepsCourse/>
                            <StepsCourse/>
                            <StepsCourse/>
                            <StepsCourse/>
                            <StepsCourse/>
                            <StepsCourse/>
                        </div>
                      </div>

                      <div className='enroll-div'>
                        <h5>Your Session</h5>

                        <div>
                            <h6>[BU] Enova - Data for Experts</h6>
                            <div>
                                <p> <i class="fa-regular fa-calendar"></i> Apr 23, 2024 - No end Date</p>
                            </div>
                        </div>

                      </div>
                   </div>
                </div>
            </section>
       </div>
      
    </div>
  )
}

export default StartCourse
