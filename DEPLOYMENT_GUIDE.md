# SajiloHub Complete Deployment Guide

To host SajiloHub permanently on a free domain (like `bpk.vercel.app`), you need to host three things: the **Database**, the **Backend (Server)**, and the **Frontend (Client)**.

Follow these steps exactly in order.

---

## 🟢 Step 1: Host the Database (Free)
Right now, your MySQL database is stored locally on your computer. To make it work on the internet, you need a free cloud database.

1. Go to [Aiven](https://aiven.io/) and create a free account.
2. Click **Create Service** and choose **MySQL**.
3. Choose the **Free Plan** and create the database.
4. Once it is running, click on it and find the **Connection Information** (Host, Port, User, Password).
5. Open your database tool (like MySQL Workbench) and connect to this new cloud database. Run your SQL file (`sajilohub.sql` or similar) to create your tables there.

---

## 🔵 Step 2: Host the Backend (Render)
Render is a free service for hosting Node.js backend servers.

1. Go to [Render](https://render.com/) and create a free account.
2. In the dashboard, click **New +** and select **Web Service**.
3. Connect your GitHub account and select your `SajiloHub` repository.
4. Set up the details:
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
5. Scroll down to **Environment Variables** and add the following keys based on your Aiven database:
   - `DB_HOST` = (Your Aiven Host)
   - `DB_PORT` = (Your Aiven Port)
   - `DB_USER` = (Your Aiven User)
   - `DB_PASSWORD` = (Your Aiven Password)
   - `DB_NAME` = (Your Aiven Database name)
   - `JWT_SECRET` = `bpk_secret_key_12345` (Or any strong random text)
   - `CLIENT_URL` = `https://bpk.vercel.app` (The domain you will use in Step 3)
6. Click **Create Web Service**. Wait a few minutes for it to deploy.
7. Once it's live, **copy your new backend URL** (it will look something like `https://sajilohub-api.onrender.com`).

---

## 🔴 Step 3: Host the Frontend (Vercel)
Vercel is the best place to host React apps, and it gives you a free `.vercel.app` domain.

1. Open the file `client/vercel.json` in your VS Code.
2. Look for this line: `"destination": "https://your-backend-url-here.onrender.com/api/$1"`
3. **Replace** `https://your-backend-url-here.onrender.com` with the actual Render URL you copied in Step 2! Save the file.
4. Push these changes to your GitHub repository.
5. Go to [Vercel](https://vercel.com/) and create a free account using your GitHub.
6. Click **Add New Project** and select your `SajiloHub` repository.
7. In the configuration:
   - **Project Name:** Type `bpk` (This makes your URL `bpk.vercel.app`)
   - **Framework Preset:** `Vite`
   - **Root Directory:** Click Edit and select `client`.
8. Click **Deploy**.

🎉 **Congratulations!** Your website will now be live at `https://bpk.vercel.app`.
