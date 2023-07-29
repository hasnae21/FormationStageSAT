var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");
const StudentModel = require('../models/student.model');

/* GET students listing. */
router.get('/', function (req, res, next) {
    res.send('hello from students routing');
});


router.post('/add', async function (req, res, next) {
    try {
        const newStudent = new StudentModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            dob: req.body.dob,
            departement: req.body.departement
        });
        const doc = await newStudent.save();
        res.send({ message: 'Student Added Successfully', studentObj: doc });
    }
    catch (err) {
        console.log(err);
    }
});

router.get('/list', async function (req, res, next) {
    try {
        const studentsList = await StudentModel.find();
        res.send({ resultsFound: studentsList.length, students: studentsList });
    }
    catch (err) {
        console.log(err);
    }
});


// Search by firstName
router.get('/searchByFirstName', async function (req, res, next) {
    try {
        const firstNameQuery = req.query.firstName;
        const studentsSearched = await StudentModel.find({firstName: firstNameQuery});
        res.send({resultsFound: studentsList.length , students: studentsSearched });
    }
    catch (err) {
        console.log(err);
    }
});

// Search by id
router.get('/searchById', async function (req, res, next) {
    try {
        const IdQuery = req.query.id;
        const studentsId = await StudentModel.findById(IdQuery);
        res.send({students: studentsId });
    }
    catch (err) {
        console.log(err);
    }
});


// delete 
// router.delete('/deleteById', async function (req, res, next) {
//     try {
//         const Id = req.query.studentId;
//         const student = await StudentModel.findByIdAndRemove(Id);
//         res.send({students: student });
//     }
//     catch (err) {
//         console.log(err);
//     }
// });



module.exports = router;
