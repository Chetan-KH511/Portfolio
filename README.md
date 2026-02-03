<!-- BADGES -->
<p align="center">
  <a href="https://vercel.com/"><img alt="Vercel" src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel"></a>
  <a href="#license"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge"></a>
  <a href="https://www.linkedin.com/in/chetan-bhat-a97380284"><img alt="Linkedin - Chetan" src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555"></a>
</p>

<a name="top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="public\assets\nav-link-previews\keyboard website.png" alt="Logo" width="150" height="120">
  </a>

  <h3 align="center">3D Interactive Developer Portfolio</h3>

  <p align="center">
    Professional, modern portfolio showcasing work, technical skills, and a custom 3D Spline keyboard with polished animations and responsive design.
    <br />
    <br />
    <a href="https://chetan-portfolio.vercel.app"><strong> View Live Preview »</strong></a>
  </p>
</div>

## Table of Contents
- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Environment Setup](#environment-setup)
  - [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Deployment (Vercel)](#deployment-vercel)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)


<!-- ABOUT -->
## About The Project

<p align="center">
  <img src="public\assets\nav-link-previews\landing.png" alt="Hero preview" width="800" style="max-width:100%; border-radius:8px; box-shadow: 0 8px 24px rgba(0,0,0,0.35)"/>
</p>


## Tech Stack
| Layer | Tools |
|---|---|
| Framework | Next.js, React |
| Styling & UI | Tailwind CSS, Shadcn UI, Aceternity UI |
| 3D & Animations | Spline Runtime, GSAP, Framer Motion |
| Utilities | Resend, Socket.io, Zod |
| Hosting | Vercel |

<p align="right">(<a href="#top">back to top</a>)</p>


## Getting Started

### Prerequisites
- Node.js v16+ (recommended)
- npm or yarn

### Install
```bash
# clone
git clone https://github.com/Chetan-KH511/project_3D_developer_portfolio.git
cd project_3D_developer_portfolio

# install dependencies
npm install
# or
yarn install
```

### Environment Setup

Create a .env.local file in the root directory and add your environment variables:

```bash
# .env.local
RESEND_API_KEY=your_resend_api_key_here
```

> **Security Tip**: Never commit your .env.local file. Use Vercel’s Environment Variables section for deployment secrets.


### Running Locally
```bash
# Start development server
npm run dev
# or
yarn dev
```
Open http://localhost:3000 to view your local build.


**Build for Production**
```bash
npm run build
npm run start
# or
yarn build
yarn start
```

<p align="right">(<a href="#top">back to top</a>)</p>


## Project Structure
```bash
+---public
|   \---assets
|       +---icons
|       +---nav-link-previews
|       +---projects-screenshots
|       |   \---portfolio
|       \---seo
\---src
    +---app
    |   +---about
    |   +---api
    |   |   \---send
    |   +---blog
    |   +---contact
    |   \---projects
    +---components
    |   +---footer
    |   +---header
    |   |   \---nav
    |   |       +---body
    |   |       +---footer
    |   |       \---image
    |   +---logos
    |   +---preloader
    |   +---realtime
    |   +---sections
    |   +---social
    |   +---theme
    |   \---ui
    +---contexts
    +---data
    +---hooks
    +---lib
    |   \---lenis
    +---types
    \---utils
```
<p align="right">(<a href="#top">back to top</a>)</p>


- The open-source community for the tools that make creative web experiences possible.

<p align="right">(<a href="#top">back to top</a>)</p>
