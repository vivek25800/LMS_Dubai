const training_budget_form = require('../Modal/training_request_form');

const post_trainingRequestForm = async (req, res) => {
   try {
        const {request_raised_by, employees_ids,  project, training_category, training_title,
            budget_code, target_date,
        } = req.body;

        const add_trainingRequestForm = new training_budget_form({request_raised_by, employees_ids,  project, 
            training_category, training_title, budget_code, target_date,});

        const resp = await add_trainingRequestForm.save();
        res.status(200).send({message: "Training requested data saved", trainingRequest_form: resp});
   } catch (error) {
        console.log(error);
   }
};

module.exports = { post_trainingRequestForm };