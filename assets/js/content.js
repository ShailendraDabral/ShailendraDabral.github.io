/**
 * ===================================================================
 * ACADEMIC PROFILE DATA CONFIGURATION
 * ===================================================================
 * Edit this file to update your personal details, publications,
 * research interests, news, teaching, and academic service.
 * Everything is automatically rendered into the website!
 */

const ACADEMIC_PROFILE = {
  // ---------------- Basic Info ----------------
  name: "Shailendra Dabral",
  initials: "SD",
  role: "MS Research student in Astronomy Astrophysics and Space Engineering",
  affiliation: "S.A.R Lab, Indian Institute of Technology",
  affiliationUrl: "https://iiti.ac.in",
  status: "Freelancer",
  avatar: "assets/img/avatar-placeholder.svg",

  // ---------------- Bio & Research Statement ----------------
  // HTML or string paragraphs are supported
  bio: [
    "I am currently freelancer working on the project of Scientific Machine learning, previous research student in <strong>S.A.R Lab (IIT Indore)</strong>, working at the intersection of <em>Physics</em>, <em>Machine Learning</em>, and <em> Applied Mathematics</em>. Prior to IIT Indore, I completed my Masters in Physics at Hemwati Nandan Bahuguna University.",
    "My long-term research mission is to develop adaptive, sample-efficient reasoning systems that can plan over long horizons, collaborate with humans, and continually generalize to open-world physical and digital environments without catastrophic forgetting."
  ],

  // ---------------- Academic & Social Links ----------------
  // Set url to "#" or null to omit any link
  links: [
    { label: "Google Scholar", icon: "fa-solid fa-graduation-cap", url: "#" },
    { label: "arXiv", icon: "fa-solid fa-book-open", url: "#" },
    { label: "ORCID", icon: "fa-brands fa-orcid", url: "https://orcid.org/0009-0007-2475-7349" },
    { label: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/ShailendraDabral" },
    { label: "Twitter / X", icon: "fa-brands fa-x-twitter", url: "https://twitter.com" },
    { label: "LinkedIn", icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/shailendra-dabral/" },
    { label: "Email", icon: "fa-solid fa-envelope", url: "mailto:ms2404121005@alum.iiti.ac.in" },
    { label: "Curriculum Vitae", icon: "fa-solid fa-file-pdf", url: "assets/pdf/cv-placeholder.pdf", isCv: true }
  ],

  // ---------------- Research Focus Areas ----------------
  researchFocus: [
    {
      title: "Foundation Models for Embodied AI",
      icon: "fa-solid fa-robot",
      description: "Investigating how vision-language-action (VLA) models generalize spatial reasoning and tool use in complex robotic manipulation tasks.",
      tags: ["VLA Models", "Robotics", "Generalization", "Affordance Learning"]
    },
    {
      title: "Multi-Agent Coordination & Theory of Mind",
      icon: "fa-solid fa-network-wired",
      description: "Developing scalable communication protocols and recursive belief modeling for autonomous multi-agent swarms and human-agent teams.",
      tags: ["MARL", "Communication Protocols", "Game Theory", "Ad-Hoc Teamwork"]
    },
    {
      title: "Sample-Efficient Self-Supervised Learning",
      icon: "fa-solid fa-brain",
      description: "Bridging non-contrastive representation learning with causal state abstractions for robust policy learning under distribution shifts.",
      tags: ["Self-Supervised", "Causal Abstractions", "Out-of-Distribution", "Representation"]
    }
  ],

  // ---------------- News & Announcements ----------------
  // Tag types: 'paper', 'talk', 'award', 'service'
  news: [
    {
      date: "Oct 2026",
      tag: "award",
      tagLabel: "Award",
      content: "Received the <strong>Outstanding Reviewer Award</strong> at NeurIPS 2026."
    },
    {
      date: "Sep 2026",
      tag: "paper",
      tagLabel: "Paper",
      content: "Our paper on <em>Autonomous Tool-Use via Latent Skill Composition</em> was accepted to <strong>NeurIPS 2026 (Oral)</strong>!"
    },
    {
      date: "Jul 2026",
      tag: "talk",
      tagLabel: "Talk",
      content: "Invited speaker at the ICML Workshop on Next-Generation Multi-Agent Systems in Vienna."
    },
    {
      date: "May 2026",
      tag: "paper",
      tagLabel: "Paper",
      content: "Paper on <em>Sample-Efficient Foundation Policies</em> accepted to <strong>ICML 2026</strong>."
    },
    {
      date: "Jan 2026",
      tag: "service",
      tagLabel: "Service",
      content: "Serving as Workshop Co-Chair for the 2026 Symposium on Embodied Intelligence."
    }
  ],

  // ---------------- Publications & Preprints ----------------
  // type: 'conference' | 'journal' | 'preprint'
  // LaTeX equations in title/abstract are rendered via KaTeX: e.g. $O(N \log N)$ or $\mathcal{L}_{reg}$
  publications: [
    {
      id: "dabral2026pidmdpphysicsinformeddiffusiondormandprince",
      title: "PIDM-DP: Physics-Informed Diffusion with Dormand-Prince Integration for Chaotic System Identification and State Reconstruction across Multiple Dynamical Regimes",
      authors: ["Shailendra Dabral"],
      venue: "#",
      year: 2026,
      type: "Preprint",
      badge: "#",
      links: {
        pdf: "#",
        arxiv: "https://arxiv.org/abs/2605.26619",
        code: "#",
        project: "#",
        slides: "#"
      },
      abstract: "Reconstructing continuous state trajectories of chaotic dynamical systems from sparse, noisy observations remains a fundamental open problem in nonlinear science. We introduce the Physics-Informed Diffusion Model with Dormand-Prince Integration (PIDM-DP), which embeds a fully differentiable 5th-order Dormand-Prince (DP-RK45) ODE integrator directly into the reverse sampling loop of a Denoising Diffusion Probabilistic Model (DDPM). At each denoising step, physics residuals are back-propagated via automatic differentiation, constraining every generated trajectory to satisfy the system's governing equations to 5th-order accuracy. A linear-scheduled guidance mechanism that ramps the physics weight from zero at high noise levels to its full value near the clean-data limit prevents the gradient explosions that cause naive physics-informed approaches to fail on stiff systems with Jacobian eigenvalues of order O(103). Evaluated across five benchmark systems of increasing complexity 3D Lorenz, 3D Rössler, 5D Hyperchaotic, 20D Lorenz-96, and the stiff 3D Rabinovich-Fabrikant at 10% observation density with additive Gaussian noise (σ=0.05), PIDM-DP achieves reconstruction RMSE improvements of up to 15.4× over an unconstrained diffusion baseline and decisively outperforms the Ensemble Kalman Filter on stiff systems where ensemble covariance collapses. On the Rabinovich-Fabrikant out-of-distribution benchmark, PIDM-DP attains RMSE 0.1097±0.0269 versus 0.9443±0.5288 (unconstrained diffusion, 8.6× worse) and 0.3561±0.3040 (EnKF, 3.2× worse), with p<0.001 in paired Wilcoxon tests (N=30). Topological validation via the Rosenstein Lyapunov estimator confirms that PIDM-DP preserves the chaotic invariant measure.",
      bibtex: `@misc{dabral2026pidmdpphysicsinformeddiffusiondormandprince,
      title={PIDM-DP: Physics-Informed Diffusion with Dormand-Prince Integration for Chaotic System Identification and State Reconstruction across Multiple Dynamical Regimes}, 
      author={Shailendra Dabral},
      year={2026},
      eprint={2605.26619},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2605.26619}, 
}
    },
    {
      id: "vance2026sample",
      title: "Sample-Efficient Policy Generalization under Non-Stationary Dynamics",
      authors: ["Alex Vance", "David K. Miller", "Sarah Jenkins"],
      venue: "International Conference on Machine Learning (ICML)",
      year: 2026,
      type: "conference",
      badge: "Spotlight",
      links: {
        pdf: "#",
        arxiv: "https://arxiv.org/abs/2605.67890",
        code: "https://github.com/example/sample-efficient-dynamics"
      },
      abstract: "Adapting reinforcement learning policies under sudden environment phase shifts remains a critical challenge. We propose a recursive Bayesian meta-objective that optimizes transition bounds $\\min_\\theta \\mathbb{E}_{\\tau \\sim \\mathcal{D}}[\\mathcal{L}_{adapt}(\\theta)]$, achieving rapid asymptotic stability in under 50 interactions.",
      bibtex: `@inproceedings{vance2026sample,
  title     = {Sample-Efficient Policy Generalization under Non-Stationary Dynamics},
  author    = {Vance, Alex and Miller, David K. and Jenkins, Sarah},
  booktitle = {International Conference on Machine Learning (ICML)},
  year      = {2026}
}`
    },
    {
      id: "vance2025emergent",
      title: "Emergent Communication Protocols in Cooperative Multi-Agent Reinforcement Learning",
      authors: ["Elena Rostova", "Alex Vance", "Marcus Chen"],
      venue: "Journal of Artificial Intelligence Research (JAIR)",
      year: 2025,
      type: "journal",
      badge: null,
      links: {
        pdf: "#",
        arxiv: "https://arxiv.org/abs/2510.11223"
      },
      abstract: "We analyze the linguistic topology of discrete symbolic communication in multi-agent reinforcement learning. Through information-theoretic bounds, we show that agents converge to compositional protocols that resist noise channel perturbations up to signal-to-noise ratio $\\text{SNR} \\approx -6\\text{dB}$.",
      bibtex: `@article{vance2025emergent,
  title   = {Emergent Communication Protocols in Cooperative Multi-Agent Reinforcement Learning},
  author  = {Rostova, Elena and Vance, Alex and Chen, Marcus},
  journal = {Journal of Artificial Intelligence Research (JAIR)},
  volume  = {74},
  pages   = {101--145},
  year    = {2025}
}`
    },
    {
      id: "vance2025causal",
      title: "Causal World Models for Robust Robotic Dexterity",
      authors: ["Alex Vance", "Sarah Jenkins"],
      venue: "IEEE Transactions on Robotics (T-RO)",
      year: 2025,
      type: "journal",
      badge: "Featured Article",
      links: {
        pdf: "#",
        project: "https://example.org/projects/causal-robotics"
      },
      abstract: "Standard predictive models often hallucinate contact dynamics during occlusions. We propose a structural causal formulation that enforces conservation of momentum constraints $\\sum \\mathbf{F}_{ext} = m \\mathbf{a}$, drastically improving dexterity with compliant end-effectors.",
      bibtex: `@article{vance2025causal,
  title   = {Causal World Models for Robust Robotic Dexterity},
  author  = {Vance, Alex and Jenkins, Sarah},
  journal = {IEEE Transactions on Robotics (T-RO)},
  year    = {2025}
}`
    },
    {
      id: "vance2024recursive",
      title: "Recursive Multi-Agent Theory of Mind for Zero-Shot Ad-Hoc Teamwork",
      authors: ["Alex Vance", "Marcus Chen", "Elena Rostova", "Robert Thorne"],
      venue: "arXiv preprint arXiv:2412.04567",
      year: 2024,
      type: "preprint",
      badge: "Preprint",
      links: {
        arxiv: "https://arxiv.org/abs/2412.04567",
        code: "https://github.com/example/adhoc-teamwork"
      },
      abstract: "When collaborating with unknown teammates without prior coordination, agents must infer partner intentions in real time. We present Level-$k$ Intention Filtering (LIF), proving zero-shot coordination Pareto-optimality under mild bounded-rationality assumptions.",
      bibtex: `@article{vance2024recursive,
  title   = {Recursive Multi-Agent Theory of Mind for Zero-Shot Ad-Hoc Teamwork},
  author  = {Vance, Alex and Chen, Marcus and Rostova, Elena and Thorne, Robert},
  journal = {arXiv preprint arXiv:2412.04567},
  year    = {2024}
}`
    }
  ],

  // ---------------- Experience & Education ----------------
  experience: [
    {
      period: "2024 — Present",
      role: "Postdoctoral Research Fellow",
      org: "Stanford University, SVL Lab",
      desc: "Investigating foundation models for robotics and long-horizon decision making with Prof. Sarah Jenkins."
    },
    {
      period: "Summer 2023",
      role: "Research Scientist Intern",
      org: "Google DeepMind",
      desc: "Developed hierarchical reinforcement learning algorithms for multi-agent simulation environments."
    },
    {
      period: "Summer 2022",
      role: "AI Research Intern",
      org: "Meta FAIR (Fundamental AI Research)",
      desc: "Worked on self-supervised visual representation learning and sample efficiency in embodied benchmarks."
    }
  ],

  education: [
    {
      period: "2024 — 2026",
      degree: "MS-Research in Space Science and Engineering",
      org: "Indian Institute of Technology Indore",
      desc: "Thesis: <em>Advance techniques in Remote Sensing Change Detection(Developed Model for benchmarking in domain of Change detection and also worked on developing Multiple Hybrid machine learning models for infrastructure monitoring )</em>.<br>Advisor: Associate Prof. Unmesh Khati."
    },
    { 
      period: "2018 - 2020",
      degree: "Masters in Physical Science",
      org: "Hemwati Nandan Bahuguna Central University"
     },
    {
      period: "2015 — 2018",
      degree: "Bachelors in Mathematics, Physics and Computer Science",
      org: "Hemwati Nandan Bahuguna Central University",
      desc: "Gained experience in Pure mathematics, Physics and Computer Science."
    }
  ],

  // ---------------- Teaching & Mentoring ----------------
  teaching: [
    {
      code: "PH 107",
      semester: "Spring 2025",
      title: "Electromagnetism",
      role: "Teaching Assistant",
      desc: "Delivered lectures on Electric and Magnetic Potentials, Dielectrics, Maxwells equations etc."
    },
    {
      code: "AA 607",
      semester: "Autumn 2025",
      title: "Remote Sensing Earth Observation",
      role: "Teaching Assistant",
      desc: "Managed course projects and exams, led lab classes each week throughout the course ."
    },
    {

    }
  ],

  // ---------------- Academic Service & Honors ----------------
  service: {
    reviewing: [
      "Conference on Neural Information Processing Systems (NeurIPS) — 2023, 2024, 2025, 2026",
      "International Conference on Machine Learning (ICML) — 2024, 2025, 2026",
      "International Conference on Learning Representations (ICLR) — 2024, 2025, 2026",
      "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) — 2023, 2024",
      "Journal of Machine Learning Research (JMLR) — Reviewer",
      "IEEE Transactions on Robotics (T-RO) — Reviewer"
    ],
    honors: [
      "NeurIPS Outstanding Reviewer Award (Top 5%) — 2026",
      "ICLR Spotlight Paper Award — 2026",
      "Carnegie Mellon Presidential Graduate Fellowship — 2021",
      "UW Department of Computer Science Outstanding Senior Thesis Award — 2019",
      "Dean's Honor List (All Quarters), University of Washington — 2015 — 2019"
    ]
  }
};
