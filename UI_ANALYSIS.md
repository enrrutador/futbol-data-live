# Football Data Platform - UI Analysis

## Project Overview
Building a comprehensive football data platform similar to LiveScore/SofaScore with modern UI/UX patterns.

## Design Philosophy
- **Mobile-first**: 70% of users access via mobile
- **Dark mode default**: Sports apps look better in dark mode
- **Real-time updates**: Live scores with smooth animations
- **Data-rich**: Visualizations without clutter

## Color Scheme

### Primary Colors
- `--primary`: #0EA5E9 (Sky Blue) - live indicators, primary actions
- `--primary-dark`: #0284C7 - hover states
- `--accent`: #10B981 (Emerald) - success, goal celebrations
- `--warning`: #F59E0B (Amber) - cards, alerts
- `--danger`: #EF4444 (Red) - errors, red cards

### Neutral Colors
- `--bg-primary`: #0F172A (Slate 900) - main background
- `--bg-secondary`: #1E293B (Slate 800) - card backgrounds
- `--bg-tertiary`: #334155 (Slate 700) - elevated surfaces
- `--text-primary`: #F8FAFC (Slate 50) - headings
- `--text-secondary`: #94A3B8 (Slate 400) - body text
- `--text-muted`: #64748B (Slate 500) - timestamps

### Team Colors
- `--home-team`: #3B82F6 (Blue)
- `--away-team`: #EC4899 (Pink)

## Component Structure

### Layout
```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx            # Homepage with hero + live matches
├── partido/[id]/       # Match detail page
├── equipo/[id]/        # Team detail page
├── jugador/[id]/       # Player detail page
└── liga/[id]/          # League detail page

components/
├── ui/                 # Core UI components
├── matches/            # Match-related components
├── players/            # Player components
├── teams/              # Team components
├── leagues/            # League components
├── charts/             # Data visualization
├── search/             # Search & navigation
├── alerts/             # Notifications
└── layout/             # Layout components
```

## Identified Gaps

### Missing Animations
- [ ] Score change animations (number flip)
- [ ] Live indicator pulse
- [ ] Page transitions
- [ ] Card hover effects
- [ ] Skeleton loading states

### Mobile UX Issues
- [ ] Touch targets too small
- [ ] Horizontal scroll on tables
- [ ] No swipe gestures
- [ ] Bottom nav missing

### Data Visualization Missing
- [ ] Possession bar charts
- [ ] Shot maps/heatmaps
- [ ] Player radar charts
- [ ] Performance line graphs
- [ ] League standings progression

## Component Requirements

### Match Card
- Show teams, score, time/status
- Live indicator with pulse
- Expandable for quick stats
- Team logos/coat of arms
- Competition badge

### Timeline View
- Vertical chronological events
- Goal icons with scorer
- Card icons (yellow/red)
- Substitution indicators
- Time markers

### Stats Panel
- Possession bar (animated)
- Shot count with accuracy
- Pass completion
- Fouls/cards count
- Corners

### League Table
- Position movement indicators
- Points with trend
- Form guide (W/D/L circles)
- Expand for details

## Animation Specifications

### Live Indicator
```css
@keyframes pulse-ring {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}
```

### Score Change
- Scale up 1.2 → 1.0
- Duration: 300ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

### Page Transition
- Fade + slide up
- Duration: 200ms
- Stagger for children

## Typography Scale

- **H1**: 2.5rem/40px - Page titles
- **H2**: 1.5rem/24px - Section headers
- **H3**: 1.25rem/20px - Card titles
- **Body**: 1rem/16px - Default text
- **Small**: 0.875rem/14px - Meta info
- **Tiny**: 0.75rem/12px - Timestamps

Font: Inter (Google Fonts)
Weights: 400, 500, 600, 700

## Spacing Scale

- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)

## Shadows

- `shadow-sm`: 0 1px 2px rgba(0,0,0,0.1)
- `shadow`: 0 4px 6px -1px rgba(0,0,0,0.1)
- `shadow-lg`: 0 10px 15px -3px rgba(0,0,0,0.1)
- `shadow-glow`: 0 0 20px rgba(14,165,233,0.3)

## Border Radius

- sm: 0.25rem (4px) - Small elements
- md: 0.5rem (8px) - Inputs, buttons
- lg: 0.75rem (12px) - Cards
- xl: 1rem (16px) - Large cards
- full: 9999px - Pills, avatars

## Breakpoints

- Mobile: < 640px (default)
- Tablet: 640px - 1024px (md, lg)
- Desktop: > 1024px (xl, 2xl)
