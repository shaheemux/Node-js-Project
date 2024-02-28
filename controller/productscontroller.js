import { getProducts, getProduct, deleteProduct } from '../models/db.js';






export default {
    getAllProducts : async (req, res)=>{
        res.send(await getProducts())
    },

    singleProduct : async (req, res)=>{
        res.send(await getProduct(req.params.id))
    },

    delProduct : async (req, res)=>{
        await deleteProduct(req.params.id)
        res.send(await getProducts())
    }
}


// const getMessage = ('/', (req, res)=>{
//     res.send({
//         message:'hiiiii'

//     })
// });

// const postMessage = ('/',(req, res)=>{
//     res.send({
//         message:'this is a post'

//     })
// });

// const deleteMessage =  ('/',(req, res)=>{
//     res.send({
//         message:'this is a delete'

//     })
// });

// const updateMessage =('/',(req, res)=>{
//     res.send({
//         message:'this is a update'

//     })
// });

// const addMessage = ('/',(req, res)=>{
//     res.send({
//         message:'this is a add'
//     })
// })

// export {getMessage, postMessage, deleteMessage, updateMessage, addMessage}
