const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://hayden:Helenzzing33@ds235431.mlab.com:35431/my_customer_list_hayden', ['customers']);

router.get('/',(req,res)=>{
    res.send('it works')
})

//GET CUSTOMERS
router.get('/customers',(req,res)=>{
    db.customers.find((err, customers)=>{
        if(err){
            res.status(500).send(err);
        }
        res.status(200).json(customers);
    });
})

// Get Single customer,
router.get('/customer/:id',(req, res, next)=>{
    db.customers.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task)=>{
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

//Save customer
router.post('/customer', (req, res, next)=>{
    const customer = req.body;
    if(!customer.firstname && !customer.lastname){
        res.status(400);
        res.json({
            "error": "bad formatted"
        });
    } else {
        db.customers.save(customer, (err, customer)=>{
            if(err){
                res.send(err);
            }
            res.json(customer);
        });
    }
});

// Delete customer
router.delete('/customer/:id', (req, res, next)=>{
    db.customers.remove({_id: mongojs.ObjectId(req.params.id)}, (err, customer)=>{
        if(err){
            res.send(err);
        }
        res.json(customer);
    });
});

// Update customer
router.put('/customer/:id', (req, res, next)=>{
    var customer = req.body;
    var updC = {};  
    if(customer.isDone){
        updC.isDone = customer.isDone;
    }
    
    if(customer.title){
        updC.title = customer.title;
    }
    
    if(!updC){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.customers.update({_id: mongojs.ObjectId(req.params.id)},updC, {}, function(err, customer){
        if(err){
            res.send(err);
        }
        res.json(customer);
    });
    }
});
module.exports = router;