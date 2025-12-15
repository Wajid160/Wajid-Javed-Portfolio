# Wajid Javed — AI Automation Portfolio

A modern, single-page portfolio showcasing AI automation capabilities and agentic AI expertise. Built with React, Vite, and Tailwind CSS.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`.

---

## 📦 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React Hooks

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx       # Header with theme toggle
│   │   └── Footer.tsx       # Footer with social links
│   ├── Sections/
│   │   ├── Hero.tsx         # Landing section
│   │   ├── About.tsx        # About section
│   │   ├── Projects.tsx     # Projects grid with modal
│   │   ├── ProjectCard.tsx  # Individual project card
│   │   ├── Skills.tsx       # Skills categories
│   │   └── Contact.tsx      # Contact links
│   ├── UI/
│   │   ├── Card.tsx         # Reusable card component
│   │   └── Modal.tsx        # Accessible modal wrapper
│   └── Chatbot/
│       └── ChatbotShell.tsx # AI chatbot UI (n8n ready)
├── config/
│   ├── content.ts           # All website content
│   └── theme.ts             # Theme tokens and constants
├── hooks/
│   └── useTheme.ts          # Dark/light mode hook
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

---

## 🎨 Theme & Design

### Light Mode
- Background: `#F7F7FA`
- Primary: `#1E40AF` (Deep Blue)
- Accent: `#06B6D4` (Cyan)

### Dark Mode
- Background: `#0B1220`
- Primary: `#06B6D4` (Cyan)
- Accent: `#8B5CF6` (Purple)

Theme preference is persisted to `localStorage` under the key `wj_theme_preference`.

---

## 🤖 Chatbot Integration (n8n)

The chatbot UI is **fully built** but requires backend integration via n8n webhook.

### Integration Steps

1. **Create n8n Webhook**
   - Set up a workflow in n8n
   - Add a Webhook node (POST method)
   - Configure your LLM logic (OpenAI, Anthropic, etc.)

2. **Update API Endpoint**
   
   Open `src/config/content.ts` and update:
   ```typescript
   chatbot: {
     // ...
     apiEndpointPlaceholder: 'https://your-n8n-instance.com/webhook/chatbot',
   }
   ```

3. **Webhook Contract**

   **Request** (sent from UI):
   ```json
   {
     "message": "User's message text",
     "sessionId": "session_1234567890_abc123"
   }
   ```

   **Response** (expected from n8n):
   ```json
   {
     "reply": "AI assistant response text",
     "metadata": {} // Optional
   }
   ```

4. **Enable the Integration**

   Uncomment the fetch call in `src/components/Chatbot/ChatbotShell.tsx`:
   
   ```typescript
   // Line ~67-75: Replace simulation with actual API call
   const response = await fetch(apiEndpointPlaceholder, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       message: text.trim(),
       sessionId: sessionId,
     }),
   });
   const data = await response.json();
   const botReply = data.reply;
   ```

### Optional: Streaming Support

For streaming responses, modify the n8n workflow to support Server-Sent Events (SSE) and update the UI to handle streaming chunks.

---

## 📝 Content Management

All content is centralized in `src/config/content.ts`. To update:

### Replace Dummy Projects

1. Open `src/config/content.ts`
2. Find the `projects` array
3. Replace dummy projects with real ones:

```typescript
{
  id: 'project-1',
  title: 'Your Real Project Name',
  problem: 'Describe the problem',
  solution: 'Explain your solution',
  techStack: ['n8n', 'OpenAI API', 'PostgreSQL'],
  status: 'Production', // or 'Prototype', 'Case Study'
}
```

### Update Personal Information

Edit contact details in `content.contact`:
```typescript
contact: {
  email: 'your-email@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  whatsappList: '+1234567890',
  whatsappLink: 'https://wa.me/1234567890',
}
```

### Add/Remove Skills

Modify `content.skills` to update skill categories and items.

---

## 🖼️ Asset Management

### Images

Place images in `public/images/`:
- `logo.png` — Header logo
- `hero.png` — Hero section image
- `about.png` — About section profile picture

Images can be replaced by updating files directly. The paths are configured in `src/config/content.ts`.

---

## 🚢 Deployment

### Build

```bash
npm run build
```

This creates a `dist/` folder with optimized static files.

### Deploy to:

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repo settings
3. Set source to `gh-pages` branch
4. Run: `npm run build && npx gh-pages -d dist`

---

## ✅ Acceptance Checklist

- [x] Theme toggle works and persists preference
- [x] All sections render correctly (Hero, About, Projects, Skills, Contact)
- [x] Projects modal opens and displays dummy data
- [x] Chatbot UI is functional with placeholder responses
- [x] Responsive design works on mobile, tablet, desktop
- [x] Keyboard navigation and accessibility features
- [x] All contact links work correctly
- [x] Dark/light mode transitions are smooth

---

## 🐛 Troubleshooting

### TypeScript Errors

If you see TypeScript errors, ensure all dependencies are installed:
```bash
npm install -D typescript @types/react @types/react-dom @vitejs/plugin-react vite
```

### Tailwind Not Working

Verify `tailwind.config.js` and `postcss.config.js` exist and are properly configured.

### Chatbot Not Responding

The chatbot uses simulated responses by default. Follow the **Chatbot Integration** section above to connect to n8n.

---

## 📄 License

This project is built for Wajid Javed's personal portfolio. Feel free to use as a template with attribution.

---

## 🤝 Support

For questions or collaboration opportunities:
- Email: wajidjaved160@gmail.com
- LinkedIn: [Wajid Javed](https://www.linkedin.com/in/wajid-javed160)
- GitHub: [@Wajid160](https://github.com/Wajid160)
