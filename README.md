# Lab8_Starter
 
Partners: Brian Seo and Yunhao Du

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? 
    1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
      
      We don't need to unit test to test the "message" feature because the message feature is not a small individual component.  The feature of the "message" is sending messages and receiving messages. It needs the interaction of different individual       components. This is not the goal for unit tests.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
  
     Yes, I think we shoild use a unit test to test "max message length" feature here because the feature of "max message length" is small and limit. It is an individual component and can be exected quickly. So it will not influence the unit tests since it is fast.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
  
     The test will run without using a browser.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
     
     beforeAll(async() =>{
       await page.goto(('http://127.0.0.1:5500');
       await page.click('img',{alt: 'settings'});
       await page.waitForTimeout(500);
     });

