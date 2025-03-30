## Inspiration
When our group realized the focus on AI at HooHacks, we were very excited to see what we could do with it. As we brainstormed ideas and began researching AI, we realized how overlooked the environmental impact is. We settled on this project to help raise awareness for the massive amounts of energy consumed by AI and the internet as a whole. 

## What it does
Sustainable Sites is a browser extension/website combination that tracks the energy usage and carbon emissions of your web browsing. When the user visits a website, they can click on the extension icon to see the electricity usage of the site they're on (in kWh), the carbon emissions (in grams of CO~2~), and a "carbon rating" (from A+ to F). To see more details, the user can click "see emission breakdown" to see their total emissions across all browsing, as well as some fun metrics like how many times an iPhone could be charged using the electricity from their web browsing.

## How we built it
The project was built using HTML, CSS, and Javascript, as well as the [Website Carbon Calculator API](api.websitecarbon.com). After lots of group discussion at the start, every group member found their niche and made significant contributions to the project. 

## Challenges we ran into
Perhaps the single biggest challenge (and one we ultimately never managed to solve) was detecting the user's AI queries to factor into the total emissions. The first hurdle was detecting when a site clicked the "send" button on a website like ChatGPT or Gemini. Given the group's general inexperience in JavaScript, this seemingly simple task proved very difficult, especially since those websites have dynamic send buttons which are not always present. After doing more research, we managed to solve the problem using a JavaScript method that we hadn't known about previously. Two unsolved problems remained: counting the number of queries to factor into total emissions, and including queries where the user didn't explicitly press the "send" button (which makes up most queries to AI chatbots)

## Accomplishments that we're proud of
- Learning how to API with JavaScript to get emissions data
- Making a nice-looking website with embedded images
- Submitting at our first hackathon!

## What we learned
Prior to this project, only one group member had significant experience in web development. Now, all of us can claim knowledge of (very) basic front-end and back-end web dev, as well as additional experience using APIs. In addition, the group practiced using Git -- we learned the hard way why the whole group shouldn't work on the main branch at the same time. 

## What's next for Sustainable Sites
The group came up with so many ideas for features that we had neither the time nor skills to implement during the hackathon. These include:
- hosting the website on its own domain
- coloring google search results based on each website's carbon rating 
- counting AI queries 
- including water usage in addition to carbon and electricity
- expanding the whole project to an app that counts emissions across all computer usage

We hope to post our browser extension on the Chrome extension store once it is in better working condition