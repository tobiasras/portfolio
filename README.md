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
