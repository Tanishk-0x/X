require('dotenv').config() ; 
const {GoogleGenerativeAI} = require("@google/generative-ai"); 
const { diffIndexes } = require('../Models/UserModel');

const GEMINI_API_KEY = process.env.GEMINI; 

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY) ; 

async function generateContent( prompt , no , flag , diff ) {
     
    const systemInstruction = (flag==="0") ? ( `
    
        You are an expert technical interviewer.

        Generate ${no} most frequently asked interview questions for the topic : .
        also generate questions based on the difficulty level : ${diff}
        Return output strictly in valid JSON format as:
        {
            "questions": [
                {
                "question" : "Your question here?",
                "ans" : "This Field Must be empty NO Content in this field " , 
                "hint" : "Here the one line simple but quick remembered hint of the question"
                },
                ...
                (number of questions)
            ]
        }
        Do not include explanations, numbering, or any extra text — only the JSON array.
        Also Note that do not give same question repeatative times every time you have to give difeerent questions on every call 
        like the numberofQuestion is 5 so the first question should be easier then second question is little bit difficult compare to first one ---- the the last question should be difficult

    ` ) : ( `
    
        You are an intelligent evaluator designed to assess technical answers given by a user.

        You will receive data in JSON format like:
        {
        "question": "<the question asked>",
        "ans": "<the answer provided by the user>",
        "hint": "<optional hint - ignore this field>"
        }

        Your task:
        1. Evaluate the user's answer for correctness, clarity, completeness, and relevance.
        2. Ignore the "hint" field entirely.
        3. Respond strictly in JSON format (no extra text).
        4. Each response must include a "remarks" section with detailed structured feedback and a numeric score.

        The output format should be:

        {
        "remarks": {
            {
                "remark": "<short summary stating whether the answer is correct, partially correct, or incorrect>",
                "userAns" : "replicate the user's answer exact" , 
                "correctAns": "<if the user's answer is correct, return 'Correct Answered'; if not, provide a concise, professional corrected answer> the answer should be only one line but powerfull answer if user read it user can easily understand the question it should be beginner friendly Give the corrected answer in simplext language as you can",
                "accuracyLevel": "<High | Medium | Low — based on factual correctness>",
                "improvementTips": "<one or two short, actionable tips on how to make the answer better>"
            } , give like these for every question+answer
        },
        "score": "<a number between 0 and 10 reflecting answer quality>"
        }

        Scoring Guidelines:
        - 9–10 → fully correct, clear, and well-explained.
        - 6–8 → mostly correct but missing details or minor inaccuracies.
        - 3–5 → partially correct or incomplete.
        - 0–2 → incorrect, irrelevant, or poor explanation.
        Be professional, consistent, and concise.

        Do not Judge Too Strictly , 
        if user provided the answer in totally different xyz then it should be 0 but if the user's answer is partially correct then the score should be 2-3 
        or the user's answer is 40-50% correct then the score should be lies between 4-6 and if the user answer is more than 50% correct you can score 6-10 according to the answer preovides 
        also if user does not answer all the question then score should also be affected 

        
     ` ) 

    const model = genAI.getGenerativeModel({
        model : "gemini-2.0-flash",
        systemInstruction
    }); 

    const result = await model.generateContent(prompt); 
    return result.response.text() ; 

}

module.exports = generateContent ; 