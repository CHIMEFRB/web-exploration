# Research for `public-web` rework:

## Vue vs React:

| Vue | React |
| --- | --- |
| Faster & Smaller than React.  | Better community support. |
| Current public-web website is written in Vue 2, so it will be easier to migrate during the rewrite if we use Vue 3.  | More widely adopted, has more libraries/plugins support. |
| Better developer experience |  |

## Tech Stack #1:

- **Runtime:** Bun.js
- **Language:** TypeScript
- **Build tool:** Vite
- **Styling:** TailwindCSS
- **Framework:** Vue 3 with Nuxt

With this stack, we can use the following component libraries:

- [shadcn/ui-vue](https://www.shadcn-vue.com/)  **
    - **Pros:**
        - A lot more control over everything as individual components are editable.
        - Lightweight, we use only the components we need.
        - Works well with TypeScript and TailwindCSS out of the box.
        - Since everything is customizable, we can adopt it to any design philosophy we want, e.g. Primer Design System.
    - **Cons:**
        - Very barebones.. This could be a pro or a con depending on how you look at it.
- [primeVue v4](https://v4.primevue.org/setup/)
    - **Pros:**
        - Complete design system.+ opinionated UI library.
        - Works well with Tailwind.
        - Provides a wide range of components, utilities, theming, out of the box. Everything we need and more.
        - Design-agnostic, offers a good degree of control over the look and feel.

        - Overall a very viable choice for our use case if we use Vue.

## Tech Stack #2:

- **Runtime:** Bun.js
- **Language:** TypeScript
- **Build tool:** Vite
- **Styling:** TailwindCSS / SASS (especially if using Primer!)
- **Framework:** React 19 w/ Next.js 15

> React 19 is in RC right now.
> 

With this stack, we can use the following component libraries:

- [*shadcn/ui](https://www.shadcn-vue.com/)*
    - **Pros:**
        - A lot more control over everything as individual components are editable.
        - Lightweight, we use only the components we need.
        - Works well with TypeScript and TailwindCSS out of the box.
        - Since everything is customizable, we can adopt it to any design philosophy we want, e.g. Primer Design System.
    - **Cons:**
        - Very barebones.. This could be a pro or a con depending on how you look at it.
- [GitHub’s Primer Design System](https://primer.style/)
    - **Pros:**
        - GitHub’s complete design system + philosophy.
        - *Very* opinionated. Good for making *GitHub-y* websites.
        - Has pretty much everything we need out of the box, e.g:
            - Components
            - Theming
            - Colors
    - **Cons:**
        - Hard to style individual components.
        - A ***lot*** of the components are in Experimental/Alpha stages in terms of their implementation/testing.
            
            > **Alpha:** The component is ready for preliminary usage, with breaking changes expected.
            **Experimental:** Proof-of-concept, often built outside of Primer.
            > 
        - Not sure about its compatibility with React 19.
    
    Good as a design system but not sure about it’s reliability. 
    
- [*Ant Design*](https://ant.design/) / [Material UI](https://mui.com/material-ui/):
    - Other design systems we can adapt as a substitute for Primer.
    - Material UI is has a pro version, which is great.
    - Both force you into their own design spec.
