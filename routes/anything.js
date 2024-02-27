import  express from "express";
import { getMessage, postMessage , deleteMessage} from "../controller/anythingcontroller.js";

 const router = express.Router();

 router.get('/', getMessage)

 router.post('/', postMessage)
 
 router.delete('/', deleteMessage)


 export default router