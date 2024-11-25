import React, { useState, useEffect } from "react";
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

// Mock API call to get curriculum data
const fetchCurriculum = async () => {
  return [
    {
      sectionTitle: "Section 1",
      lessons: [
        { id: 1, title: "Lesson 1", content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nostrum, est blanditiis deleniti labore veritatis totam magni soluta aut officia dolor consequuntur molestias tempore quo voluptas eveniet ipsam sit deserunt. ${<br />} Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aliquid, eius voluptate tempora perferendis esse quas nisi modi mollitia exercitationem fugit totam repellendus dicta commodi.` },
        { id: 2, title: "Lesson 2", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aliquid, eius voluptate tempora perferendis esse quas nisi modi mollitia exercitationem fugit totam repellendus dicta commodi." },
      ],
    },
    {
      sectionTitle: "Section 2",
      lessons: [
        { id: 3, title: "Lesson 1", content: "Content of Lesson 1" },
        { id: 4, title: "Lesson 2", content: "Content of Lesson 2" },
        { id: 5, title: "Lesson 3", content: "Content of Lesson 3" },
          { id: 6, title: "Lesson 4", content: "Content of Lesson 4" },
      ],
    },
    {
        sectionTitle: "Section 3",
        lessons: [
          { id: 7, title: "Lesson 1", content: "Content of Lesson 1" },
          { id: 8, title: "Lesson 2", content: "Content of Lesson 2" },
        ],
      },
      {
        sectionTitle: "Section 4",
        lessons: [
          { id: 9, title: "Lesson 1", content: "Content of Lesson 1" },
          { id: 10, title: "Lesson 2", content: "Content of Lesson 2" },
          { id: 11, title: "Lesson 3", content: "Content of Lesson 3" },
          { id: 12, title: "Lesson 4", content: "Content of Lesson 4" },
          { id: 13, title: "Lesson 5", content: "Content of Lesson 5" },
          { id: 14, title: "Lesson 6", content: "Content of Lesson 6" },
        ],
      },
      {
        sectionTitle: "Section 5",
        lessons: [
          { id: 15, title: "Lesson 1", content: "Content of Lesson 1" },
          { id: 16, title: "Lesson 2", content: "Content of Lesson 2" },
          { id: 17, title: "Lesson 3", content: "Content of Lesson 3" },
          { id: 18, title: "Lesson 4", content: "Content of Lesson 4" },
        ],
      },
      {
        sectionTitle: "Section 6",
        lessons: [
          { id: 19, title: "Lesson 1", content: "Content of Lesson 1" },
          { id: 20, title: "Lesson 2", content: "Content of Lesson 2" },
          { id: 21, title: "Lesson 3", content: "Content of Lesson 3" },
          { id: 22, title: "Lesson 4", content: "Content of Lesson 4" },
          { id: 23, title: "Lesson 5", content: "Content of Lesson 5" },
          { id: 24, title: "Lesson 6", content: "Content of Lesson 6" },
        ],
      },
      {
        sectionTitle: "Section 7",
        lessons: [
          { id: 25, title: "Lesson 1", content: "Content of Lesson 1" },
          { id: 26, title: "Lesson 2", content: "Content of Lesson 2" },
          { id: 27, title: "Lesson 3", content: "Content of Lesson 3" },
          { id: 28, title: "Lesson 4", content: "Content of Lesson 4" },
          { id: 29, title: "Lesson 5", content: "Content of Lesson 5" },
          { id: 30, title: "Lesson 6", content: "Content of Lesson 6" },
        ],
      },
  ];
};

const Curriculum = () => {
    const [curriculum, setCurriculum] = useState([]);
    const [activeLesson, setActiveLesson] = useState(null);
    const [showCurriculum, setShowCurriculum] = useState(true);
  
    // Fetch curriculum data
    useEffect(() => {
      fetchCurriculum().then((data) => setCurriculum(data));
    }, []);
  
    const handleLessonClick = (lesson, sectionTitle) => {
      setActiveLesson({ ...lesson, sectionTitle });
    };
  
    const navigateLesson = (direction) => {
      const flatLessons = curriculum.flatMap((section) =>
        section.lessons.map((lesson) => ({ ...lesson, sectionTitle: section.sectionTitle }))
      );
      const currentIndex = flatLessons.findIndex((l) => l.id === activeLesson?.id);
      const newLesson = flatLessons[currentIndex + direction];
      if (newLesson) setActiveLesson(newLesson);
    };
  
    const getNeighborLessons = () => {
      const flatLessons = curriculum.flatMap((section) =>
        section.lessons.map((lesson) => ({ ...lesson, sectionTitle: section.sectionTitle }))
      );
      const currentIndex = flatLessons.findIndex((l) => l.id === activeLesson?.id);
  
      const previousLesson = currentIndex > 0 ? flatLessons[currentIndex - 1] : null;
      const nextLesson =
        currentIndex < flatLessons.length - 1 ? flatLessons[currentIndex + 1] : null;
  
      return { previousLesson, nextLesson };
    };
  
    const { previousLesson, nextLesson } = getNeighborLessons();


    // const [myOptions, setMyOptions] = useState([])
 
    // const getDataFromAPI = () => {
    //   console.log("Options Fetched from API")
   
    //   fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
    //     return response.json()
    //   }).then((res) => {
    //     console.log(res.data)
    //     for (var i = 0; i < res.data.length; i++) {
    //       myOptions.push(res.data[i].employee_name)
    //     }
    //     setMyOptions(myOptions)
    //   })
    // }
  
    return (
      <div>

<style>
        {`
        .curriculum-container {
  display: flex;
  height: 100vh;
}

.curriculum-sidebar {
  width: 22%;
  background: #f8f9fa;
  border-right: 1px solid #ddd;
  overflow: hidden; /* Prevents extra scrollbars */
  display: flex;
  flex-direction: column;
}

.curriculum-header {
  position: sticky; /* Keeps the header fixed */
  top: 0;
  z-index: 1; /* Ensures the header stays above other elements */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #7a1cac;
  color: white;
}

.curriculum-header button {
  background-color: transparent;
}

.curriculum-sections {
  flex: 1; /* Takes the remaining space below the header */
  overflow-y: auto; /* Enables vertical scrolling */
}

.section {
  border-bottom: 1px solid #ddd;
  padding: 10px;
}

.section-header h5 {
  background: #f8f9fa;
  cursor: pointer;
}

.dropdown {
  width: 100%;
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ddd;
  background: #f8f9fa;
}

.content-area {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  position: relative !important;
}
.content-header{
border-bottom: 1px solid rgba(0,0,0,0.3);
position: absolute;
top: 0px;
left: 0px;
right: 0px;
padding: 10px
}
.lesson-content{
position: absolute;
top: 80px;
left: 20px;
right: 20px;
}
.lesson-content h2 {
  margin-bottom: 10px;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
}

.navigation-buttons button {
  background-color: #ffffff;
  box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.5);
  color: #7a1cac;
  border-radius: 1.5rem;
  padding: 8px 1rem;
}

.navigation-buttons button:hover {
  background-color: #7a1cac;
  color: #ffffff;
}

.navigations-btn-div {
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 20px;
  position: absolute !important;
  bottom: 20px !important;
  right: 0px;
  left: 0px;
}

.floating-book-icon {
  position: fixed;
  bottom: 120px;
  left: 20px;
  background: #7a1cac;
  color: white;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  border: none;
}

.floating-book-icon:hover {
  background-color: #2e073f;
}

        `}
      </style>

        <div className="curriculum-container">
          {/* Curriculum Panel */}
          {showCurriculum && (
            <div className="curriculum-sidebar">
              <div className="curriculum-header">
                <h3>📖 Curriculum</h3>
                <button onClick={() => setShowCurriculum(false)}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="curriculum-sections">
                {curriculum.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="section">
                    <div className="section-header">
                      <h5>{section.sectionTitle}</h5>
                    </div>
                    <select
                      className="dropdown"
                      onChange={(e) =>
                        handleLessonClick(
                          section.lessons.find(
                            (lesson) => lesson.id === parseInt(e.target.value)
                          ),
                          section.sectionTitle
                        )
                      }
                    >
                      <option value="">Select a lesson</option>
                      {section.lessons.map((lesson) => (
                        <option key={lesson.id} value={lesson.id}>
                          {lesson.title}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}
  
          {/* Main Content Area */}
          <div className="content-area">
            <div className="content-header">
                <h3>Course Title</h3>

                {/* <div style={{ marginLeft: '40%', marginTop: '60px' }}>
      <h3>Greetings from GeeksforGeeks!</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div> */}
            </div>
            <div className="lesson-content">
              {activeLesson ? (
                <>
                  <h4>{activeLesson.sectionTitle}: {activeLesson.title}</h4>
                  <p>{activeLesson.content}</p>
                </>
              ) : (
                <p>Select a lesson to view its content</p>
              )}
            </div>
  
            {/* Navigation Buttons */}
            <div className="navigations-btn-div">
              <div className="navigation-buttons">
                <button
                  onClick={() => navigateLesson(-1)}
                  disabled={!previousLesson}
                >
                  ⬅️{" "}
                  {previousLesson
                    ? `${previousLesson.sectionTitle}: ${previousLesson.title}`
                    : "No Previous Lesson"}
                </button>
                <button
                  onClick={() => navigateLesson(1)}
                  disabled={!nextLesson}
                >
                  {nextLesson
                    ? `${nextLesson.sectionTitle}: ${nextLesson.title}`
                    : "No Next Lesson"}{" "}
                  ➡️
                </button>
              </div>
            </div>
          </div>
  
          {/* Floating Book Icon */}
          {!showCurriculum && (
            <button
              className="floating-book-icon"
              onClick={() => setShowCurriculum(true)}
            >
              📖
            </button>
          )}
        </div>
      </div>
    );
  };
  
  export default Curriculum;

