# Design Spec: Card Deck Shuffle Mode

## Overview
New gameplay mode where players receive individual question cards instead of bingo grids. Each tap reveals a new random question from the deck.

## User Journey
1. Player opens app
2. Sees "Card Deck Shuffle" mode option
3. Taps to draw first card
4. Views question on card
5. Taps again for next random question
6. Continues drawing cards

## Implementation Status ✅

### ✅ Mode Selection Screen
- Added "CARD DECK SHUFFLE" button to StartScreen
- Distinctive card deck theme with playing card emojis
- Two-mode selection: Bingo Grid vs Card Deck

### ✅ Card Display Screen
- Created CardDeckScreen component
- Large card deck stack in center with hover effects
- Tap-to-draw interaction
- Card reveal animation with bounce effect
- Progress tracking (cards drawn counter)

### ✅ Card Design
- Playing card aesthetics (rounded corners, drop shadows)
- Suit symbols (♥ ♦ ♣ ♠) on cards
- Question text prominently displayed
- Responsive sizing for mobile
- Card table background with subtle patterns

## Technical Implementation
- **State Management**: React useState for current question and drawn cards
- **Randomization**: Fisher-Yates shuffle algorithm for question selection
- **Deck Logic**: Tracks drawn cards, resets when deck empty
- **Animations**: CSS transitions and bounce effects
- **Responsive**: Mobile-first design with touch-friendly interactions

## UI Components Created
- `StartScreen`: Updated with mode selection
- `CardDeckScreen`: New component for card deck gameplay
- `App.tsx`: Updated routing for mode selection

## Visual Design
- **Theme**: Card deck with casino/game room feel
- **Colors**: Warm card table colors (greens, reds, blacks)
- **Typography**: Classic card font for questions
- **Animations**: Card flip effects, hover scaling, bounce reveals

## Success Metrics ✅
- ✅ Intuitive card drawing interaction
- ✅ Engaging visual feedback with animations
- ✅ Clear question readability
- ✅ Smooth performance on mobile
- ✅ No regressions in existing functionality

## Future Enhancements
- Sound effects for card draws
- Card flip animations
- Multiple card backs/themes
- Statistics tracking
- Social sharing features