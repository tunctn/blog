# tunc.co

A personal website and blog built with Next.js, showcasing my work, thoughts, and experiences as a software engineer and designer.

## Tech Stack

- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI primitives with custom components and Shadcn UI
- **Database**: PostgreSQL with Drizzle ORM
- **Caching**: :) 
- **Content**: MDX for blog posts with syntax highlighting
- **Deployment**: Just hosting on my Hetzner Server. Can be deployed to any other platform though.
- **Code Quality**: Biome for linting and formatting

## Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)


## Cursor Plugins (Recommended)
- [Biome](https://open-vsx.org/extension/biomejs/biome)
- [I18N Ally](https://open-vsx.org/extension/lokalise/i18n-ally)
- [MDX](https://open-vsx.org/extension/unifiedjs/vscode-mdx)
- [Prettier](https://open-vsx.org/extension/esbenp/prettier-vscode)
- [Tailwind CSS IntelliSense](https://open-vsx.org/extension/bradlc/vscode-tailwindcss)

## Cursor Plugins (Optional)
- [Docker](https://open-vsx.org/extension/ms-azuretools/vscode-docker)
- [GitHub Theme](https://open-vsx.org/extension/GitHub/github-vscode-theme)
- [GitLens](https://open-vsx.org/extension/eamodio/gitlens)
- [Peacock](https://open-vsx.org/extension/johnpapa/vscode-peacock)


### Installation

1. Clone the repository:
```bash
git clone https://github.com/tunctn/blog.git
cd tunctn-blog
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.template .env
```
Fill in your database URLs and other required environment variables.

4. Run database migrations:
```bash
pnpm db:migrate
```

5. Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.
