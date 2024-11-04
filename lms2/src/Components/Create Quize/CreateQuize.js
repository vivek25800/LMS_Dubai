import React from 'react'
import MCQquize from './MCQquize';
import TextQuize from './TextQuize';
import RatingQuestionQuize from './RatingQuestionQuize';
import StatementQuestion from './StatementQuestion';
import DateQuestionForm from './DateQuestionForm';

function CreateQuize() {

    function quickStart() {
        document.getElementById('button-grid-id').style.display = "grid";
    }

    function MCQquestion() {
        document.getElementById('mcqQuestion').style.display = "block";
        document.getElementById('textQuestion').style.display = "none";
        document.getElementById('ratingQuestion').style.display = "none";
        document.getElementById('dateTypeQuestion').style.display = "none";
        document.getElementById('likeartQuestion').style.display = "none";
    }

    function TextQuestion() {
        document.getElementById('mcqQuestion').style.display = "none";
        document.getElementById('textQuestion').style.display = "block";
        document.getElementById('ratingQuestion').style.display = "none";
        document.getElementById('dateTypeQuestion').style.display = "none";
        document.getElementById('likeartQuestion').style.display = "none";
    }

    function RatingQuestion() {
        document.getElementById('mcqQuestion').style.display = "none";
        document.getElementById('textQuestion').style.display = "none";
        document.getElementById('ratingQuestion').style.display = "block";
        document.getElementById('dateTypeQuestion').style.display = "none";
        document.getElementById('likeartQuestion').style.display = "none";
    }

    function DateQuestion() {
        document.getElementById('mcqQuestion').style.display = "none";
        document.getElementById('textQuestion').style.display = "none";
        document.getElementById('ratingQuestion').style.display = "none";
        document.getElementById('dateTypeQuestion').style.display = "block";
        document.getElementById('likeartQuestion').style.display = "none";
    }

    function LikertQuestion() {
        document.getElementById('mcqQuestion').style.display = "none";
        document.getElementById('textQuestion').style.display = "none";
        document.getElementById('ratingQuestion').style.display = "none";
        document.getElementById('dateTypeQuestion').style.display = "none";
        document.getElementById('likeartQuestion').style.display = "block";
    }



  return (
    <div >
        <style>
            {`
            body{
            background-color: rgba(46, 7, 63, 0.2);
            padding: 1.5rem;
            }
            .header-section{
            height: 5rem;
            width: 100%;
            border-radius: 10px;
            background-color: #ffffff;
            }
            .container{
            border: 2px solid rgba(0,0,0,0.2);
            border-radius: 10px;
            padding: 1.5rem;
            }
            .button-grid{
            display: grid;
            grid-template-columns: auto auto auto;
            column-gap: 1rem;
            row-gap: 1rem;
            }
            .button-grid button {
            width: 100%;
            height: 2.5rem;
            background-color: #ffffff;
            color: #7A1CAC;
            border: 1px solid #7A1CAC;
            font-weight: 500;
            }
            .button-grid button:hover{
            background-color: #7A1CAC;
            color: #ffffff;
            }
            .header input{
            margin-bottom: 1rem;
            }
            .header{
            margin-top: 0px;
            }
            .section-module{
            border-top: 5px solid #7A1CAC;
            width: 70%;
            margin: 0 auto;
            margin-top: 1.5rem;
            border-radius: 10px;
            background-color: #ffffff;
            padding: 3rem 6rem;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
            }
            .container{
            margin: 0px;
            width: 100%;
            }
            .button-grid{
            display: none;
            }
            .questions-container{
            width: 70%;
            margin: 0 auto;
            margin-top: 1.5rem;
            }
            .quize-title-div{
            background-color: #ffffff;
            border-top: 5px solid #7A1CAC;
            padding: 1.5rem 3rem;
            border-radius: 10px;
            margin-bottom: 1.5rem;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
            }
            .quize-title-div h5, p{
            margin: 10px;
            }
            .questions-container{
            display: none;
            }
           

            `}
        </style>

        <div className='header-section'>
        
        </div>

                <div className='section-module'>
                    <h4>Create Survey</h4>
                    <div className="container">
                        <div className="header info-div-item">
                            <input type='text' placeholder='Enter quize name' />
                            <input type='text' placeholder='Enter the subtitle ( Subtitle )' />
                        </div>

                        <div className="quick-start">
                            <h6 style={{color: "#7A1CAC", cursor:"pointer"}}
                            onClick={quickStart} > <i class="fa-solid fa-circle-plus"></i> Quick start with</h6>
                            <div className="button-grid" id='button-grid-id'>
                            {/* <button className="quick-button" onClick={MCQquestion}> <i class="fa-regular fa-circle-dot"></i> Choice</button> */}
                            <button className="quick-button" onClick={TextQuestion}> <i class="fa-regular fa-file-lines"></i> Text</button>
                            <button className="quick-button" onClick={RatingQuestion}> <i class="fa-regular fa-thumbs-up"></i> Rating</button>
                            <button className="quick-button" onClick={DateQuestion}> <i class="fa-regular fa-calendar-days"></i> Date</button>
                            {/* <button className="quick-button"> <i class="fa-solid fa-ranking-star"></i> Ranking</button> */}
                            <button className="quick-button" onClick={LikertQuestion}> <i class="fa-solid fa-ticket"></i>Likert</button>
                            <button className="quick-button"> <i class="fa-solid fa-file-arrow-up"></i> Upload File</button>
                            {/* <button className="quick-button"> <i class="fa-solid fa-gauge-high"></i> Net Promoter Score®</button> */}
                            <button className="quick-button"> <i class="fa-solid fa-layer-group"></i> Section</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='questions-container' id='mcqQuestion'>
                    <div className='quize-title-div'>
                        <h5>MCQ Quize Title - 1</h5>
                        <p>Qfhfjsd sdfsdhf fsdaf sdf sdfgsd fsdg fdfasg djfg </p>
                    </div>
                    <div className='mcqchoice-div'>
                        <MCQquize/>
                    </div>       
                </div>

                <div className='questions-container' id='textQuestion'>
                    <div className='quize-title-div'>
                        <h5>Text Quize Title - 1</h5>
                        <p>Qfhfjsd sdfsdhf fsdaf sdf sdfgsd fsdg fdfasg djfg </p>
                    </div>
                    <div className='textQuestion-div'>
                        <TextQuize/>
                    </div>
                </div>

                <div className='questions-container' id='ratingQuestion'>
                    <div className='quize-title-div'>
                        <h5>Rating Quize Title - 1</h5>
                        <p>Qfhfjsd sdfsdhf fsdaf sdf sdfgsd fsdg fdfasg djfg </p>
                    </div>
                    <div className='ratingType-div'>
                        <RatingQuestionQuize/>
                    </div>
                </div>

                <div className='questions-container' id='dateTypeQuestion'>
                    <div className='quize-title-div'>
                        <h5>Date Quize Title - 1</h5>
                        <p>Qfhfjsd sdfsdhf fsdaf sdf sdfgsd fsdg fdfasg djfg </p>
                    </div>
                    <div className='dateType-div'>
                        <DateQuestionForm/>
                    </div>
                </div>

                <div className='questions-container' id='likeartQuestion'>
                    <div className='quize-title-div'>
                        <h5>Likert Quize Title - 1</h5>
                        <p>Qfhfjsd sdfsdhf fsdaf sdf sdfgsd fsdg fdfasg djfg </p>
                    </div>
                    <div className='likert-div'>
                        <StatementQuestion/>
                    </div>
                </div>
      
    </div>
  )
}

export default CreateQuize
