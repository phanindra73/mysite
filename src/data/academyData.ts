export interface AcademyCourse {
  title: string;
  duration: string;
  feeINR: number;
  description: string;
  rating: number;
  skills: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
}

export interface AcademyCategory {
  id: string;
  name: string;
  description: string;
  courses: AcademyCourse[];
}

export const ACADEMY_CATEGORIES: AcademyCategory[] = [
  {
    id: "programming",
    name: "Programming & Software Development",
    description: "Build a strong foundation in modern coding languages, logic building, and architecture.",
    courses: [
      {
        title: "C Programming",
        duration: "30 Hours",
        feeINR: 5000,
        description: "Master procedural programming paradigm, pointer manipulation, and memory management basics.",
        rating: 4.7,
        skills: ["Pointers", "Data Types", "Functions", "Memory Allocations"],
        level: "Beginner"
      },
      {
        title: "C++ Programming",
        duration: "40 Hours",
        feeINR: 6000,
        description: "Explore Object-Oriented Programming (OOP) concepts, templates, STL containers, and low-level system design.",
        rating: 4.8,
        skills: ["OOPS", "STL Library", "Templates", "Polymorphism"],
        level: "Beginner"
      },
      {
        title: "Core Java",
        duration: "45 Hours",
        feeINR: 8000,
        description: "Master Java fundamentals, exception handling, multi-threading, collections, and generic programming.",
        rating: 4.9,
        skills: ["Java JVM", "Collections Framework", "Multi-threading", "File IO"],
        level: "Beginner"
      },
      {
        title: "Advanced Java",
        duration: "60 Hours",
        feeINR: 12000,
        description: "Enterprise Java standards including Spring Boot, Hibernate ORM, Servlets, JSP, and Microservices architecture template design.",
        rating: 4.8,
        skills: ["Spring Boot", "Hibernate REST APIs", "JPA Microservices", "Spring Security"],
        level: "Advanced"
      },
      {
        title: "Python Programming",
        duration: "45 Hours",
        feeINR: 8000,
        description: "Acquire Python essentials, OOP structures, decorative functions, scripting automation, and module packages.",
        rating: 4.9,
        skills: ["Scripting", "Dynamic Typing", "Data Manipulation", "OOPs in Python"],
        level: "Beginner"
      },
      {
        title: "Data Structures & Algorithms",
        duration: "50 Hours",
        feeINR: 10000,
        description: "Crack technical coding rounds by learning algorithmic analyses, sorting, trees, graphs, and dynamic programming.",
        rating: 4.9,
        skills: ["Graphs", "Trees", "Dynamic Programming", "Recursion", "Complexity Analysis"],
        level: "Intermediate"
      }
    ]
  },
  {
    id: "web-dev",
    name: "Web Development",
    description: "Launch professional responsive websites and modern fullstack single-page applications.",
    courses: [
      {
        title: "HTML & CSS",
        duration: "20 Hours",
        feeINR: 4000,
        description: "Structure semantic web docs, layout systems (Flexbox, Grid), and build responsive modern landing spaces.",
        rating: 4.6,
        skills: ["Flexbox / CSS Grid", "Responsive Design", "Semantic HTML", "CSS Animations"],
        level: "Beginner"
      },
      {
        title: "JavaScript",
        duration: "40 Hours",
        feeINR: 7000,
        description: "Gain complete mastery over ES6+ features, asynchronous closures, DOM trees, fetch APIs, and event handlers.",
        rating: 4.8,
        skills: ["Asynchronous JS", "ES6+ Features", "Closures & Scopes", "Fetch API"],
        level: "Beginner"
      },
      {
        title: "React.js",
        duration: "50 Hours",
        feeINR: 12000,
        description: "Develop interactive state-driven client applications using custom Hooks, Context, Router, and custom animations with framer-motion.",
        rating: 4.9,
        skills: ["React State & Hooks", "Component Design", "Context API", "Virtual DOM"],
        level: "Intermediate"
      },
      {
        title: "Next.js",
        duration: "40 Hours",
        feeINR: 12000,
        description: "Enterprise-grade React framework covering Server Components (RSC), App Router, Hybrid Rendering, dynamic SEO, and API proxies.",
        rating: 4.9,
        skills: ["App Router", "Server Components", "Incremental Static Regeneration", "Middlewares"],
        level: "Advanced"
      },
      {
        title: "Node.js",
        duration: "45 Hours",
        feeINR: 10000,
        description: "Program robust server runtimes with Express.js backend routers, middlewares, custom event emissions, and database bridges.",
        rating: 4.7,
        skills: ["Express.js API", "Event Loop", "Streams & File System", "Authentication JWT"],
        level: "Intermediate"
      },
      {
        title: "Full Stack Development",
        duration: "120 Hours",
        feeINR: 35000,
        description: "Our landmark immersive course combining HTML, CSS, JavaScript, React, Node, SQL/NoSQL databases, and server deployment.",
        rating: 4.9,
        skills: ["MERN/PERN Stack", "API Integrations", "Database Architecture", "Git & Deployments", "CI/CD Pipeline"],
        level: "All Levels"
      }
    ]
  },
  {
    id: "database",
    name: "Database Technologies",
    description: "Store, model, index, query, and optimize enterprise relational and non-relational database architectures.",
    courses: [
      {
        title: "SQL",
        duration: "25 Hours",
        feeINR: 5000,
        description: "Learn robust structured querying language, complex multi-table JOINs, subqueries, group aggregates, and data definition.",
        rating: 4.7,
        skills: ["Relational Algebra", "JOINS & Aggregates", "Constraints", "Subqueries"],
        level: "Beginner"
      },
      {
        title: "Oracle Database",
        duration: "40 Hours",
        feeINR: 8000,
        description: "Enterprise relational database model, Oracle architectures, memory structures, tablespaces, and administrative essentials.",
        rating: 4.7,
        skills: ["Oracle SQL Developer", "System Architecture", "Tablespaces & Schema", "Data Control (DCL)"],
        level: "Intermediate"
      },
      {
        title: "PL/SQL",
        duration: "40 Hours",
        feeINR: 8000,
        description: "Program Oracle with procedural blocks, triggers, user-defined functions, stored procedures, cursor operations, and exceptions.",
        rating: 4.8,
        skills: ["PL/SQL Triggers", "Stored Procedures", "Cursors & Loops", "Exception Packages"],
        level: "Intermediate"
      },
      {
        title: "MySQL",
        duration: "20 Hours",
        feeINR: 4000,
        description: "Open-source RDBMS setup, local admin configurations, indexing, transactions, ACID compliance, and engine optimizations.",
        rating: 4.6,
        skills: ["Relational Model", "Database Indexing", "Backup & Restore", "Transactions ACID"],
        level: "Beginner"
      },
      {
        title: "PostgreSQL",
        duration: "25 Hours",
        feeINR: 5000,
        description: "Understand advanced Postgres properties, JSONB storage modeling, text search vectors, triggers, and execution plan tuning.",
        rating: 4.8,
        skills: ["JSONB Data Types", "Indexing Strategies", "Execution Explain Plan", "User-Defined Functions"],
        level: "Intermediate"
      }
    ]
  },
  {
    id: "data-science",
    name: "Data Science & Analytics",
    description: "Extract insights, structure raw records, perform predictive model mapping, and build dynamic visual dashboards.",
    courses: [
      {
        title: "Python for Data Analysis",
        duration: "40 Hours",
        feeINR: 10000,
        description: "Transition Python programming to analytics paradigms. Load, cleanse, slice, and preprocess raw file formats.",
        rating: 4.8,
        skills: ["Jupyter Notebooks", "Data Preprocessing", "CSV/JSON processing", "Cleaning Pipelines"],
        level: "Beginner"
      },
      {
        title: "NumPy & Pandas",
        duration: "30 Hours",
        feeINR: 8000,
        description: "Master multi-dimensional array operations, series and DataFrame manipulations, merging, aggregations, and pivot layouts.",
        rating: 4.8,
        skills: ["Vectorization", "DataFrames", "Grouping / Merging", "TimeSeries Indexing"],
        level: "Intermediate"
      },
      {
        title: "Data Visualization",
        duration: "25 Hours",
        feeINR: 7000,
        description: "Craft professional presentation plots utilizing Matplotlib, Seaborn, and modern interactive dashboard frameworks (D3, Recharts).",
        rating: 4.7,
        skills: ["Seaborn & Matplotlib", "Dashboard UI", "Interactive Plotting", "Presentation Aesthetics"],
        level: "Intermediate"
      },
      {
        title: "Statistics for Data Science",
        duration: "25 Hours",
        feeINR: 7000,
        description: "Understand descriptive stats, probability distribution indices, hypothesis testing (Z/t checks), ANOVA, and regressions.",
        rating: 4.8,
        skills: ["Probability Distributions", "Hypothesis Testing", "A/B Testing math", "Regression Studies"],
        level: "Beginner"
      },
      {
        title: "Data Analytics Program",
        duration: "80 Hours",
        feeINR: 25000,
        description: "Accelerate your career with a high-density analyst curriculum comprising Python, SQL, Excel metrics, and BI dashboards.",
        rating: 4.9,
        skills: ["SQL Analytics", "BI Tool Dashboards", "Python Preprocessing", "Trend Analysis"],
        level: "All Levels"
      }
    ]
  },
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    description: "Train prediction systems, explore custom neural nets, and implement computer vision or natural language networks.",
    courses: [
      {
        title: "Machine Learning Fundamentals",
        duration: "60 Hours",
        feeINR: 15000,
        description: "Construct supervised / unsupervised algorithm systems using Scikit-Learn: Decisive Trees, Random Forests, SVM, and clusterings.",
        rating: 4.9,
        skills: ["Scikit-Learn", "Feature Selection", "Cross Validation", "Ensemble Models"],
        level: "Intermediate"
      },
      {
        title: "Deep Learning",
        duration: "60 Hours",
        feeINR: 18000,
        description: "Build, train, and diagnose feedforward, convolutional (CNN), and recurrent (RNN) neural networks with TensorFlow/PyTorch.",
        rating: 4.8,
        skills: ["PyTorch / TensorFlow", "Backpropagation", "CNNs Image Training", "Optimization Solvers"],
        level: "Advanced"
      },
      {
        title: "NLP",
        duration: "40 Hours",
        feeINR: 12000,
        description: "Process text, build tokenizers, analyze sentiment metrics, and generate text utilizing RNNs, LSTMs, and modern attention blocks.",
        rating: 4.8,
        skills: ["Text Processing", "Tokenizers", "Word Embeddings", "Transformers Architecture"],
        level: "Advanced"
      },
      {
        title: "Computer Vision",
        duration: "40 Hours",
        feeINR: 12000,
        description: "Apply OpenCV, extract shape contours, build image classifications, object detector filters (YOLO), and transfer learning weights.",
        rating: 4.7,
        skills: ["OpenCV Matrix", "Object Detection (YOLO)", "Image Segments", "Feature Matchers"],
        level: "Advanced"
      },
      {
        title: "AI Project Development",
        duration: "40 Hours",
        feeINR: 15000,
        description: "Assemble custom ML model servers, configure container pipelines, and expose them as micro API endpoints (FastAPI/Docker).",
        rating: 4.9,
        skills: ["FastAPI Servers", "Model Ship/Serve", "Dockerize Models", "Monitoring Inputs"],
        level: "Advanced"
      }
    ]
  },
  {
    id: "gen-ai-agents",
    name: "Generative AI & Agentic AI",
    description: "Design advanced conversational interfaces, custom LLM agents, dynamic RAG vectors, and autonomous workflow chains.",
    courses: [
      {
        title: "Prompt Engineering",
        duration: "20 Hours",
        feeINR: 6000,
        description: "Harness LLM outputs using zero-shot, few-shot, Chain-of-Thought (CoT), ReAct schema, and system instruction tuning.",
        rating: 4.8,
        skills: ["CoT Prompts", "ReAct Paradigm", "Output Structuring", "Safety Guardrails"],
        level: "Beginner"
      },
      {
        title: "RAG Applications",
        duration: "30 Hours",
        feeINR: 10000,
        description: "Implement Retrieval-Augmented Generation using vector vector store databases (Chroma, Pinecode, PGVector), embedding models, and custom chunk strategies.",
        rating: 4.8,
        skills: ["Vector DBs", "Embeddings Pipeline", "Semantic Retrieval", "Context Injectors"],
        level: "Intermediate"
      },
      {
        title: "LangChain Development",
        duration: "40 Hours",
        feeINR: 15000,
        description: "Construct interactive prompt chains, tool bindings, custom cognitive memories, and agent models with Google Gemini models.",
        rating: 4.9,
        skills: ["Prompt Templates", "Memory Schemas", "Tool Bindings", "Chain Composition"],
        level: "Intermediate"
      },
      {
        title: "LangGraph Development",
        duration: "30 Hours",
        feeINR: 15000,
        description: "Implement stateful, multi-actor cyclic agentic systems, human-in-the-loop nodes, and deterministic graph conditions.",
        rating: 4.9,
        skills: ["State Graph", "Cyclic Agents", "State Management", "Human-in-the-loop"],
        level: "Advanced"
      },
      {
        title: "AI Agents Development",
        duration: "40 Hours",
        feeINR: 18000,
        description: "Create fully autonomous software agents using tool use capabilities (function calling), self-reflection steps, and routing nodes.",
        rating: 4.9,
        skills: ["Function Calling", "Self-Correction (Critique)", "Web Searching Tools", "Execution Safety"],
        level: "Intermediate"
      },
      {
        title: "MCP (Model Context Protocol)",
        duration: "20 Hours",
        feeINR: 10000,
        description: "The new standard in connecting AI to tools & secure directories. Write servers and clients that communicate files and database tools.",
        rating: 4.8,
        skills: ["MCP Spec", "Filesystems Servers", "API Clients Schema", "Secure Tool Communication"],
        level: "Advanced"
      },
      {
        title: "AI Automation Workflows",
        duration: "30 Hours",
        feeINR: 12000,
        description: "Automate complex enterprise business logic by mapping flows out using agent patterns, orchestrators, and custom nodes.",
        rating: 4.8,
        skills: ["Enterprise Autonomy", "Orchestrator Nodes", "Error Fallbacks", "High-Volume Processing"],
        level: "Intermediate"
      },
      {
        title: "Multi-Agent Systems",
        duration: "40 Hours",
        feeINR: 18000,
        description: "Design multi-agent team simulations utilizing roles, supervisors, and channels for sophisticated collaborative problem-solving.",
        rating: 4.9,
        skills: ["Agent Roles", "Supervisor Protocols", "Asynchronous Comm", "Group Consensus"],
        level: "Advanced"
      }
    ]
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Automate deployments, handle server infrastructure systems, and configure isolated microservices container grids.",
    courses: [
      {
        title: "AWS Fundamentals",
        duration: "40 Hours",
        feeINR: 10000,
        description: "Understand core AWS services: EC2 servers, S3 storage buckets, VPC secure networks, IAM, and Lambda serverless setups.",
        rating: 4.7,
        skills: ["VPC Networks", "EC2 Instances", "Cloud Security (IAM)", "Serverless Functions"],
        level: "Beginner"
      },
      {
        title: "Docker",
        duration: "20 Hours",
        feeINR: 6000,
        description: "Containerize multi-container architectures. Write optimized Dockerfiles, manage volume states, and coordinate networks.",
        rating: 4.8,
        skills: ["Dockerfile Writing", "Compose Configurations", "Docker Daemon Space", "Layer Optimization"],
        level: "Beginner"
      },
      {
        title: "Kubernetes",
        duration: "30 Hours",
        feeINR: 10000,
        description: "Master container orchestration grids, custom Pod setups, Service deployments, Ingress routes, and ConfigMaps.",
        rating: 4.8,
        skills: ["Cluster Admin", "Kubectl CLI", "Helm Charts", "Auto-scaling Pools"],
        level: "Advanced"
      },
      {
        title: "CI/CD",
        duration: "20 Hours",
        feeINR: 6000,
        description: "Build robust test and compilation pipeline actions with GitHub Actions, secure credentials, and cloud deployment runners.",
        rating: 4.7,
        skills: ["GitHub Actions", "Build Automation", "Target Deployments", "Access Tokens"],
        level: "Intermediate"
      },
      {
        title: "DevOps Essentials",
        duration: "60 Hours",
        feeINR: 18000,
        description: "A comprehensive combined guide covering Infrastructure as Code (Terraform), Docker, CI/CD pipelines, and Prometheus alerts.",
        rating: 4.9,
        skills: ["Terraform (IaC)", "Docker Ecosystem", "CI/CD Pipelines", "Prometheus & Grafana"],
        level: "All Levels"
      }
    ]
  },
  {
    id: "software-testing",
    name: "Software Testing",
    description: "Write robust automated tests, discover code defects, and guarantee production-ready software reliability indices.",
    courses: [
      {
        title: "Manual Testing",
        duration: "30 Hours",
        feeINR: 6000,
        description: "Acquire defect lifecycles, test cases layout drafting, user-acceptance testing, and agile cycle procedures.",
        rating: 4.6,
        skills: ["Test Plan Writing", "Bug Lifecycle", "Black Box Check", "Agile Methodologies"],
        level: "Beginner"
      },
      {
        title: "Selenium Automation",
        duration: "40 Hours",
        feeINR: 10000,
        description: "Write automated browser actions with Java/Python, configure WebDrivers, locate web items, and draft Page Object Designs.",
        rating: 4.8,
        skills: ["Selenium WebDriver", "Locators & XPaths", "Page Object Model", "TestNG Framework"],
        level: "Intermediate"
      },
      {
        title: "API Testing",
        duration: "20 Hours",
        feeINR: 6000,
        description: "Audit HTTP endpoints. Send dynamic payloads, verify schema keys, and generate collections via Postman and RestAssured.",
        rating: 4.7,
        skills: ["Postman Collections", "RestAssured Actions", "JSON Assertions", "Mock Endpoints"],
        level: "Intermediate"
      },
      {
        title: "Performance Testing",
        duration: "20 Hours",
        feeINR: 6000,
        description: "Benchmark database thresholds, apply intense system loads, and trace server latencies using Apache JMeter.",
        rating: 4.7,
        skills: ["JMeter Scripts", "Load & Stress checks", "Latency Metrics", "Resource Profiles"],
        level: "Intermediate"
      }
    ]
  },
  {
    id: "enterprise-integration",
    name: "Enterprise Integration",
    description: "Unify fragmented modern SaaS systems, design robust message brokers, and manage complex system APIs.",
    courses: [
      {
        title: "MuleSoft Fundamentals",
        duration: "40 Hours",
        feeINR: 15000,
        description: "Explore AnyPoint Studio, structure API specs with RAML, configure flow connectors, and deploy localized Mule runtimes.",
        rating: 4.8,
        skills: ["Anypoint Studio", "DataWeave Math", "Mule Runtimes", "RAML Spec"],
        level: "Beginner"
      },
      {
        title: "API Development",
        duration: "30 Hours",
        feeINR: 10000,
        description: "Maintain secure REST policies, manage access limits, organize secure tokens, and set up clear developer documentation.",
        rating: 4.8,
        skills: ["Securing APIs", "OAuth Policies", "Rate Limiting", "Swagger Specifications"],
        level: "Intermediate"
      },
      {
        title: "Integration Patterns",
        duration: "20 Hours",
        feeINR: 8000,
        description: "Design service integrations using Publish/Subscribe layers, messaging queues (RabbitMQ/Kafka), and async correlation nodes.",
        rating: 4.7,
        skills: ["Messaging (AMQP)", "Kafka Clusters", "Event-Driven Arch", "Publish & Subscribe"],
        level: "Intermediate"
      },
      {
        title: "Enterprise Application Integration",
        duration: "30 Hours",
        feeINR: 12000,
        description: "Coordinate cloud resources and mainframes. Complete complex transaction rollbacks and custom secure transport bridges.",
        rating: 4.8,
        skills: ["EAI Orchestration", "Data Transformers", "Distributed Transactions", "Security Envelopes"],
        level: "Advanced"
      }
    ]
  }
];

export function getCourseByTitle(title: string): AcademyCourse | undefined {
  for (const cat of ACADEMY_CATEGORIES) {
    const course = cat.courses.find(c => c.title.toLowerCase() === title.toLowerCase());
    if (course) return course;
  }
  return undefined;
}
