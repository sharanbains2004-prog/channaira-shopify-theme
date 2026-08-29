# Channaira Shopify Theme

This repository contains a starter Shopify theme converted from an HTML mockup you provided. It's an editable, minimal theme you can extend in the Shopify Theme editor or modify locally.

Quick start

1. Clone the repo:
   ```bash
   git clone git@github.com:sharanbains2004-prog/channaira-shopify-theme.git
   cd channaira-shopify-theme
   ```

2. Install Shopify CLI (see https://shopify.dev/cli) and authenticate with your store.

3. Preview locally:
   ```bash
   shopify theme serve
   ```

What's included

- layout/theme.liquid — main theme layout
- templates/index.liquid — homepage converted from your HTML
- templates/cart.liquid — simple cart page
- snippets/header.liquid, snippets/footer.liquid — header & footer markup
- assets/styles.css, assets/main.js — basic styling and JS (placeholders, replace with your full CSS/JS as desired)
- config/settings_schema.json — theme settings (minimal)
- locales/en.default.json — localization strings

Notes

- This is a starter conversion. I kept most markup intact and added basic Liquid where it made sense (cart count, year). To make sections editable from the Shopify theme editor I'll convert parts to `sections/*.liquid` on request.
- If you'd like I can:
  - Convert the homepage into modular sections so you can edit content from the Shopify Customizer.
  - Add product/collection templates that use your store's real products.
  - Create a feature branch and open a PR so you can review before merging to main.

If you'd like me to continue and convert the homepage into Shopify sections and wire dynamic product loops, tell me and I will proceed.