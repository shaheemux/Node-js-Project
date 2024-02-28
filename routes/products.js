
import  express from "express";
import controller from '../controller/productscontroller.js'
// import { getMessage, postMessage , deleteMessage, updateMessage, addMessage} from "../controller/productscontroller.js";

 const router = express.Router();

 router.route('/')
    .get(
     controller.getAllProducts
    )


    router.route('/:id')
    .get(controller.singleProduct)
    .delete(controller.delProduct)


//  router.get('/', getMessage)

//  router.post('/', postMessage)
 
//  router.delete('/', deleteMessage)

//  router.patch('/', updateMessage)

//  router.put('/', addMessage)



 export default router