// Central content store for the portfolio.
// Typed with TypeScript interfaces so sections stay consistent and easy to extend.

export interface ExperienceEntry {
  role: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface DiagramStage {
  label: string;
  detail: string;
}

export interface ProjectEntry {
  slug: string;
  title: string;
  blurb: string;
  bullets: string[];
  tags: string[];
  problem: string;
  impact: string;
  stages: DiagramStage[];
  /** Set once a public repo exists for this project. */
  codeUrl?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const profile = {
  name: "Preshita Jaiswal",
  tagline: "Software Engineer building AI-powered systems — from LLM agents to full-stack platforms",
  location: "Hammond, IN",
  email: "preshitajais007@gmail.com",
  linkedin: "https://www.linkedin.com/in/preshita-jaiswal",
  resumeFile: "resume.pdf",
};

export const about =
  "M.S. in Computer Science (AI concentration) at Purdue University Northwest, with 2+ years of " +
  "professional software engineering experience across industry and applied research. At Purdue's " +
  "CIVS, I build production AI and software systems with industrial partners like U.S. Steel and the " +
  "Department of Energy — real-time computer vision, LLM-powered agent pipelines, and a digital twin " +
  "platform I own end to end. Before grad school, I spent two years at Cognizant Technology Solutions " +
  "building backend services, data pipelines, and cloud infrastructure. I use AI coding assistants " +
  "(Claude Code, GitHub Copilot, OpenAI Codex, Cursor) daily, and I'm comfortable across the stack — " +
  "from LLM/agent systems to backend APIs to cloud infrastructure.";

export const experience: ExperienceEntry[] = [
  {
    role: "Student Research Assistant",
    org: "Purdue University Northwest — CIVS",
    location: "Hammond, IN",
    dates: "Jan 2025 — Present",
    bullets: [
      "Build and ship features for two production AI systems — a real-time computer vision hazard detection system and an LLM-powered accident investigation platform — both in active use by U.S. Steel.",
      "Designed and operate a 12-agent LLM orchestration pipeline (FastAPI, PostgreSQL, Qdrant) that replaced manual, paper-based OSHA accident forms, cutting report completion time by 46.7%.",
      "Own the Integrated Virtual Blast Furnace (IVBF) digital twin platform end to end — from architecture through deployment — improving plant workflow efficiency by 30–40%.",
      "Partner directly with U.S. Steel and DOE stakeholders through regular review cycles, translating AI/ML findings into shipped operational improvements.",
      "Develop interactive C#/.NET applications used for workforce training, and I'm currently exploring Model Context Protocol (MCP) integrations for agent tooling.",
    ],
  },
  {
    role: "Programmer Analyst",
    org: "Cognizant Technology Solutions",
    location: "Pune, India",
    dates: "Sep 2022 — Jun 2024",
    bullets: [
      "Built and maintained backend services and REST APIs in Python, integrated with Snowflake and AWS, across multiple production releases on an enterprise insurance-analytics platform.",
      "Built and maintained reusable Terraform modules and CloudFormation templates to provision AWS infrastructure, running every change through CI/CD with PR review and rollback gates.",
      "Wrote automated tests (PyTest, Selenium) inside CI/CD to block regressions pre-deployment, and built Prometheus/CloudWatch dashboards to trace production incidents to root cause.",
      "Validated 1,000+ production data records per month, cutting data integrity issues by 30% and improving data accuracy by 20%.",
      "Delivered Power BI and Tableau dashboards alongside Python/SQL solutions for business stakeholders.",
    ],
  },
  {
    role: "Programmer Analyst Intern",
    org: "Cognizant Technology Solutions",
    location: "Pune, India",
    dates: "Apr 2022 — Jul 2022",
    bullets: [
      "Supported AWS-based infrastructure operations (EC2, S3, RDS, VPC, IAM) for cloud-hosted applications.",
      "Assisted with resource optimization and automation, contributing to a ~20–25% infrastructure cost reduction.",
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    slug: "hazard-recognition",
    title: "AI Hazard Recognition System",
    blurb: "Real-time computer vision safety system deployed across a live steel plant melt shop.",
    problem:
      "A steel plant melt shop needed continuous hazard awareness across a 4-camera network. Manual " +
      "monitoring couldn't keep up with blind spots and fast-moving floor activity, and a single missed " +
      "detection in a safety system is worse than a false alarm.",
    impact:
      "8 FPS throughput sustained across all 4 live camera feeds with sub-50ms zone-state latency. The " +
      "conservative blind-spot state machine was designed specifically to eliminate false-safe hazard " +
      "states — the system errs toward caution rather than toward a missed detection.",
    stages: [
      { label: "4-Camera Feed Ingestion", detail: "Live video streams from four melt-shop cameras, normalized into a single processing pipeline." },
      { label: "YOLOv8 Detection", detail: "A custom 5-class object detection model trained on melt-shop-specific hazard classes." },
      { label: "DeepSORT Tracking", detail: "Multi-object tracking links detections across frames so the system reasons about movement, not just single frames." },
      { label: "Zone-Based Safety Logic", detail: "A 5-rule engine with cross-camera hazard propagation and a conservative blind-spot state machine." },
      { label: "FastAPI + MJPEG Backend", detail: "Streams processed video and zone state to the frontend in real time." },
      { label: "React Operator Dashboard", detail: "Real-time multi-feed monitoring interface built for melt-shop operators." },
    ],
    bullets: [
      "Trained a custom 5-class YOLOv8 model hitting 8 FPS across 4 simultaneous camera feeds with sub-50ms zone-state latency.",
      "Implemented zone-based safety logic with cross-camera hazard propagation to cover blind spots in the camera network.",
      "Shipped the full stack: a FastAPI backend with MJPEG streaming and a React frontend for real-time multi-feed monitoring.",
    ],
    tags: ["YOLOv8", "DeepSORT", "FastAPI", "React", "Computer Vision"],
  },
  {
    slug: "accident-investigation",
    title: "AI-Assisted Accident Investigation System",
    blurb: "A 12-agent LLM pipeline that replaced manual, paper-based OSHA accident forms.",
    problem:
      "OSHA accident investigations ran on paper forms, which meant slow completion times, inconsistent " +
      "detail, and a high rate of follow-up investigations needed just to fill in gaps the original report " +
      "missed.",
    impact:
      "Report completion time dropped 46.7% and the follow-up investigation rate fell from 42% to 12%. " +
      "Report completeness scores (a 0–100 internal rubric) rose from 71 to 92 through iterative pipeline " +
      "refinement.",
    stages: [
      { label: "Conversational Intake", detail: "An operator describes the incident in natural language — no form-filling required up front." },
      { label: "Dual-Call Design", detail: "One LLM call handles conversational clarification; a second, separate call performs structured extraction — keeping the two concerns from contaminating each other." },
      { label: "12-Agent Pipeline", detail: "Runs entirely on-premise on an Ollama LLM runtime, so no incident data leaves the partner's infrastructure." },
      { label: "Qdrant Vector Search", detail: "768-dimensional embeddings over 3,675 historical accident records surface similar past incidents for context." },
      { label: "Structured Report + Human Review", detail: "The final structured report is handed to a human reviewer before it's finalized." },
    ],
    bullets: [
      "Built the React frontend and on-premise LLM runtime (Ollama) powering the pipeline, keeping all data processing within the partner's infrastructure.",
      "Set up a Qdrant vector database with 768-dimensional embeddings over 3,675 historical accident records for semantic similarity search.",
      "Improved report completeness scores from 71 to 92 out of 100 through iterative pipeline refinement.",
    ],
    tags: ["LLM Agents", "Qdrant", "RAG", "Ollama", "PostgreSQL"],
  },
  {
    slug: "multi-agent-research-assistant",
    title: "Multi-Agent Research Assistant",
    blurb: "A modular multi-agent system that automates literature-review generation from research PDFs.",
    problem:
      "Writing a literature review from a stack of research PDFs is slow, repetitive, and easy to get " +
      "subtly wrong — a single hallucinated claim or a missed connection between papers undermines the " +
      "whole review.",
    impact:
      "The system synthesizes multi-document literature reviews while keeping sessions coherent across " +
      "sources, with hallucination detection and response-quality evaluation built into the pipeline " +
      "rather than bolted on after the fact.",
    stages: [
      { label: "PDF Ingestion", detail: "Research PDFs are parsed and prepared for retrieval." },
      { label: "Chunking & Embedding", detail: "Documents are chunked and embedded into a FAISS vector index." },
      { label: "Multi-Agent Retrieval", detail: "LangChain-orchestrated agents retrieve and reason over relevant chunks across multiple papers." },
      { label: "Hallucination Detection", detail: "Generated claims are checked against source text before being accepted into the output." },
      { label: "Synthesized Review Output", detail: "A coherent literature review draws together findings across all ingested papers." },
    ],
    bullets: [
      "Architected the system with OpenAI API, LangChain, and FAISS, adding hallucination detection and response-quality evaluation.",
      "Designed session management and cross-agent communication logic to keep results coherent across multi-document synthesis.",
    ],
    tags: ["LangChain", "FAISS", "OpenAI API", "RAG"],
    codeUrl: "https://github.com/Preshitajais21/multi-agent-research-assistant",
  },
  {
    slug: "ivbf-digital-twin",
    title: "IVBF Digital Twin Platform",
    blurb: "A unified decision-support platform for blast furnace operators, owned end to end.",
    problem:
      "Blast furnace operators were working from multiple disconnected models and data sources — no " +
      "single view combined the best-performing forecasting model, control recommendations, and visual " +
      "anomaly signals for a given operating condition.",
    impact:
      "Owned end to end, from architecture through deployment. Improved plant workflow efficiency by " +
      "30–40% by giving operators one unified, AI-powered decision-support interface instead of several " +
      "disconnected tools.",
    stages: [
      { label: "Sensor & Process Data Ingestion", detail: "Casting sensor images and furnace process data flow into a shared pipeline." },
      { label: "ROM Auto-Selection", detail: "An ONNX-based digital twin dynamically picks the best-performing Reduced-Order Model for the current operating condition." },
      { label: "RL Control Recommendation", detail: "A reinforcement-learning layer recommends control adjustments based on the selected model's output." },
      { label: "LLM Furnace Assistant", detail: "A natural-language assistant lets operators ask questions about current furnace state in plain English." },
      { label: "Multimodal Anomaly Detection", detail: "Combines casting sensor images with process data to flag anomalies a single data source would miss." },
      { label: "Dash Operator Dashboard", detail: "Everything above surfaces through one dashboard built for real plant operators." },
    ],
    bullets: [
      "Deployed an ONNX-based digital twin that dynamically selects the best-performing Reduced-Order Model (ROM) for current operating conditions.",
      "Integrated an RL-based control recommendation layer, a natural-language LLM furnace assistant, and a multimodal computer-vision anomaly-detection module.",
      "Exposed results through a Dash dashboard built for real plant operators.",
    ],
    tags: ["ONNX", "Reinforcement Learning", "Dash", "Computer Vision"],
  },
  {
    slug: "silicon-prediction",
    title: "Silicon Prediction & Blast Furnace ML System",
    blurb: "Forecasting system for real-time silicon-content prediction in blast furnace operations.",
    problem:
      "Inherited an existing silicon-content forecasting pipeline that was slow and prone to data leakage " +
      "from improper validation, limiting its usefulness for real-time process control decisions.",
    impact:
      "Re-engineered the pipeline into a production-grade system that cut computation time by over 95% " +
      "compared to the prior approach, while fixing the validation methodology to prevent data leakage.",
    stages: [
      { label: "Inherited Pipeline Audit", detail: "Reviewed the existing implementation to find where validation was leaking future information into training." },
      { label: "Temporal Validation Redesign", detail: "Forward-chaining and rolling-window validation replace naive random splits, so the model is only ever evaluated on genuinely unseen future data." },
      { label: "XGBoost + LSTM Ensemble", detail: "Combines gradient-boosted trees with a sequence model to capture both tabular and temporal signal." },
      { label: "Drift Detection", detail: "Monitors for distribution shift in incoming data so degrading predictions get caught early." },
      { label: "Synthetic Data Augmentation", detail: "Generative AI produces synthetic cast data to strengthen coverage of rare edge-case conditions." },
      { label: "Real-Time Prediction Output", detail: "Final predictions feed back into blast furnace process-control decisions." },
    ],
    bullets: [
      "Built an XGBoost + LSTM ensemble with forward-chaining and rolling-window temporal validation to prevent data leakage.",
      "Added drift detection to monitor distribution shift, and used generative AI to produce synthetic cast data for edge cases.",
    ],
    tags: ["XGBoost", "LSTM", "Drift Detection", "Generative AI"],
  },
  {
    slug: "vlm-explainer",
    title: "VLM Explainer — BLIP & CLIP Interpretability",
    blurb: "An interpretability tool for vision-language model behavior.",
    problem:
      "Vision-language models like BLIP and CLIP produce captions and alignments that look plausible, " +
      "but it's hard to tell whether a caption is actually grounded in the right part of the image or just " +
      "a confident-sounding guess.",
    impact:
      "Surfaced interpretability insights that helped assess and improve model accuracy and reliability, " +
      "by making the model's internal attention and semantic grounding visible and checkable instead of " +
      "opaque.",
    stages: [
      { label: "Image + Caption Input", detail: "An image and its BLIP-generated caption are loaded into the tool." },
      { label: "Grad-CAM Visualization", detail: "Highlights which image regions most influenced the model's output." },
      { label: "Token-Level Attention Mapping", detail: "Breaks down attention per generated token to see what the model focused on at each step." },
      { label: "CLIP Similarity Scoring", detail: "Independently scores semantic similarity between the caption and image regions to validate grounding." },
      { label: "Interactive Streamlit App", detail: "All of the above is explorable live, image by image, caption by caption." },
    ],
    bullets: [
      "Built an interactive Streamlit application visualizing BLIP and CLIP behavior with Grad-CAM and token-level attention maps.",
      "Validated semantic grounding between generated captions and image regions using CLIP similarity scoring.",
    ],
    tags: ["Streamlit", "CLIP", "BLIP", "Grad-CAM"],
    codeUrl: "https://github.com/Preshitajais21/vlm-explainer",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Languages & Backend",
    items: ["Python", "Java", "C#", ".NET", "SQL", "JavaScript", "TypeScript", "React", "Django", "FastAPI", "REST APIs"],
  },
  {
    label: "AI & LLM",
    items: ["LLM Workflows", "RAG", "Vector Search", "Multi-Agent Systems", "LangChain", "LangGraph", "MCP", "OpenAI API", "Hugging Face", "FAISS", "Qdrant", "Prompt Engineering"],
  },
  {
    label: "Machine Learning",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Object Detection", "OpenCV", "CNNs", "Transformers", "YOLOv8", "DeepSORT"],
  },
  {
    label: "Data Engineering",
    items: ["Pandas", "NumPy", "PySpark", "Snowflake", "SQL Server", "PostgreSQL", "Kafka", "Databricks", "ETL/ELT"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Terraform", "CloudFormation", "GCP", "Docker", "Kubernetes", "Git", "CI/CD", "PyTest", "Selenium", "Prometheus", "CloudWatch"],
  },
  {
    label: "AI-Assisted Development",
    items: ["Claude Code", "GitHub Copilot", "OpenAI Codex", "Cursor"],
  },
];

export const education = [
  {
    degree: "M.S., Computer Science (Concentration in AI)",
    school: "Purdue University Northwest",
    meta: "GPA 3.84/4.0 · Aug 2024 – May 2026",
  },
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Dr. Babasaheb Ambedkar Technological University, Maharashtra, India",
    meta: "GPA 3.78/4.0 · Aug 2018 – Jul 2022",
  },
];
