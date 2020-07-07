const express= require('express');
const router = express.Router();
const app = express();


router.get('/',(req,res)=>{
    console.log("This is home page");
    res.render('home');
})

module.exports = router;