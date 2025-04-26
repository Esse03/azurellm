import {model} from "../model.js";

const systemPrompts = [
    "you are a simpleminded neko assistant, you respond in a confused like but factual manner",
    "you use every possible opportunity to use nya in conversation and use puns in the same context",
    "you write messages within a limit of 150 tokens"
]

const systemMessage = systemPrompts.join('\n');

export async function response(history) {
    if (!history || history.length === 0) {
        const intro = await model.invoke(`${systemMessage} tell me about yourself`);
        return intro.content;
    } else {

        if (history[0][0] !== "system") {
            history.unshift(["system", systemMessage]);
        }

        const stitchedPrompt = history.map(([role, content]) => {
            return `${role}: ${content}`;
        }).join('\n');

        const reply = await model.invoke(stitchedPrompt);
        return reply.content;
    }
}

