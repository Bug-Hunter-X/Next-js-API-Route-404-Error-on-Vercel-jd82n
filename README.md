# Next.js API Route 404 Error on Vercel

This repository demonstrates a common issue encountered when deploying Next.js applications to Vercel: an API route failing to work after deployment, despite working correctly locally. The issue stems from incorrect configuration of the API route within the Next.js application.

## Problem

The provided `pages/api/hello.js` API route functions correctly in the local development environment but returns a 404 error after deployment to Vercel.

## Solution

The solution involves verifying the API route's location and ensuring it conforms to the Next.js API routes conventions.  The issue is often caused by a typo in the route file name or incorrect placement of the file within the `pages/api` directory.  The solution demonstrates the correct implementation and structure.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.  Verify that the API route `/api/hello` is working.
4. Deploy the application to Vercel (or another platform). Observe the 404 error on the deployed API route.
5. Examine the `bugSolution.js` file for the correct implementation of the API route.
