# shadcn-vue UI Components

A comprehensive collection of reusable Vue 3 components built with Radix Vue, Tailwind CSS, and shadcn design principles.

## Components Overview

This directory contains 50 Vue components organized into the following groups:

### Base Components (6)
- **Button** - Versatile button with multiple variants (default, destructive, outline, secondary, ghost, link)
- **Input** - Text input field with focus states
- **Label** - Form label with proper accessibility
- **Separator** - Horizontal or vertical divider
- **Badge** - Inline status indicator with variants
- **Skeleton** - Loading placeholder with pulse animation

### Layout Components

#### Card (6 components)
- Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- Flexible container for grouping related content

#### Table (6 components)
- Table, TableHeader, TableBody, TableHead, TableRow, TableCell
- Data table with proper semantic HTML structure

#### Sidebar (9 components)
- SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter
- SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger
- Collapsible navigation sidebar with mobile support

### Interactive Components

#### Tabs (4 components)
- Tabs, TabsList, TabsTrigger, TabsContent
- Accessible tab interface using Radix Vue

#### Dialog (8 components)
- Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter
- DialogTitle, DialogDescription, DialogClose
- Modal dialog with overlay and animations

#### Select (7 components)
- Select, SelectTrigger, SelectValue, SelectContent
- SelectItem, SelectLabel, SelectSeparator
- Dropdown select menu with search and keyboard navigation

### Form Components

#### Checkbox (1 component)
- Checkbox - Binary input with indeterminate state support

### Feedback Components

#### Alert (3 components)
- Alert, AlertTitle, AlertDescription
- Notification banner with default and destructive variants

## Tech Stack

- **Vue 3.5+** - Composition API with `<script setup>`
- **Radix Vue 1.9+** - Unstyled, accessible UI primitives
- **Tailwind CSS 4.1+** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant management
- **lucide-vue-next** - Icon library for UI elements

## Design System

All components follow the New York style variant of shadcn with:

- Consistent spacing and sizing
- Proper focus states with ring indicators
- Smooth transitions and animations
- Dark mode support via CSS variables
- Accessible by default (ARIA attributes, keyboard navigation)
- Mobile-first responsive design

## Usage

Import components from the barrel export:

```vue
<script setup lang="ts">
import { Button, Card, CardHeader, CardTitle, Input } from '@/components/ui'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Welcome</CardTitle>
    </CardHeader>
    <Button>Click me</Button>
  </Card>
</template>
```

## Features

- **Type-safe** - Full TypeScript support with proper prop types
- **Composable** - Build complex UIs by combining simple components
- **Customizable** - Override styles with the `class` prop using `cn()` utility
- **Accessible** - WCAG compliant with proper ARIA attributes
- **Performant** - Optimized for minimal re-renders

## File Organization

```
ui/
├── index.ts                    # Barrel export for all components
├── README.md                   # This file
├── EXAMPLES.md                 # Original examples (deprecated)
├── COMPONENT_EXAMPLES.md       # Comprehensive usage examples
├── Button.vue                  # Individual component files
├── Card.vue
└── ...
```

## Next Steps

1. See **COMPONENT_EXAMPLES.md** for detailed usage examples
2. Customize theme colors in `/src/assets/index.css`
3. Extend components by wrapping them in your own components
4. Add new variants using `cva()` from class-variance-authority

## Dependencies

All required dependencies are already installed:
- radix-vue
- lucide-vue-next
- class-variance-authority
- clsx
- tailwind-merge

## Notes

- The PostCSS configuration requires `@tailwindcss/postcss` for Tailwind v4
- All components use the `cn()` utility from `@/lib/utils` for class merging
- Components are designed to work with the CSS variables defined in `/src/assets/index.css`
