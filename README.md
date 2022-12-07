# Gatsby Storybook Issue

Storybook stories may not import `Link` from `gatsby` when using Gatsby 4.25.0, React 17.0.2, and Storybook 6.5.14.

This repo is a fresh install of  4.25.0 and Storybook 6.5.14 configured using the Gatsby [Visual Testing with Storybook](https://www.gatsbyjs.com/docs/how-to/testing/visual-testing-with-storybook/) guide.


## Issue

Including `import { Link } from "gatsby"` in a component imported into a story causes an error in Storybook:

```bash
ModuleNotFoundError: Module not found: Error: Can't resolve 'react-dom/client' in '/gatsby-storybook-issue/node_modules/gatsby/cache-dir'
```

If `import Link from "gatsby-link"` is used instead, the error goes away

## To Reproduce

1. Clone this project
2. Run `npm install`
3. Run `npm run storybook`
4. Go to http://localhost:6006/?path=/story/gatsby-button--default
5. Observe error

Change `import { Link } from "gatsby"` to `import Link from "gatsby-link"` in `/gatsby-storybook-issue/src/components/Button.jsx` and observe Story rendering as expected.
