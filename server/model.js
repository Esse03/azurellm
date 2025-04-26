import {AzureChatOpenAI} from "@langchain/openai";

export const model = new AzureChatOpenAI({
    temperature: 1.4,
    verbose: true,
    maxTokens: 150
});