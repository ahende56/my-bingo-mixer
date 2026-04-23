---
name: design-guide
description: Guide for creating distinctive, thematic web designs with creative visual elements and immersive experiences. Use when: designing UI components, creating visual themes, implementing interactive elements.
---

# Design Guide: Thematic Immersion

## Core Philosophy
Create visually distinctive, thematically coherent designs that transport users into immersive worlds. Each design should tell a story through color, motion, and atmosphere rather than following generic patterns.

## Thematic Design Process

### 1. Choose a Strong Theme
- **Avoid generic**: No plain blues, grays, or standard color schemes
- **Be specific**: Vaporwave sunset, space galaxy, cyberpunk city, tropical paradise, etc.
- **Commit fully**: Every element should reinforce the theme

### 2. Color Palette Construction
- **Primary colors**: 2-3 dominant hues that define the theme
- **Accent colors**: Bright, contrasting elements for interaction feedback
- **Gradients**: Use CSS gradients extensively for depth and atmosphere
- **Background**: Layered effects (stars, particles, geometric patterns) instead of flat colors

### 3. Typography & Visual Hierarchy
- **Unique fonts**: Choose distinctive typefaces (avoid Arial, Inter, Roboto)
- **Effects**: Drop shadows, glows, gradients on text
- **Spacing**: Generous padding and margins for breathing room
- **Scale**: Dramatic size differences for visual impact

### 4. Interactive Elements
- **Animations**: Subtle but meaningful motion (pulse, bounce, scale)
- **Feedback**: Immediate visual response to user actions
- **Hover states**: Transform elements on interaction
- **Transitions**: Smooth, satisfying state changes

### 5. Atmospheric Details
- **Particles**: Floating elements (stars, bubbles, geometric shapes)
- **Overlays**: Backdrop blur, translucent layers
- **Patterns**: Subtle grids, textures, or thematic motifs
- **Depth**: Layer elements with z-index and shadows

## Implementation Guidelines

### CSS Techniques
```css
/* Gradient backgrounds */
background: radial-gradient(ellipse at center, color1 0%, color2 100%);

/* Glowing effects */
box-shadow: 0 0 20px rgba(color, 0.5);

/* Animated particles */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

### Component Structure
- **Background layers**: Multiple divs for particles and effects
- **Content containers**: Backdrop blur with translucent backgrounds
- **Interactive elements**: Gradient fills, border glows, scale transforms
- **Typography**: Gradient text, drop shadows, custom fonts

### Performance Considerations
- Use CSS animations over JavaScript where possible
- Limit particle counts for mobile performance
- Optimize backdrop-filter usage
- Consider reduced motion preferences

## Theme Examples

### Space Galaxy Glow
- Colors: Electric cyan (#00ffff), magenta (#ff00ff), midnight blue (#191970)
- Elements: Twinkling stars, nebula effects, glowing borders
- Typography: Futuristic fonts like Orbitron
- Atmosphere: Deep space with cosmic particles

### Vaporwave Sunset
- Colors: Warm oranges (#ff6b35), pinks (#ff1493), purples (#9932cc)
- Elements: Geometric patterns, neon accents, retro-futuristic motifs
- Typography: Monospace fonts with glow effects
- Atmosphere: Nostalgic, tropical, cyberpunk fusion

## Quality Checklist
- [ ] Theme is distinctive and memorable
- [ ] Color palette tells a cohesive story
- [ ] Animations enhance rather than distract
- [ ] Typography is readable yet expressive
- [ ] Interactive elements provide satisfying feedback
- [ ] Performance is optimized for target devices
- [ ] Design avoids generic AI aesthetics

## When to Apply
Use this guide for:
- Complete UI redesigns
- New component creation
- Theme implementation
- Interactive element design
- Visual atmosphere creation

Avoid for:
- Simple functional updates
- Accessibility-only changes
- Performance-critical code without visual impact</content>
<parameter name="filePath">/workspaces/my-bingo-mixer/.github/instructions/design-guide.instructions.md