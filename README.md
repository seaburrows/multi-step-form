# Quick multi step form

An example of a multi-step form with all components hand-rolled :sushi:

> View the site here: https://upbeat-neumann-79f2d5.netlify.app

This form is broken into two steps and a thank you page.

It could be extended to have more steps by altering the configuration file.

[yup]() is used for all validation and to customise error messages.

## Setup

This project uses [Create React App]() under the hood.
To run locally:
- pull the repo
- install dependencies
- run local development environment with `npm run start`
- run tests with `npm run test`

> Note: the development version includes a print out of the form state.


## Requirements
Please see requirements in `./docs/requirements.pdf`;

## Next steps
1. More tests are required. End to end for the application would be useful, as well as enabling unit tests on the MultiForm component
2. Styling is very basic
3. Accessibility review
4. More form field types are required

## What I'd do differently

### Solution
Generally speaking I wouldn't roll my own solution when a good option already exists.
If this were a commercial project rather than an assessment, I would use [React Hook Form]() which brings the following benefits:
1. Established and battle-tested
2. More field types are already supported
3. Uses uncontrolled rather than controlled components. These are superior but lifecycle management can be complex. If I had more time, I would have used them here.
2. Includes Types which enhances DX

### Process

I started the project using [Vite]() in order to try something new. This was great for quick development, but adding tests was complex. I ended up swapping this out for [Create React App]() which I'm more familiar with and includes tests by default.