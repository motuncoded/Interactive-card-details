# Frontend Mentor - Interactive Card Details Form Solution

This is my solution to the [Interactive Card Details Form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- Fill in the form and see card details update in real-time
- Receive appropriate error messages for:
  - Empty fields
  - Incorrect formats (card number, expiry date, CVC)
  - Invalid card details
- View optimal layout across different devices
- See interactive element states (hover, focus, active)

## My Process

### Built With

- Semantic HTML5
- CSS Flexbox and Grid
- Mobile-first workflow
- Vanilla JavaScript
- CSS Custom Properties
- Form Validation Patterns

### What I Learned

Key learnings from this project:

1. **Real-time Input Formatting**:
   ```javascript
   // Format card number with spaces every 4 digits
   function formatCardNumber(value) {
     return value
       .replace(/\s+/g, "")
       .replace(/(\d{4})/g, "$1 ")
       .trim();
   }
   ```
