# Portfolio

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/portfolio.git

cd portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

If you want to use Google Analytics, Please create a new `.env` file from `.env.example` file and provide the value.

Eg:

```env
NEXT_PUBLIC_GTM = ""
```

### Now, you have to customize user data in the `data` [folder](https://github.com/Gyanranjan-ojha/portfolio/tree/main/data).

Eg:

```javascript
export const userData = {
  githubUser: 'Gyanranjan-ojha',
  devUsername: "Gyanranjan-ojha",
  github: 'https://github.com/Gyanranjan-ojha',
  linkedIn: 'http://www.linkedin.com/in/gyanranjanojha-34330a216',
  resume: "https://drive.google.com/file/d/1z3tfyrHttlU1kuHrrOoTeH7ZKqfAzMUR/view?usp=sharing",
  skills: ["Python", "Django", "Django REST Framework", "FastAPI", "MySQL", 'MongoDB', 'Postgres', 'Docker', 'AWS'],
  technical_skills : [
    "Python", "Django", "Django REST Framework", "FastAPI", "MySQL", "MongoDB", "Redis", "Docker", "Git", "HTML", "CSS", "JavaScript", "React.js", "AWS", "Linux", "Swagger",
    "Agile Methodology", "JIRA"
  ],
  soft_skills :[
    "Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability"
],
  timezone: 'GMT+5:30',
};
```

---

---

# Packages Used :package:

|   Used Package List   |
| :-------------------: |
|         next          |
|  @next/third-parties  |
|         axios         |
|      react-icons      |
| react-github-calendar |
|         sass          |
|      tailwindcss      |

---

