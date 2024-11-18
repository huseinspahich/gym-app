import express from "express";
import env from "dotenv";
import cors from "cors";

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
env.config();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

