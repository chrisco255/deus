// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Fill,
  Slide,
  Text,
  Table, TableRow, TableHeaderItem, TableItem, TableHeader, TableBody,
  CodePane,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  angular: require("../assets/angular.svg"),
  react: require("../assets/react.svg"),
  developerSatisfaction: require("../assets/developerSatisfaction.png"),
  trends: require("../assets/trends.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            The Case for React
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Functional, Consistent, Flexible, Simple, Superior UI
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>The Problem</Heading>
          <List>
            <ListItem>Development needs to go faster</ListItem>
            <ListItem size={6}>AngularJS & Ionic gotchas are slowing us down</ListItem>
            <ListItem>Angular 1 is on life support</ListItem>
            <ListItem>We need to select a tool that will serve us well now and 5+ years into the future</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="secondary" caps>The Choice</Heading>
          <div style={{ display: "flex" }}>
            <Fill bgColor="tertiary">
              <img src={images.angular} style={{ height: 180 }} />
              <Text>Angular 2</Text>
            </Fill>
            <Fill>
              <img src={images.react} style={{ height: 200 }} />
              <Text>React</Text>
            </Fill>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Simplicity is prerequisite for reliability.</Quote>
            <Cite>Edsger W. Dijkstra</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="primary" caps>Brief History of Front End</Heading>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Year</TableHeaderItem>
                <TableHeaderItem></TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem style={{ marginRight: 15 }}>2010</TableItem>
                <TableItem><Text fit>Backbone, Knockout, Angular Released</Text></TableItem>
              </TableRow>
              <TableRow>
                <TableItem style={{ marginRight: 15 }}>2011</TableItem>
                <TableItem><Text textAlign="left">Ember Released</Text></TableItem>
              </TableRow>
              <TableRow>
                <TableItem style={{ marginRight: 15 }}>2013</TableItem>
                <TableItem><Text textAlign="left">React Released</Text></TableItem>
              </TableRow>
              <TableRow>
                <TableItem style={{ marginRight: 15 }}>2014</TableItem>
                <TableItem><Text textAlign="left">Angular Team Announces Rewrite</Text></TableItem>
              </TableRow>
              <TableRow>
                <TableItem style={{ marginRight: 15 }}>2016</TableItem>
                <TableItem><Text textAlign="left">Angular 2 Released</Text></TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary">Something happened in 2013 that triggered Angular to rewrite their framework</Heading>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">How React Changed the Game</Heading>
          <List>
            <ListItem>Component driven architecture</ListItem>
            <ListItem>Simple, minimalist architecture</ListItem>
            <ListItem>Virtual DOM => High Performance</ListItem>
            <ListItem>Unidirectional data flow => More predictable state management</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">React Popularized Component-Driven Architecture</Heading>
          <List>
            <ListItem>Introduced JSX: Clean HTML components inside JS</ListItem>
            <ListItem>Built on functional programming principles</ListItem>
            <ListItem>Blazingly fast thanks to Virtual DOM</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">Angular's Sad Component Story</Heading>
          <List>
            <ListItem>Angular's directives were tightly coupled to controller implementation</ListItem>
            <ListItem>So Angular bolted in a component pattern to v1.5 in 2016</ListItem>
            <ListItem>Both 1.5 and 2 rely on proprietary Angular DSL</ListItem>
            <ListItem>DSL in 2 differs dramatically from NG1.5</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">Angular's Sad Component Story (cont'd)</Heading>
          <List>
            <ListItem>Angular components fail at run-time</ListItem>
            <ListItem>Require multiple files to describe</ListItem>
            <ListItem>Wiring up components is more complicated</ListItem>
            <ListItem>You might need an AOT and def a CLI</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Angular makes you better at Angular.</Quote>
            <Quote>React makes you better at JavaScript.</Quote>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">The Simplicity of React</Heading>
          <List>
            <ListItem>Built on Functional principles</ListItem>
            <ListItem>Similar to mathematical functions: <br />f(x) => x</ListItem>
            <ListItem>React components are a function of <br />f(state, props) => UI</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>A One-Line React Component</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/react-component.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>The Simplest Angular Component</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/angular-component.example")}
            margin="20px auto"
          />
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/angular-module.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>A Stateful React Component</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/react-component2.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>A Stateful Angular Component 1 of 2</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/angular-component2.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>A Stateful Angular Component 2 of 2</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/angular-module2.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>Fun With Angular DSL</Heading>
          <CodePane
            lang="html"
            source={require("raw-loader!../assets/angular-dsl.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>Angular Is Over-Engineered</Heading>
          <List>
            <ListItem>React has <a href="https://facebook.github.io/react/docs/react-api.html" target="blank">11</a> top level API methods</ListItem>
            <ListItem>Angular has <a href="https://angular.io/docs/ts/latest/api/" target="_blank">over 500</a> top level API concepts</ListItem>
            <ListItem>Huge surface area means more complexity, more moving parts, bigger learning curve</ListItem>
            <ListItem>Complex framework yields complex applications</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>Angular Is Over-Engineered</Heading>
          <List>
            <ListItem>Angular forces decisions on you <br />(i.e. TypeScript)</ListItem>
            <ListItem>Angular's engine is more complex</ListItem>
            <ListItem>Zone.js overrides native HTTP methods</ListItem>
            <ListItem>Ahead of Time compiler generates code 3-5X the size of source: <a target="_blank" href="https://docs.google.com/document/d/195L4WaDSoI_kkW094LlShH6gT3B7K1GZpSBnnLkQR-g/edit#heading=h.wt8e1dv0pljj">Link</a></ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>Angular Is Over-Engineered</Heading>
          <List>
            <ListItem>Change detection strategy now a concern</ListItem>
            <ListItem>Built on experimental language features (i.e. decorators)</ListItem>
            <ListItem>Angular DSL is not valid HTML</ListItem>
            <ListItem>1 Megabyte just to do hello world</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>Angular Is Over-Engineered</Heading>
          <List>
            <ListItem>Attempts to abstract away the entire browser platform</ListItem>
            <ListItem>Requires HTML parser and sanitizer</ListItem>
            <ListItem>Has two module systems</ListItem>
            <ListItem>Introduces: structural directives, pipes, declarations, modules, injectors, services, view encapsulation, decorators</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote style={{ fontSize: 44 }}>There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies and the other way is to make it so complicated that there are no obvious deficiencies.</Quote>
            <Cite>C.A.R. Hoare, The 1980 ACM Turing Award Lecture</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>React's Consistency</Heading>
          <Heading size={6}>2013</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/react2013.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>React's Consistency</Heading>
          <Heading size={6}>2017</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/react2017.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>React Satisfaction Rating</Heading>
          <Fill>
            <Image height={600} src={images.developerSatisfaction}/>
          </Fill>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>React Satisfaction Rating</Heading>
          <List>
            <ListItem>92% of developers would use React again</ListItem>
            <ListItem>Only 65% of devs would use Angular 2 again</ListItem>
            <ListItem>47% would use Angular 1 again</ListItem>
            <ListItem>Results from over 9,000 developers surveyed: (<a target="_blank" href="http://stateofjs.com/2016/frontend/">State of Javascript</a>)</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>React's Popularity</Heading>
          <List>
            <ListItem>React:<br />67,000 Stars, 1,000 Contributors</ListItem>
            <ListItem>Angular 2:<br />24,000 Stars, 440 Contributors</ListItem>
            <ListItem>React: Gaining 77 stars a day</ListItem>
            <ListItem>Angular 2: Gaining 38 stars a day</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>React's Popularity</Heading>
          <Image height={500} src={images.trends} />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>React's Performance</Heading>
          <ListItem>Consistently Faster than Angular 2 <br />: <a href="https://auth0.com/blog/updated-and-improved-more-benchmarks-virtual-dom-vs-angular-12-vs-mithril-js-vs-the-rest/" target="_blank">Auth0 Benchmark</a></ListItem>
          <ListItem>Lighter weight: 43KB vs. 766KB</ListItem>
          <ListItem>Less Memory Usage</ListItem>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>Learn Once, Write Anywhere</Heading>
          <List>
            <ListItem>Native mobile</ListItem>
            <ListItem>Native desktop</ListItem>
            <ListItem>Native Mac OSX</ListItem>
            <ListItem>Native Touchbar</ListItem>
            <ListItem>Native Windows</ListItem>
            <ListItem>HTML5 Canvas</ListItem>
            <ListItem>VR</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>React's Popularity</Heading>
          <List>
            <ListItem>React:<br />67,000 Stars, 1,000 Contributors</ListItem>
            <ListItem>Angular 2:<br />24,000 Stars, 440 Contributors</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
