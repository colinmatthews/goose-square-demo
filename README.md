# Square Business Application Demo

A comprehensive business application built with React + Vite + TypeScript, featuring a dashboard, items management, and UI component library.

## 🚀 Quick Start

### Prerequisites

#### 1. Install Node.js
- Visit [nodejs.org](https://nodejs.org/)
- Download and install the **LTS version**
- Verify: `node --version` and `npm --version`

#### 2. Install GitHub Desktop
- Visit [desktop.github.com](https://desktop.github.com/)
- Download and install for your OS
- Sign in with your GitHub account

#### 3. Install Goose AI Assistant
- **Direct Download**: Visit [Goose Releases](https://github.com/block/goose/releases) and download for your OS
- **Or via pip**: `pip install goose-ai`
- **Or via Homebrew**: `brew install goose-ai`
- Verify: `goose --version`

### Project Setup

1. **Clone the repository using GitHub Desktop:**
   - Open GitHub Desktop
   - Click "Clone a repository from the Internet"
   - Enter the repository URL
   - Choose your local folder

2. **Install dependencies and run:**
   ```bash
   cd goose-square-demo
   npm install
   npm run dev
   ```

Application runs at `http://localhost:5173`

## 🤖 Working with Goose

This project is optimized for Goose development:

```bash
cd goose-square-demo
goose session start
```

Goose automatically reads:
- `.goosehints` - Development guidelines
- `PRD.md` - Product requirements
- `goose.md` - Project architecture guide

### Key Features
- **Context Awareness**: Understands project structure and patterns
- **Best Practices**: Enforces development guidelines automatically
- **Incremental Development**: Breaks complex requests into manageable chunks

## 📁 Project Structure

```
src/
├── components/ui/       # 25+ reusable UI components
├── components/layout/   # Layout components
├── context/            # State management (React Context)
├── data/              # Mock data
├── pages/             # Page components
├── types/             # TypeScript definitions
└── utils/             # Utility functions
```

## 🛠 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - ESLint

## 🏗 Tech Stack

- React 18 + TypeScript
- Vite build tool
- Tailwind CSS
- React Router v7
- Goose AI Assistant

## 🔧 Troubleshooting

**Node version issues:**
```bash
node --version  # Should be v18+
```

**Port in use:**
```bash
lsof -ti:5173 | xargs kill -9
```

**Dependencies:**
```bash
rm -rf node_modules package-lock.json && npm install
```

**Goose issues:**
```bash
goose session end && goose session start
```

## 📚 Resources

- [Goose Documentation](https://block.github.io/goose/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
