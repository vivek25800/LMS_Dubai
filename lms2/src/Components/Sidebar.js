import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import '../StyleCode/AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu'; // Import the DropdownMenu
import MenuItem from './MenuItem';
import { Assessment } from '@mui/icons-material';
import EditNoteIcon from '@mui/icons-material/EditNote';

function Sidebar() {
  const navigate = useNavigate();

  const logOut = () => {
    toast.warning('You logged out successfully');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const courseCategoryMenu = [
    { label: 'All Course Category', link: '/AllCourse' },
    { label: 'Create Course Category', link: '/createCourse' },
  ];

  const courseManageMenu = [
    {
      label: 'Subject',
      subMenu: [
        { label: 'All Subject List', link: '/AllSubject' },
        { label: 'Create New Subject', link: '/createSubject' },
      ],
    },
    { label: 'Tag', link: '/tagCourse' },
    { label: 'Label', link: '/labelCourse' },
    {
      label: 'Course',
      subMenu: [
        { label: 'All Course List', link: '/AllCourseList' },
        { label: 'Create New Course', link: '/CreateNewCourse' },
        { label: 'Edit Course', link: '#' },
      ],
    },
  ];

  const noticeBoard = [
    { label: 'All Notice', link: '/Allnotice'},
    { label: 'Create Notice', link: '/addnotice'},
  ]

  const usersListMenu = [
    { label: 'Employee\'s List', link: '/AllEmployeList' },
    { label: 'Student\'s List', link: '/AllStudentList' },
  ];

  return (
    <div>

        <style>{`
.dropdown-menu-wrapper {
  margin-bottom: 5px;
}

.dropdown-title {
  font-size: 2rem;
  cursor: pointer;
  margin: 0px;
}

.dropdown-toggle-button {
  background-color: transparent;
  border: none;
  font-size: 1rem !important;
  text-align: left;
  width: 100%;
  height: 2.5rem;
  padding-left: 10px;
  border-radius: 5px;
  color: #000;
}

.dropdown-content {
  display: none;
  margin-left: 1rem;
}

.dropdown-content.show {
  display: block;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin: 0.5rem 0;
}
  .menu-btn{
  height: 50px;
  border-radius: 5px;
  }
  .menu-btn:hover{
  background-color: transparent;
  }
  .menu-btn a{
  text-decoration: none;
  color: #000;
  font-weight: 500;
  }
  .dash-options{
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding-left: 10px;
  }
  .dash-options:hover{
  background-color: rgba(46, 7, 63, 0.2);
  }

        `}</style>
      <section className="left-Dashboard">
        <div className="dashboard-list">
          <div className="title-div">
            <h5 onClick={() => window.location.reload()} style={{ cursor: "pointer" }}>
              DASHBOARD
            </h5>
          </div>
          <div className="list-options">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className='dash-options'>
                <i class="fa-solid fa-house"></i>
                <DropdownMenu title="Course Category" items={courseCategoryMenu} />
              </div>
              <div className='dash-options'>
                <i class="fa-solid fa-sliders"></i>
                <DropdownMenu title="Course Manage" items={courseManageMenu} />
              </div>
              <div className='dash-options'>
              <i class="fa-solid fa-users"></i>
              <DropdownMenu title="Users List" items={usersListMenu} />
              </div>
              <div className='dash-options'>
              <i class="fa-solid fa-message"></i>
              <DropdownMenu title="Notice Board" items={noticeBoard} />
              </div>
              <div className='dash-options'>
              <i class="fa-solid fa-calendar-days"></i>
                <button className='dropdown-toggle-button menu-btn'>
                <MenuItem label="Training Calendar" link="/createtraining" />
                </button>
              </div>
              <div className='dash-options'>
              <i class="fa-solid fa-list"></i>
                <button className='dropdown-toggle-button menu-btn'>
                <MenuItem label="View Training Details" link="/viewTraining" />
                </button>
              </div>
              <div className='dash-options'>
              <i class="fa-solid fa-clipboard-user"></i>
                <button className='dropdown-toggle-button menu-btn'>
                <MenuItem label="Attendence" link="/attendence" />
                </button>
              </div>
              <div className='dash-options'>
              <i class="fa-solid fa-layer-group"></i>
                <button className='dropdown-toggle-button menu-btn'> 
                <MenuItem label="OJT, OJA, INA" link="/jobtraining" />
                </button>
              </div>
              <div className='dash-options'>
              <Assessment/>
                <button className='dropdown-toggle-button menu-btn'> 
                <MenuItem label="Assessment" link="/assessment" />
                </button>
              </div>
              <div className='dash-options'>
              <EditNoteIcon/>
                <button className='dropdown-toggle-button menu-btn'> 
                <MenuItem label="Take Assessment" link="/takeAssessment" />
                </button>
              </div>
              <div className='dash-options'>
              <Assessment/>
                <button className='dropdown-toggle-button menu-btn'> 
                <MenuItem label="Create CAT" link="/createcat" />
                </button>
              </div>
              <div className='dash-options'>
                <EditNoteIcon/>
                <button className='dropdown-toggle-button menu-btn'> 
                <MenuItem label="Conduct CAT" link="/conductcat" />
                </button>
              </div>
              <div className='dash-options'>
                <EditNoteIcon/>
                <button className='dropdown-toggle-button menu-btn'> 
                <MenuItem label="Training Request Form" link="/trainingrequestform" />
                </button>
              </div>
              <div className='dash-options'>
                <EditNoteIcon/>
                <button className='dropdown-toggle-button menu-btn'> 
                <MenuItem label="View Training Request" link="/viewtrainingrequest" />
                </button>
              </div>
              <div className='dash-options'>
                <EditNoteIcon/>
                <button className='dropdown-toggle-button menu-btn'> 
                <MenuItem label="TRF Pending for Approval" link="/pendingtrf" />
                </button>
              </div>
              <div className='dash-options'>
                <EditNoteIcon/>
                <button className='dropdown-toggle-button menu-btn'> 
                <MenuItem label="Create Training Budget" link="/createTrainingBudget" />
                </button>
              </div>
              <div className='dash-options'>
                <EditNoteIcon/>
                <button className='dropdown-toggle-button menu-btn'> 
                <MenuItem label="Service Provider Register" link="/serviceProverRegistration" />
                </button>
              </div>
              <div className='dash-options'>
                <EditNoteIcon/>
                <button className='dropdown-toggle-button menu-btn'> 
                <MenuItem label="Landing Page" link="/landingpage" />
                </button>
              </div>
              
              
                     
              {/* Add other DropdownMenu items similarly */}
            </div>
          </div>
          <div className="logout-section">
            <button onClick={logOut} id='logout-btn'>
              Log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Sidebar;
