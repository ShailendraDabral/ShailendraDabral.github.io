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
  affiliation: "S.A.R Lab(Satellite and Ariel Remote Sensing), Indian Institute of Technology Indore",
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
    { label: "arXiv", icon: "fa-solid fa-book-open", url: "https://arxiv.org/abs/2605.26619" },
    { label: "ORCID", icon: "fa-brands fa-orcid", url: "https://orcid.org/0009-0007-2475-7349" },
    { label: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/ShailendraDabral" },
    { label: "Twitter / X", icon: "fa-brands fa-x-twitter", url: "#" },
    { label: "LinkedIn", icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/shailendra-dabral/" },
    { label: "Email", icon: "fa-solid fa-envelope", url: "mailto:ms2404121005@alum.iiti.ac.in" },
    { label: "Curriculum Vitae", icon: "fa-solid fa-file-pdf", url: "assets/pdf/cv-resume.pdf", isCv: true }
  ],

  // ---------------- Research Focus Areas ----------------
  projects: [
    {
      title: "Generative AI for Chaos",
      icon: "fa-solid fa-robot",
      description: "Using Diffusion model for generating the trajectory of five theorectical chaotic model with 10% observation including introduction of noise to resemble real world condition." ,
      tags: ["Lorenz-63", "Rabinovich", "Hyper-5d", "Rossler attractor", "Lorenz-96"],
      url: "https://github.com/ShailendraDabral/Scientific-machine-learning/tree/main/PIDM-DP-Chaos-Lorenz"
    },
    {
      title: " State-of-the-art benchmarking in Change detection ",
      icon: "fa-solid fa-network-wired",
      description: "Developing Physics inspired architecture which can compete with current state-of-the-art models based on Transformers tested on multiple public change detection benchmark dataset.",
      tags: ["Symplectic Integrator", "Hamiltonian", "Transformers", "G-Flops"],
      url: "https://github.com/ShailendraDabral/Remote-Sensing/tree/main/GeoHAM"
    },
    {
      title: "Change Detection for Infrastructure Monitering",
      icon: "fa-solid fa-brain",
      description: "Developing Hybrid ML models and workflow for rare class change detection in Infrastructure monitering using Planetscope satellite imagery  .",
      tags: ["Rare Class changes", "Planetscope Satellite Images", "Hybrid Models", "Spectral Indices"]
    }
  ],

  // ---------------- News & Announcements ----------------
  // Tag types: 'paper', 'talk', 'award', 'service'
  news: [
    {
      date: "Mar 2026",
      tag: "Paper submission in AIP Chaos",
      tagLabel: "Under Review",
      content: "Title of the Paper: </strong>Amortised Chaotic System Identification and State Reconstruction viaPhysics-Informed Diffusion with Dormand-Prince Integration."
    }
   
  ],

  // ---------------- Publications & Preprints ----------------
  // type: 'conference' | 'journal' | 'preprint'  (lowercase — used by the filter buttons)
  // LaTeX equations in title/abstract are rendered via KaTeX: e.g. $O(N \log N)$ or $\mathcal{L}_{reg}$
  publications: [
    {
      id: "dabral2026geoham",
      title: "GeoHam: Symplectic-Regularized Feature Evolution for Efficient Remote Sensing Change Detection",
      authors: ["Shailendra Dabral", "Unmesh Khati", "Yash Raj"],
      venue: "IEEE Geoscience and Remote Sensing Letters (GRSL), vol. 23, pp. 6019005",
      year: 2026,
      type: "journal",
      badge: null,
      links: {
        doi: "https://doi.org/10.1109/LGRS.2026.3728830",
        pdf: "#",
        arxiv: "#",
        code: "#"
      },
      // TODO: replace with your paper's real abstract text.
      abstract: "GeoHam is a geometric-regularization framework inspired by Hamiltonian mechanics for remote-sensing change detection (CD). It replaces conventional feature subtraction with multiscale Störmer–Verlet symplectic integration applied to learned feature dynamics. Unlike physics-informed neural networks (PINNs) that enforce PDE residuals from physical laws, GeoHam exploits the mathematical structure of Hamiltonian mechanics as an inductive bias on bitemporal feature trajectories: the symplectic two-form is preserved at every leapfrog step, acting as a geometric regularizer that keeps distinct temporal states distinguishable. Three feature pyramid network (FPN) levels ( 64×64 , 32×32 , 16×16 ) share a single integrator projected to a common 64-D space; a raw absolute-difference skip at 128×128 preserves boundary detail. Integration steps per scale are selected by Bayesian hyperparameter optimization. GeoHam achieves F1 of 91.20%, 95.89%, and 79.56% on LEVIR-CD, CDD, and CLCD, respectively, with only 7.53M parameters and 4.72 GFLOPs, 5.3× fewer GFLOPs than StarCD-Net without any transformer, state-space model, or cross-attention block.",
      bibtex: `@ARTICLE{11672711,
  author={Dabral, Shailendra and Khati, Unmesh and Raj, Yash},
  journal={IEEE Geoscience and Remote Sensing Letters},
  title={GeoHam: Symplectic-Regularized Feature Evolution for Efficient Remote Sensing Change Detection},
  year={2026},
  volume={23},
  number={},
  pages={6019005-6019005},
  keywords={Signal detection;Remote sensing;Learning (artificial intelligence);Modeling;Training;Dies;Geoscience and remote sensing;Change detection (CD);efficient deep learning;feature pyramid network (FPN);Hamiltonian mechanics;remote sensing;symplectic integration},
  doi={10.1109/LGRS.2026.3728830}}`
    },
    {
      id: "dabral2026pidmdpphysicsinformeddiffusiondormandprince",
      title: "PIDM-DP: Physics-Informed Diffusion with Dormand-Prince Integration for Chaotic System Identification and State Reconstruction across Multiple Dynamical Regimes",
      authors: ["Shailendra Dabral"],
      venue: "arXiv preprint arXiv:2605.26619",
      year: 2026,
      type: "preprint",
      badge: "Preprint",
      links: {
        pdf: "#",
        arxiv: "https://arxiv.org/abs/2605.26619",
        code: "#",
        project: "#",
        slides: "#"
      },
      abstract: "Reconstructing continuous state trajectories of chaotic dynamical systems from sparse, noisy observations remains a fundamental open problem in nonlinear science. We introduce the Physics-Informed Diffusion Model with Dormand-Prince Integration (PIDM-DP), which embeds a fully differentiable 5th-order Dormand-Prince (DP-RK45) ODE integrator directly into the reverse sampling loop of a Denoising Diffusion Probabilistic Model (DDPM). At each denoising step, physics residuals are back-propagated via automatic differentiation, constraining every generated trajectory to satisfy the system's governing equations to 5th-order accuracy. A linear-scheduled guidance mechanism that ramps the physics weight from zero at high noise levels to its full value near the clean-data limit prevents the gradient explosions that cause naive physics-informed approaches to fail on stiff systems with Jacobian eigenvalues of order O(10^3). Evaluated across five benchmark systems of increasing complexity — 3D Lorenz, 3D Rössler, 5D Hyperchaotic, 20D Lorenz-96, and the stiff 3D Rabinovich-Fabrikant — at 10% observation density with additive Gaussian noise (σ=0.05), PIDM-DP achieves reconstruction RMSE improvements of up to 15.4× over an unconstrained diffusion baseline and decisively outperforms the Ensemble Kalman Filter on stiff systems where ensemble covariance collapses. On the Rabinovich-Fabrikant out-of-distribution benchmark, PIDM-DP attains RMSE 0.1097±0.0269 versus 0.9443±0.5288 (unconstrained diffusion, 8.6× worse) and 0.3561±0.3040 (EnKF, 3.2× worse), with p<0.001 in paired Wilcoxon tests (N=30). Topological validation via the Rosenstein Lyapunov estimator confirms that PIDM-DP preserves the chaotic invariant measure.",
      bibtex: `@misc{dabral2026pidmdpphysicsinformeddiffusiondormandprince,
  title={PIDM-DP: Physics-Informed Diffusion with Dormand-Prince Integration for Chaotic System Identification and State Reconstruction across Multiple Dynamical Regimes},
  author={Shailendra Dabral},
  year={2026},
  eprint={2605.26619},
  archivePrefix={arXiv},
  primaryClass={cs.LG},
  url={https://arxiv.org/abs/2605.26619},
}`
    },

    /* ---------------------------------------------------------------
       SAMPLE / PLACEHOLDER ENTRIES BELOW
    --------------------------------------------------------------- */
    /*{
      id: "#",
      title: "#",
      authors: "#",
      venue: "#",
      year: "#",
      type: "#",
      badge: "#",
      links: {
        pdf: "#",
        arxiv: "#",
        code: "#"
      },
      abstract: "#",
      bibtex: `#`
  
    }*/ 
    
    
    /* ------------------- end of sample entries ------------------- */
  ],

  // ---------------- Experience & Education ----------------
  experience: [

    {
      period: "Summer 2025 — 2026",
      role: "Research Student",
      org: "Indian Institute of Technology Indore",
      desc: "Worked as research student in SAR lab (Satellite and Remote Sensing Lab)."
    },
    {
      period: "2024 — 2025",
      role: "Teaching Assistant",
      org: "Indian Institute of Technology Indore",
      desc: "Taught Electrodynamics to first year Btech students and conduct labs and experiment to first year Masters and Phd students under Remote Sensing and Earth Observation Course."
    },
    {
      period: "2024 — 2025",
      role: "Gym Co-ordinator",
      org: "Indian Institute of Technology Indore",
      desc: "Taken responsibity of enhancing the gym services and motivative students to look after their physical and mental health "
    },
    {
      period: "2021 — 2022",
      role: "Teacher",
      org: "Saraswati Madhi cololony chauras",
      desc: "Worked as a teacher of Physics for the intermediate class student(12th standard)."
    }
  ],

  education: [
    {
      period: "2024 — 2026",
      degree: "MS-Research in Space Science and Engineering",
      org: "Indian Institute of Technology Indore",
      desc: "Thesis: <em>Advance techniques in Remote Sensing Change Detection (Developed Model for benchmarking in domain of Change Detection and also worked on developing Multiple Hybrid machine learning models for infrastructure monitoring)</em>.<br>Advisor: Associate Prof. Unmesh Khati."
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
      desc: "Delivered lectures on Electric and Magnetic Potentials, Dielectrics, Maxwell's equations etc."
    },
    {
      code: "AA 607",
      semester: "Autumn 2025",
      title: "Remote Sensing Earth Observation",
      role: "Teaching Assistant",
      desc: "Managed course projects and exams, led lab classes each week throughout the course."
    }
  ],

  // ---------------- Academic Service & Honors ----------------
  service: {
    /*reviewing: [
      "Conference on Neural Information Processing Systems (NeurIPS) — 2023, 2024, 2025, 2026",
      "International Conference on Machine Learning (ICML) — 2024, 2025, 2026",
      "International Conference on Learning Representations (ICLR) — 2024, 2025, 2026",
      "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) — 2023, 2024",
      "Journal of Machine Learning Research (JMLR) — Reviewer",
      "IEEE Transactions on Robotics (T-RO) — Reviewer"
    ],*/
    honors: [
      "First Runner up in IEEE science day hackathon — 2025",

    ]
  }
};
