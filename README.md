🛡️ AuraSentinel AI

Autonomous Fintech Intelligence & Real-Time Security Investigation

AuraSentinel AI is a premium, AI-native operations console designed for the modern fintech ecosystem. It leverages Google Gemini 1.5 Pro to transform raw telemetry into human-readable investigation narratives, analyzes emotional trading patterns, and monitors the integrity of staked assets in real-time.

💎 Core Capabilities

🧠 AI-Generated Investigation Narratives

Reduces "Mean Time to Document" (MTTD) from hours to seconds. AuraSentinel consumes complex logs (Security, API, or Web3) and uses Google Gemini to generate structured forensic reports, identifying root causes and recommending mitigation steps.

📉 Emotional Trading Intelligence

An autonomous behavioral engine that detects "tilted" trading. By analyzing historical loss clusters, the AI warns traders when they are repeating specific psychological mistakes (e.g., revenge trading, FOMO-induced position sizing).

 Staked Asset Vigilance

Specialized monitoring for the Proof-of-Stake (PoS) economy:

 Slashing Protection: Real-time alerts on validator downtime or double-signing.
 Unstaking Anomalies: Immediate flagging of large unbonding requests from unrecognized IP addresses.
 Yield Decay: Detects protocol-level APR drops that indicate underlying liquidity or security risks.

Enterprise-Grade Security

 Noir Fintech UI: High-contrast, glassmorphism-based design for reduced cognitive load during high-stress incidents.
 AES-256 Storage: Encrypted SQLite layer for PII and sensitive API credentials.
 Immutable Audit Trails: Every AI-generated narrative and severity classification is logged with a cryptographic hash for regulatory compliance.

Technology Stack

 Frontend: React 19, TypeScript, Tailwind CSS (Noir Theme)
 Backend: Node.js, TypeScript, Fastify
 AI Engine: Google Gemini 1.5 Pro (Google AI Studio)
 Database: SQLite (Better-SQLite3) with encrypted storage wrappers
 Security: JWT (JSON Web Tokens) & Role-Based Access Control (RBAC)

Quick Start

1. Prerequisites

* Node.js (v18+)
* Google AI Studio API Key (for Gemini)

2. Installation

```bash
# Clone the repository
git clone https://github.com/your-username/aurasentinel-ai.git

# Install dependencies
cd aurasentinel-ai
npm install

# Setup Environment Variables
cp .env.example .env

```

### 3. Configuration

Add your keys to the `.env` file:

```env
GEMINI_API_KEY=your_gemini_key_here
DB_ENCRYPTION_KEY=your_aes_256_key_here
JWT_SECRET=your_secret_here

```

4. Run Development Mode

```bash
npm run dev

```

---

System Architecture

1. Ingestion: Raw logs are piped into the `LogParser` middleware.
2. Reasoning: The `AIEngine` prompts Gemini with the log context and historical user behavior.
3. Classification: The system assigns a severity (Critical, High, Med, Low) and generates a Markdown narrative.
4. Storage: The narrative and audit trail are encrypted and committed to the SQLite DB.
5. Visualization: The Noir UI renders the investigation in a glassmorphism "War Room" dashboard.

Compliance & Business Value

AuraSentinel is built to satisfy **SOC2** and **GDPR** data integrity requirements. By automating the documentation of security incidents and providing traders with a "digital mirror" for behavioral health, it reduces operational risk and increases user retention in high-stakes financial environments.
