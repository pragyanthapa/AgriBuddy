import { NextResponse } from 'next/server';
import { TextAnalyticsClient, AzureKeyCredential } from "@azure/ai-text-analytics";

const endpoint = process.env.AZURE_TEXT_ANALYTICS_ENDPOINT;
const key1 = process.env.AZURE_TEXT_ANALYTICS_KEY_1;
const key2 = process.env.AZURE_TEXT_ANALYTICS_KEY_2;

if (!endpoint || !key1 || !key2) {
  console.error("Azure Text Analytics endpoint or keys are missing");
  throw new Error("Azure Text Analytics configuration is incomplete");
}

const createClient = (key: string) => new TextAnalyticsClient(endpoint!, new AzureKeyCredential(key));

async function analyzeWithRetry(content: string) {
  const keys = [key1, key2];
  
  for (const key of keys) {
    try {
      const client = createClient(key);
      const documents = [{ id: "1", language: "en", text: content }];
      const [sentimentResult, keyPhrasesResult] = await Promise.all([
        client.analyzeSentiment(documents),
        client.extractKeyPhrases(documents),
      ]);

      return {
        sentiment: sentimentResult[0].sentiment,
        keyPhrases: keyPhrasesResult[0].keyPhrases,
      };
    } catch (error) {
      console.error(`Error with key ${key === key1 ? '1' : '2'}:`, error);
      if (key === key2) {
        throw error; // Re-throw if both keys fail
      }
    }
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const content = formData.get('content');

    if (!content || typeof content !== 'string') {
      return NextResponse.json({ error: 'No content provided' }, { status: 400 });
    }

    const result = await analyzeWithRetry(content);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error analyzing document:', error);
    return NextResponse.json({ error: 'Error analyzing document. Please check your Azure configuration.' }, { status: 500 });
  }
}