# CONCEPT ACADEMY - Upload to GitHub Instructions

## 🚀 Quick Upload (3 Methods)

---

## Method 1: Automated Script (Easiest)

### For Windows (Command Prompt)
1. Open Command Prompt
2. Navigate to project: `cd concept-academy`
3. Run: `upload-to-github.bat`
4. Follow the prompts

### For Windows (PowerShell)
1. Open PowerShell
2. Navigate to project: `cd concept-academy`
3. Run: `powershell -ExecutionPolicy Bypass -File upload-to-github.ps1`
4. Follow the prompts

---

## Method 2: Manual Commands

Open Command Prompt/PowerShell and run:

```bash
cd concept-academy

git init

git config user.email "your-email@gmail.com"
git config user.name "Your Name"

git add .

git commit -m "first commit"

git remote add origin https://github.com/hkpoutlook/ConceptAcademy.git

git branch -M main

git push -u origin main
```

---

## Method 3: GitHub Desktop

1. Download GitHub Desktop: https://desktop.github.com
2. Open GitHub Desktop
3. Click "File" → "Add Local Repository"
4. Select the `concept-academy` folder
5. Click "Publish Repository"
6. Choose your repository: `ConceptAcademy`
7. Click "Publish Repository"

---

## ✅ After Upload

Your code will be on GitHub at:
```
https://github.com/hkpoutlook/ConceptAcademy
```

---

## 🚀 Next: Deploy to Vercel

1. Go to: https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Select "ConceptAcademy" repository
5. Click "Import"
6. Click "Deploy"
7. Wait 2-3 minutes

Your live URL will be:
```
https://concept-academy-[random-id].vercel.app
```

---

## 📋 Troubleshooting

### Git not found
- Install Git: https://git-scm.com/download/win
- Restart your terminal after installation

### Authentication failed
- Make sure you have GitHub account
- Check your GitHub credentials
- Use personal access token if needed

### Push rejected
- Check remote URL: `git remote -v`
- Ensure repository exists on GitHub
- Check branch name: `git branch`

---

## 🎉 Success!

Once uploaded to GitHub and deployed to Vercel, your website will be live!

**Your Links:**
- GitHub: https://github.com/hkpoutlook/ConceptAcademy
- Vercel: https://concept-academy-[random].vercel.app
- Custom Domain: https://conceptacademy.org (optional)

---

**Ready to upload? Choose a method above and get started!** 🚀
