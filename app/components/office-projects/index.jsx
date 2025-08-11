import { FaPython, FaDocker, FaHtml5, FaCss3Alt, FaBitbucket, FaGithub, FaSteam, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiDjango, SiMysql, SiRedis, SiFastapi, SiJavascript, SiNewrelic, SiAmazonec2, SiAwsfargate, SiAwslambda, SiAmazons3, SiPostgresql, SiGraphql, SiNginx, SiNextdotjs, SiDiscord, SiHubspot, SiJfrogpipelines, SiGithubactions, SiMixpanel, SiAlgolia } from 'react-icons/si';
import GlowCard from '../helper/glow-card';
import SectionTitle from '../helper/section-title';
import OfficeProjectCard from './office-project-card';

const officeProjects = [
  {
    id: 1,
    name: "GaaS Games Tracking Service (GGTS)",
    description: "Designed and deployed a scheduled tracking system for five major cloud gaming platforms, using AWS EventBridge to trigger daily scraping, change detection, and final reporting tasks. Ensured a 99.9% successful execution rate for all scheduled jobs.",
    duration: "2025 Q1",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "AWS Lambda", icon: SiAwslambda },
      { name: "AWS S3", icon: SiAmazons3 },
      { name: "AWS Fargate", icon: SiAwsfargate },
      { name: "Docker", icon: FaDocker },
      { name: "Github", icon: FaGithub },
      { name: "Github Actions", icon: SiGithubactions },
    ],
    contributions: [
      "Developed AWS EventBridge + Lambda workflow for daily scraping, delta comparison, and automated email reports",
      "Stored structured data in S3 for historical tracking and automated monitoring, reducing manual checks by 95%",
      "Containerized deployments using Docker and AWS Fargate for Python 3.13+ environments",
      "Ensured 99.9% successful execution rate for all scheduled jobs"
    ]
  },
  {
    id: 2,
    name: "Game Matching Tool (GMT) v3.0",
    description: "Built a high-performance search and matching system for large-scale game datasets with advanced indexing and monitoring capabilities.",
    duration: "2024 Q4 - 2025 Q1",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Algolia", icon: SiAlgolia },
      { name: "MySQL", icon: SiMysql },
      { name: "GraphQL", icon: SiGraphql },
      { name: "AWS Lambda", icon: SiAwslambda },
      { name: "AWS S3", icon: SiAmazons3 },
      { name: "AWS Fargate", icon: SiAwsfargate },
      { name: "Docker", icon: FaDocker },
      { name: "Github", icon: FaGithub },
      { name: "Github Actions", icon: SiGithubactions },
      { name: "New Relic", icon: SiNewrelic },
    ],
    contributions: [
      "Redesigned system in version 3 to improve accuracy, integrating internal metadata API with Algolia search index",
      "Automated daily EventBridge jobs for delta updates, new game additions, and cleanup of deleted titles in Algolia",
      "Implemented async batch processing in FastAPI to handle 1000+ records/min and maintain <50ms query times",
      "Built high-performance search and matching system for large-scale game datasets"
    ]
  },
  {
    id: 3,
    name: "Game Ratings Service (GRT)",
    description: "Created a centralized platform for managing and displaying multi-platform game ratings, replacing manual spreadsheet processes.",
    duration: "2024 Q3 - 2025 Q1",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "React", icon: FaReact },
      { name: "MySQL", icon: SiMysql },
      { name: "GraphQL", icon: SiGraphql },
      { name: "AWS Fargate", icon: SiAwsfargate },
      { name: "Docker", icon: FaDocker },
      { name: "Github", icon: FaGithub },
      { name: "Github Actions", icon: SiGithubactions },
    ],
    contributions: [
      "Integrated OpenCritic API for automated critic rating collection with real-time updates",
      "Implemented validation rules to maintain 100% data integrity across rating distributions",
      "Built a responsive React frontend with light/dark theme support and mobile compatibility",
      "Created centralized platform for managing multi-platform game ratings"
    ]
  },
  {
    id: 4,
    name: "Data Quest Hub (DQH) Client Delivery System",
    description: "Automated data collection, processing, and delivery workflows for custom client packages. Built scalable, fault-tolerant systems for large-scale operations.",
    duration: "2024 Q3",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "AWS S3", icon: SiAmazons3 },
      { name: "AWS Lambda", icon: SiAwslambda },
      { name: "AWS Fargate", icon: SiAwsfargate },
      { name: "Docker", icon: FaDocker },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Github", icon: FaGithub },
      { name: "Github Actions", icon: SiGithubactions },
      { name: "Newrelic", icon: SiNewrelic },
    ],
    contributions: [
      "Developed backend modules for data processing and storage using AWS S3 and Dockerized components",
      "Built a package generator for logging metadata and delivering structured data to clients",
      "Implemented exception handling and logging for system reliability",
      "Delivered features on time following Agile Scrum practices",
      "Automated data collection, processing, and package generation using Python scripts"
    ]
  },
  {
    id: 5,
    name: "Steam Prices Service Backend (Internal Tool)",
    description: "Developed a backend service to fetch and store Steam SKU price details from internal and external APIs, ensuring seamless data flow into a PostgreSQL database.",
    duration: "2024 Q4 - 2025 Q1",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "AWS S3", icon: SiAmazons3 },
      { name: "AWS Lambda", icon: SiAwslambda },
      { name: "AWS Fargate", icon: SiAwsfargate },
      { name: "Docker", icon: FaDocker },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Steam API", icon: FaSteam },
      { name: "Github", icon: FaGithub },
      { name: "Github Actions", icon: SiGithubactions },
    ],
    contributions: [
      "Designed and implemented ORM-based database interactions using SQLAlchemy",
      "Utilized Pydantic for environment variable management and data validation",
      "Integrated Google Webhook for critical notifications and Python logging for detailed event tracking",
      "Deployed three modular AWS Lambda functions, containerized with Docker for efficient job scheduling",
      "Improved system scalability and performance for high traffic environments"
    ]
  },
  {
    id: 6,
    name: "Game Ratings Service (Internal Tool) (Full Stack Role)",
    description: "Designed and developed a centralized system for managing user and critic ratings for games across different platforms, replacing previous Google Sheets-based system.",
    duration: "2023 Q2 - 2023 Q4",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "MySQL", icon: SiMysql },
      { name: "GraphQL", icon: SiGraphql },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Docker", icon: FaDocker },
      { name: "AWS Fargate", icon: SiAwsfargate },
      { name: "Github", icon: FaGithub },
      { name: "Github Actions", icon: SiGithubactions },
      { name: "Mixpanel", icon: SiMixpanel },
      { name: "Newrelic", icon: SiNewrelic },
    ],
    contributions: [
      "Led full stack development from architecture to deployment implementing both backend and frontend components",
      "Developed RESTful API endpoints with FastAPI and integrated OpenCritic ratings with automated scraping",
      "Built ORM-based database interactions using SQLAlchemy, Alembic for migrations and implemented data validation with Pydantic",
      "Created interactive frontend with React components for game rating management and visualization",
      "Implemented comprehensive logging system and performance monitoring with NewRelic and Mixpanel"
    ]
  },
  {
    id: 7,
    name: "DQH Admin Tool (Internal Tool)",
    description: "Created a centralized tool for managing client data statistics and operational workflows with role-based access control.",
    duration: "2024 Q4",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "DRF", icon: SiDjango },
      { name: "MySQL", icon: SiMysql },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Docker", icon: FaDocker },
      { name: "GraphQL", icon: SiGraphql },
      { name: "HubSpot API", icon: SiHubspot },
      { name: "AWS S3", icon: SiAmazons3 },
      { name: "AWS Fargate", icon: SiAwsfargate },
      { name: "Bitbucket", icon: FaBitbucket },
      { name: "CI/CD", icon: SiJfrogpipelines },
    ],
    contributions: [
      "Designed secure Restful APIs to integrate backend functionalities with the frontend",
      "Built user management systems with roles and permissions for secure operations",
      "Integrated HubSpot APIs for seamless data imports and real-time updates",
      "Implemented role-based access control for different user types",
      "Created centralized management for client data and statistics"
    ]
  },
  {
    id: 8,
    name: "Game Matchmaking Discord Bot (Sammen) (Consumer Product)",
    description: "Built a Discord bot to manage matchmaking sessions for gamers, providing real-time game session updates.",
    duration: "2023",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "DRF", icon: SiDjango },
      { name: "MySQL", icon: SiMysql },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Discord API", icon: SiDiscord },
      { name: "AWS S3", icon: SiAmazons3 },
      { name: "AWS EC2", icon: SiAmazonec2 },
      { name: "Nginx", icon: SiNginx },
      { name: "Bitbucket", icon: FaBitbucket },
      { name: "CI/CD", icon: SiJfrogpipelines },
      { name: "Mixpanel", icon: SiMixpanel },
    ],
    contributions: [
      "Designed and implemented backend APIs using Django REST Framework",
      "Integrated Discord's API to enhance user engagement and interaction",
      "Deployed on AWS EC2 with secure configurations and load balancing",
      "Created real-time game session updates for users",
      "Implemented matchmaking functionality for gamers"
    ]
  },
  {
    id: 9,
    name: "Work Assignment Tool (Internal Tool)",
    description: "Replaced manual workload management systems with an automated solution to improve operational efficiency.",
    duration: "2022",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "MySQL", icon: SiMysql },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Bitbucket", icon: FaBitbucket },

    ],
    contributions: [
      "Developed dynamic reporting modules for real-time department statistics",
      "Designed Restful APIs for efficient frontend-backend communication",
      "Created automated workflow management systems",
      "Improved operational efficiency through process automation",
      "Built user-friendly interfaces for task assignment and tracking"
    ]
  },
  {
    id: 10,
    name: "API Gateway with Rate Limiting and Caching (Personal Project)",
    description: "Developed an API Gateway for secure, scalable, and optimized API requests handling.",
    duration: "2024 Q4",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Nginx", icon: SiNginx },
      { name: "Redis", icon: SiRedis },
    ],
    contributions: [
      "Implemented JWT authentication and Redis-powered rate limiting",
      "Configured Nginx for reverse proxy and load balancing to enhance API performance",
      "Built caching mechanisms for improved response times",
      "Ensured secure handling of API requests",
      "Optimized API gateway for scalability"
    ]
  },
];

const OfficeProjects = () => {
  return (
    <div id="office-projects" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="Office Projects" />
      
      <div className="grid py-12 grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {officeProjects.map(project => (
          <GlowCard key={project.id} identifier={`office-project-${project.id}`}>
            <OfficeProjectCard project={project} />
          </GlowCard>
        ))}
      </div>
    </div>
  );
};

export default OfficeProjects;