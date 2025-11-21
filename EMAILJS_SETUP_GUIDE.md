# 📧 EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS so that your contact form sends messages directly to your email.

## ✨ What is EmailJS?

EmailJS is a free service that allows you to send emails directly from your frontend (React) application without building a backend server.

## 🚀 Setup Steps

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (It's FREE!)
3. Create your account with your email

### Step 2: Add Email Service

1. After logging in, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Click **Connect Account** and log in with your Gmail (tech18arun@gmail.com)
5. Give it a Service Name (e.g., "Gmail Service")
6. Copy the **Service ID** (you'll need this later)

### Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template configuration:

```
Subject: New Contact Form Submission from {{name}}

Message:
You have received a new message from your portfolio website!

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Copy the **Template ID** (you'll need this later)

### Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (it looks like: `YOUR_PUBLIC_KEY`)
3. Copy this key

### Step 5: Update Contact.tsx

Open `src/pages/Contact.tsx` and replace these three values around line 36-38:

```typescript
const SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your Service ID from Step 2
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID from Step 3
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key from Step 4
```

**Example:**
```typescript
const SERVICE_ID = 'service_abc123xyz';
const TEMPLATE_ID = 'template_xyz789abc';
const PUBLIC_KEY = 'xYz123AbC456DeF789';
```

## 🎯 Testing

1. Save your changes
2. Go to your website: `http://localhost:5174/contact`
3. Fill out the contact form
4. Submit the form
5. Check your email (tech18arun@gmail.com) - you should receive the message!

## 📝 Important Notes

- **Free Plan Limits**: 200 emails per month (plenty for a portfolio site!)
- **Setup Time**: About 5-10 minutes
- **No Backend Required**: Everything runs from your React frontend
- **Secure**: Your credentials are safe with EmailJS

## 🔧 Template Field Names

Make sure your form fields match these names (already configured):
- `name` - Client's name
- `email` - Client's email
- `subject` - Message subject
- `message` - Message content

## ✅ Alternative: Using mailto Link

If you want a simpler solution without EmailJS, clients can click your email address and it will open their email client. This is already working in your footer and contact page!

## 🆘 Troubleshooting

If emails aren't sending:
1. Check that all three IDs (Service, Template, Public Key) are correct
2. Make sure your Gmail account is properly connected
3. Check browser console for error messages
4. Verify you haven't exceeded the 200 emails/month limit

## 🌟 Benefits

✅ Free to use  
✅ No backend server needed  
✅ Emails delivered instantly  
✅ Professional appearance  
✅ Spam protection included  

---

Need help? The EmailJS documentation is excellent: https://www.emailjs.com/docs/
