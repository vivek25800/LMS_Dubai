const Assessment = require('../Modal/create_assessment');

exports.createAssessment = async (req, res) => {
    try {
        const { title, code, description, time, questions } = req.body;
        const newAssessment = new Assessment({
            title,
            code,
            description,
            time,
            questions,
        });

        const resp = await newAssessment.save();
        res.status(200).send({message: "Data are saved", new_Assessment: resp});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving assessment' });
    }
};

exports.getAssessments = async (req, res) => {
    try {
        const resp = await Assessment.find();
        res.status(200).send({message: "data get successfully", new_Assessment: resp });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching assessments' });
    }
};
