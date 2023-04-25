const express=require('express');
const router = express.Router();

exports.signup = ((req,res)=> {
    console.log("abc");
    res.send('Hellow from Router');
});
//validating
// router.post('/signin', (req,res)=> {
//     console.log(req.body);
//     res.json({message: "got it bro!!"})
// })
module.exports = router;

