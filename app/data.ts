// All site content lives here. Update this file to update the site.

export const profile = {
  name: "Ben Humphries",
  title: "Software Engineer & IT Specialist",
  email: "benscotthumphries@gmail.com",
  availability: "Based in Alaska and open to remote roles.",
  tagline:
    "I write software, run IT for a trust company, and host my own services on a homelab I'm always tinkering with.",
  typewriter: ["Software Engineer", "IT Specialist", "DevOps Engineer", "Homelabber", "Husband"],
};

export const socials = {
  github: "https://github.com/benscotthumphries",
  linkedin: "https://www.linkedin.com/in/benjamin-humphries/",
};

export const about = [
  "I'm the IT Specialist and Software Developer at Kodiak Trust Company in Alaska, where I handle everything technical: Microsoft 365 and Entra ID, a 25-extension phone system, networking, storage, and backups. I'm also building the company's internal trust administration platform in Next.js and PostgreSQL, so I get to both keep the lights on and write the software people use every day.",
  "Before that I spent two years at Northrop Grumman, starting on a DevSecOps team writing CI/CD pipelines, container images, and Ansible automation, then moving into a Software Engineer role building web tools and serving as Scrum Master.",
  "Outside of work I'm an Eagle Scout, a certified scuba diver (I once got lost at sea for over an hour on my first ocean dive), and I love spending time outdoors with my family.",
];

export const highlights = [
  { value: "3+", label: "Years shipping software" },
  { value: "Solo", label: "IT admin for a 9-person company" },
  { value: "6–8", label: "Dev team led as Scrum Master" },
];

export const skills = [
  {
    category: "IT & Infrastructure",
    items: ["Microsoft 365", "Entra ID", "SharePoint", "Windows", "Linux", "Networking", "FreePBX / VoIP", "TrueNAS", "Virtual Machines", "Backup & Recovery"],
  },
  {
    category: "Development",
    items: ["TypeScript", "React", "Next.js", "Vue", "Go", "Python", "C#", ".NET", "REST APIs", "PostgreSQL", "SQL Server"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Podman", "Ansible", "GitLab CI", "GitHub Actions", "Git", "SonarQube", "Fortify", "Nexus"],
  },
];

export type Role = {
  title: string;
  dates: string;
  bullets: string[];
};

export type Job = {
  company: string;
  location: string;
  roles: Role[];
};

export const experience: Job[] = [
  {
    company: "Kodiak Trust Company",
    location: "Eagle River, AK",
    roles: [
      {
        title: "IT Specialist & Software Developer",
        dates: "May 2025 – Present",
        bullets: [
          "Sole IT administrator for a 9-person company, managing all computers, network infrastructure, security, and end-user support.",
          "Building an internal trust administration platform in Next.js, TypeScript, and PostgreSQL, with Microsoft Entra ID single sign-on, financial data feeds from external APIs, and SharePoint document tracking.",
          "Administer Microsoft 365 and Entra ID, including user accounts, authentication, Exchange email, SharePoint, and security policies.",
          "Upgraded the FreePBX VoIP phone system serving 25 extensions to the latest major version, building and migrating to a new server.",
          "Designed and implemented a NAS storage solution and virtual machine for company backups.",
          "Maintain and update financial account data to keep client records accurate.",
        ],
      },
    ],
  },
  {
    company: "Northrop Grumman",
    location: "Roy, UT",
    roles: [
      {
        title: "Software Engineer",
        dates: "Oct 2024 – Apr 2025",
        bullets: [
          "Developed a web-based tool to automate software deployment onto the right hardware in testing labs, streamlining test workflows.",
          "Designed an interface for managing and updating a PostgreSQL database, improving data accessibility and system transparency.",
          "Served as Scrum Master for a team of 6–8 developers, facilitating ceremonies, clearing blockers, and driving consistent story completion.",
          "Mentored teammates on technologies and implementation best practices, saving management hours of weekly oversight.",
        ],
      },
      {
        title: "Associate Software Engineer",
        dates: "Jun 2023 – Oct 2024",
        bullets: [
          "Built a React and Go web application to coordinate artifact delivery and optimize testing lab workflows.",
          "Engineered secure, reusable Docker/Podman images to standardize development and deployment.",
          "Automated GitLab pipelines for building, testing, and deploying software.",
          "Wrote Ansible playbooks to streamline virtual machine setup, reducing provisioning time.",
          "Onboarded and mentored new hires.",
        ],
      },
    ],
  },
  {
    company: "BYU College of Life Sciences",
    location: "Provo, UT",
    roles: [
      {
        title: "Full-Stack Software Engineer",
        dates: "Jul 2021 – Apr 2023",
        bullets: [
          "Built a React and C# scheduling system for conference rooms and vehicles, with recurring reservations and an approval workflow.",
          "Converted a manual graduate contract process into a Vue and C# web app, improving efficiency and accuracy.",
          "Built and maintained several other college websites, plus REST APIs with ASP.NET Core and Entity Framework on MySQL.",
          "As team lead, ran code reviews and wrote user stories.",
        ],
      },
    ],
  },
  {
    company: "Partners Personnel",
    location: "Orem, UT",
    roles: [
      {
        title: "Software Engineering Intern",
        dates: "Sep 2022 – Apr 2023",
        bullets: [
          "Built a Django web app to automate payroll processing, cutting preparation time by 8 hours per cycle.",
          "Automated payroll file format conversion for consistent data processing.",
        ],
      },
    ],
  },
];

export const education = {
  school: "Brigham Young University",
  location: "Provo, UT",
  degree: "B.S. Computer Science, Software Engineering emphasis",
  minor: "Minor in Business Administration",
  dates: "2018 – 2023",
};

export const homelab = {
  intro:
    "My homelab is where I learn infrastructure by breaking it. I run my own storage, filter my own DNS, automate my house, and host AI models locally instead of sending my data to the cloud.",
  specs: [
    { label: "Storage", value: "TrueNAS" },
    { label: "DNS", value: "Pi-hole" },
    { label: "Home", value: "Home Assistant" },
    { label: "AI", value: "Local LLMs (Llama)" },
  ],
  services: [
    { name: "truenas", description: "File storage, snapshots, and backups" },
    { name: "pi-hole", description: "Network-wide ad and tracker blocking" },
    { name: "home-assistant", description: "Home automation hub for every device in the house" },
    { name: "llama", description: "Private AI: large language models running on my own hardware" },
  ],
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    name: "Trust administration platform",
    description:
      "Internal hub at Kodiak Trust for trust officers to manage trusts, with Microsoft Entra ID sign-in, automated financial data feeds from external APIs, and SharePoint document tracking.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Entra ID"],
  },
  {
    name: "Control Shift",
    description:
      "A platformer my two brothers and I built in Godot for Godot Wild Jam #89. I built the player movement and shooting mechanics.",
    tags: ["Godot", "Game jam", "Team of 3"],
    href: "https://mangofloat17.itch.io/control-shift",
    source: "https://github.com/Humphries-Games/gwj89",
  },
  {
    name: "Lab deployment tools",
    description:
      "Web tools at Northrop Grumman that coordinate artifact delivery and automate deploying software onto the right lab hardware, streamlining testing lab workflows.",
    tags: ["React", "Go", "PostgreSQL"],
  },
  {
    name: "Room & vehicle scheduler",
    description:
      "Scheduling system for BYU's College of Life Sciences: book conference rooms and vehicles, set up recurring reservations, and route requests through an approval workflow.",
    tags: ["React", "C#", "ASP.NET Core"],
  },
  {
    name: "This portfolio",
    description: "Statically exported Next.js site with an animated network background, deployed to GitHub Pages through GitHub Actions.",
    tags: ["Next.js", "Tailwind", "GitHub Actions"],
    href: "https://github.com/benscotthumphries/portfolio-ben",
  },
  {
    name: "Payroll automation",
    description: "Capstone with Partners Personnel: a Django app that automated pay card processing and saved 8 hours every payroll cycle.",
    tags: ["Django", "Python", "Automation"],
  },
];
