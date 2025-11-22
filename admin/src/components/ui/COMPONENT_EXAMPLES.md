# shadcn-vue Component Examples

This document provides usage examples for all the UI components in the `/src/components/ui/` directory.

## Tabs

```vue
<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui'
</script>

<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <p>Make changes to your account here.</p>
    </TabsContent>
    <TabsContent value="password">
      <p>Change your password here.</p>
    </TabsContent>
  </Tabs>
</template>
```

## Dialog

```vue
<script setup lang="ts">
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button
} from '@/components/ui'
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">Edit Profile</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <!-- Your form content here -->
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
```

## Alert

```vue
<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@/components/ui'
import { AlertCircle } from 'lucide-vue-next'
</script>

<template>
  <!-- Default Alert -->
  <Alert>
    <AlertCircle class="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>

  <!-- Destructive Alert -->
  <Alert variant="destructive">
    <AlertCircle class="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Your session has expired. Please log in again.
    </AlertDescription>
  </Alert>
</template>
```

## Skeleton

```vue
<script setup lang="ts">
import { Skeleton } from '@/components/ui'
</script>

<template>
  <div class="flex items-center space-x-4">
    <Skeleton class="h-12 w-12 rounded-full" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[250px]" />
      <Skeleton class="h-4 w-[200px]" />
    </div>
  </div>
</template>
```

## Checkbox

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, Label } from '@/components/ui'
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label
      for="terms"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </Label>
  </div>
</template>
```

## Select

```vue
<script setup lang="ts">
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui'
</script>

<template>
  <Select>
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectContent>
  </Select>
</template>
```

## Sidebar

```vue
<script setup lang="ts">
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '@/components/ui'
import { Home, Settings, Users, FileText } from 'lucide-vue-next'
import { ref } from 'vue'

const activeItem = ref('home')
</script>

<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>
        <div class="flex items-center gap-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            A
          </div>
          <span class="font-semibold">Acme Inc</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              :active="activeItem === 'home'"
              @click="activeItem = 'home'"
            >
              <Home class="h-4 w-4" />
              <span>Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              :active="activeItem === 'users'"
              @click="activeItem = 'users'"
            >
              <Users class="h-4 w-4" />
              <span>Users</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              :active="activeItem === 'documents'"
              @click="activeItem = 'documents'"
            >
              <FileText class="h-4 w-4" />
              <span>Documents</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              :active="activeItem === 'settings'"
              @click="activeItem = 'settings'"
            >
              <Settings class="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <div class="flex items-center gap-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
            JD
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-medium">John Doe</span>
            <span class="text-xs text-muted-foreground">john@example.com</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>

    <!-- Main content area -->
    <main class="flex-1">
      <div class="border-b p-4">
        <SidebarTrigger />
      </div>
      <!-- Your page content here -->
    </main>
  </SidebarProvider>
</template>
```

## Complete Form Example

Combining multiple components in a form:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui'

const formData = ref({
  name: '',
  email: '',
  role: '',
  notifications: false,
})
</script>

<template>
  <Card class="w-[450px]">
    <CardHeader>
      <CardTitle>Create Account</CardTitle>
      <CardDescription>Enter your details to create a new account.</CardDescription>
    </CardHeader>

    <CardContent>
      <Tabs default-value="personal">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" class="space-y-4">
          <div class="space-y-2">
            <Label for="name">Name</Label>
            <Input id="name" v-model="formData.name" placeholder="John Doe" />
          </div>

          <div class="space-y-2">
            <Label for="email">Email</Label>
            <Input id="email" v-model="formData.email" type="email" placeholder="john@example.com" />
          </div>

          <div class="space-y-2">
            <Label for="role">Role</Label>
            <Select v-model="formData.role">
              <SelectTrigger id="role">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="guest">Guest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </TabsContent>

        <TabsContent value="preferences" class="space-y-4">
          <div class="flex items-center space-x-2">
            <Checkbox id="notifications" v-model:checked="formData.notifications" />
            <Label for="notifications">
              Send me email notifications
            </Label>
          </div>
        </TabsContent>
      </Tabs>
    </CardContent>

    <CardFooter class="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Create Account</Button>
    </CardFooter>
  </Card>
</template>
```

## Component Props Reference

### Tabs
- `defaultValue`: string - The default active tab
- `modelValue`: string - The controlled active tab value
- `orientation`: 'horizontal' | 'vertical' - Tab orientation

### Dialog
- `open`: boolean - Controlled open state
- `defaultOpen`: boolean - Initial open state
- `modal`: boolean - Whether to render as modal (default: true)

### Alert
- `variant`: 'default' | 'destructive' - Alert style variant

### Select
- `modelValue`: string - The controlled value
- `defaultValue`: string - Initial value
- `disabled`: boolean - Disable the select
- `multiple`: boolean - Allow multiple selections

### Sidebar
- `defaultCollapsed`: boolean - Initial collapsed state
- `collapsible`: 'offcanvas' | 'icon' | 'none' - Collapse behavior

### Checkbox
- `checked`: boolean | 'indeterminate' - Checkbox state
- `defaultChecked`: boolean - Initial checked state
- `disabled`: boolean - Disable the checkbox
