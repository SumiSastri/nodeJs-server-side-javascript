Files access: Now, let's take a look at a base project we'll use throughout this course to explore security best practices with Node. So, the first thing we'll do is copy the base project from the exercise files, so click on Resources and you wanna make sure that you show hidden files, otherwise you're not going to be able to copy the babelrc file, and if you don't know how to do that, search it on Google. So, show hidden Mac files and once you see that file, here, you can copy it. Otherwise, the project is not going to work if you're missing that file. So, copy that. And let's create a new folder on the desktop. So, I'm gonna right click, new folder, then I'm gonna call this base, and then I'm gonna paste what I just copied into the base project, here. Like so, perfect. Once I have that, I'm going to drag and drop this particular project into VSCode. So, if you're using something different, no worries. Open that base project inside your code editor. I'm going to simply open it in Visual Studio Code. And I'm gonna maximize this screen. So, what we wanna do next is install the dependencies. If we look at the package.json, I need a few dependencies installed, so I'm going to do that. So, I'm gonna bring a new terminal by clicking on View, Integrated Terminal and then do nmp install, and while this is installing the dependencies, I'm going to go back to the terminal I already have open in here. The reason I wanna do that is to start the MongoDB and if you don't know or if you haven't installed MongoDB, look into the course where I Node and Express, and I show you how to install MongoDB, and in fact, the project that we're using in this course is from that course. So, let's do a mongod to start. Mongo. Everything is running, here, so we're good to go. Alright, so let's go back here. We have all the dependencies in here. So, if we do an nmp start in the terminal, we should have our project starting with no issues. Your server's running on port 3000. If we go into a browser, new window, and I go into local host, port 3000, I should see Node and Express server is running on port 3000, and I should be able, also, to do a contact, which is basically our list of contacts on the Mongo database. Right now it's empty and it's normal, so. Let's go back to the project and take a look at what is in that project, so on the public side, I have two images that we were using in the previous course, where I'm actually rendering those images. If you wanna take a look at what we do with those images, you can take a look at the course. In the source files, we have controllers. So, we have a few controllers that will return items for us. So, when I did call the route contact, it basically went to get contacts. Since it had nothing in the database when we ran that function, it returned nothing. If we were to add anything in the database, this is the controller that we would use to actually do that command with the database, and so on, so forth, so getContactWithID, or updateContact, or deleteContact. So, these are the controllers. Then we have a model, so we have a schema that we created to determine what kind of data that we are expecting when we create a new contact. So, we are expecting a first name, last name, email, company, phone, and a date is created for us automatically whenever we insert something in the database. And then, finally, we have the routes. So, basically the routes that we can call directly into the browser or from an API, so we have the contact route, we have contact with the contactID, where we could do the put, the get, and the delete request. So, this is primarily the simplest way to do Node and Express, and this is a project that we've done a previous course. I wanted to use that to take a look at the Node security items. Now, if you don't have Mongo, please go ahead and install it because if you use any of those APIs in this project, you're not going to be able to do it if you don't have Mongo installed. Now that we've explored the base project, we can move on.