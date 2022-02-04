# AngularDemo

This project was created as an interview task. The tasks objectives were to showcase:

- Coding style and practices
- Markup/styling approach and skills
- Time management and prioritization

## Objective

You are given a detailed design document (see assets below) and tasked with implementing it as a single-page web application. You may break this exercise down as you prefer, here is an example of sub-objectives:

- Render markup (HTML) and stylesheet (CSS) according to design
- Populate application with provided mock data (JavaScript)
- Implement filtering mechanism according to design (JavaScript)

Along with a Figma design I was provided with mock data, which can be found in [assets/mocks](https://github.com/Kwandes/angular-demo/blob/main/src/assets/mocks/tasks.json).

## How to run the project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Breakdown of the process

### Why this tech stack

#### Angular

I have chosen to use Angular as I'm most used to it. I was strongly debating using react but I've decided to save myself time, plus by using angular I was able to tackle more complex aspects of the application.

#### CSS

I have chosen css over scss etc to keep the project simple. I didn't need any of the extra features provided by the more robust styling languages.

#### Git and GitHub

I host all of code on GitHub, only makes sense to keep this demo here as well.

#### Component Libraries

I have not utilized any component libraries due to the simplicity of the styling needed. I was able to accomplish all of the styling related tasks with ease with raw CSS and Angular.

If you wish to see how I interact with component libraries, you can see me using Angular Bootstrap and normal Boostrap in [Treecreate, a startup project I've been developing](https://github.com/treecreate/webstore).

### Priority and Time management

The repository minus the Readme took a total of 4 hours. During the development I have taken a few smaller breaks, so I substract 30 minutes from that time, coming down to 3 hours 30 minutes.

For every significant change I've made a commit, so you can easily see how I've developed the application.

I've started by taking the look at the requirements and design to determine what tech stack to use. I've decided to use Angular and raw CSS. I've also drafted a basic page layout on paper.

Once the app was generated, I've created components for navbar, footer and content, and did some basic styling to get everything into position using FlexBox. After that I have fleshed out the navbar and foobar, and moved onto content.

In the content I've first started by fleshing out the layout, after which I've created a component that would be used for every task (question).
I've implemented a service for fetching the mock data. The fetching is done via HttpService in a simliar fashion as it would have been done for an API call.

I've created interfaces and an enums to represent the task data, and moved onto styling the task component. After the styling was done, I have added an option to filter the tasks, and then finalized the repository with some minor refactoring like removal of console logs and addition of jsdocs.

#### Priority

##### Fetching data

What I found most important in this task was to be able to fetch and display a list of tasks and their information. It also had to follow the styling, but I paid less attention to it.

##### Filtering

I have impleted filtering but I was ready to drop that feature in case I ran out of time or it would prove more challenging than I could handle within the timeframe.

##### Styling

The final result does not match the figma design perfectly as I didn't want to spend time on perfecting the shadows and making sure everything is the exact same size as in Figma.

##### Fonts

I have not added custom fonts and used the defaults and some headings for that. The text is not as eye pleasing as it could be but it's a rather simple adjustments that is of low priority.

### Extra Notes

##### Thoughts

I have enjoyed this task. I find it to be a good balance of challenging code and time restricions. If it were shorter, it would be challening to accomplish all features on time, and if the scope were larger and the time was longer, it would be too big of a project for a technical interview task.

##### Typescript

While writing this readme I've realized I used Typescript instead of Javascript. I'm used to working with typescript and completely forgot to change Angular to Javascript during generation of the app ¯\_(ツ)\_/¯\

## License

Distributed under the MIT License. See [LICENSE](https://github.com/Kwandes/angular-demo/blob/main/LICENSE) for more information.
