# DOFTA Design System

## 🎨 Color Palette

### Gradient Background
The main gradient flows from deep purple through vibrant purple to hot pink:
- **Start**: `#7c3aed` (Deep Purple)
- **Middle**: `#a855f7` (Vibrant Purple)  
- **End**: `#ec4899` (Hot Pink)

Applied as: `background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)`

### Text Colors
- **Primary Text**: White (`#ffffff`)
- **Secondary Text**: White with 90% opacity (`rgba(255, 255, 255, 0.9)`)
- **Muted Text**: White with 70-80% opacity (`rgba(255, 255, 255, 0.7-0.8)`)

### Icon Styling
All icons are **white** with **colored outline effects**:
- Base color: White
- Stroke width: 2px
- Glow effects using drop-shadow filters:
  - Purple glow: `drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))`
  - Pink glow: `drop-shadow(0 0 8px rgba(236, 72, 153, 0.8))`

## 🎭 Visual Components

### Glass Morphism Cards
```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
}
```

### Buttons

**Primary Button (Glass Effect)**
- Background: `rgba(255, 255, 255, 0.2)`
- Hover: `rgba(255, 255, 255, 0.3)`
- Border: `rgba(255, 255, 255, 0.3)`
- Text: White
- Effect: Purple glow on hover

**Accent Button (Gradient)**
- Background: Gradient from purple to pink
- Text: White
- Effect: Pink glow on hover

**Secondary Button (Outline)**
- Background: Transparent
- Border: 2px solid white with 50% opacity
- Text: White
- Hover: Subtle white background

### Badges
- Background: `rgba(255, 255, 255, 0.2)`
- Border: `rgba(255, 255, 255, 0.3)`
- Text: White
- Variants with purple/pink tints

## 📐 Layout Principles

### Spacing
- Container padding: 4-8 units (16-32px)
- Card padding: 6-8 units (24-32px)
- Element spacing: 2-4 units (8-16px)

### Typography
- Font family: Inter, system-ui, sans-serif
- Headings: Bold, with optional glow effect
- Body text: Regular weight, white with varying opacity

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Effects & Animations

### Text Glow
```css
.text-glow {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.text-glow-purple {
  text-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
}

.text-glow-pink {
  text-shadow: 0 0 20px rgba(236, 72, 153, 0.8);
}
```

### Icon Outlines
```css
.icon-outline {
  stroke: white;
  stroke-width: 2;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
}

.icon-outline-purple {
  stroke: white;
  stroke-width: 2;
  filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.8));
}

.icon-outline-pink {
  stroke: white;
  stroke-width: 2;
  filter: drop-shadow(0 0 8px rgba(236, 72, 153, 0.8));
}
```

### Animations
- **Fade In**: 0.5s ease-in
- **Slide Up**: 0.5s ease-out
- **Slide Down**: 0.5s ease-out
- **Hover Scale**: 1.02x transform
- **Transition Duration**: 300ms for most interactions

## 🎯 Component Examples

### Header
- Glass morphism background
- White logo with purple glow
- White navigation links
- Gradient accent button for wallet connection

### Stats Cards
- Glass morphism with hover effect
- Large white numbers
- White icons with colored outlines
- Colored badges for metrics

### Feature Sections
- Glass morphism containers
- White headings with colored glows
- White body text with 80% opacity
- Bullet points with white dots

### Footer
- Glass morphism background
- White text with varying opacity
- Organized in grid layout
- Subtle divider line

## 🔧 Usage Guidelines

### Do's ✅
- Use white for all text
- Apply glass morphism for cards and containers
- Use colored glows for emphasis
- Maintain consistent spacing
- Keep icons white with colored outlines
- Use the gradient background throughout

### Don'ts ❌
- Don't use dark text on the gradient
- Don't use solid colored backgrounds for cards
- Don't mix different gradient directions
- Don't use icons without the white base color
- Don't create low contrast combinations

## 📱 Responsive Behavior

### Mobile (< 768px)
- Single column layouts
- Hamburger menu for navigation
- Full-width cards
- Larger touch targets (min 44px)

### Tablet (768px - 1024px)
- Two-column grids
- Condensed navigation
- Balanced card sizes

### Desktop (> 1024px)
- Multi-column layouts
- Full navigation bar
- Optimal card proportions
- Hover effects enabled

## 🎨 Color Reference

```javascript
// Tailwind Config Colors
colors: {
  primary: {
    500: '#a855f7',  // Main purple
    600: '#9333ea',
    700: '#7e22ce',
  },
  accent: {
    500: '#d946ef',  // Main pink
    600: '#c026d3',
  },
  'gradient-start': '#7c3aed',
  'gradient-middle': '#a855f7',
  'gradient-end': '#ec4899',
}
```

## 🚀 Implementation Status

✅ Gradient background implemented
✅ White text system configured
✅ Icon outline system with colored glows
✅ Glass morphism components
✅ Button variants
✅ Card components
✅ Animation system
✅ Responsive design
✅ Typography scale
✅ Spacing system

---

**Design Philosophy**: Clean, modern, and vibrant. The purple-to-pink gradient creates an energetic backdrop while white text and outlined icons ensure excellent readability and a premium feel.