import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  baseOptions: {
    maxBodyLength: 26214400, // 25 MB
  },
});

const openai = new OpenAIApi(configuration);

export const transcribe = async (media) => {
  try {
    const res = await openai.createTranscription(
      fs.createReadStream(media), // file
      "whisper-1", // model
      "", // prompt
      "srt", // response_format
      0.1, // temperature
      "en" // language
    );
    // return res.data;
    return parseSrtFile(res.data);
  } catch (error) {
    throw error;
  }
};

function parseSrtFile(data) {
  const lines = data.trim().split(/\r?\n/);
  console.log(lines);
  const timestamps = [];
  for (let i = 0; i < lines.length; i += 4) {
    const timecode = lines[i + 1].trim();
    const [startTime, endTime] = timecode.split(" --> ");
    const text = lines[i + 2].trim();

    timestamps.push({
      start_time: startTime,
      end_time: endTime,
      text: text,
    });
  }

  return timestamps;
}

export const attachTranslation = (data, text) => {
  const lines = text.trim().split(/\r?\n/);
  const res = [];
  lines.forEach((line, index) => {
    let timeData = {
      start_time: data[index]?.start_time,
      end_time: data[index]?.end_time,
      text: line.slice(2),
    };
    res.push(timeData);
  });
  // writeFile('japanses.json', JSON.stringify(res), ()=>{console.log('Done')});
  return res;
};

export const purifyJSON = (data) => {
  const res = [];
  let temp = [];
  data.forEach((item) => {
    temp.push(item);
    if ([".", "?", "!"].includes(item.text.slice(-1))) {
      const start_time = temp[0]?.start_time;
      const end_time = item?.end_time;
      const text = temp.map((obj) => obj.text).join("");
      temp = [];
      res.push({
        start_time: start_time,
        end_time: end_time,
        text: text,
      });
    }
  });
  return res;
};

export const translate = async (data, lang) => {
  let text = data;
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are given a text. Translate it into ${lang} accurately`
        },
        {
          role: "user",
          content: text,
        },
      ],
    });
    console.log("res", data, response.data?.choices?.[0]?.message?.content);
    return data, response.data?.choices?.[0]?.message?.content;
  } catch (error) {
    throw error;
  }
};

export const summarise = async (data) => {
  let text = "";
  data.forEach((item, index) => {
    text += ` ${index + 1}. ${item.text}`;
  });
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "I want you to act as a text summarizer to chapterise it. Each sentence is point based, try to add all add the points at the beginning ofeDont add your own interpretations.",
        },
        {
          role: "user",
          content: text,
        },
      ],
    });
    console.log("res", response.data?.choices?.[0]?.message?.content);
    return response.data?.choices?.[0]?.message?.content;
  } catch (error) {
    throw error;
  }
};
