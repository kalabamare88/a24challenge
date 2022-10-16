#####1.What is your favourite new javascript feature and why?
   Dynamic import: this feature helped me to import js files dynamically as modules in to my 
     application
     
#####2.Explain an interesting way in which you have used this javascript feature.
  I used Dynamic import feature to load the js file module conditionally without polluting the gloabal namespace

#####3.Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)
  The main difference between regular and arrow functions is the way they response to the this keyword
  a) In regular function the this keyword refers to different things based on where and how the function is invoked.
     During simple invocation, this refers to the global object. During a method invocation it refers to the object which owns the method.
     Due to this reasons you can construct an object using regular function using th new keyword
  b) In case of the arrow function no matter how the function is invoked, this refers to a value from the outer function. Or it resolves the 
     this keyword lexically. due to this reasons you can not construct an object using arrow functions. the advantage of arrow functions is that 
     it allows you to write clean code due to its short syntax and its suitable for methods like map, reduce, forEach

#####4.What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’
   The first case 'myFunction(++foo)' first increments the argument foo and uses it in its calculations, the second case 'myFunction(foo++)' uses the foo
   variable without incrementing it first. it's increased after its used in the calculations.

#####5.In your own words, explain what a javascript ‘class’ is and how it differs from a function.
  A function is a block of single or multiple lines of code, that performa a specific task.its a code block that we use to accomplish some things in our code.
  on the other hand, class is part of the OOP concept that we use to bind data and functionaltiy to characterize an object
          CSS   

#####6.In your own words, explain css specificity.
  its a technique or a calculation for which the browser determines which style to implement on a specific element. It is used to address the issue that
  arises when two or more styles are applied to thesame element. based on the weight of the selectors, the one whith higher value is implemented on the contested element.

#####7.In your own words, explain, what is ‘!important’ in css.  Also how does it work?  Are there any special circumstances when using it, where it’s behaviour might not be what you expect?
  The '!important' in css is generally used to overwrite an initialy implemented style. it adds weight to the new style with the !important on the side and overwrite all the previous style 
  for that element.The problems it makes css debugging harder sometimes if you have large css file. we can use when we work on content management system(CMS) to override some of the CMS styles.

#####8.What is your prefered layout system: inline-block, floating + clearing, flex, grid, other?  And why?
  flex box and CSS grid are my favorite layout systems. because with flex box and grid layout system, you can easily create resposive layout that works in all devices smoothly.
  a layout created with this methods is easiy to debug, responsive, and smooth.

#####9.Are negative margins legal and what do they do (margin: -20px)?
  Negative margins allows you to draw the element closer to its top or left neighbour, or draw its right and bottom neighbour closer to it.negative margins are legal to use, but they can make your 
  css hard to read and debug.

#####10.If a <div/> has no margin or other styling and a <p/> tag inside of it has a margin top of some kind, the margin from the <p/> tag will show up on the div instead (the margin will show above the
   div not inside of it), why is this?  What are the different things that can be done to prevent it?
   There are several technics that we can use to overcome this problem: applying the following properties to the parent element.
   
   a)
      `.parent{
         padding-top:1px;
         margin-top:-1px;                
         }`
         
   b)
       `.parent{
             overflow:hidden;   
             }`
         


#####11.What technologies do you use to unit test your react components?
   JEST AND CYPRESS

#####12.Are there any pitfalls associated with this technology that have caused you difficulty in the past?
   The difficulty I faced while using Jest was the libraries and toolings that are supported by jest are not that many.
   I couldn't take snapchat tests using jest.

#####13.How do you test in your unit tests to see if the correct properties are being passed to child components.
   to overcome the stated difficulties, I used other unit testing technologies such as mocha and jasmine.


   

  


 


