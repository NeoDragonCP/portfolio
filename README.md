## Personal Portfolio

![Screenshot](screenshot.png)
Screenshot

# About

This is my personal portfolio.
I'm currently looking for employment in a Front End role. If you are recruiting for such a role I'd love to hear from you.
This website was built with Javascript/React/JSX.

I used styled-components to style my own custom, re-usable components throughout the site.
Components such as the cards for displaying projects are fully dynamic. Controlled by the props passed to them. The component itself handles output and mapping through arrays as needed.
Some components are only rendered on desktop, such as the "scroll to top" (the nav handles the jump-scrolling on mobile).
Speaking of which, I did use some hooks such as useRef (for the scrolling to elements) and useState.
Framer Motion is used for animating of some elements such as the "Header Text" (my name at the top of the page).
Email.js is used for actually sending an email to me from my contact form.

Dark mode included. Theme choice is also saved to local storage and on page reload your choice will be loaded back up.
(Site was designed by me, originally on Figma)

Hosted here on Github Pages.
Set up to run "npm run deploy" to build the production build of the site.

# Link To Site

https://neodragoncp.github.io/portfolio/

# Bugs

Yup, in my own repo for a site I'm using to showcase my skills, I'm admitting there is bugs.
The obvious one is I didn't use the Theme Context Provider correctly to pass the theme throughout the components and instead ended up passing it as a prop. I hate prop hell and prop drilling but I am actively looking for work at the time of this commit so my goal was just to get the site up to showcase my work on a visual level, hopefully land the interview, and then I can explain what I'd change to the interviewer 😂.
I promise if you look at my other projects such as my currency convertor I have used it correctly in the past!

If you are getting console errors, try disabling ad blocker. The errors are caused by advert trackers from the Youtube videos that are embedded in the page.
