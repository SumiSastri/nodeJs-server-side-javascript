Transcript: There will be times that you need to provide static files to your clients; Images, PDFs, downloadable files are all great examples. But the idea of static files doesn't end there. Non dynamic files such as CSS, HTML, and any other static file needed can be hosted this way. You can use it any way you want. Let me demonstrate. So the first thing we need to do is open the exercise files, and also open the app here. So the Express app folder, click on it, and then create two folders. One. So right click new folder and call this one public. And then right click new folder and call this one images. And what we'll do is basically is click on resources in the exercise files and grab rocket first. So copy, so Command+C. And then put this one in the images. So paste. And then grab tent. So Command+C for copy. And then put this one in the public so Command+V. Or right click paste. And then you can close all this. And lets to go to VS code and I'm going to show you how you can load static files inside of your server. First thing you need to do before actually setting up which images are loaded when you are calling onto which path you need to use something specific. So it's call express.static and it's a method that exists in the Express API. And when you use that you're able to add static path to your server. So let's go ahead and do that. So do app.use. And while we're on the subject, use is a method in Express that allows you to basically add specific middleware to a path. So let's say for example you want to have on a specific path a specific piece of code just before or after, you can actually do that with middleware. I'll get into more details about middleware in this course later on so let's continue. So use and that's a method. Express dot static And then you need to mention which folder you're going to use for your static files. In this case let's go with public first. So if you don't specify the path, so if we're not specifying the path here before we're actually using this method here, it's basically available on the default path which is basically forward slash. So you can basically forward slash and the name of the file, and you'll be able to grab anything from the public folder. So let's go ahead and save. And test that. So in our public folder we have the tent. Like so. So let's go in our browser and let's do local host forward slash tent.jpg. Boom, we have our image loaded. And we're good to go. Okay. So let's try the other one. Rocket. Do you think it's going to work? No it's not. Why that is? Well first of all, it's not in the right folder. So if it's in this folder and not in a public folder, it's not going to work. The second thing, we haven't specified any path for images and the ability to use it to load whatever is inside of that folder. So let's create that. Let's go back to VS code and create a specific path for images. So again we're going to use app. .use And then here we're going to specify the path for images. And do images like so. And then tell it that for this path, load the static folder. Images. And let me put an L for your all good. So this is for... Images folder And on path... Images. This is for the public folder on path forward slash. So now once we save this, we'll be able to do forward slash images forward slash and then the actual file. Let's go ahead and do that. Save this. Let's go back here. And now let's do images forward slash rocket.jpeg And we got our beautiful rocket loaded on our screen. So this is how you would pretty much use the static method to load anything that you want. It could be a PDF. It could be anything that you want in there. So it could be a CSS file too. If you do that, make sure that you render it from a front end. So this a way to load static files. So basically files that never change. That you'd like to host on the server and then use it for whatever you need it for. So let's move on.