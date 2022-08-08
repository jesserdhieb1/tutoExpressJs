const express  = require('express')
const router = express.Router()
const{
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}=require('../controller/router-controller')

const data = require('../data')

let {people} = data

// router.get('/',getPeople)
// router.post('/',createPerson)
// router.post('/postman',createPersonPostman)
// router.put('/:id',updatePerson)
// router.delete('/:id',deletePerson)

router.route('/').get(getPeople).post(createPerson);
router.route('/:id').put(updatePerson).delete(deletePerson);
router.route('/postman').post(createPersonPostman)

module.exports=router