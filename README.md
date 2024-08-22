# Pixelyze

<img src="https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Pixelyze/Pixelyze+Github+Readme+Files/pixelyze_logo.gif" alt="Logo" width="400" height="400">

**Pixelyze** is an AI-powered SaaS application developed with Next.js and TypeScript. It features secure authentication through Clerk, utilizes Cloudinary AI for advanced image processing, and integrates Stripe for payments. The application includes a user-friendly dashboard for managing and sharing images, offering capabilities such as restoration, resizing, and object removal.

## Features 🌟

- **AI-Driven Image Processing:** Perform image restoration, resizing, object removal, recoloring, and background removal using Cloudinary AI.
- **Secure Authentication:** Manage user access and authentication seamlessly with Clerk.
- **Efficient Image Storage:** Utilize Cloudinary for effective storage and handling of images.
- **Secure Payments:** Integrated Stripe for safe and reliable payment transactions.
- **User Dashboard:** Access a comprehensive interface to manage and share images and credits.
- **Community Sharing:** Share creations with others and engage with the community.

## Screenshots 📸

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Pixelyze/Pixelyze+Github+Readme+Files/clerkauth.jpg)

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Pixelyze/Pixelyze+Github+Readme+Files/mainpage.jpg)

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Pixelyze/Pixelyze+Github+Readme+Files/profiledashboard.jpg)

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Pixelyze/Pixelyze+Github+Readme+Files/imagerestore.jpg)

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Pixelyze/Pixelyze+Github+Readme+Files/imageediting.jpg)

![App Screenshot](https://hosted-documents-akash.s3.eu-central-1.amazonaws.com/Pixelyze/Pixelyze+Github+Readme+Files/buycredits.jpg)

## Deployment 🚀

You can access the live version of Pixelyze here: [Live Demo](https://pixelyze.vercel.app/)

## Environment Setup 🛠️ {#environment-setup}

To run this project, you will need to add the following environment variables to your .env.local file (a template has been provided as .env.example)

You will need to obtain credentials from the respective services:

- **Clerk:** Sign in at [Clerk](https://clerk.com/) to get your `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`. Set up your sign-in and sign-up URLs in the Clerk dashboard. Follow Clerk's documentation to set up webhooks and obtain the `CLERK_WEBHOOK_SECRET`.

- **Stripe:** Sign in at [Stripe](https://stripe.com/in) to get your `STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY`. Follow Stripe’s documentation to set up webhooks and obtain the `STRIPE_WEBHOOK_SECRET`.

- **MongoDB:** Sign in at at [MongoDB](https://www.mongodb.com/) and create a MongoDB cluster to get your `MONGODB_URI`.

- **Cloudinary:** Sign in at [Cloudinary](https://cloudinary.com/) to get your `CLOUDINARY_API_KEY`, `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, and `CLOUDINARY_API_SECRET`.

Add the following env variables with their values to your `.env.local` file:

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
`CLERK_SECRET_KEY`

`NEXT_PUBLIC_CLERK_SIGN_IN_URL`
`NEXT_PUBLIC_CLERK_SIGN_UP_URL`
`NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
`NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`

`CLERK_WEBHOOK_SECRET`

`MONGODB_URI`

`CLOUDINARY_API_KEY`
`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
`CLOUDINARY_API_SECRET`

`STRIPE_PUBLISHABLE_KEY`
`STRIPE_SECRET_KEY`
`STRIPE_WEBHOOK_SECRET`

`NEXT_PUBLIC_SERVER_URL`

## Installation 🔧

**1.** Git Clone the Repository

**2.** Navigate to the directory where the repository was downloaded

**3.** Set up the [Environment Variables](#environment-setup)

**4.** Install the Dependencies

```
npm install
```

**5.** Start the application in development mode

```
npm run dev
```

## Authors ✍️

- [Akash](https://github.com/Akash-m-SE)

## Tech Stack 💻

**Language:** TypeScript

**Frontend:** Next.js, TailwindCSS, React Hook Form, Zod

**Backend:** Node.js, Webhooks (Clerk, Stripe)

**Authentication:** Clerk

**Database:** MongoDb, Mongoose

**Cloud Storage:** Cloudinary

**AI-Driven Image Processing:** Cloudinary AI

**Payment Processing:** Stripe
