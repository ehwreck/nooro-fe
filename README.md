# Next.js Frontend App

A **Next.js** frontend application using the **App Router**.  
This project communicates with a backend Express server and requires the backend to be running before starting the frontend.

---

## 🚀 Features

- ⚡ **Next.js 14+** — Uses the App Router for modern routing and layouts.
- 🎨 **React 18** — Leveraging the latest features for fast and interactive UIs.
- 🔗 **API Integration** — Communicates with the backend API.
- 📦 **Yarn** — Dependency management.

---

## 🛠️ Tech Stack

| Technology | Purpose                   |
|-----------|---------------------------|
| Next.js   | React framework for SSR, SSG, and routing |
| React     | UI components and hooks   |
| Yarn      | Dependency management     |
| TypeScript| Type-safe development    |

---

## 📂 Project Structure

```
├── app/                # App Router entry point
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   ├── api/            # API routes if any
├── components/         # Reusable React components
├── public/             # Static assets
├── styles/             # Global styles
├── .env                # Environment variables
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/ehwreck/nooro-fe
cd nooro-fe
```

### 2. Set up the backend
The frontend requires the backend to be running for API calls.  
Clone and start the backend server:  
**Backend repository:** [nooro-be](https://github.com/ehwreck/nooro-be)

```bash
git clone https://github.com/ehwreck/nooro-be
cd nooro-be
yarn install
yarn dev
```

Ensure the backend is running on its default port (or your configured one).

### 3. Configure environment variables
In the frontend project root, create a `.env` file and set the backend host information:
```env
NEXT_PUBLIC_SERVER_HOST=http://localhost:3000
```

### 4. Install dependencies
```bash
yarn install
```

### 5. Start the development server
```bash
yarn dev
```

By default, the app runs on **[http://localhost:3001](http://localhost:3001)**.

---

## 🧩 Available Scripts

| Command      | Description                        |
|-------------|------------------------------------|
| `yarn dev`  | Starts the Next.js development server |
| `yarn build`| Builds the project for production |
| `yarn start`| Starts the production server      |

---

## 🧪 Testing API Communication

1. Start the backend server (see [nooro-be](https://github.com/ehwreck/nooro-be)).  
2. Set the correct backend URL in `.env`.  
3. Use tools like **Postman** or the browser's developer console to test requests.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📧 Contact

For any questions, feedback, or issues, feel free to reach out:

**Your Name**  
📧 [erick_trivi1010@hotmail.com](mailto:erick_trivi1010@hotmail.com)  
🔗 [ehwreck](https://github.com/ehwreck)
