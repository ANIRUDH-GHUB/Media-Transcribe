import express from "express";
import { purifyJSON } from "./domain/whisper.js";
import openAIRouter from "./routers/openaiRouter.js";
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/openai", openAIRouter);

app.post("/purify", async (req, res) => {
  const data = req.body.data;
  const purified = purifyJSON(data);
  return res.json({ success: true, message: purified });
});




app.listen(port, () => console.log(`Server is running on port ${port}!!`));
