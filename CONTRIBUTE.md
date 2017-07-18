# Contributing Guide

## Welcome

Thank you for your interest in contributing to this project, I hope you find this guide informative and useful to get started.

If you do find things confusing or words that need correcting please feel free to post an issue or submit a pull request to correct the problem.

## Goal of Project

The goal of this project is to provide some simple generic react components that can be used for several different cases and are style agnostic with some clean defaults. The defaults are from `tachyons` a functional approach to style. But you should be able to role your own styles without having to use tachyons, if you prefer another approach.

All of the components should be presentational or stateless components, there may be some cases where it makes sense not to be the case, but for the most part every component in this library should be stateless.

This library should work and get out of the way, it should not introduce any additional workflow or complexity, it should just be presentational components that can conform to any system or style.

All components should be tested and documented, no component should be added to this library without a README and some unit tests.

## Project structure

### src

The project structure is simple, the src folder contains a list of all the available components as children folders. The index.js file in the src directory is responsible for exporting all available components for the library. Each component folder consists of at least three files. (README.md, index.js, test.js) - the README.md file contains the document of the component, how to use it and what it does and why, maybe some additional information on how to style the component, the test.js file contains all the unit tests for the component, and the index.js file contains the implementation details for the component.

### dest

The dest folder is where the module library is bundled for use for various platforms:

bundle.cjs.js - commonjs
bundle.es.js - es2015+
bundle.umd.js - requirejs

### README.md

Documentation for the entire libray

### LICENSE.md

License file for the project

### CODE_OF_CONDUCT.md

How we should conduct our selves as contributors and users of this project

### CONTRIBUTE.md

How someone could go about contributing to a project. You are reading it. :P

### rollup.config.js

The configuration file for the project

## How to contribute a component?

### Is this the right home for your contribution?

If you find yourself using a component over and over again and are very tired of copying and pasting between projects, or you have a component that may be useful for other developers and you would like to share it, without going to the trouble of creating and maintaining a full open source project, this may be a good home for your component. If the proposal is not already filed as an issue, the first step would be create an issue to make a proposal.

### Step 1 - Create an Issue to make a proposal for your component. [issues](issues)

### Step 2 - Write the README, test.js and index.js

### Step 3 - Verify all tests pass `npm test`

### Step 4 - Add your component to the `src/index.js` export list and document the README.md with your component linked in the components section.

### Step 5 - Submit your code as a pull request

### Step 6 - wait for a review if you have not heard anything in 72 hours, maybe send a kind nudge comment to the pull request.

Once reviewed and approved, your component will be published to npm as a new minor version, since it should not be a breaking change.

## FAQ

TODO: We will try to add questions as they come up, or you can also add your question here, and we will try to answer it here.

## Summary

Contributing to open source should be fun and on everyones time. If you have interest in becoming a core contributor, make a few contributions, manage some issues and fix some bugs, help us improve the project and move it forward and being a core contributor will be in your future.
