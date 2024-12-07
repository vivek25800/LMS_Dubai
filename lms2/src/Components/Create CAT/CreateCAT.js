import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MCQAssessmentCAT from './MCQAssessmentCAT';
import TextAssessmentCAT from './TextAssessmentCAT';
import AddInterviewQuestions from './AddInterviewQuestions';

function CreateCAT() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);

    const handleShow3 = () => setShow3(true);
    const handleClose3 = () => setShow3(false);

  return (
    <div>
        <style>
            {`
            .create-cat-container{
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
            .cat-data{
            display: grid;
            grid-template-columns: auto auto;
            padding: 2rem;
            column-gap: 1.5rem;
            row-gap: 1.5rem;
            }
            .questions-sections{
            display: flex;
            padding-left: 2rem;
            margin-bottom: 2rem;
            }
            .questions-sections div{
            width: 16rem;
            height: 2.5rem;
            background-color: #7A1CAC;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
            border-radius: 1.5rem;
            cursor: pointer;
            color: #ffffff;
            margin-right: 1.5rem;
            }
            .questions-sections div:hover{
            background-color: #ffffff;
            color: #7A1CAC;
            font-weight: 500;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
            }
            .questions-sections div h6{
            margin: 0px;}
            .assessment-form{
            width: 85%;
            margin: 2rem auto;
            }
            .category-type{
            display: grid;
            grid-template-columns: auto auto;
            column-gap: 2rem;
            }
            .add-skill-div{
            border: 2px solid rgba(0,0,0,0.2);
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 2rem;
            }
            .submit-button{
            background-color: #7A1CAC;
            border: none;
            color: #ffffff;
            height: 2rem;
            }
            .submit-button:hover{
            background-color: #2E073F;
            }
            .add-question-div{
            border: 1px solid rgba(0,0,0,0.2);
            padding: 1rem;
            }
            `}
            
        </style>
        <div style={{ backgroundColor: "rgba(46, 7, 63, 0.1)", padding: "20px", height: "100vh" }}>
            <Sidebar/>
            <section className="main-content-section">
                <Header/>
                
                <div className='create-cat-container'>
                    <div className="title-text">
                        <h2>Create <span style={{ fontWeight: "300" }}>CAT</span></h2>
                    </div>

                    <div className='create-cat-form'>
                        <div className='cat-data'>
                            <div className="info-div-item">
                                <label>Title</label>
                                <input type='text' placeholder='Enter title' />
                            </div>
                            <div className="info-div-item">
                                <label>Code</label>
                                <input type='text' placeholder='Enter Code' />
                            </div>
                            <div className="info-div-item">
                                <label>Valid till</label>
                                <input type='date' />
                            </div>
                            <div className="info-div-item">
                                <label>Tag job title</label>
                                <select>
                                    <option>Title-1</option>
                                    <option>Title-1</option>
                                    <option>Title-1</option>
                                </select>
                            </div>
                            <div className="info-div-item">
                                <label>Skill level</label>
                                <select>
                                    <option>Sub Skill level-1</option>
                                    <option>Main Skill level-1</option>
                                    <option>Sub Skill level-1</option>
                                </select>
                            </div>
                        </div>

                        <div className='questions-sections'>
                            <div className='mcq-question-div' onClick={handleShow}>
                                <h6>MCQ's Assessment</h6>
                            </div>
                            <div className='textType-question-=div' onClick={handleShow2}>
                                <h6>Text Assessment</h6>
                            </div>
                            <div className='interview-based-questions' onClick={handleShow3}>
                                <h6>Interview Based Question</h6>
                            </div>
                        </div>
                    </div>

                    <Modal show={show} onHide={handleClose} size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>MCQ's Assessment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <section className='main-mcq-assessment'>
                            <div className='mcq-container'>
                                <div className="title-text">
                                    <h2>Add MCQ's <span style={{ fontWeight: "300" }}>Assessment</span></h2>
                                </div>
                                <div className='assessment-form'>
                                    <div className='add-skill-div'>
                                        <h6>Add Skill</h6>
                                        <div className='category-type'>
                                            <div className="info-div-item">
                                                <label>Skill Main Category</label>
                                                <select>
                                                    <option>-- Select main category --</option>
                                                    <option>Main Category-1</option>
                                                    <option>Main Category-1</option>
                                                    <option>Main Category-1</option>
                                                </select>
                                            </div>
                                            <div className="info-div-item">
                                                <label>Skill Sub Category</label>
                                                <select>
                                                    <option>-- Select sub category --</option>
                                                    <option>Sub Category-1</option>
                                                    <option>Sub Category-1</option>
                                                    <option>Sub Category-1</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='add-question-div'>
                                        <MCQAssessmentCAT/>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant='primary' className='submit-button'>Create Assessment</Button>
                        <Button variant='secondary' onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show2} onHide={handleClose2} size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>Text Assessment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <section className='main-mcq-assessment'>
                            <div className='mcq-container'>
                                <div className="title-text">
                                    <h2>Add Text <span style={{ fontWeight: "300" }}>Assessment</span></h2>
                                </div>
                                <div className='assessment-form'>
                                    <div className='add-question-div'>
                                        <TextAssessmentCAT/>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant='primary' className='submit-button'>Submit Assessment</Button>
                        <Button variant='secondary' onClick={handleClose2}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show3} onHide={handleClose3} size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>Interview Based Questions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <section className='main-mcq-assessment'>
                            <div className='mcq-container'>
                                <div className="title-text">
                                    <h2>Add Interview Based  <span style={{ fontWeight: "300" }}>Questions</span></h2>
                                </div>
                                <div className='assessment-form'>
                                    <div className='add-skill-div'>
                                        <h6>Add Category</h6>
                                        <div className="info-div-item">
                                            <label>Sub Skill Category</label>
                                            <select>
                                                <option>-- Select sub category --</option>
                                                <option>Sub Category-1</option>
                                                <option>Sub Category-1</option>
                                                <option>Sub Category-1</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='add-question-div add-interview-question'>
                                        <AddInterviewQuestions/>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant='primary' className='submit-button'>Submit Assessment</Button>
                        <Button variant='secondary' onClick={handleClose3}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>
            </section>
        </div>
      
    </div>
  )
}

export default CreateCAT
