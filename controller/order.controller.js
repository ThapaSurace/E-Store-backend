import Order from "../model/order.model.js"

export const addOrder = async (req,res) => {
    // if(!req.isAdmin) return res.status(401).send("Only admin can add product")
    try {
       const newOrder = new Order(req.body) 
       await newOrder.save()
       res.status(201).send(newOrder)
    } catch (error) {
        res.status(500).send(error)
    }
}

//get all order
export const getAllOrders = async (req,res) => {
    // if(!req.isAdmin) return res.status(401).send("Only admin can add product")
    try {
       const orders = await Order.find() 
       if(!orders) return res.status(400).send("Orders not found")
       res.status(200).send(orders)
    } catch (error) {
        res.status(500).send(error)
    }
}

//get user orders
export const getUserOrders = async (req,res) => {
    // if(!req.userId) return res.status(401).send("Only admin can add product")
    try {
       const orders = await Order.find({userId: req.body.userId}) 
       if(!orders) return res.status(400).send("Orders not found")
       res.status(200).send(orders)
    } catch (error) {
        res.status(500).send(error)
    }
}


