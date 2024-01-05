import express from 'express';
import { userSignup,userLogin } from "../controller/userController.js";
import { getProducts,getProductbyId } from '../controller/productController.js';
import { addPaymentGateway } from '../controller/payment-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products',getProducts);
router.get('/product/:id', getProductbyId);

router.post('/payment', addPaymentGateway);

export default router;