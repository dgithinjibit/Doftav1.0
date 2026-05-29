# Deploying DOFTA to Vercel

This guide walks you through deploying the DOFTA frontend to Vercel.

## Prerequisites

- GitHub account
- Vercel account (sign up at https://vercel.com)
- Node.js 18+ installed locally (for testing)

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit: DOFTA dApp"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/dofta.git
git branch -M main
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Configure Environment Variables

In the Vercel dashboard, add these environment variables:

```
VITE_API_URL=https://api.dofta.app
VITE_WS_URL=wss://api.dofta.app
VITE_CHAIN_ID=137
VITE_ETHEREUM_RPC=https://mainnet.infura.io/v3/YOUR_INFURA_KEY
VITE_POLYGON_RPC=https://polygon-rpc.com
VITE_WALLETCONNECT_PROJECT_ID=your-walletconnect-project-id
VITE_ENABLE_GOVERNANCE=true
VITE_ENABLE_CARBON_CREDITS=true
VITE_ENABLE_DEFI=true
```

### Step 4: Deploy

Click "Deploy" and wait for the build to complete. Your app will be live at:
`https://your-project.vercel.app`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Navigate to Frontend Directory

```bash
cd frontend
```

### Step 4: Set Up Environment Variables

Create a `.env.production` file:

```bash
cp .env.example .env.production
# Edit .env.production with your production values
```

### Step 5: Deploy

For preview deployment:
```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

## Post-Deployment Configuration

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `dofta.app`)
4. Follow DNS configuration instructions

### Environment Variables

To update environment variables after deployment:

1. Go to Project Settings → Environment Variables
2. Add/Edit variables
3. Redeploy for changes to take effect

Or via CLI:
```bash
vercel env add VITE_API_URL production
```

### Automatic Deployments

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you create a pull request

## Optimization Tips

### 1. Enable Analytics

```bash
vercel analytics enable
```

### 2. Configure Build Settings

In `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### 3. Set Up Redirects

For SPA routing, add to `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 4. Enable Caching

Headers are already configured in `vercel.json` for optimal caching.

## Troubleshooting

### Build Fails

**Issue**: Build fails with module not found
**Solution**: Ensure all dependencies are in `package.json`, not `devDependencies`

```bash
# Move dependencies if needed
npm install --save package-name
```

### Environment Variables Not Working

**Issue**: Environment variables not accessible
**Solution**: 
- Ensure variables start with `VITE_`
- Redeploy after adding variables
- Check variable names match exactly

### 404 on Routes

**Issue**: Direct navigation to routes returns 404
**Solution**: Ensure `vercel.json` has the rewrite rule (already included)

### Slow Build Times

**Issue**: Builds take too long
**Solution**:
- Enable build cache in Vercel settings
- Optimize dependencies
- Use `npm ci` instead of `npm install`

## Monitoring

### View Logs

```bash
vercel logs your-deployment-url
```

### Check Build Status

```bash
vercel inspect your-deployment-url
```

### Analytics

View analytics in Vercel dashboard:
- Page views
- Performance metrics
- Error tracking

## Rollback

If a deployment has issues:

```bash
# List deployments
vercel ls

# Promote a previous deployment
vercel promote deployment-url
```

Or via dashboard:
1. Go to Deployments
2. Find working deployment
3. Click "Promote to Production"

## CI/CD Integration

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./frontend
```

## Security Best Practices

1. **Never commit `.env` files**
   - Already in `.gitignore`
   - Use Vercel environment variables

2. **Use environment-specific configs**
   - Development: `.env.development`
   - Production: Vercel dashboard

3. **Enable security headers**
   - Already configured in `vercel.json`

4. **Regular dependency updates**
   ```bash
   npm audit
   npm update
   ```

## Performance Optimization

### 1. Enable Compression

Already enabled via Vercel's automatic compression.

### 2. Image Optimization

Use Vercel's Image Optimization:
```tsx
import Image from 'next/image' // If using Next.js
```

For Vite, images are automatically optimized during build.

### 3. Code Splitting

Already implemented via Vite's automatic code splitting.

## Support

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions

## Quick Reference

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs

# List deployments
vercel ls

# Remove deployment
vercel rm deployment-url

# Check project info
vercel inspect
```

---

**Your DOFTA dApp is now live on Vercel! 🚀**

Access your deployment at: `https://your-project.vercel.app`