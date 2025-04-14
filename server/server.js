import {AzureChatOpenAI} from "@langchain/openai";

const model:AzureChatOpenAI = new AzureChatOpenAI({
    temperature: 0.3,
    verbose: true
});

const joke = await model.invoke('tell me a dirty joke');
console.log(joke.content);