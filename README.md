# Portfolio

React portfolio starter with Three.js, shadcn/ui, and a modern Vite toolchain.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Three.js** via `@react-three/fiber` + `@react-three/drei`
- **shadcn/ui** (Tailwind CSS v4)
- **React Router**
- **Framer Motion**
- **Lucide** icons

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
npm run lint     # lint with oxlint
```

## Project structure

```
src/
  components/
    ui/          # shadcn components
    three/       # R3F scenes & meshes
  pages/         # route pages
  lib/           # utilities (cn, etc.)
  hooks/         # shared hooks
```

## Adding shadcn components

```bash
npx shadcn@latest add [component]
```

## Deploy (CI/CD)

Pushes to `main` build the site and rsync `dist/` to your server via SSH.

Add these repository secrets under **Settings → Secrets and variables → Actions**:

| Secret | Example |
| --- | --- |
| `SSH_HOST` | `203.0.113.10` or `example.com` |
| `SSH_USER` | `deploy` |
| `SSH_PRIVATE_KEY` | Full private key (`-----BEGIN ...`) |
| `DEPLOY_PATH` | `/var/www/portfolio/` |
| `SSH_PORT` | `22` (optional; defaults to 22) |

On the server, the deploy user needs write access to `DEPLOY_PATH`, and the matching public key in `~/.ssh/authorized_keys`.

You can also run the workflow manually from the **Actions** tab (`workflow_dispatch`).
