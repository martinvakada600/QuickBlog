# QuickBlog

A full-stack blogging platform with AI-powered content generation, built with React, Node.js, Express, and MongoDB.

---

## Features
- User-friendly blogging platform
- Admin dashboard for blog and comment management
- AI-powered blog content generation (Google Gemini/OpenAI)
- Newsletter subscription (emails stored in DB)
- Image upload and optimization (ImageKit)
- JWT-based admin authentication
- Responsive, modern UI

---

## Project Structure
```
QuickBlog-main/
  Quick_Blog/
    client/    # React frontend
    server/    # Node.js/Express backend
```

---

## Getting Started

### 1. Clone the Repository
```
git clone <repo-url>
cd QuickBlog-main/Quick_Blog
```

### 2. Setup the Backend
```
cd server
npm install
```
- Create a `.env` file in `server/` with the following:
  ```
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  ADMIN_EMAIL=your_admin_email
  ADMIN_PASSWORD=your_admin_password
  IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
  IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
  IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
  GEMINI_API_KEY=your_gemini_or_openai_api_key
  ```
- Start the backend:
  ```
  npm start
  ```

### 3. Setup the Frontend
```
cd ../client
npm install
```
- Create a `.env` file in `client/` with:
  ```
  VITE_BASE_URL=http://localhost:3000
  ```
- Start the frontend:
  ```
  npm run dev
  ```

---

## Usage
- Visit `http://localhost:5173` for the public site.
- Visit `http://localhost:5173/admin/login` to log in as admin.
- Admin can add, edit, delete, publish/unpublish blogs, and manage comments.
- Use the "Generate with AI" button to auto-generate blog content.
- Users can subscribe to the newsletter (emails stored in DB).

---

## API Endpoints (Backend)
- `POST /api/admin/login` — Admin login
- `POST /api/blog/add` — Add blog (admin)
- `POST /api/blog/delete` — Delete blog (admin)
- `POST /api/blog/toggle-publish` — Publish/unpublish blog (admin)
- `GET /api/blog/all` — Get all published blogs
- `GET /api/blog/:blogId` — Get single blog
- `POST /api/blog/add-comment` — Add comment
- `POST /api/blog/subscribe` — Newsletter subscribe
- `POST /api/blog/generate` — AI content generation (admin)

---

## Technologies Used
- **Frontend:** React, Vite, Tailwind CSS, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer, JWT, ImageKit
- **AI:** Google Gemini or OpenAI API

---

## Notes
- Make sure MongoDB, ImageKit, and AI API keys are valid and not leaked.
- Newsletter feature only stores emails; it does not send real emails.
- For production, set up environment variables securely and use HTTPS.

---

## License
MIT
