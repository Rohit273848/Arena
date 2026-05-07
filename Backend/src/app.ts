import express from 'express';

const app = express();
console.log('App initialized');

app.get("/health", (req, res) => {  
    res.status(200).json({ status: "ok" });
}   );


export default app;