import express from "express";
import { summarise, transcribe, translate } from "../domain/whisper.js";

const router = express.Router();

//Transcribe any video using whisper less than 25MB
router.post("/transcribe", async (req, res) => {
  const { video = "" } = req.body;
  try {
    const transcription = await transcribe(video);
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


//
router.post("/translate", async (req, res) => {
  const data = req.body.data;
  const lang = req?.body?.lang || 'en';
  try {
    const translated = await translate(data, lang);
    console.log("done", translated);
    return res.status(200).json({ success: true, message: translated });
  } catch (error) {
    return res.status(400).json({ success: true, message: error });
  }
});

router.post("/summarise", async (req, res) => {
  const data = req.body.data;
  try {
    const summarised = await summarise(data);
    console.log("done", summarised);
    return res.status(200).json({ success: true, message: summarised });
  } catch (error) {
    return res.status(400).json({ success: true, message: error });
  }
});

export default router;
