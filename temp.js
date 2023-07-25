import { readFile, writeFile } from "fs";

const text =
  "1. 数年前、私は行き詰まっている感じがした。\n2. だから、私は偉大なアメリカの哲学者、モーガン・スパーロックの足跡にならって、30日間何か新しいことに挑戦しようと決めた。\n3. そのアイデアは実際には非常にシンプルです。\n4. 自分の人生に常に追加したかったことを考えて、次の30日間試してみてください。\n5. 実際には、30日間は新しい習慣を身につけるための適切な時間だったり、ニュースを見るような習慣を減らすのに適切な時間だったりすることがわかったのです。\n6. これらの30日間チャレンジをする中でいくつか学びました。\n7. 最初に気付いたのは、月々が忘れられたまま過ぎ去るのではなく、時間がずっと忘れられないものになったことです。\n8. これは、1か月間毎日写真を撮るというチャレンジの一部であり、その日に自分がどこにいて何をしていたのかを鮮明に覚えています。\n9. また、もっと多くて難しい30日間チャレンジに取り組むにつれて、自信がついてきたことにも気付きました。\n10. 私はデスクに座ってコンピュータのいじくり回しをするような人から、自転車で楽しみながら通勤するような人に変わりました。\n11. 昨年でさえ、アフリカ最高峰のキリマンジャロ山に登ることができました。\n12. 私は30日間のチャレンジを始める前にはそんな冒険をすることは絶対になかったでしょう。\n13. また、本当に何かを本当に強く望むのなら、30日間なら何でもできるということもわかりました。\n14. 一度は小説を書いてみたことはありますか？\n15. 毎年11月には、何万人もの人々が30日間で自分自身の5万語の小説をゼロから書き上げようと試みます。\n16. 実際には、30日間で1日に1667語書けばいいだけです。\n17. なので、私は書きました。\n18. ちなみに、秘訣は自分の1日の単語を書き終えるまで寝ないことです。\n19. 睡眠不足になるかもしれませんが、小説を完成させることができます。\n20. さて、私の本は次の偉大なアメリカの小説でしょうか？\n21. いいえ！私は1か月で書きました！酷いです！\n22. しかし、人生の残りの時間で、もしもTEDパーティでジョン・ホジマンに出会ったら、「私はコンピュータ科学者です」と言わなくてもいいのです。\n23. いいえ、いいえ、もしそれが希望なら、私は小説家だと言うことができます。\n24. それでは最後にもう一つ言いたいことがあります。\n25. 私は小さな持続可能な変化を行うことで、習慣が続くことを学びました。\n26. 大きな、クレイジーな挑戦も悪くはありません。\n27. 実際、それはとても楽しいものですが、続く可能性は少ないです。\n28. 砂糖を30日間やめたら、31日目はこんな感じでした。\n29. だから、私の質問です。\n30. あなたは何を待っているのですか？\n31. 私は保証します、次の30日間は過ぎ去るでしょう、あなたが好きか嫌いかに関わらず。\n32. だから、何か新しいことを考えて次の30日間に挑戦してみることを考えてみてください。\n33. ありがとうございました。";


const data = [
  {
    start_time: "00:00:16,000",
    end_time: "00:00:20,000",
    text: "A few years ago, I felt like I was stuck in a rut.",
  },
  {
    start_time: "00:00:20,000",
    end_time: "00:00:28,000",
    text: "So I decided to follow in the footsteps of the great American philosopher,Morgan Spurlock,and try something new for 30 days.",
  },
  {
    start_time: "00:00:28,000",
    end_time: "00:00:30,000",
    text: "The idea is actually pretty simple.",
  },
  {
    start_time: "00:00:30,000",
    end_time: "00:00:36,000",
    text: "Think about something you've always wanted to add to your lifeand try it for the next 30 days.",
  },
  {
    start_time: "00:00:36,000",
    end_time: "00:00:46,000",
    text: "It turns out, 30 days is just about the right amount of timeto add a new habit or subtract a habit,like watching the news, from your life.",
  },
  {
    start_time: "00:00:46,000",
    end_time: "00:00:49,000",
    text: "There's a few things that I learned while doing these 30-day challenges.",
  },
  {
    start_time: "00:00:49,000",
    end_time: "00:00:57,000",
    text: "The first was, instead of the months flying by, forgotten,the time was much more memorable.",
  },
  {
    start_time: "00:00:57,000",
    end_time: "00:01:06,000",
    text: "This was part of a challenge I did to take a picture every day for a month,and I remember exactly where I was and what I was doing that day.",
  },
  {
    start_time: "00:01:06,000",
    end_time: "00:01:13,000",
    text: "I also noticed that as I started to do more and harder 30-day challenges,my self-confidence grew.",
  },
  {
    start_time: "00:01:13,000",
    end_time: "00:01:19,000",
    text: "I went from desk-dwelling computer nerdto the kind of guy who bikes to work for fun.",
  },
  {
    start_time: "00:01:19,000",
    end_time: "00:01:25,000",
    text: "Even last year, I ended up hiking up Mount Kilimanjaro,the highest mountain in Africa.",
  },
  {
    start_time: "00:01:25,000",
    end_time: "00:01:31,000",
    text: "I would never have been that adventurousbefore I started my 30-day challenges.",
  },
  {
    start_time: "00:01:31,000",
    end_time: "00:01:39,000",
    text: "I also figured out that if you really want something badly enough,you can do anything for 30 days.",
  },
  {
    start_time: "00:01:39,000",
    end_time: "00:01:42,000",
    text: "Have you ever wanted to write a novel?",
  },
  {
    start_time: "00:01:42,000",
    end_time: "00:01:51,000",
    text: "Every November, tens of thousands of peopletry to write their own 50,000-word novel from scratch in 30 days.",
  },
  {
    start_time: "00:01:51,000",
    end_time: "00:01:58,000",
    text: "It turns out, all you have to do is write 1,667 words a day for a month.",
  },
  {
    start_time: "00:01:58,000",
    end_time: "00:01:59,000",
    text: "So I did.",
  },
  {
    start_time: "00:01:59,000",
    end_time: "00:02:05,000",
    text: "By the way, the secret is not to go to sleepuntil you've written your words for the day.",
  },
  {
    start_time: "00:02:05,000",
    end_time: "00:02:09,000",
    text: "You might be sleep-deprived, but you'll finish your novel.",
  },
  {
    start_time: "00:02:09,000",
    end_time: "00:02:13,000",
    text: "Now, is my book the next great American novel?",
  },
  {
    start_time: "00:02:13,000",
    end_time: "00:02:16,000",
    text: "No! I wrote it in a month! It's awful!",
  },
  {
    start_time: "00:02:17,000",
    end_time: "00:02:26,000",
    text: "But for the rest of my life, if I meet John Hodgman at a TED party,I don't have to say, I'm a computer scientist.",
  },
  {
    start_time: "00:02:26,000",
    end_time: "00:02:30,000",
    text: "No, no, if I want to, I can say, I'm a novelist.",
  },
  {
    start_time: "00:02:33,000",
    end_time: "00:02:35,000",
    text: "So here's one last thing I'd like to mention.",
  },
  {
    start_time: "00:02:35,000",
    end_time: "00:02:42,000",
    text: "I learned that when I made small, sustainable changes,things I could keep doing, they were more likely to stick.",
  },
  {
    start_time: "00:02:42,000",
    end_time: "00:02:45,000",
    text: "There's nothing wrong with big, crazy challenges.",
  },
  {
    start_time: "00:02:45,000",
    end_time: "00:02:50,000",
    text: "In fact, they're a ton of fun, but they're less likely to stick.",
  },
  {
    start_time: "00:02:50,000",
    end_time: "00:02:55,000",
    text: "When I gave up sugar for 30 days, day 31 looked like this.",
  },
  {
    start_time: "00:02:57,000",
    end_time: "00:02:59,000",
    text: "So here's my question to you.",
  },
  {
    start_time: "00:02:59,000",
    end_time: "00:03:01,000",
    text: "What are you waiting for?",
  },
  {
    start_time: "00:03:01,000",
    end_time: "00:03:07,000",
    text: "I guarantee you, the next 30 days are going to pass,whether you like it or not.",
  },
  {
    start_time: "00:03:07,000",
    end_time: "00:03:16,000",
    text: "So why not think about something you have always wanted to tryand give it a shot for the next 30 days?",
  },
  {
    start_time: "00:03:16,000",
    end_time: "00:03:17,000",
    text: "Thanks.",
  },
];

const remap = () => {
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
  console.log(res);
  writeFile('japanses.json', JSON.stringify(res), ()=>{console.log('Done')})
};

// remap();
const jap = readFile('jpn.txt', (err, res)=>console.log(res.toString()));
console.log(jap);
