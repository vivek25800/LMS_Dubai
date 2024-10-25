const course_creation_modal = require('../Modal/course_creation');

const post_course_creation = async (req, res) => {
    try {
       const{ course_title,
            course_category,
            course_code,
            course_content,
            organization,
            instructor,
            course_label,
            course_duration, } = req.body;

        const add_course_creation = new course_creation_modal({ course_title, course_category, course_code, course_content,
            organization, instructor, course_label, course_duration,});

        const resp = await add_course_creation.save();
        res.status(200).send({message:"course data save", course_data: resp});
    } catch (error) {
        console.log(error);
    }
}

module.exports = post_course_creation;