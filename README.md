# Cost price tool for suppliers
A Fresho front-end challenge, creating a standalone pricing tool for customers

## Technologies used

- React / Typescript / Javascript
- Vite
- Tests: Vitest & React Testing Library
- Styled Components (CSS-in-JS)
- Eslint & Prettier
- HTML

These technologies were selected because:
- I'm already familiar with most of these & it's a good modern stack
- Vite & Vitest are recommended as a more modern stack than Create-React-App (depreciated) and Jest, with better performance. (Vite is mostly new to me, and Vitest completely new). I considered Remix and Next, which are both good options for full-stack especially server side rendering, however considered them overkill for this small project.
- I tried Mantine component library (new to me) because I thought it would streamline styling so I could focus on other things, however when push came to shove had a problem running Mantine and decided it was not worth the time debugging further for this task.


## Installation

To get started with the Price tool, follow these steps:

1. Clone the repository to your local machine:

```bash 
git clone git@github.com:lucitemple/fresho-frontend-challenge.git 
```

2. Navigate to the project directory

```bash 
cd fresho-frontend-challenge
```

3. Install dependencies. Note the project uses Node v18.17.1.

```bash 
nvm install 18
npm install
```

4. Run the app locally in dev mode
```bash 
npm run dev
```

5. To run tests, there are a number of options/scripts in `package.json`. For example
```bash 
npm run test
```


## How I approached the challenge:
- Made sure I understood the challenge requirements / wishlist, asked a few clarifying questions
- Considered the technologies to use, some I know, and some I wanted to learn. The reason I tried some new technologies is because tech changes fast and I didn't want to be using an out of date tech stack, it was a good opportunity to learn something new, and I also didn't want to look set in my ways just sticking to what I already know. 
- Broke the challenge into smaller tasks, and prioritised them. 

Priorities:
- Setup up, especially tests, linting, etc for code quality
- I initially used a TDD approach, however not for the whole project
- Initial focus on functionality to at least get a 'happy path' so a user can add their input (product, cost, value/margin) and get a calculation out in return.
- Stored search results in local storage, and printed results into a table so the user can refresh and still see their past calculations, as well as clarity on method used to gain pricing.
- Had to balance up whether to do a little bit very well (and ignore a number of the requirements) or give a 'sample' approach where I have shown a bit of a range of things - some functionality, some logic, some tests, some styling, some refactoring, some clean code, - hopefully enough to give you the gist of what I can do/ would do if had more time. I'm not sure if this was the right approach, I guess you will let me know!
- Left styling/branding to last-ish, just did a quick/basic job


## What I would do if I had more time:
- Tests, tests, tests, and more tests. 
- On a bigger project would do more setup to ensure code quality - dig more into husky,linting rules, etc set up tests to runon commit and as part of  CI/CD, and so on.
- Code the edge cases, fix the bugs, debugging. I'm seeing a couple different things in different browsers (perhaps I shouldn't out myself in the hope you won't see them...). Sometimes the dropdown options are in the wrong place; if the user doesn't take the happy path (changes inputs multiple times in a random order rather than 'saving') it may give the incorrect calcuation or have a poor user experience with inputs not responding as intended. It's usable but kind of shitty on mobile.
- Add media break-points and/or styling that works better across devices. I approached this tablet-first.
- Accessibility audit, using a range of tools and checking across a range of browsers and devices. 
- Refactoring, cleaner code, more elegant solutions.
- Hypothetically there are a number ways the tool's functionality could be extended, such as integration with the user's account so their calculations could be automatically applied to their products,  an upload facility and/or integration with other software they use for bulk uploads, pricing/market trends so they know what competitors are charging or if there is an under/oversupply, as well as more financial tools to account for all their overheads and work out what a real 'profit' margin would look like and help them make better pricing decisions,.

## What I (hope) I wouldn't do again:
There's a few things that I'm not sure if I went the right way on. 
- Underestimated how long things would take.
- Felt spread thin; maybe(?) should have focused on just doing part of the task really well.
- I'm not particularly happy with this code, however I note it is intended as a 4hr challenge, and I wouldn't have been able to do everything to the level I want within that time.
- Perhaps should have stuck with technologies I'm most familiar with - they were pretty similar, however led to a few extra challenges and deadends.


## Challenge Description

At Fresho we support our suppliers who buy produce from the wholesale markets and sell that produce to restaurants and cafes.  Before they can sell a product they need to establish what price they will sell it for.  This is often based on the price that they bought the product for.  So for example.  They might have bought 10kg of Fuji apples for $0.99/kg.  They then want to sell the same product for $1.16 or with a 15% margin.

We want you to create a simple online tool that helps them set the price for a given product and shows them the margin they’ll get.  The tool has the following requirements:

* A user can see a list of the products with the associated cost price, sell price and margin.  (see table below)
* A user sees prices in dollars ($) and margins in percentages (%)
* A user can either adjust the $ value or they can specify a margin.  Margin = (sell price - cost price) / sell price.
* The sell price value or margin is updated automatically depending on which value was set.
* It should be clear to the user which method was used to set the sell price, either the $ value or the margin.
* The system should remember which method was used to set the price, either $ value or margin.
* If the user refreshes the page then the calculator should remember the last set of prices.

* We’ve provided a table below to help understand the basics of the tool.  We’ve also provided a data file which can be found [here](https://fresho-coding-challenge.s3.ap-southeast-2.amazonaws.com/products.json).  In this file you’ll find a list of products with the name, code, cost price, sell price and margin and the method used.  The “method” property can be either “value” or “margin”.  This tells the user which method they used to determine the price.

| Product | Cost ($) | Sell price $ | Sell price % |
| ---| --- | ---- | ---- | 
| Fuji apples | $0.99 | $1.16 | 15% |
| Cavendish bananas| $0.55 | $0.70 | 21% |
| Navel oranges | $0.75 | $0.80 | 12% |

Some further instructions:
* You can use any tool or framework that you feel is appropriate to build the tool.
* We’d like you to build this with a tablet first mindset.
* We'd like to see how your solution evolved from start to finish.
* We’d like you to submit your solution via GitHub (a private fork of the project will suffice).


