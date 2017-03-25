// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/style.css");

const images = {
  logo: require("../assets/logo.png"),
  euricom: require("../assets/euricom-logo.png"),
  robbert: require("../assets/robbert.jpg"),
  facebook: require("../assets/facebook.png"),
  twitter: require("../assets/twitter.png"),
  github: require("../assets/github.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#4fc08d",
    tertiary: "#2c3e50",
    quartenary: "#e96900"
  }, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.logo.replace("/", "")} margin="0 20px 20px" height="200px" />
          <Image src={images.euricom.replace("/", "")} margin="0 20px 20px" height="200px" />

          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Vue.js
          </Text>
        </Slide>

        <Slide transition={[""]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Who am I</Heading>
        </Slide>

        <Slide transition={[""]} bgColor="primary">
          <Image src={images.robbert.replace("/", "")} height="300px" className="meMyselfAndI" />

          <Text textSize="1em" textColor="secondary" margin="20px 0px 0px" bold>
            Alumni MCT
             </Text>

          <Text textSize="1em" textColor="secondary" margin="20px 0px 0px" bold>
            Consultant / Frontend Developer <a href="http://www.euri.com" className="dark" target="_blank">@Euricom</a>
          </Text>

          <Text textSize="1em" textColor="secondary" margin="20px 0px 0px" bold>
            Bootcamper
              </Text>

          <div>
            <span className="social-icon"><a href="https://www.facebook.com/wolfsrobbert" target="_blank"><Image src={images.facebook.replace("/", "")} height="24px" /></a></span>
            <span className="social-icon"><a href="https://twitter.com/robbert_wolfs" target="_blank"><Image src={images.twitter.replace("/", "")} height="24px" /></a></span>
            <span className="social-icon"><a href="https://github.com/RobbertWolfs" target="_blank"><Image src={images.github.replace("/", "")} height="24px" /></a></span>
          </div>

        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Table of Content</Heading>
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="primary" textColor="tertiary">
          <List textSize="24px">
            <ListItem>Introduction</ListItem>
            <ListItem>
              Basics
              <List margin="0 0 0 90px">
                <ListItem>
                  Setup
                   <List margin="0 0 0 90px">
                    <ListItem>Bindings / Filters / Events</ListItem>
                  </List>
                </ListItem>
                <ListItem>Exercise</ListItem>
              </List>
            </ListItem>
            <ListItem>
              Advanced
              <List margin="0 0 0 90px">
                <ListItem>
                  Addition
                   <List margin="0 0 0 90px">
                    <ListItem>Components / Forms / Lifecycle</ListItem>
                  </List>
                </ListItem>
                <ListItem>Exercise</ListItem>
              </List>
            </ListItem>
            <ListItem>
              Master
              <List margin="0 0 0 90px">
                <ListItem>Vue files</ListItem>
                <ListItem>Routing</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary" caps margin="100px">Introduction</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary" caps margin="100px">Basics</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Setup</Heading>
          <a className="dark" href="http://codepen.io/RobbertWolfs/pen/xqjxgY" target="_blank">Codepen demo</a>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Value Binding</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/value-binding.example")}
          ranges={[
            { loc: [13, 14] },
            { loc: [15, 26] },
            { loc: [17, 18] },
            { loc: [18, 24] },
            { loc: [19, 20] },
            { loc: [1, 3] },
            { loc: [20, 21] },
            { loc: [4, 6] },
            { loc: [21, 23] },
            { loc: [6, 11] },
            { loc: [0, 26], note: "http://codepen.io/RobbertWolfs/pen/dveyZQ" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Computed Properties</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/computed-properties.example")}
          ranges={[
            { loc: [6, 17] },
            { loc: [8, 11] },
            { loc: [1, 2] },
            { loc: [11, 16] },
            { loc: [12, 15] },
            { loc: [2, 3] },
            { loc: [0, 20], note: "http://codepen.io/RobbertWolfs/pen/JWvjem" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Filter</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/filters.example")}
          ranges={[
            { loc: [6, 20] },
            { loc: [9, 12] },
            { loc: [2, 3] },
            { loc: [12, 18] },
            { loc: [13, 17] },
            { loc: [3, 4] },
            { loc: [0, 21], note: "http://codepen.io/RobbertWolfs/pen/dveyLL" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">List bindings</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/list-binding.example")}
          ranges={[
            { loc: [7, 15] },
            { loc: [10, 13] },
            { loc: [1, 4] },
            { loc: [0, 17], note: "http://codepen.io/RobbertWolfs/pen/ryrVvE" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Conditional Rendering</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/conditional-rendering.example")}
          ranges={[
            { loc: [11, 19] },
            { loc: [14, 17] },
            { loc: [1, 7] },
            { loc: [8, 9] },
            { loc: [0, 21], note: "http://codepen.io/RobbertWolfs/pen/jBpPve" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Events</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/events.example")}
          ranges={[
            { loc: [0, 7] },
            { loc: [1, 3] },
            { loc: [8, 23] },
            { loc: [11, 21] },
            { loc: [4, 6] },
            { loc: [0, 21], note: "http://codepen.io/RobbertWolfs/pen/KWBpbb" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} textColor="quartenary" caps margin="100px">Exercise</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary" caps margin="100px">Advanced</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Event modifiers</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/event-modifiers.example")}
          ranges={[
            { loc: [0, 7] },
            { loc: [8, 16] },
            { loc: [1, 2] },
            { loc: [0, 16], note: "http://codepen.io/RobbertWolfs/pen/evjzMz" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Attributes Binding</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/attributes-binding.example")}
          ranges={[
            { loc: [0, 9] },
            { loc: [13, 17] },
            { loc: [2, 3] },
            { loc: [13, 17] },
            { loc: [3, 4] },
            { loc: [0, 21], note: "http://codepen.io/RobbertWolfs/pen/RpBRpM" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Components</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/components.example")}
          ranges={[
            { loc: [0, 13] },
            { loc: [9, 12] },
            { loc: [5, 8] },
            { loc: [1, 2] },
            { loc: [0, 13], note: "http://codepen.io/RobbertWolfs/pen/MpBedj" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Props</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Events</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Slots</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Forms</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Lifecyclehooks</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Directives</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} textColor="quartenary" caps margin="100px">Exercise</Heading>
        </Slide>
      </Deck>
    );
  }
}
