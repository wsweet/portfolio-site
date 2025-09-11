# Will Sweet Portfolio Site

This is my personal portfolio site built with [Eleventy](https://www.11ty.dev/).

---

## 🗂️ Project structure

Source files live in:

```
src/
 ├── assets/               # Static assets
 │   ├── css/custom.css    # ✅ Handwritten gradient buttons (no build step)
 │   ├── images/           # Project screenshots and other images
 │   ├── favicon.png       # Optional favicon
 ├── _includes/            # Eleventy layouts & partials
 │   ├── base.njk          # ✅ Site wrapper layout for some pages
 │   ├── partials/
 │       ├── header.njk    # Site header/navigation
 │       ├── footer.njk    # Site footer
 ├── projects/             # Individual project Markdown files
 │   ├── portfolio-website.md
 ├── projects.njk          # Projects index page template
 ├── .eleventy.js          # Eleventy config
```

---

## ✅ Layout conventions

- The site wrapper layout is: `src/_includes/base.njk`
- Pages that use the full site wrapper (like `/projects/` and individual project pages) include:

  ```
  layout: base.njk
  ```

- Other pages (like `index.md` or `contact.njk`) may use a different layout or none at all.
- Important: There is no `layouts/` folder — `base.njk` lives directly in `_includes/`.

---

## ✅ Partials

- Header partial: `{% include "partials/header.njk" %}`
- Footer partial: `{% include "partials/footer.njk" %}`

---

## ✅ Styles

- Custom gradient button classes live in `src/assets/css/custom.css`.
- The styles are linked in `base.njk`:

  ```html
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/css/custom.css" />
  ```

---

## ✅ Passthrough copy

`.eleventy.js` ensures static assets are copied:

```js
eleventyConfig.addPassthroughCopy("src/assets");
```

---

## ✅ Projects collection

- Projects are `.md` files in `src/projects/` with:

  ```yaml
  tags: ["projects"]
  ```

- The collection is defined in `.eleventy.js`:

  ```js
  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi.getFilteredByTag("projects").reverse();
  });
  ```

- The `/projects/` page loops:

  ```njk
  {% for project in collections.projects %}
    ...
  {% endfor %}
  ```

---

## ✅ Local dev

Run:

```bash
npx eleventy --serve
```

Push to `main` — Netlify auto-builds and deploys.

---

## ⚡️ Key rule

If `base.njk` is moved or renamed, update the `layout:` in the pages that use it.  