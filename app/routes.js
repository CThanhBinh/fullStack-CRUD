const express = require('express');
const router = express.Router({mergeParams: true});
const tutors = require('./controllers/controller')


router.route('/')
    .get(tutors.allTutors)
    .post(tutors.createTutor)
    .delete(tutors.deleteAll)

router.route('/:id')
    .get(tutors.findTutorById)
    .put(tutors.update)
    .delete(tutors.delete)

module.exports = router;