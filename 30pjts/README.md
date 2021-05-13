# Wes Bos - 30 day vanilla JS coding challenge

1. JavaScript Drum Kit

   :wrench: volume control for each​

   210513 

   	- store audio recording
   	- download .wav file

2. JS and CSS Clock

   :wrench: implement 16 mouse move shadow​

3. CSS Variables

   - ```js
     const inputs = document.querySelectorAll('.controls input');
     ```

     all the inputs located in controls class

   - `querySelectorAll` returns NodeList, not Array

     https://developer.mozilla.org/en-US/docs/Web/API/NodeList

     Nodelist has fewer method than array

     

4. Array Cardio 1

   - array.filter() needs a function

     - array.filter(function() {..})

     - array.filter(() => {..})

     - ```js
       const ancestors = inventors.filter(function(inventor) {
             if (inventor.year >= 1500 && inventor.year < 1600) return true;
           });
       
       const ancestors = inventors.filter(inventor => {
             if (inventor.year >= 1500 && inventor.year < 1600) return true;
           });
       ```

     - below is much shorter way

       ```js
       const ancestors = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
       ```

   - map returns an array with same length

     filter returns items that passed a condition

   - map is kind of a factory because it takes a raw material and does some processes then  returns a product

   - console.table(..): it shows the result in table form.

   - ```js
     const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
     ```

     returns a result in ascending order

     if you want to reverse it, switch the 1 and -1

   - ```js
     const totalYears = inventors.reduce((total, inventor) => {
           return total + (inventor.passed - inventor.year);
         }, 0)
     ```

     keep adding values to total variable

     the default value of total is 0

   - nodelist => array

     ```js
     const category = document.querySelectorAll('a');
     // querySelectorAll returns a nodeList
     
     // 1. array.from()
     const category = Array.from(document.querySelectorAll('a'));
     
     // 2. [...]
     const category = [...document.querySelectorAll('a')];
     ```

5. Flex Panel Gallery

   :wrench: the panel opened won't automaticall closed when the other is opened​

6. Type Ahead

   :wrench: If click the panel, open it widely(modal..? or in place?, width & height or height only)​

   - blob has to be converted from raw data that it is in into JSON

     ```js
     fetch(endpoint)
       .then(blob => blob.json())
       .then(data => cities.push(...data));
     ```

     - ...data: spread the data

       when you push the data, whole array gets into the cities as one index,

       but if you push ...data, every item in data array become the index of cities

7. Array Cardio 2

8. HTML5 Canvas

   :wrench: get user input color variation, color variation speed, font size

9. Dev Tools Domination

10. Hold Shift and Check Checkboxes

11. Custom Video Player

    :wrench: show number on progress bar​

    - ```js
      progress.addEventListener('mousemove', (e) => { mousedown && scrub(e) });
      ```

      if mousedown is true, call scrub

12. Key Sequence Detection

13. Slide in on scroll

14. JS References VS copying

15. LocalStorage

    210424 - reset, delete, check/uncheck all

    :wrench:everytime populateList function is evoked, it renders whole list again. Wonder how could add just new item on the existed list

    - In case of Form, add event listener to form's submit is greater way than button click

16. Mouse Move Shadow

17. Sort without articles

18. Adding up times with reduce

19. webcam fun

20. speech detection

21. geolocation

22. follow along link highlighter

23. speech synthesis

    - `stopButton.addEventListener('click', toggle(false));` is not working, Then how could we pass the parameter? 

      - 'click', function() {toggle(false)}

      - 'click', toggle.bind(null, false)

        bind(value, argument)

      - 'click', () => toggle(false)

24. Sticky nav

    - ```css
      li.logo {
        max-width: 0;
        overflow: hidden;
        background: white;
        transition: all .5s;
        font-weight: 600;
        font-size: 30px;
      }
      
      .fixed-nav li.logo {
        max-width: 500px;
      }
      ```

      width: 0 ==> auto is not working

      just give it a max-width, and when `.fixed-nav li.logo` comes out give any big number. the result will be natural

25. Event Capture, Propagation, bubbling and once

    - In case of nested divs, if you click the inside one, you are clicking form the inside div to outside div(**bubbling up**)

    - Event listener can have an option. it's the third argument and has a object form

      ```js
      div.addEventlistener('click', function_name, {
      	capture: false,
        once: true
      })
      ```

      - a default value of capture = false

        if you set this one true -> **bubbling down**

      - if function get `e`, and e.stopPropagation(); => bubbling stop

        which means only the one clicked are processed

      - once: it works only once and unbind itself

26. stripe follow along nav

    - ```js
      function handleEnter() {
        this.classList.add('trigger-enter');
        setTimeout(function() {
          this.classList.add('trigger-enter-active');
        }, 150)
      }
      
      function handleLeave() {
        console.log('leave');
      }
      
      triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
      triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
      ```

      setTimeout within the function handleEnter() won't gonna work because `this` inside of setTimeout sets as a `window`

      - if you change it into an arrow function, `this` inherits the one of the parent

        ```js
        function handleEnter() {
          this.classList.add('trigger-enter');
          setTimeout(() => {
            this.classList.add('trigger-enter-active');
          }, 150)
        }
        ```

    - ```css
      .dropdown {
          opacity: 0;
          position: absolute;
          overflow: hidden;
          padding: 20px;
          top: -20px;
          border-radius: 2px;
          transition: all 0.5s;
          transform: translateY(100px);
          will-change: opacity;
          display: none;
        }
      
        .trigger-enter .dropdown {
          display: block;
        }
      
        .trigger-enter-active .dropdown {
          opacity: 1;
        }
      ```

      .dropdown has both opacity:0 and display:none.

      and give animation for each one differently by different class, and fire the animation not at the same time(maybe for more natural result..?)

    - ```js
      setTimeout(() => {
          if(this.classList.contains('trigger-enter')) { // without this condition, if hovering between lis fast, you could see the content first. because we set the time
            this.classList.add('trigger-enter-active');
          }
        }, 150)
      
      
      setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)
      ```

      this is how you can eliminate {}

27. Click and Drag

28. Video Speed Controller

    - ```js
      // using function() {} not arrow function because we need to use this as a speed bar
      speed.addEventListener('mousemove', function(e) {
        const y = e.pageY - this.offsetTop;
        const percent = y / this.offsetHeight;
        const min = 0.4;
        const max = 4;
        const height = Math.round(percent * 100) + '%';
        const playbackRate = percent * (max - min) + min;
        bar.style.height = height;
        bar.textContent = playbackRate.toFixed(1) + 'x';
        video.playbackRate = playbackRate;
      });
      ```

      first, build a function like this

      second, make a function outside,  cut + paste

29. Countdown Timer

    - setInterval is not running sometimes for performance

      in iOS, setInterval is paused whenever scrolling

    - ```js
      setInterval(() => {
          const secondsLeft = Math.round((then - Date.now()) / 1000); // const now is captured when it ran, so we need to use Date.now() again
          if (secondsLeft < 0) return;
        }, 1000);
      ```

      return is not actually stop the interval when it reaches 0, intervals keep running but not showing

      to fix this problem, make a new variable, and set it as a interval

30. Whack A Mole

    :wrench: time's up! signal

    :wrench: button styling

    :wrench: bomb

    :wrench: local storage​