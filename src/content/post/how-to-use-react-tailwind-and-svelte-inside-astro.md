---
publishDate: 2023-03-18T00:00:00Z
title: How to use React, Tailwind, and Svelte Inside Astro
description: How to use React and Svelte components inside Astro with TailwindCSS.
excerpt: How to use React and Svelte components inside Astro with TailwindCSS.
category: Articles
image: 'https://engage-blog.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fcss-tricks.com%252Fwp-content%252Fuploads%252F2021%252F05%252Fastro-homepage.png%3Ftable%3Dblock%26id%3D63300481-8309-489c-bdbc-169195374161%26cache%3Dv2&w=3840&q=75'
tags:
  - Astro
  - React
  - Svelte
  - TailwindCSS
---

## Introduction

I’ll have to admit, Astro has been growing on me lately, big time. I don’t know whether it’s the sheer speed, the familiar template layout, or the ever-growing feature set. However, what I do know, is that Astro is capable of doing most of the things I want to do, well.

## Overview

In this article, we will be going over how to do the following:

- Initialize a new Astro project & Git repository.
- Add TailwindCSS to our project.
- Render Svelte components on our homepage.
- Render React components on our homepage.
- Deploy our project to Vercel.

## Getting Started

To get started, we will first create a directory for our project to live in. I’m going to call mine ‘astro-demo’.

```bash
mkdir astro-demo && cd astro-demo
```

Now, we’ll start a new Astro project.

```bash
pnpm create astro@latest .
```

When prompted, we will opt to include sample files for this demo:

![Untitled](https://engage-blog.vercel.app/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd3507100-f7ca-4dd7-8dba-54364787266a%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20230318%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20230318T204220Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3D4b9f3a86f22b3c9ec80c3fdb680a6aed8e2b4f9ac8ad808338161c3b24ba03f1%26X-Amz-SignedHeaders%3Dhost%26x-id%3DGetObject&w=3840&q=75)

And to install dependencies:

![Untitled](https://engage-blog.vercel.app/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa0678f2c-852f-4937-96b5-4739c9dd0b2b%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20230318%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20230318T204220Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3D7062d7b59a4c36107aa9eba2f01aefc3c49774a082b2dc5d4ab3e1c336ed8301%26X-Amz-SignedHeaders%3Dhost%26x-id%3DGetObject&w=3840&q=75)

We’re also going to opt for TypeScript, because I like things that make sense:

![Untitled](https://engage-blog.vercel.app/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa1c4afd8-9206-468e-a934-388ec53626e0%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20230318%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20230318T204220Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3De2c6607f67ea27300ecfe5ef82e8e5cc6f1b22d4728fa0d8487881ce2d9015c8%26X-Amz-SignedHeaders%3Dhost%26x-id%3DGetObject&w=3840&q=75)

And we’ll stick with the default Strictness for TypeScript, cause we’re not trying to prove anything:

![Untitled](https://engage-blog.vercel.app/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1fc86459-ef77-4606-81d2-cc89f17f87a3%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20230318%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20230318T204220Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3Dd21975dc99ae96a78778906f1aa57b58f39ada14e468c735f0f64bccc32ba94d%26X-Amz-SignedHeaders%3Dhost%26x-id%3DGetObject&w=2048&q=75)

Lastly, we will have the installer initialize a new Git repository for our project:

![Untitled](https://engage-blog.vercel.app/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa39b8f82-c44c-4285-96b2-caf0d992868b%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20230318%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20230318T204220Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3Dda66a96006a78aa5ad2e9536b986b9c17faf6dccbadf558a3f1fa5a6286acd9b%26X-Amz-SignedHeaders%3Dhost%26x-id%3DGetObject&w=3840&q=75)

## Starting our Project

Now that our new project is set up, and everything is initialized, we’re ready to get going. I’m going to open this project up in VS Code, and start the dev server:

```bash
code . && pnpm run dev
```

We’ll navigate to `http://localhost:3000` in our browser to make sure that our server is up:

![Untitled](https://engage-blog.vercel.app/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff45db821-fa5e-4421-8b59-cbb5d95f653f%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20230318%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20230318T214748Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3D50df4db85a219c9b7d515fb6b8e66610a8253f82c57842a5a92b57053b70db07%26X-Amz-SignedHeaders%3Dhost%26x-id%3DGetObject&w=3840&q=75)

### Adding TailwindCSS, React, and Svelte to our Project

To add Tailwind, React, and Svelte to our project, all we have to do is open a terminal and run the following command:

```bash
pnpm astro add tailwind react svelte
```

We can verify that everything installed correctly be checking to see if our new packages were added to our `astro.config.mjs` file.

![Untitled](https://engage-blog.vercel.app/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6bba234b-c3c4-4459-98a9-f0651433b0c8%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20230318%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20230318T214748Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3Dc7a03c58c0c8675788d007c78dc8c760b9e245d3a59bdd06e378884f7b3b7df5%26X-Amz-SignedHeaders%3Dhost%26x-id%3DGetObject&w=1920&q=75)

## Create Svelte Component

Let’s create a basic svelte component. We’ll add the following file called `Svelte.svelte` to our project’s `/src/components` directory:

```tsx
<script lang="ts">
  let name: string;
</script>

<div class="my-5 bg-blue-200 rounded-lg p-5">
  <h1>Hello from {name || "Svelte"}!</h1>
  <input placeholder="enter name" bind:value={name} />
</div>
```

Now, we can import our new Svelte component in our `/src/pages/index.astro` page by adding:

```tsx
import Svelte from '../components/Svelte.svelte';
```

Finally, we will drop our component in wherever we like by using the following:

```tsx
<Hello client:load />
```

The result should look something like this:

![Untitled](https://engage-blog.vercel.app/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb54639f8-4d66-4bd0-8d22-5eb2c3fe1dfb%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20230318%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20230318T214748Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3D2e1a3e4ab8f9a9dbaff67a61b7b76fa03168ac03e4b54d41c64e77e3b972a505%26X-Amz-SignedHeaders%3Dhost%26x-id%3DGetObject&w=3840&q=75)

## Create React Component

Now that we have created and rendered our Svelte component, with Tailwind. We can repeat the same process for our React component. In this case, we’ll make a a new file in `/src/components` called `React.tsx` with the following code:

```tsx
import { useState } from 'react';

export default function React() {
  const [name, setName] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  return (
    <div className="bg-purple-200 shadow-md p-5 rounded-lg my-5">
      <h1>Hello from {name || 'React'}.</h1>
      <input placeholder="enter name" type="text" value={name} onChange={handleNameChange} />
    </div>
  );
}
```

We will import our React component and call it the same way we did with out Svelte component.

```tsx
import React from '../components/React';
```

Finally, we will drop our component in wherever we like by using the following:

```tsx
<React client:load />
```

Your output should look something like this:

![Untitled](https://engage-blog.vercel.app/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa8818580-130b-4233-bf3a-18b41193c974%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20230318%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20230318T204220Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3D4a11049974beb054374be21d710f35e91e5b610f2798f180d771ada0aaf839d4%26X-Amz-SignedHeaders%3Dhost%26x-id%3DGetObject&w=3840&q=75)

## Deploying our app to Vercel

I won’t be going in depth on how to use Vercel in this article, so I will be assuming that you have used it before, and just be giving you what you need from an Astro perspective.

To deploy our app to Vercel, and ensure that any future API routes or component you add to your project work as expected, you will want to add the Vercel package to your project:

```tsx
pnpm astro add vercel
```

From there, you can simply run the `vercel` command in your cli, or go to the Vercel website to deploy your project through the GUI.

## Conclusion

In this article we went over:

- Setting up a new Astro project
- Adding TailwindCSS to our project, scoped globally.
- Adding React components, with useState hooks.
- Adding Svelte components, with state.
- Deploying to Vercel.
