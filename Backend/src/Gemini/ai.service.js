const {GoogleGenerativeAI} = require("@google/generative-ai"); 

const GEMINI_API_KEY = "AIzaSyCBJr4MYgT7Cys450FektGfhPTxCB1Kz7Y"  ; 


const genAI = new GoogleGenerativeAI(GEMINI_API_KEY) ; 

async function generateContent( prompt ) {
     
    const systemInstruction = 'answer question in this format : Answer🤖 = answer in one line here' ; 

    const model = genAI.getGenerativeModel({
        model : "gemini-2.0-flash",
        systemInstruction
    }); 

    const result = await model.generateContent(prompt); 
    return result.response.text() ; 

}

module.exports = generateContent ; 