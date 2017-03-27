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
  Text,
  Markdown
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
  github: require("../assets/github.png"),
  frameworks: require("../assets/a2v-frameworks.png"),
  diagram1: require("../assets/1-ADuCd_GcORWlpCzTASmkxQ.png"),
  diagram2: require("../assets/frontend-stacked.png")
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
                <ListItem>Simple Setup</ListItem>
                <ListItem>Bindings / Filters / Events</ListItem>
                <ListItem>Exercise</ListItem>
              </List>
            </ListItem>
            <ListItem>
              Advanced
              <List margin="0 0 0 90px">
                <ListItem>Components / Forms / Lifecycle</ListItem>
                <ListItem>Exercise</ListItem>
              </List>
            </ListItem>
            <ListItem>
              Master
              <List margin="0 0 0 90px">
                <ListItem>Vue CLI</ListItem>
                <ListItem>.Vue files</ListItem>
                <ListItem>Loading Data</ListItem>
                <ListItem>Routing</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary" caps margin="100px">Introduction</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.frameworks.replace("/", "")} width="500px" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.diagram1.replace("/", "")} width="900px" />
          <a className="dark" href="https://github.com/vuejs/vue" target="_blank">Latest github stats of VueJS</a>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.diagram2.replace("/", "")} width="900px" />
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

         <Slide transition={["slide"]} className="markdown">
           <Markdown >
            {`
#### Create a VueJS app: 
###### Markup Editor and Preview:

* Add index.html and app.js
* Load your VueJS with a script tag and [CDN](https://unpkg.com/vue@2.1.10/dist/vue.js)
* Show a list of hardcoded (array) todo items
* Add a button to toggle the todo (todo/completed)

###### Optional:
- Add a input and add button to add an todo

[Demo](http://puffy-order.surge.sh/)

            `}
          </Markdown>
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
            { loc: [0, 5] },
            { loc: [7, 15] },
            { loc: [1, 4] },
            { loc: [0, 16], note: "http://codepen.io/RobbertWolfs/pen/yMqjLJ" }
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

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/props.example")}
          ranges={[
            { loc: [7, 19] },
            { loc: [12, 18] },
            { loc: [8, 12] },
            { loc: [1, 2] },
            { loc: [20, 27] },
            { loc: [2, 3] },
            { loc: [0, 13], note: "http://codepen.io/RobbertWolfs/pen/evjzMz" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Prop validation</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/prop-validation.example")}
          ranges={[
            { loc: [3, 5] },
            { loc: [6, 8] },
            { loc: [9, 14] },
            { loc: [15, 20] },
            { loc: [21, 32] },
            { loc: [33, 39] }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Events</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/custom-events.example")}
          ranges={[
            { loc: [8, 23] },
            { loc: [9, 17] },
            { loc: [17, 22] },
            { loc: [19, 20] },
            { loc: [1, 4] },
            { loc: [24, 32] },
            { loc: [0, 13], note: "http://codepen.io/RobbertWolfs/pen/LWBQWY" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Slots</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/slots.example")}
          ranges={[
            { loc: [19, 26] },
            { loc: [1, 4] },
            { loc: [27, 36] },
            { loc: [5, 17] },
            { loc: [0, 36], note: "http://codepen.io/RobbertWolfs/pen/RpBQLG" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Forms</Heading>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/forms.example")}
          ranges={[
            { loc: [1, 8] },
            { loc: [9, 19] },
            { loc: [20, 37] },
            { loc: [38, 49] },
            { loc: [50, 57] },
            { loc: [0, 59], note: "http://codepen.io/RobbertWolfs/pen/yMqvqQ" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps margin="100px">Lifecyclehooks</Heading>
          <a className="dark" href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" target="_blank">Lifecycle diagram</a>
        </Slide>

        <CodeSlide
          className="codeSlide"
          transition={[""]}
          lang="html"
          code={require("raw-loader!../assets/lifecycle.example")}
          ranges={[
            { loc: [1, 16] },
            { loc: [1, 16], note: "http://codepen.io/RobbertWolfs/pen/OpwvJv" }
          ]}
        />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} textColor="quartenary" caps margin="100px">Exercise</Heading>
        </Slide>

        <Slide transition={["slide"]} className="markdown">
           <Markdown >
            {`
#### Create a VueJS app: 
###### Markup Editor and Preview:

* Add index.html and app.js
* Load your VueJS with a script tag and [CDN](https://unpkg.com/vue@2.1.10/dist/vue.js)
* Create the markupTextBox as a component
* Use the [marked](https://unpkg.com/marked@0.3.6) library to convert markup 2 html

###### Optional:
- Add button to reset input

[Demo](http://spurious-veil.surge.sh)

            `}
          </Markdown>
        </Slide>
      </Deck>
    );
  }
}
