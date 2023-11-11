const express = require("express");
const app = express();
const fetch = require("node-fetch");
const axios = require("axios");

let port = 3000;
let query = []

// make sure you create a "public" folder
app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`connected to port: ${port}`);
});

app.get("/", (req, res) => {
  res.render("home");
})


app.get("/login", async (req, res) => {
  let code = req.query["code"];
  await axios.post("https://discord.com/api/oauth2/token",
    new URLSearchParams({
      client_id: process.env.clientId,
      client_secret: process.env.clientSecret,
      grant_type: "authorization_code",
      redirect_uri: process.env.redirectURL,
      code,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  ).then(async (response) => {
    // I use the console to check whether it is running or not    
    console.log(response)
    let { token_type, access_token } = response.data
    
    let resp = await fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `${token_type} ${access_token}`
      }
    })
    let data = await resp.json()
    // Handles if the user doesn't have a profile photo
    let cekAvatar
    let { username, discriminator, id } = data 
    if(data.avatar === null) {
      cekAvatar = "0"
      } else {
      cekAvatar = data.avatar
      }
    // check the player's avatar, does he use gif?
    let format = cekAvatar.startsWith("a_") ? "gif" : "jpg"
    let validAvatar = cekAvatar === "0" ? "https://cdn.discordapp.com/embed/avatars/0.png" : `https://cdn.discordapp.com/avatars/${id}/${data.avatar}.${format}?size=4096`
    // Check again to see if it's running 
    console.log(data)
    query.push({
      name : username,
      avatar: validAvatar,
      id
    })
    res.redirect("/about")
    
      
  }).catch((e) => {
    // If there is an error, it will return to the main page 
    res.render("home")
  })
  
})

app.get("/about", (req, res) => {
  res.render("about", query[0])
})


// ERROR HANDLER :)
process.on("unhandledRejection", (e) => {
  console.log("[1] [ Error Handler ]\n" + e);
});
process.on("uncaughtException", (e) => {
  console.log("[2] [ Error Handler ]\n" + e);
});
process.on("uncaughtExceptionMonitor", (e) => {
  console.log("[3] [ Error Handler ]\n" + e);
})
