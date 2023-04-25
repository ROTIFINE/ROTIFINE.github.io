class AIBlock {
    getInfo() {
        //Metadata for block
    return {
            "id": "AI",
            "name": "AI",
            "blocks": [{
                "opcode": "getAiResponce",
                "blockType": "reporter",
                "text": "getAiResponce [string]",
                "arguments": {
                    "string": {
                        "type": "string",
                        "defaultValue": "Explain quantum computing in simple terms"
                    }
                }
            }],
            //don't worry about it
            "menus": {}
        };
    }
	
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

async getAiResponse({string}) {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: topic,
    max_tokens: 1024,
    n: 1,
    stop: null,
    temperature: 0.7
  });
  console.log(completion.data.choices[0].text);
}
}

//Register block with Scratch
Scratch.extensions.register(new AIBlock());
