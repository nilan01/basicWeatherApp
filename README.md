README
### Date
January. 7, 2021
### Location of deployed application
https://lit-oasis-19802.herokuapp.com/
### Time spent
5 hours
### Assumptions made
I assumed that this application is to only be acccessed by users at Thinkific Headquarters in Vancouver. Therefore, this application was deployed only to a single cloud instance on Heroku (in uswest). If this weather application were to be accessed by users across the world, I would have deployed this web application using Amazon Web Services. Mutliple `edge locations` would `reduce latency`, and AWS tools like `Auto Scaling`, paired with `AWS CloudWatch` would help me ensure that I have enough `EC2` instances at all times, without manual intervention.

I also assumed that this application was not meant to follow `Accessibility standards of Canada`. Given my experience in delivering websites for clients, I do take responsibility to make sure that projects that I am part of follow standards as such. 

I have been heavily focused on the delivery of mobile applciations in my spare time. With that said, another assumption I made was that this web application is to primarily be accessed via a web browser on a desktop/laptop, and not a mobile device. With more time, I would have liked to add properties to this application to make it mobile ready for end users.
### Shortcuts/Compromises made
In a real world application I would have definitely resorted to hosting this web application using Amazon EC2. I would do this because of the innovative tools that Amazon has to offer, which can ensure our web applications report high availability, low latency, and cost efficiency through analytics and automation (using AWS CloudWatch to analyze, paired with Auto Scaling (to scale-out or scale-in depending on peak hours traffic).

The reason I hosted this web application on a cloud instance of Heroku is because Heroku is a lighweight cloud service, which allowed me to easily deploy an application to the internet without financial investment. With that said, with the ease of deployment that a cloud service Heroku has to offer, there are some caveats. The challenge I had with Heroku was that the cloud service does not grant us developers access to our servers via SSH. This meant I was unable to access server configurations to manage cross communication between 2 different ports (needed to handle user authentication on producation). Hosting this service on an instance of EC2 would give me control over Ngnix. This means I would be able to implement authentication on the deployed application, as I would be able to access different ports through Nginx configurations. 
### Stretch goals attempted
All stretch goals were completed with exception to authentication on prod. Note that authentication in development is complete. Prod is not functional due to the inability for a developer to SSH into a cloud instance hosted by Heroku to manage server configurations.
### Instructions to run assignment locally
`npm i` `cd client` `npm i` `cd ..` `npm run dev`
### What did you not include in your solution that you want us to know about?
I take pride in all projects that I have been fortunate to work on. I would like to have included a 7 day forecast, and a 24 hour forecast. I would also like to have made this application mobile ready. Furthermore, adding user authentication on production would have been ideal, but I was restricted via Heroku. Using a server like Amazon EC2 would grant me access via SSH into Nginx to manage proxies and configurations. If user authentication was fully functional, I would have also liked to add the ability for a user to favourite cities. 
### Your feedback on this technical challenge
Building this weather application from the ground up was a wonderful way for me to be able to showcase my abilities as a web engineer. I appreciated that the instructions of this take-home were quite open ended, as I was then able to implement the application as I saw fit.
