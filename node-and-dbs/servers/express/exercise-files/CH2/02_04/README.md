Transcript: Postman is my go-to tool whenever I need to test any API endpoints, such as the ones we just created. When you enter a URL in a browser, it sends a get meta to the API. But if you'd like to test the other methods from our server, how will we go about it? You could do Curl commands but I love all the neat features Postman provides so I usually use it over Curl. Let me show you. So go to getpostman.com, and as you can see when you get to the page there are versions for Mac, Windows, and Linux. So if you are Linux go ahead and click and download and install. Same thing on Windows. Pretty simple. Just download and install. In this case we're on a Mac so let's go ahead and do that. We're going to extract that file. And then drag and drop inside the application. And I'm good to go. Let's minimize that page. And let's open Postman. And the first time you open Postman, it's going to ask you to log in. And I'm just going to do that in a second. Yes you can go ahead and open. I'm going to sign up with my Google account. So once you're logged into Postman, it should actually, if you've used it before, it will actually load all the recent commands that you've done. So that's a cool and neat feature from Postman. So in our case what we want to do and let's go back to the RES code very quickly. And what we want to do is basically test the post command here with the new item path. And we want to do the put and the delete as well. So let's start with post with the new item path. So basically go back to Postman and then enter the URL so it's local host. 3000, as you can see I've done this before. And in this case it's forward slash new item. And here's the cool thing. In Postman you can actually select a method that you're going to use to call on to this API. So in any case we want to do post with new item, and click send. And you get the response of post request with new item route on port 3000. That is the response that we expect. So the next one if we go back to RES code, we want to do a put with the path item. Let's go back here. See local host 3000 is the same, so the other one is item. And we want to do a put like so. Click send. A put request with forward slash item route on port 3000. Again this is expected. And we want to do the same for delete. So let's go and do a delete, with the item. A delete request with item route on port 3000. So this is the advantage of using Postman is that you don't have to write a whole long curl command. You can simply add the actual method here and then enter your API endpoint. And then click send. So if you have anything you want to pass, and something we're going to do later on in this course, you can actually use the body tab here. And actually enter the basically the property and the value that you want to pass. And so on and so forth. The other cool thing, and that's pretty much what sold me to this one is the code section. So if you click on code it actually will show you what kind of code you can write to do these commands. So if you go to, let's say for example, javascript to query, this is going to show you the actual code you should write on your front end to call on to the API. And the same thing goes for any other languages, because you could have a backhand or an API in javascript and then your front end is in other languages like PHP. So then you would do HTTP request like so. With a PHP command in and that's your code for PHP and then you can copy to clipboard and then paste into your front end code and off you go. So as you can see the possibilities with Postman are endless. They're a great tool to have in your arsenal. And best of all it's free.