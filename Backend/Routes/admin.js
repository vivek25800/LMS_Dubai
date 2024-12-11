const express = require('express');
const {employee_details, remove_data_two, get_data_employee, update_data_employee, employeebulkregistration, employee_login} = require('../Controllers/employee_form');
const {students_register, remove_data, get_data_student, get_data_studentbyemail, student_login} = require('../Controllers/students_form');
const {post_event_details, update_data_event, get_data_event, delete_event_data, get_data_eventbyid, get_events_by_month, getEventsByDate} = require('../Controllers/add_event_form');
const post_attendence_details = require('../Controllers/attendence_form');
const post_course_creation = require('../Controllers/course_creation_form');
const { post_create_ojt, get_ojt_data, get_ojts_data_byIds, updateOJTInfo, delete_ojt_data, update_ojt_details } = require('../Controllers/create_ojt_form');
const {post_oja_data, get_oja_details, get_oja_details_byIds, updateOjaInfo, delete_oja_data, update_oja_details} = require('../Controllers/create_Oja_form');
const {post_ina_data, get_ina_data, get_ina_data_byIds, updateInaInfo, delete_Ina_data, update_ina_details}  = require('../Controllers/create_INA_form');
const { addQuestion, getQuestions, deleteQuestion } = require('../Controllers/mcq_Question_form');
const { createQuestion, getAllQuestions } = require('../Controllers/text_question_form');
const {post_training_budget, get_training_budget} = require('../Controllers/training_budget_form');
const { post_trainingRequestForm, get_trainingRequestData, get_trainingRequestByIds } = require('../Controllers/trainingRequest_form');
const  upload  = require('../MiddleWare/file');
const uploadFields = require('../MiddleWare/file');
const { postOjtAssignment, getOjtAssignedEmployee, checkEmployeeAssignment } = require('../Controllers/ojt_Assignment_form');
const { postOJAAssignment, checkEmployeeAssignmentOJA, getOJAAssignedEmployee } = require('../Controllers/oja_Assignment_form');
const { postINAAssignment, getINAAssignedEmployee, checkEmployeeAssignmentINA } = require('../Controllers/ina_Assignment_form');
const { create_Assessment } = require('../Controllers/create_assessment_form');

const router = express.Router();

router.post('/employee_registration', employee_details);
router.delete('/employee_deletes/:_id', remove_data_two)
router.get('/employee_details_get', get_data_employee);
router.put('/employee_update/:_id', update_data_employee);
router.post('/employees_data_save', employeebulkregistration);
router.post('/employee_login', employee_login);

router.post('/students_registration', students_register);
router.delete('/studentsdelete/:_id',remove_data);
router.get('/student_details_get', get_data_student);
router.post('/student_details_getbyemail', get_data_studentbyemail);
router.post('/student_login', student_login);

router.post('/add_events_data', post_event_details);
router.put('/event_details_updated/:_id', update_data_event);
router.get('/event_details_get', get_data_event);
router.get('/trainingeventbyid/:_id', get_data_eventbyid);
router.delete('/trainingevent_delete/:_id', delete_event_data);
router.get('/get_events_by_month', get_events_by_month);
router.get('/get_events_by_date', getEventsByDate);

router.post('/add_attendence_details', post_attendence_details);

router.post('/add_course_details', uploadFields, post_course_creation);

router.post('/create_ojt_form', post_create_ojt);
router.get('/get_Ojt_info', get_ojt_data);
router.delete('/ojt_data_delete/:_id', delete_ojt_data);
router.get('/get_ojts_byid/:_id', get_ojts_data_byIds);
router.post('/update_ojt_info', updateOJTInfo);
router.put('/ojt_details_updated/:_id', update_ojt_details);

router.post('/save-oja-form', post_oja_data);
router.get('/get_oja_info', get_oja_details);
router.delete('/oja_data_delete/:_id', delete_oja_data);
router.get('/get_oja_info_byids/:_id', get_oja_details_byIds);
router.put('/oja_details_updated/:_id', update_oja_details);
router.put('/update_oja_info/:id', updateOjaInfo);

router.post('/save_ina_data', post_ina_data);
router.get('/get_ina_dataInfo', get_ina_data);
router.delete('/ina_data_delete/:_id', delete_Ina_data);
router.get('/get_ina_dataById/:_id', get_ina_data_byIds);
router.put('/ina_details_updated/:_id', update_ina_details);
router.put('/update_ina_data/:id', updateInaInfo);

router.post('/add_employee_forOJT', postOjtAssignment);
router.get('/get_assigned_employees/:ojt_code', getOjtAssignedEmployee);
router.post('/check_employee_assignment', checkEmployeeAssignment);

router.post('/add_employee_forOJA', postOJAAssignment);
router.get('/get_assigned_employeeOJA/:oja_code', getOJAAssignedEmployee);
router.post('/check_employee_forOJA', checkEmployeeAssignmentOJA);

router.post('/add_employee_forINA', postINAAssignment);
router.get('/get_assigned_employeeINA/:ina_code', getINAAssignedEmployee);
router.post('/check_employee_forINA', checkEmployeeAssignmentINA);

router.post('/add_question', addQuestion);
router.get('/get_all_question', getQuestions);
router.delete('/delete_question/:id', deleteQuestion);

router.post('/add_textquestion', createQuestion);
router.get('/get_textquestion', getAllQuestions);

router.post('/create_training_budget', post_training_budget);
router.get('/get_training_budget_data', get_training_budget);

router.post('/training_request_form', post_trainingRequestForm);
router.get('/get_trainingrequestdata', get_trainingRequestData);
router.get('/get_trainingByID/:_id', get_trainingRequestByIds);

router.post('/assessment_data_save', create_Assessment);

module.exports = router;