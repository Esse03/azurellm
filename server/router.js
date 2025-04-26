import express from 'express';
import {response} from "./routes/response.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const message = await response()
        res.send(message)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const history = req.body.history;
        const message = await response(history);
        res.send(message);
    } catch (error) {
        console.error("Error in POST /:", error);
        res.status(500).send("Something went wrong.");
    }
});


export default router;