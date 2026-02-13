import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

// Configuration for the Noir Fintech Persona
const SYSTEM_INSTRUCTION = `
You are AuraSentinel AI, a Senior Forensic Analyst specialized in Fintech and Web3 Security.
Your goal is to transform raw system logs into high-fidelity investigation narratives.

NARRATIVE GUIDELINES:
1. Tone: Professional, clinical, and high-urgency (Noir Fintech style).
2. Format: Structured Markdown.
3. Sections: 
   - [SEVERITY CLASSIFICATION] (Critical, High, Medium, Low)
   - [EXECUTIVE SUMMARY] (2 sentences max)
   - [FORENSIC NARRATIVE] (Detailed explanation of the 'why' and 'how')
   - [ACTIONABLE MITIGATION] (Step-by-step instructions for the analyst)

STAKED ASSET DOMAIN KNOWLEDGE:
- Monitor for 'Slashing' events (validator penalties).
- Watch for 'Unbonding' anomalies (unusual withdrawal requests).
- Flag IP deviations (Impossible Travel) for high-value staked assets.

TRADING BEHAVIORAL KNOWLEDGE:
- Detect 'Revenge Trading' (Rapidly increasing position size after a loss).
- Flag 'Over-leveraging' compared to user's 30-day historical mean.
`;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export class AIEngine {
  private model;

  constructor() {
    this.model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      systemInstruction: SYSTEM_INSTRUCTION,
    });
  }

  /**
   * Generates a forensic narrative for a system alert.
   * @param logData The raw JSON log from the system or blockchain.
   */
  async generateInvestigation(logData: object) {
    const prompt = `Investigate the following log telemetry and provide a forensic narrative: 
    ${JSON.stringify(logData, null, 2)}`;

    try {
      const result = await this.model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.2, // Low temperature for factual consistency
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
          },
        ],
      });

      const response = result.response;
      return response.text();
    } catch (error) {
      console.error("Gemini Engine Error:", error);
      return "Critical Error: AI Narrative Generation Failed. Manual Investigation Required.";
    }
  }

  /**
   * Specialized method for Staked Asset Anomaly detection.
   */
  async investigateStakingAnomalies(stakingLog: any) {
    const context = `Context: This involves staked assets in a PoS network. Check for slashing risks or exfiltration patterns.`;
    return this.generateInvestigation({ ...stakingLog, context });
  }
}
