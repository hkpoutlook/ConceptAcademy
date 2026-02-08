# CONCEPT ACADEMY - Complete Deployment Guide

## 🚀 Deploy Your Website in 3 Steps

---

## Step 1: Push to GitHub

### Prerequisites
- GitHub account: https://github.com
- Git installed on your computer

### Commands to Run

Open Command Prompt/PowerShell and navigate to the project:

```bash
cd concept-academy
```

Then run these commands:

```bash
# 1. Initialize Git repository
git init

# 2. Configure Git with your details
git config user.email "your-email@gmail.com"
git config user.name "Your Name"

# 3. Add all files to staging
git add .

# 4. Create first commit
git commit -m "first commit"

# 5. Add remote repository
git remote add origin https://github.com/hkpoutlook/ConceptAcademy.git

# 6. Rename branch to main
git branch -M main

# 7. Push to GitHub
git push -u origin main
```

### After Pushing
Your code will be on GitHub at:
```
https://github.com/hkpoutlook/ConceptAcademy
```

---

## Step 2: Deploy to Vercel

### Method 1: Using Vercel Dashboard (Easiest)

1. **Go to Vercel**: https://vercel.com
2. **Sign Up/Sign In** with GitHub
3. **Click "New Project"**
4. **Select your repository**: ConceptAcademy
5. **Click "Import"**
6. **Framework**: Next.js (auto-detected)
7. **Click "Deploy"**
8. **Wait 2-3 minutes** for deployment to complete

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd concept-academy

# Deploy
vercel
```

### After Deployment
Your live URL will be:
```
https://concept-academy-[random-id].vercel.app
```

Example:
```
https://concept-academy-7x9k2m.vercel.app
```

---

## Step 3: Add Custom Domain (Optional)

### Prerequisites
- Own a domain (e.g., conceptacademy.org)
- Domain registrar account (GoDaddy, Namecheap, etc.)

### Steps

1. **In Vercel Dashboard**:
   - Go to your project
   - Click **"Settings"**
   - Click **"Domains"**
   - Click **"Add Domain"**
   - Enter your domain: `conceptacademy.org`

2. **Configure DNS**:
   - Vercel will show you DNS records to add
   - Go to your domain registrar
   - Add the DNS records provided by Vercel
   - Wait 5-30 minutes for DNS propagation

3. **Verify**:
   - Once DNS is configured, your site will be live at:
   ```
   https://conceptacademy.org
   ```

---

## 📋 Your Website Links

### After Step 1 (GitHub)
```
GitHub Repository:
https://github.com/hkpoutlook/ConceptAcademy
```

### After Step 2 (Vercel)
```
Live Website (Auto-generated):
https://concept-academy-[random-id].vercel.app
```

### After Step 3 (Custom Domain)
```
Live Website (Custom Domain):
https://conceptacademy.org
```

---

## 🎯 Quick Reference

| Step | Action | Link |
|------|--------|------|
| 1 | Push to GitHub | https://github.com/hkpoutlook/ConceptAcademy |
| 2 | Deploy to Vercel | https://vercel.com |
| 3 | Add Custom Domain | Your domain registrar |

---

## ✅ Verification Checklist

After each step, verify:

- [ ] **Step 1**: Code appears on GitHub
- [ ] **Step 2**: Website is live on Vercel URL
- [ ] **Step 3**: Custom domain works (if added)

---

## 🆘 Troubleshooting

### Git Push Fails
```bash
# Check remote URL
git remote -v

# If wrong, remove and re-add
git remote remove origin
git remote add origin https://github.com/hkpoutlook/ConceptAcademy.git
```

### Vercel Deployment Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### Custom Domain Not Working
- Wait for DNS propagation (up to 48 hours)
- Check DNS records are correctly added
- Verify domain is pointing to Vercel nameservers

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Docs**: https://docs.github.com
- **Next.js Docs**: https://nextjs.org/docs

---

## 🎉 Success!

Once all steps are complete, your CONCEPT ACADEMY website will be:
- ✅ On GitHub
- ✅ Live on Vercel
- ✅ Accessible via custom domain (optional)
- ✅ Ready for the world!

---

**Your website is ready to launch! Follow the steps above to go live.** 🚀
