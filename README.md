# Greeting Webpage

I made this project to practice:

* How to change the css stlye using JS
* Date object
* getHours Method

The idea was to create a webpage that could greet the user according to the hour of his device. Everything that can be seen on the webpage was incorporated with JS to practice DOM manipulation. That's why there is neither any content in the body of the HTML file nor any CSS file. 

To get the users hour I used the **Date()** object with the **getHours()** method.

Then, I separated the hour of a day in 5 different greetings. In the **if... else** condition I defined their ranges and in the statement I called the **purMessage()** function and deliverd it the correspondent greeting as a parameter. 

The **putMessage()** function creates content in the HTML and CSS. First, I created the variable **getBody** that calls the body in the HTML, that is where the changes are going to be made. With the variable **newElement** I create the p element, and with **newContent** I also create the variable that stores the message parameter.

Using the method **appendChild()** I put the content of the message parameter in the p element, and I also put the p element in the body.

With **setAttribute** I give the p element a class, and with the style.cssText property I change its alignment, font size and font family.

Finally, the **if...else within de putMessage()** function changes the body background according to the content of the message parameter, using also the style.cssText property.
