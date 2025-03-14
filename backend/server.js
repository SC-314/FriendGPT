import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


const db = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false },
  });

db.connect()
  .then(() => console.log("Connected to PostgreSQL database"))
  .catch(err => console.error("Database connection error:", err));


  
app.post("/login", async (req, res) => {
    const data = req.body;
    const result = await db.query(`SELECT EXISTS ( SELECT 1 FROM users WHERE username = '${data.username}' and password = '${data.password}')`)
    const result1 = await db.query(`SELECT userid FROM users WHERE username = '${data.username}' and password = '${data.password}'`)
    // console.log(result.rows[0].exists, result1.rows[0].userid)
    if (result.rows[0].exists) {
        res.json([result.rows[0].exists, result1.rows[0].userid])
    } else {
        res.json([result.rows[0].exists])
    }
})

app.post("/signup", async(req, res) => {
    const data = req.body;
    const result = await db.query(`SELECT EXISTS ( SELECT 1 FROM users WHERE username = '${data.username}')`)
    if (result.rows[0].exists == true) {
        res.json(["Username already in use!", 0])
    } else {
        await db.query(`INSERT INTO users (username, password) VALUES ('${data.username}', '${data.password}')`)
        res.json(["Created account!", 1])
    }
})

app.post("/userMsg", async(req, res) => {
    const data = req.body;
    const Q = `INSERT INTO messages (chatid, userid, msg, isuser) VALUES (${data.chatid}, ${data.userid}, '${data.message}', ${true});
    SELECT * FROM messages WHERE userid = ${data.userid} and chatid = ${data.chatid}`
    const result = await db.query(Q)
    res.json(result)
    // const result1 = await db.query(`INSERT INTO messages (chatid, userid, msg, isuser) VALUES (${data.chatid}, ${data.userid}, '${'YEAH, I agree LOL ^_^'}', ${false})`)
})

async function askAI(AIPrompt, API_KEY) {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "cognitivecomputations/dolphin3.0-mistral-24b:free",
            "messages": AIPrompt
        })
    })

    const text = await response.text();
    const data = JSON.parse(text);
    console.log(data);
    const AIResponse = data.choices[0].message.content;

    console.log(AIResponse)

    return AIResponse;
}


app.post("/AIresponse", async(req, res) => {
    const data = req.body;
    console.log(req.body)
    const size = data.message.length
    const currentHistory = data.message.slice(size -4, size);
    const AIprompt = currentHistory.map(element => {
        if (element[1] == 'true') {
            return({"role":"user", "content": element[0]});  // Get the message (element[0]) from the tuple
        } else {
            return({"role":"assistant", "content": element[0]});  // Same here for AI message
        }
    });


    console.log(data.ainame)

    AIprompt.unshift({
        role: "system",
        content: "You are a " + (data.aiisgirl ? "girl" : "boy") + ", who is named " + (data.ainame)
    + ", with personality: " + (data.aipersonality) + " you are having a natural conversation" 
    + " and messages should be like text messages"
}) 

    console.log("MY PROMPT IS", AIprompt)
    const API_KEY = process.env.AI_API_KEY;

    const aiReply = await askAI(AIprompt, API_KEY);

    await db.query(
        `INSERT INTO messages (msg, isuser, chatid, userid) 
            VALUES ($1, $2, $3, $4)`,
        [aiReply, false, data.chatid, data.userid]
    );

    const result1 = await db.query(
        `SELECT * FROM messages WHERE chatid = $1 ORDER BY msgid ASC LIMIT 10`, 
        [data.chatid]
    );
    
    res.json(result1);

})


app.post("/getAllMessages", async (req, res) => {
    const data = req.body;
    const result = await db.query(`SELECT * FROM messages WHERE userid = ${data.userid} and chatid = ${data.chatid}`)
    res.json(result)
})

app.post("/getAllChats", async (req, res) => {
    const data = req.body;
    const result = await db.query(`SELECT * FROM chats WHERE userid = ${data.userid}`)
    res.json(result)
   console.log(result.rows)
})

app.post("/addToChats", async (req, res) => {
    const data = req.body;
    const result = await db.query(
        `
        INSERT INTO chats (userid, ainame, aiisgirl, aipersonality)
        VALUES ($1, $2, $3, $4);
        `, [data.userid, data.ainame, data.AiIsGirl, data.aipersonality])
    res.json(result)
})


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})


