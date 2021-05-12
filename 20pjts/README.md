# JavaScript Web Projects: 20 Projects to Build Your Portfolio

1. Quote Generator 

   get a quote from the API

   user can tweet the quote

   - using free api(like local) could block fetching api by CORS policy.

     -> to solve this problem, call a proxy API first.

   - querySelector VS getElementById/Class

     querySelector can get the element which doesn't have a id or class. if you want to get an audio element without id or class, you could refer it by `document.querySelector('audio')`.

   - Destructuring Assignment

     `const { duration, currentTime } = e.srcElement;`

     even there are lots of attributes within e.srcElement, duration and currentTime will find out the attributes with same name among e.srcElement's attributes.

   - innerHTML could be dangerous. If something like JS comes in, it could be executed.

   - add media queries at the bottom: so it could be able to override anything

   - button font needs to be explicitly written within button css( not changed by body font )

     

2. Infinite Scroll  

   get random photo from Unsplash API

   user can insert search keyword

   infinite scroll of photos

   210330 - user can change a keyword(if no keyword returns random)

   :wrench: carousel

   -  image.loading = 'lazy';
     slow image loading with scrolling

   - append is for multiple element

     appendChild is for one element

3. Picture in Picture

   picture in picture feature: choose screen and float that screen on top

   - ```js
     const mediaStream = await navigator.mediaDevices.getDisplayMedia();
         videoElement.srcObject = mediaStream;
         videoElement.onloadedmetadata = () => {
           videoElement.play();
     ```

     - `const mediaStream = await navigator.mediaDevices.getDisplayMedia();`

       wait for user to choose which screen to share

     - `videoElement.srcObject = mediaStream;`

       make the chosen screen as source object

     - `videoElement.onloadedmetadata = () => {videoElement.play();}`

       execute a function to play video after loading metadata

   - `button.addEventListener('click', async () => {})`

     this is how make async function with event listener

   - ```js
     // Create Elements For Links & Photos, Add to DOM
     // function displayPhotos() {
     //   // Run function for each object in photosArray
     //   photosArray.forEach((photo) => {
     //     // Create <a></a> to link to Unsplash
     //     const item = document.createElement('a');
     //     item.setAttribute('href', photo.links.html);
     //     item.setAttribute('target', '_blank');
     //     // Create img for photo
     //     const img = document.createElement('img');
     //     img.setAttribute('src', photo.urls.regular);
     //     img.setAttribute('alt', photo.alt_description);
     //     img.setAttribute('title', photo.alt_description);
     //     // Put img inside a, then put both inside imageContainer
     //     item.appendChild(img);
     //     imageContainer.appendChild(item);
     //   });
     // }
     
     // DRY(Don't Repeat Your code)
     // Helper Function to Set Attributes on DOM Elements
     function setAttributes(element, attributes) {
       for (const key in attributes) {
         element.setAttribute(key, attributes[key]);
       };
     }
     function displayPhotos() {
       imagesLoaded = 0; // 다시 리셋해 줘야 imageLoaded 함수의 의미가 있음
       totalImages = photosArray.length;
       photosArray.forEach((photo) => {
         const item = document.createElement('a');
         setAttributes(item, {
           href: photo.links.html,
           target: '_blank',
         });
         const img = document.createElement('img')
         setAttributes(img, {
           src: photo.urls.regular,
           alt: photo.alt_description,
           title: photo.alt_description,
         });
         // Event Listener, check when each is finished loading
         img.addEventListener('load', imageLoaded);
     
         item.appendChild(img);
         imageContainer.appendChild(item);
     
       });
     }
     ```

4. Joke Teller 

   get jokes from API

   text-to-speech

   - `<audio id="audio" controls></audio>`

     - audion controls attribute: specify the control to play audio. It's boolean. this attribute contains `play`, `pause`, `seeking`, `volume` property.
   - SDK = Software Development Key
   - It is considered good practice to always call a function after it's already been declared. That's way we're going to create our eventListeners at the bottom.
   - VoiceRSS declaration was located in index.js at first. But even if move it to voice.js it works without import. Because VoiceRSS is global variable.
     - However, even if you reference voice.js below index.js on html, it is still working. VoiceRSS reference only works at the moment clicking button.
     - Script order is also can related to error
   - ![Joke+Teller+Flowchart](https://user-images.githubusercontent.com/52478972/113502473-7dd1be80-9567-11eb-9e5f-011eb1aaf234.png)

5. Light & Dark Mode 

   light mode and dark mode toggle

   - Element.children[1].classList.replace('fa-sun', 'fa-moon');

     classList.add + classList.remove = classList.replace

     second parameter of replace must be the existing class.

   - nav li a:hover::before {opacity: 1;}

     a action with pseudo code

   - ```css
     :root {
       --primary-color: rgb(255, 92, 92);
       --primary-variant: #ff2d2d;
       --secondary-color: #1b9999;
       --on-primary: rgb(250, 250, 250);
       --on-background: rgb(66, 66, 66);
       --on-background-alt: rgba(66, 66, 66, 0.7);
       --background: rgb(255, 255, 255);
       --box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.5);
     }
     
     [data-theme="dark"] {
       --primary-color: rgb(150, 65, 255);
       --primary-variant: #6c63ff;
       --secondary-color: #03dac5;
       --on-primary: #000;
       --on-background: rgba(255, 255, 255, 0.9);
       --on-background-alt: rgba(255, 255, 255, 0.7);
       --background: #121212;
     }
     body {
     	color: var(--on-background);
       background-color: var(--background);
     }
     ```

     - https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

   - https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement

     **`Document.documentElement`** returns the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) that is the root element of the [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) (for example, the [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) element for HTML documents).

   - ```js
     function switchStyle(isDark) {
       nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
       textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
       toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
       isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
     }
     ```

     - conditional operator can be used like below(w/o assignment): 

       `isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');` 

   - Exercise: Making Code More Readable

     ```
     toggleDarkLightMode(true)toggleDarkLightMode(false)
     ```

     The issue with the above is that the true/false doesn't really tell you what the function will do. Instead, maybe we can make this clearer. How would you solve this? 

     ```
     toggleDarkLightMode('dark')toggleDarkLightMode('light')
     ```

     The other thing I would change is to create two constants at the top of the JavaScript file:

     ```
     const DARK_THEME = 'dark'const LIGHT_THEME = 'light'
     ```

     Why?
     This way you can replace all the places you are using 'dark' and light' with these variables and in the future, if you ever need to change the strings, you have only one location to change them in. Or if you want to add another theme, it would be easier to do so!

6. Animated Template

   :wrench: nav li a to occupy as li(click anywhere within li will invoke the func)

   - https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript#what_do_we_mean_by_third-party_scripts

     ```html
     <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async></script>
     ```

      Third party JS loading -> if you add async loading will be delayed

   - Setting an delay(approximately 200 gap?) between AOS features makes it more natural.

   - Where to put the script implementation is IMPORTANT issue. Head(before html loaded. which is not recommended unless it's SUPER important), at the end  of body(even the order between js files are needed to be considered)

   - if you add `defer` at the script implementation(make script loading after the html loading, `download` make loading start right after see the word script) and add script import at the bottom of head, this project could be faster. js files are not that much important in this project.

   - JS files needed to be independent to use `async`

7. Animated Navigation

   full screen nav

   210313 - make `nav a` occupy full width & height  

8. Music Player

   music player

   :wrench: store the songIndex in localStorage

   :wrench:volume control

   - https://www.w3schools.com/tags/ref_av_dom.asp

   - textContent VS innerText

     - https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

     - The value of textContent depends on the situation:

       - If the node is a `document` or a Doctype, `textContent` returns `null`.

         **Note:** To get *all* of the text and CDATA data for the whole document, one could use `document.documentElement.textContent`.

       - If the node is a CDATA section, comment, processing instruction, or text node, `textContent` returns the text inside the node, i.e., the `Node.nodeValue`.

       - For other node types, `textContent` returns the concatenation of the `textContent` of every child node, excluding comments and processing instructions. (This is an empty string if the node has no children.)

     - setting textContent on a node removes all of the node's children and replaces them with a single text node with the given string value

     - differences from innerText

       - Node.textContent, HTMLElement.innerText

       - `textContent` gets the content of *all* elements, including [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) and [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) elements. In contrast, `innerText` only shows “human-readable” elements.

       - `textContent` returns every element in the node. In contrast, `innerText` is aware of styling and won’t return the text of “hidden” elements.

         Moreover, since `innerText` takes CSS styles into account, reading the value of `innerText` triggers a reflow to ensure up-to-date computed styles. (Reflows can be computationally expensive, and thus should be avoided when possible.)

       - Unlike `textContent`, altering `innerText` in Internet Explorer (version 11 and below) removes child nodes from the element and *permanently destroys* all descendant text nodes. It is impossible to insert the nodes again into any other element or into the same element after doing so.

     - differences from innerHTML

       - `Element.innerHTML` returns HTML, as its name indicates. Sometimes people use `innerHTML` to retrieve or write text inside an element, but `textContent` has better performance because its value is not parsed as HTML.
       - using textContent can prevens XSS attacks

     - So, with this pjt, textContent is better than innerText. reading the value of innerText triggers a reflow to ensure up-to-date computed styles.

     - development tool -> performance -> (at the vottom of the woindow{if the bottom line is missing, click escape key}, click the ... button on the left, click rendering)rendering -> check paint flashing

       > It shows what is changing

   - user-select: none/auto/text/contain/all/inherit/initial/unset;

     - none: the text of the element and its sub-elements is not selectable.
     - text: the text can be selected by the user
     - all: the content of the element shall be selected atomically: If a selection would contain part of the element, then the selection must contain the entire element including all its descendants. 
     - contain: Enables selection to start withing the element; however, the selection will be contained bt the bounds of that element.

9. Custom Countdown

   customized countdown

   :wrench: change timezone

   :wrench: countdown container(place title and the input on same line, input at middle)

   :wrench: title need to be shown in countdown & complete pages

   ```css
   .container {
     min-width: unset;
     width: 95vw;
     min-height: 304px;
   }
   ```

   - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms/Basic_form_hints

   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

     - local storage can save only string

     - if you want to save other than string like object or object or object, JSON.stringify() is what you looking for!!

       > if you save object at the local storage, it returns [object]

   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

     - when you want to retrieve object from string

   - if you store something in local storage, when you reset the local storage need to be reset, too.

10. Book Keeper

    page keeps bookmark

    :wrench: bookmark name- trash align

    :wrench: bookmark modal styling

    :wrench: if bookmarks have same link, delete function does not work properly

    - if user clicks outside of a modal, close the modal(delete `show-modal` class). if user clicks inside of a modal, nothing happens.

      ```js
      window.addEventListener('click', (e) => (e.target === modal) ? modal.classList.remove('show-modal') : false);
      ```

    - includes method can have only one parameter

      ```js
      if (!urlValue.includes('https://') && !urlValue.includes('http://')) {     
        urlValue = `https://${urlValue}`; 
      }
      ```

      `if (!urlValue.includes('https://'))`: if urlValues doesn't have https://

    - e.preventDefault(): to prevent reloading. when  user clicks submit button, page reloading is occured automatically. this method can prevent such happening.

    - http/https url verification

      `/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g`

      `https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)`

      I found two different reference...

      In regEx, /~/ means start~end.

      ​	g means global search, retain the index of the last match, allowing iterative search

    - `if (!nameValue || !urlValue)`: if nameValue or urlValue is missing,

    - I had a difficulty with building delete function. If you use {} for bookmarks, you could eliminate useless loop process.

11. VIdeo Player

    video player

    - `console.log(e)` of click event: `offsetX` shows where you clicked by pixel unit
    - `srcElement.offsetWidth` shows whole width(includes margin, padding)

12. Form Validator

    validate the form

    - ```html
      <form novalidate>
      </form>
      ```

      `novalidate` makes user can click submit button

      even conditions of inputs are unqualified

13. Spock Rock Game  

    spock rock game in the big bang theory

    - `onclick` at html equals `addEventListener` at JS

    - ```js
      console.log(arr.indexOf(item))
      ```

      if item is not in the arr, it returns -1

    - `<script type=module>` => it makes impossible to call the function at the html by `onclick`. because it is not global variable anymore
      If you still want to call function by onclick, 
      write `window.functionName = functionName;` on the js file. 

    - dynamic module loading: load the module only when it is needed

      ```js
      import('./confetti.js')
          .then((module) => {
            module.stopConfetti();
            module.removeConfetti();
          })
      }
      ```

      of course, export at the confetti.js is needed.

14. NASA APOD

    get nasa apod from NASA API

    bookmark article

    - ```js
      saveText.onclick = `saveFavorite('${result.url}')`;
      saveText.setAttribute('onclick', `saveFavorite('${result.url}')`);
      ```

      only second one will work

    - forEach method works with array,
      if you want to use object with it, modify the object by `Object.values()`

    - Declarative programming

      It is not better programming. it's just another way of programming. it expresses logic without describing it's control flow. HTML is declarative. just saying liks 'page should look like this.'

    - Imperative programming

      programming paradigm that uses code statements to tell the computer what to do. that's what we've been doing. It needs us to know what's going on with exact step.Directly tell what to do. though it's intuitive, it is hard to see the relationships between features.

15. Math Sprint Game 

    solve simple math games

    four different mode

    record the highest score of each mode

    - `removeEventListener()`

    - setTimeout() is not exact way to measure time. it's way too fragile.

      ```js
      function countdownStart() {
        countdown.textContent = '3';
        setTimeout(() => {
          countdown.textContent = '2';
        }, 1000);
        setTimeout(() => {
          countdown.textContent = '1';
        }, 2000);
        setTimeout(() => {
          countdown.textContent = 'GO!';
        }, 3000);
      }
      
      // Navigate from Splash Page to Countdown Page
      function showCountdown() {
        countdownPage.hidden = false;
        splashPage.hidden = true;
        countdownStart();
        populateGamePage();
        setTimeout(showGamePage, 4000);
      }
      ```

      proper way would be below!

      ```js
      function countdownStart() {
        let count = 3;
        countdown.textContent = count;
        const timeCountDown = setInterval(()=>{
          count--;
          if (count === 0) {
            countdown.textContent = 'Go!';
          } else if (count === -1) {
            showGamePage();
            // It is important to clearInterval whenever using setInterval method.
            clearInterval(timeCountDown);
          } else {
            countdown.textContent = count;
          }
        }, 1000) // first parameter of setInterval is a function that you'd like to call.
      }
      ```

16. Drag n' Drop

    make simple board like Trello

    210505  - bg toggle

    ​			   - user input title    

    - if you see empty array and for loop pattern, think of using map!

      ```js
      function rebuildArrays() {
        backlogListArray = [];
        for (let i = 0; i < backlogList.children.length; i++) {
          backlogListArray.push(backlogList.children[i].textContent);
        }
        progressListArray = [];
        for (let i = 0; i < progressList.children.length; i++) {
          progressListArray.push(progressList.children[i].textContent);
        }
        completeListArray = [];
        for (let i = 0; i < completeList.children.length; i++) {
          completeListArray.push(completeList.children[i].textContent);
        }
        onHoldListArray = [];
        for (let i = 0; i < onHoldList.children.length; i++) {
          onHoldListArray.push(onHoldList.children[i].textContent);
        }
        updateDOM();
      }
      ```

      using MAP

      map is useful especially when you need to change or modify the content of array

      ```js
      function rebuildArrays() {
        backlogListArray = backlogList.children.map(i => i.textContent);
        progressListArray = progressList.children.map(i => i.textContent);
        completeListArray = completeList.children.map(i => i.textContent);
        onHoldListArray = onHoldList.children.map(i => i.textContent);
        
        updateDOM();
      }
      ```

      but it throws an error saying children is not array.

      thd children in this case is HTMLCollection which is object but looks like array.

      In this case, use Array.from(..)

      ```js
      function rebuildArrays() {
        backlogListArray = Array.from(backlogList.children).map(i => i.textContent);
        progressListArray = Array.from(progressList.children).map(i => i.textContent);
        completeListArray = Array.from(completeList.children).map(i => i.textContent);
        onHoldListArray = Array.from(onHoldList.children).map(i => i.textContent);
        updateDOM();
      }
      ```

17. Calculator

    simple calculator

    210504 - add calculation history 

    :wrench: catch keyboard

    :wrench: * || / need to be calculated first

    - ```js
      inputBtns.forEach((inputBtn) => {
        if (inputBtn.classList.length === 0) {
            inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
        } else if (inputBtn.classList.contains('operator')) {
          inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
        } else if (inputBtn.classList.contains('decimal')) {
            inputBtn.addEventListener('click', () => sendNumberValue());
        }
      });
      ```

    - ```js
      inputBtn.addEventListener('click', () => addDecimal);
      ```

      This isn't work because i didn't call the function by adding();

      ```js
      clearBtn.addEventListener('click', resetAll);
      ```

      But this does work

    - ```js
      // Calculate first and second values depending on operator
      const calculate = {
        '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
        '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
        '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
        '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
        '=': (firstNumber, secondNumber) => secondNumber,
      }
      
      function useOperator(operator) {
        const currentValue = Number(calculatorDisplay.textContent);
        // Prevent multiple operators
        if (operatorValue && awaitingNextValue) return;
        // Assign firstValue if no value
        if (!firstValue) {
          firstValue = currentValue;
        } else {
           console.log(firstValue, operator, currentValue);
           const calculation = calculate[operatorValue](firstValue, currentValue);
        }
      ```

      this is another way of defining variables

    - variable declaration: top

      event listener: bottom

18. Splash Page

    Imitate the existing page

    - img located in div, in this case just resizing of div won't limit the img size. you need to cut down both div and img size

    - ```js
      const body = document.body;
      const { body } = document;
      ```

      both line work the same way.

      there is body in document.

    - `const memory = Array(10000).fill('*')`: easy way of making array. memory has 10000 of length that every index is filled with */

    - development tool - memory - heap snapshot

      it shows how much memory is used

      it is important to think of memory

      even the declaration of each variable is memory.

19. Paint Clone

    simple canvas

    brush size and color change automatically

    - Think of extensibility as a programmer

      - `setTimeout(switchToBrush, 1500);`

        this line repeated 6 times =>

        make global variable `brushTime = setTimeout(switchToBrush, brushTime);` =>

        use brushTime instead of whole setTimeout command

      - `function brushTimeSetTimeout(ms) { setTimeout(switchToBrush, ms); }` 

        by making this function you could replace like

        `brushTimeSetTimeout(brushTime);`

20. Pong

    pong game

    record the highest score

    :wrench: responsive canvas

    - setInterval is delayed whenever the next process started

      use `window.requestAnimationFrame()` instead! It stops when the window out focused for saving battery

    - inNewGame: startGame for start a new game. the difference inNewGame and startGame is reset gameOverEl. startGame won't need to remove that el.

      

**NOBODY IS PERFECT**

You couldn't, shouldn't and don't need to do it from scratch by yourself.

Find what the others have done.

code, library, design... everything

Just not try to build from zero.



