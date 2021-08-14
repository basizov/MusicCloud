import express from "express";

const PORT = 5000;
const application = express();

application.listen(PORT, () => console.log(`Server started on ${PORT} port!`));
