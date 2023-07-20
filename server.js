import express from "express";
import { purifyJSON, summarise, transcribe, translate } from "./whisper.js";
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

// POST request endpoint
app.get("/transcribe", async (req, res) => {
  const { video = "" } = req.query;
  console.log("Requested", video);
  try {
    const transcription = await transcribe(video);
    console.log("transcribed", transcription);
    // return the result
    return res.status(200).json({
      success: true,
      message: transcription,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
    });
  }
});

app.post("/purify", async (req, res) => {
  const data = req.body.data;
  const purified = purifyJSON(data);
  return res.json({ success: true, message: purified });
});

app.post("/summarise", async (req, res) => {
  const data = req.body.data;
  try {
    const summarised = await summarise(data);
    console.log("done", summarised);
    return res.status(200).json({ success: true, message: summarised });
  } catch (error) {
    return res.status(400).json({ success: true, message: error });
  }
});
app.post("/translate", async (req, res) => {
  const data = req.body.data;
  try {
    const translated = await translate(data);
    console.log("done", translated);
    return res.status(200).json({ success: true, message: translated });
  } catch (error) {
    return res.status(400).json({ success: true, message: error });
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}!!`));
