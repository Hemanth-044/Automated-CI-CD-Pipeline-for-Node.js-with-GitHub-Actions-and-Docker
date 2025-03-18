const axios = require("axios");

async function analyzeError(errorMsg) {
  const response = await axios.post("https://api.openai.com/v1/completions", {
    model: "text-davinci-003",
    prompt: `Debug this error: ${errorMsg}`,
    max_tokens: 100
  }, {
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
  });

  return response.data.choices[0].text;
}
