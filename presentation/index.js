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
  Image,
  Layout,
  Fit
} from "spectacle";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text as ChartText, ResponsiveContainer } from 'recharts';

import { Timeline, TimelineEvent } from 'react-event-timeline';

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
  trends: require("../assets/trends.png"),
  chefSteps: require("../assets/ionic/chefsteps-sq.png"),
  pacifica: require("../assets/ionic/pacifica-sq.png"),
  sworkit: require("../assets/ionic/sworkit-sq.jpg"),
  untappd: require("../assets/ionic/untappd-sq.jpg"),
  airbnb: require("../assets/react/airbnb-sq.png"),
  baidu: require("../assets/react/baidu-sq.png"),
  bloomberg: require("../assets/react/bloomberg-sq.jpg"),
  facebook: require("../assets/react/facebook-sq.png"),
  instagram: require("../assets/react/instagram-sq.jpg"),
  tesla: require("../assets/react/tesla-sq.jpg"),
  vogue: require("../assets/react/vogue-sq.jpg"),
  walmart: require("../assets/react/walmart-sq.jpg"),
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

const data = [
  {name: 'Q1 2015', react: 15960, angular2: 1560},
  {name: 'Q2 2015', react: 21270, angular2: 3210},
  {name: 'Q3 2015', react: 26610, angular2: 4830},
  {name: 'Q4 2015', react: 31950, angular2: 6480},
  {name: 'Q1 2016', react: 37290, angular2: 9750},
  {name: 'Q2 2016', react: 44932, angular2: 13020},
  {name: 'Q3 2016', react: 50720, angular2: 16290},
  {name: 'Q4 2016', react: 56825, angular2: 18810},
  {name: 'Q1 2017', react: 64812, angular2: 22830},
];

const TimelineIcon = ({ children }) => (
  <div
    style={{
      position: 'relative',
      left: '-25%',
      top: '-25%',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
  </div>
);

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
          <Heading size={6} textColor="tertiary" caps>The Cost of Development at NU</Heading>
          <List>
            <ListItem textSize={24}>NU has 16 UI Devs</ListItem>
            <ListItem textSize={24}>NU closes 22 UI stories per month (41 so far in May)</ListItem>
            <ListItem textSize={24}>NU generates 52 defects per month
              <List style={{ marginLeft: 36, fontSize: 16 }}>
                <ListItem textSize={18}>27 closed per month</ListItem>
                <ListItem textSize={18}>10 cancelled per month</ListItem>
                <ListItem textSize={18}>Carrying 15 defects per month</ListItem>
                <ListItem textSize={18}>More than 50% of all defects are UI defects (27 per month)</ListItem>
              </List>
            </ListItem>
            <ListItem textSize={24}>Each UI story takes 9 days to close per developer
              <List style={{ marginLeft: 36, fontSize: 16 }}>
                <ListItem textSize={18}>Our stack is a bottleneck</ListItem>
                <ListItem textSize={18}>Y Tests (1 day), PR requests (2 days)</ListItem>
                <ListItem textSize={18}>9 minutes to run 160 mobile tests. 7 min to run 60 web tests. 4 min to create environment.</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>The Running Deficit</Heading>
          <List>
            <ListItem textSize={24}>The Roadmap does not include our current balance of 134 defects
              <List style={{ marginLeft: 36, fontSize: 16 }}>
                <ListItem textSize={18}>Adding 15 defects per month, we'll double defect count in 1 year</ListItem>
              </List>
            </ListItem>
            <ListItem textSize={24}>Upgrading to Angular 2 will significantly increase our defect count
              <List style={{ marginLeft: 36, fontSize: 16 }}>
                <ListItem textSize={18}>It will stop development to address critical defects in order to upgrade</ListItem>
              </List>
            </ListItem>
            <ListItem textSize={24}>Will be cheaper to move to React
              <List style={{ marginLeft: 36, fontSize: 16 }}>
                <ListItem textSize={18}>Move 2x faster on feature dev (44 stories per month)</ListItem>
                <ListItem textSize={18}>Reduce bug intro rate by 5X (10 per month)</ListItem>
                <ListItem textSize={18}>Move wasted bug fix capacity to feature development (27 stories)</ListItem>
                <ListItem textSize={18}>Net increase in throughput from 2.5 stories per dev to more than 5</ListItem>
                <ListItem textSize={18}>Achieve feature parity quickly</ListItem>
                <ListItem textSize={18}>Remove the defect backlog, focus on roadmap</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>The Business Case for React</Heading>
          <List>
            <ListItem textSize={24}>Cuts development time in half</ListItem>
            <ListItem textSize={24}>React simplifies testing
              <List style={{ marginLeft: 36, fontSize: 16 }}>
                <ListItem textSize={20}>Better testing tools (Snapshots)</ListItem>
                <ListItem textSize={20}>Y Tests become optional</ListItem>
              </List>
            </ListItem>
            <ListItem textSize={24}>React speeds development time
              <List style={{ marginLeft: 36, fontSize: 16 }}>
                <ListItem textSize={20}>Single development effort</ListItem>
                <ListItem textSize={20}>Start with React for Web, port to mobile via React Native</ListItem>
                <ListItem textSize={20}>Feature parity between mobile and web</ListItem>
              </List>
            </ListItem>
            <ListItem textSize={24}>React has a bigger, stronger community
              <List style={{ marginLeft: 36, fontSize: 16 }}>
                <ListItem textSize={20}>Standardized, documented, well-supported</ListItem>
                <ListItem textSize={20}>Shopify's Polaris for Web</ListItem>
                <ListItem textSize={20}>React Native for Mobile</ListItem>
                <ListItem textSize={20}>Storybook took for component documentation & demonstration</ListItem>
                <ListItem textSize={20}>Sketch integration</ListItem>
              </List>
            </ListItem>
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
        <Slide transition={["fade"]} bgColor="primary">
          <div>
            <Text textSize={30} style={{ fontWeight: "bold", textAlign: "left", }} textColor="tertiary" caps>Brief History of Angular & React</Text>
          </div>
          <div style={{ textAlign: "left" }}>
            <Text textSize={24} style={{ fontWeight: "bold" }}>2010</Text>
            <Text textSize={20}>Angular created as hobby project by Misko Hevery</Text>
          </div>
          <div style={{ textAlign: "left" }}>
            <Text textSize={24} style={{ fontWeight: "bold" }}>2011</Text>
            <Text textSize={20}>Facebook starts using React in production</Text>
          </div>
          <div style={{ textAlign: "left" }}>
            <Text textSize={24} style={{ fontWeight: "bold" }}>2013</Text>
            <Text textSize={20}>Facebook open sources React</Text>
          </div>
          <div style={{ textAlign: "left" }}>
            <Text textSize={24} style={{ fontWeight: "bold" }}>2014</Text>
            <Text textSize={20}>Angular team announces incompatible rewrite of popular framework</Text>
          </div>
          <div style={{ textAlign: "left" }}>
            <Text textSize={24} style={{ fontWeight: "bold" }}>2016</Text>
            <Text textSize={20}>Angular 2 released</Text>
          </div>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary">What was the catalyst that triggered Angular to rewrite their popular framework?</Heading>
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
          <Heading size={5} textColor="tertiary">The Simplicity of React</Heading>
          <List>
            <ListItem>Built on Functional principles</ListItem>
            <ListItem>Similar to mathematical functions: <br />f(x) => x</ListItem>
            <ListItem>React components are a function of <br />f(state, props) => UI</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Simplicity is prerequisite for reliability.</Quote>
            <Cite>Edsger W. Dijkstra</Cite>
          </BlockQuote>
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
          <Heading textColor="tertiary" size={4}>An equivalent Angular Component</Heading>
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
        {/*<Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>A Stateful React Component</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/react-component2.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>An Equivalent Stateful Angular Component 1 of 2</Heading>
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
        </Slide>*/}
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>Angular Is Over-Engineered</Heading>
          <List>
            <ListItem>React has <a href="https://facebook.github.io/react/docs/react-api.html" target="blank">11</a> top level API methods</ListItem>
            <ListItem>Angular has <a href="https://angular.io/docs/ts/latest/api/" target="_blank">over 500</a> top level API concepts</ListItem>
            <ListItem>Huge surface area means more complexity, more moving parts, bigger learning curve</ListItem>
            <ListItem>Introduces: structural directives, pipes, declarations, modules, injectors, services, view encapsulation, decorators, observables</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>Angular Is Over-Engineered</Heading>
          <List>
            <ListItem>Angular forces decisions on you <br />(i.e. TypeScript)</ListItem>
            <ListItem>Angular's engine is more complex</ListItem>
            <ListItem>Zone.js overrides native HTTP methods</ListItem>
            <ListItem>Has two module systems</ListItem>
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
            <ListItem>Requires HTML parser and sanitizer</ListItem>
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
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="Angular has a 64% retention rate among devs vs. React's 92% retention. Over 9000 devs surveyed.">
          <Heading textColor="tertiary" size={4}>React Has Highest Satisfaction Rating</Heading>
          <Fill>
            <Image height={500} src={images.developerSatisfaction}/>
          </Fill>
        </Slide>
        <Slide style={{ fontSize: 14 }} notes="React is not only more popular, it's growing faster. Gaining 77 stars a day vs Angular's 38. Hundreds more contributors.">
          <Heading size={6} textColor="tertiary">React's Popularity</Heading>
          <Text textSize={24}>GitHub Stars Over Time</Text>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                data={data}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="react" name="React" stroke="blue" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="angular2" name="Angular 2" stroke="red" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="More devs want to learn React than Angular 2.">
          <Heading textColor="tertiary" size={4}>More People Want to Learn React</Heading>
          <Image height={500} src={images.trends} />
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>React Has Better Performance</Heading>
          <List>
            <ListItem>Consistently Faster than Angular 2: <br /> <a href="https://auth0.com/blog/updated-and-improved-more-benchmarks-virtual-dom-vs-angular-12-vs-mithril-js-vs-the-rest/" target="_blank">Auth0 Benchmark</a></ListItem>
            <ListItem>Lighter weight: 43KB vs. 766KB</ListItem>
            <ListItem>Less Memory Usage</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>React's "Learn Once, Write Anywhere" Philosophy</Heading>
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
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>Built With Ionic</Heading>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{marginRight: 15}}>
              <img src={images.chefSteps} style={{ height: 180 }} />
              <Text textSize={20}>Chef Steps</Text>
            </div>
            <div style={{marginRight: 15}}>
              <img src={images.pacifica} style={{ height: 180 }} />
              <Text textSize={20}>Pacifica</Text>
            </div>
            <div style={{marginRight: 15}}>
              <img src={images.sworkit} style={{ height: 180 }} />
              <Text textSize={20}>Sworkit</Text>
            </div>
            <div>
              <img src={images.untappd} style={{ height: 180 }} />
              <Text textSize={20}>Untappd</Text>
            </div>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>Built With React Native</Heading>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{marginRight: 15}}>
              <img src={images.airbnb} style={{ height: 180 }} />
              <Text textSize={20}>AirBnB</Text>
            </div>
            <div style={{marginRight: 15}}>
              <img src={images.baidu} style={{ height: 180 }} />
              <Text textSize={20}>Baidu</Text>
            </div>
            <div style={{marginRight: 15}}>
              <img src={images.bloomberg} style={{ height: 180 }} />
              <Text textSize={20}>Bloomberg</Text>
            </div>
            <div style={{marginRight: 15}}>
              <img src={images.facebook} style={{ height: 180 }} />
              <Text textSize={20}>Facebook</Text>
            </div>
            <div style={{marginRight: 15}}>
              <img src={images.instagram} style={{ height: 180 }} />
              <Text textSize={20}>Instagram</Text>
            </div>
            <div style={{marginRight: 15}}>
              <img src={images.tesla} style={{ height: 180 }} />
              <Text textSize={20}>Tesla</Text>
            </div>
            <div style={{marginRight: 15}}>
              <img src={images.vogue} style={{ height: 180 }} />
              <Text textSize={20}>Vogue</Text>
            </div>
            <div>
              <img src={images.walmart} style={{ height: 180 }} />
              <Text textSize={20}>Wal-Mart</Text>
            </div>
          </div>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>React Is A Joy To Work With</Heading>
          <List>
            <ListItem>React is faster, easier and more reliable</ListItem>
            <ListItem>React has stronger JS community backing and support</ListItem>
            <ListItem>This presentation was written in React</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading textColor="tertiary" size={4}>Design Systems</Heading>
        </Slide>
      </Deck>
    );
  }
}

/*<Slide transition={["zoom"]} bgColor="primary">
 <Heading size={6} caps textColor="secondary">
 JS Framework Timeline
 </Heading>
 <div style={{ height: 500, overflowY: 'auto', background: '#EEE', border: '1px solid #333' }}>
 <Timeline>
 <TimelineEvent
 contentStyle={{ padding: 30 }}
 createdAt={<Text textSize={16} style={{ color: 'white' }}>In the beginning...</Text>}
 style={{ fontWeight: 400 }}
 icon={<TimelineIcon><img src={images.angular} style={{ height: '80%', }} /></TimelineIcon>}
 iconColor={theme.secondary}
 container="card"
 >
 <Text textSize={22}>There was JQuery.</Text>
 </TimelineEvent>
 <TimelineEvent
 contentStyle={{ padding: 30 }}
 createdAt={<Text textSize={16} style={{ color: 'white' }}>July 5, 2010</Text>}
 style={{ fontWeight: 400 }}
 icon={<TimelineIcon><img src={images.angular} style={{ height: '80%', }} /></TimelineIcon>}
 iconColor={theme.secondary}
 container="card"
 >
 <Text textSize={22}>Knockout JS released.</Text>
 </TimelineEvent>
 <TimelineEvent
 contentStyle={{ padding: 30 }}
 createdAt={<Text textSize={16} style={{ color: 'white' }}>October 13, 2010</Text>}
 style={{ fontWeight: 400 }}
 icon={<TimelineIcon><img src={images.angular} style={{ height: '80%', }} /></TimelineIcon>}
 iconColor={theme.secondary}
 container="card"
 >
 <Text textSize={22}>Backbone released.</Text>
 </TimelineEvent>
 <TimelineEvent
 contentStyle={{ padding: 30 }}
 createdAt={<Text textSize={16} style={{ color: 'white' }}>October 20, 2010</Text>}
 style={{ fontWeight: 400 }}
 icon={<TimelineIcon><img src={images.angular} style={{ height: '80%', }} /></TimelineIcon>}
 iconColor={theme.secondary}
 container="card"
 >
 <Text textSize={22}>Angular 1 released.</Text>
 </TimelineEvent>
 <TimelineEvent
 contentStyle={{ padding: 30 }}
 createdAt={<Text textSize={16} style={{ color: 'white' }}>October 2010</Text>}
 style={{ fontWeight: 400 }}
 icon={<TimelineIcon><img src={images.angular} style={{ height: '80%', }} /></TimelineIcon>}
 iconColor={theme.secondary}
 container="card"
 >
 <Text textSize={22}>Angular 1 released.</Text>
 </TimelineEvent>
 <TimelineEvent
 contentStyle={{ padding: 30 }}
 createdAt={<Text textSize={16} style={{ color: 'white' }}>October 2010</Text>}
 style={{ fontWeight: 400 }}
 icon={<TimelineIcon><img src={images.angular} style={{ height: '80%', }} /></TimelineIcon>}
 iconColor={theme.secondary}
 container="card"
 >
 <Text textSize={22}>Angular 1 released.</Text>
 </TimelineEvent>
 </Timeline>
 </div>
 </Slide>*/
