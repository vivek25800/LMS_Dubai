import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function DuplicateAssessment() {

    const [questions, setQuestions] = useState([]);
  const addQuestion = () => {
    setQuestions([...questions, { mainCategory: "", subCategory: "" }]);
  };

  function MCQQuestion() {
    document.getElementById('mcq-questions').style.display = 'block';
    document.getElementById('text-questions').style.display = 'none';
    document.getElementById('match-questions').style.display = 'none';
  }

  function TextQuestion() {
    document.getElementById('mcq-questions').style.display = 'none';
    document.getElementById('text-questions').style.display = 'block';
    document.getElementById('match-questions').style.display = 'none';
  }

  function MatchQuestion() {
    document.getElementById('mcq-questions').style.display = 'none';
    document.getElementById('text-questions').style.display = 'none';
    document.getElementById('match-questions').style.display = 'block';
  }

  return (
    <div>
        <style>
            {`
            .duplicate-assessment{
            border: 2px solid rgba(0,0,0,0.2);
            padding: 2rem;
            border-radius: 10px;
            margin-bottom: 1.5rem;
            position: relative;
            }
            .dropdowns {
            display: flex;
            gap: 32px;
            margin: 24px 0px;
          }
          .dropdowns select {
            border-color: rgba(0,0,0,0.5);
          }
            .add-duplicate-btn{
            background-color: #7A1CAC;
            border-radius: 5px;
            margin: 1rem 0px;
            }
            .add-duplicate-btn:hover{
            background-color: #2E073F;
            }
            .dropdown-btn{
            width: 12rem;
            }
            .questions-div{
            margin: 2rem 0px 0px 0px;
            display: none;
            }
            `}
        </style>

       <h5>Duplicate Assessment</h5>

      {questions.map((question, index) => (
        <div className="duplicate-assessment" key={index}>
          <h5>Add Duplicate Question</h5>

          <div className="category-div">
            <div className="dropdowns">
              <div>
                <label>Main Category:</label>
                <select>
                  <option value="">Select Main Category</option>
                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                </select>
              </div>
              <div>
                <label>Sub Category:</label>
                <select>
                  <option value="">Select Sub Category</option>
                  <option value="Sub Category 1">Sub Category 1</option>
                  <option value="Sub Category 2">Sub Category 2</option>
                </select>
              </div>
            </div>
          </div>

          <div className='all-questions-list'>
            <h6>Select question type</h6>

            <Dropdown className='dropdown-btn'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={MCQQuestion}>Multiple Choice Questions</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={TextQuestion}>Text type questions</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={MatchQuestion}>Match the following</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className='questions-div' id='mcq-questions'>
            <h6 style={{marginBottom:"1.5rem"}}>MCQ questions</h6>
            <div className='questions-list'>
                <table className="table table-striped table-bordered" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Question Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>What is the Quantum theory and Theory of Relativity</td>
                            <td>
                                <button><i class="fa-solid fa-plus"></i> Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

          <div className='questions-div' id='text-questions'>
            <h6 style={{marginBottom:"1.5rem"}}>Text questions</h6>
            <div className='questions-list'>
                <table className="table table-striped table-bordered" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Question Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>What is the Quantum theory and Theory of Relativity</td>
                            <td>
                                <button><i class="fa-solid fa-plus"></i> Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

          <div className='questions-div' id='match-questions'>
            <h6 style={{marginBottom:"1.5rem"}}>Match the following questions</h6>
            <div className='questions-list'>
                <table className="table table-striped table-bordered" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Question Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>What is the Quantum theory and Theory of Relativity</td>
                            <td>
                                <button><i class="fa-solid fa-plus"></i> Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>        
      ))}

        <button className='add-duplicate-btn' onClick={addQuestion}>Add Duplicate Question</button>
      
    </div>
  )
}

export default DuplicateAssessment
