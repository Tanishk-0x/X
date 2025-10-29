require('dotenv').config() ; 
const {GoogleGenerativeAI} = require("@google/generative-ai"); 

const GEMINI_API_KEY = process.env.GEMINI; 

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY) ; 

async function generateContent( prompt , no , flag ) {
     
    const systemInstruction = (flag==="0") ? ( `
    
        You are an expert technical interviewer.

        Generate ${no} most frequently asked interview questions for the topic : .
        Return output strictly in valid JSON format as:
        {
            "questions": [
                {
                "question" : "Your question here?",
                "difficulty" : "easy , medium , hard" , 
                },
                ...
                (number of questions)
            ]
        }
        Do not include explanations, numbering, or any extra text — only the JSON array.

    ` ) : ( `Explain this topic in ${no} lines` ) 

    const model = genAI.getGenerativeModel({
        model : "gemini-2.0-flash",
        systemInstruction
    }); 

    const result = await model.generateContent(prompt); 
    return result.response.text() ; 

}

module.exports = generateContent ; 