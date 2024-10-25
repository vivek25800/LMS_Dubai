import React from 'react'
import SidebarTwo from './SidebarTwo'
import TopBar from './TopBar'
import CourseSlider from './CourseSlider';

function CourseList() {
  return (
    <div style={{backgroundColor:"rgba(46, 7, 63, 0.1)"}}>
        <style>
            {`
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
            .category-div button{
            border-radius: 1.5rem;
            margin: 5px;
            }
            .category-div button:nth-child(1){
            width: 4rem;
            height: 2.5rem;
            background-color: #7A1CAC;
            }
            .category-div button:nth-child(2){
            width: 10rem;
            height: 2.5rem;
            background-color: #ffffff;
            border: 1px solid #7A1CAC; 
            color: #7A1CAC;
            }
            .category-div button:nth-child(3){
            width: 12rem;
            height: 2.5rem;
            background-color: #ffffff;
            border: 1px solid #7A1CAC; 
            color: #7A1CAC;
            }
            .category-div button:nth-child(2):hover,
            .category-div button:nth-child(3):hover{
            background-color: #7A1CAC;
            border: 1px solid #7A1CAC; 
            color: #ffffff;
            }
            .main-content-div{
            background-color: #ffffff;
            border-radius: 10px;
            margin-top: 1rem;
            padding: 1rem;
            }
            .suggest-div{
            padding: 1rem;
            height: 8rem;
            box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
            width: fit-content;
            border-radius: 10px;
            margin: 2rem 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            }
            .suggest-div button{
            width: 100%;
            background-color: rgba(46, 7, 63, 0.1);
            color: #7A1CAC;
            font-weight: 500;
            }
            .suggest-div button:hover{
            background-color: #ffffff;
            border: 1px solid #7A1CAC;
            }
            .courses-grid{
            // border: 1px solid #000;
            padding-bottom: 1rem;
            border-radius: 10px;
            box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
            margin: 0 1rem;
            margin-bottom: 2rem;
            }
            `}
        </style>

       <div className='main-courses-div'>
            <div className='sidebartwo-div'>
                <SidebarTwo />
            </div>

            <section className='top-main-content'>
                <div>
                    <TopBar/>
                </div>
                <div className='main-content-div'>
                    <div className='category-div'>
                     <button>All</button>
                     <button>Classrooms</button>
                     <button>Learning Needs</button>
                    </div>

                    <div  className='suggest-div'>
                        <p>Suggest a Learning Need!</p>
                        <button>SUGGEST</button>
                    </div>

                    <div className='courses-grid'>
                        <CourseSlider/>
                    </div>  

                    <div className='courses-grid'>
                        <CourseSlider/>
                    </div>
                </div>
            </section>
       </div>
      
    </div>
  )
}

export default CourseList
