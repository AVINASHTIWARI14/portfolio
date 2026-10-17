// All portfolio content lives here. Edit this file to update the site.
// Only verified details are included — nothing invented.

export const profile = {
  name: "Avinash Tiwari",
  role: "CSE (AI/ML) student · Full-stack & AI builder",
  github: "https://github.com/AVINASHTIWARI14",
  // Add a verified public email to enable mailto + copy. Leave empty to hide.
  email: "",
  // Add a LinkedIn URL only if verified.
  linkedin: "",
  // Add a path like "/resume.pdf" (in /public) to show the resume button.
  resume: "",
};

export const navItems = [
  { id: "work", label: "Projects" },
  { id: "dsa", label: "DSA Journey" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export type ProjectTag = "AI" | "Full-stack" | "Frontend";

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  features: string[];
  stack: string[];
  tags: ProjectTag[];
  demo?: string;
  repo?: string;
  size: "lg" | "sm";
};

export const projects: Project[] = [
  {
    slug: "juribrief",
    title: "JURIbrief",
    kicker: "AI · Legal tech",
    summary:
      "An AI assistant for legal documents — it reads contracts, flags risky clauses, and helps you understand what you're signing.",
    features: ["Document analysis", "Risk detection", "Compare documents", "Document generation", "Legal chat"],
    stack: ["React", "TypeScript", "AI / NLP"],
    tags: ["AI", "Full-stack"],
    demo: "https://legal-ease-ai-sand.vercel.app/",
    repo: "https://github.com/AVINASHTIWARI14/JURIbrief",
    size: "lg",
  },
  {
    slug: "supplai",
    title: "SupplAI",
    kicker: "AI · Supply chain",
    summary:
      "AI-powered supply-chain risk monitoring — surfacing disruptions and weak links before they turn into delays.",
    features: ["Risk monitoring", "Signal aggregation", "Alerting"],
    stack: ["Python", "Machine learning"],
    tags: ["AI", "Full-stack"],
    size: "lg",
  },
  {
    slug: "portfolio",
    title: "This portfolio",
    kicker: "Frontend · Craft",
    summary:
      "The site you're on — an editorial, motion-driven portfolio built with React, TypeScript, Tailwind and Framer Motion.",
    features: ["Reduced-motion aware", "Theme toggle", "Fully responsive"],
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    tags: ["Frontend"],
    repo: "https://github.com/AVINASHTIWARI14/portfolio",
    size: "sm",
  },
];

export const dsaRepo = "https://github.com/AVINASHTIWARI14/DSA";
export const leetcode = "https://leetcode.com/";

export type DsaTopic = {
  id: string;
  label: string;
  focus: number; // personal revision emphasis 1–5 (self-assessed, not a stat)
  note: string;
  topics: string[];
  snippet: string;
};

export const dsaTopics: DsaTopic[] = [
  {
    id: "arrays",
    label: "Arrays",
    focus: 5,
    note: "Two pointers & sliding window first. Ask: can I shrink the window?",
    topics: ["Two pointers", "Sliding window", "Prefix sums", "Kadane's", "Hashing"],
    snippet: `int maxSub(vector<int>& a) {
  int best = a[0], cur = 0;
  for (int x : a) {
    cur = max(x, cur + x);
    best = max(best, cur);
  }
  return best;
}`,
  },
  {
    id: "binary-search",
    label: "Binary Search",
    focus: 4,
    note: "Binary search on the answer: find the monotonic predicate.",
    topics: ["Lower/upper bound", "Search on answer", "Rotated arrays", "Peak finding"],
    snippet: `int lo = 0, hi = n - 1;
while (lo < hi) {
  int mid = lo + (hi - lo) / 2;
  if (ok(mid)) hi = mid;
  else lo = mid + 1;
}
return lo;`,
  },
  {
    id: "trees",
    label: "Trees",
    focus: 4,
    note: "Most tree problems = what does each subtree return to its parent?",
    topics: ["DFS traversals", "Level order", "LCA", "BST validation", "Diameter"],
    snippet: `int height(TreeNode* r) {
  if (!r) return 0;
  int l = height(r->left);
  int h = height(r->right);
  ans = max(ans, l + h);
  return 1 + max(l, h);
}`,
  },
  {
    id: "graphs",
    label: "Graphs",
    focus: 3,
    note: "Grid = graph. Draw it. BFS for shortest unweighted path.",
    topics: ["BFS / DFS", "Topological sort", "Dijkstra", "Union-Find", "Cycle detection"],
    snippet: `queue<int> q; q.push(src);
dist[src] = 0;
while (!q.empty()) {
  int u = q.front(); q.pop();
  for (int v : adj[u])
    if (dist[v] < 0)
      dist[v] = dist[u] + 1, q.push(v);
}`,
  },
  {
    id: "dp",
    label: "DP",
    focus: 3,
    note: "State → transition → base case. Memo first, then tabulate.",
    topics: ["1D / 2D DP", "Knapsack", "LIS / LCS", "DP on grids", "Interval DP"],
    snippet: `vector<int> dp(n + 1, 0);
dp[1] = 1;
for (int i = 2; i <= n; i++)
  dp[i] = dp[i - 1] + dp[i - 2];
return dp[n];`,
  },
];

export const skillGroups = [
  { title: "Languages", items: ["C++", "Python", "TypeScript", "JavaScript", "SQL"] },
  { title: "Frontend", items: ["React", "Tailwind CSS", "shadcn/ui", "Framer Motion"] },
  { title: "Backend", items: ["FastAPI", "Node.js", "Express"] },
  { title: "AI / ML", items: ["scikit-learn", "spaCy", "NLP pipelines"] },
  { title: "Data", items: ["PostgreSQL", "Supabase", "MongoDB"] },
  { title: "Tools", items: ["Git", "GitHub", "Docker", "VS Code"] },
];

export const timeline = [
  {
    period: "Ongoing",
    title: "B.Tech — Computer Science & Engineering (AI/ML)",
    place: "KCC Institute of Technology & Management · affiliated to AKTU",
    body: "Coursework across algorithms, systems and machine learning, alongside building projects.",
  },
  {
    period: "Ongoing",
    title: "Competitive programming in C++",
    place: "LeetCode · personal DSA repo",
    body: "300+ LeetCode problems solved, with revision notes organised by pattern.",
  },
  {
    period: "Projects",
    title: "Building AI products",
    place: "JURIbrief · SupplAI",
    body: "Shipping end-to-end apps that combine NLP / ML with clean, usable interfaces.",
  },
];