<div align="center">
  <h1>discord-auth-example</h1>
  <h4>simple example of discord authorization (login with discord) , with express</h4>
</div>
<div align="left">
  <h2>Introduction</h2>
  <p> guys, here I just give a simple example,<br> 
    I use the <strong>Android</strong> platform, with the aim of being like iOS, desktop<br>
    You can make sure this file runs well <br>
    There are many ways that can be used to create Discord authorization <br>
    for example on the page <strong><a href="https://discordjs.guide/oauth2/#implicit-grant-flow">another example</a></strong>.<br>
    but back again to my goal, creating a file like this I hope you all like it <br>
    thank you and good luck trying it</p><br>

  <h2>About</h2>
  <p>Maybe most Discord bot developers need a dashboard, and need several other needs such as creating a website for their bot,However, they also need permission to access photos, IDs and names from the Discord account they use, or other things such as requiring guild access, email or whatever depending on their goals.</p><br>

  <h2>Example</h2>
  <h3>Installation</h3>
  <ul>
  <details>
    <summary>required</summary>
    <ul>
      <li><strong>nodejs v16</strong> or the latest version</li>
      <li><strong>express</strong></li> 
      <li><strong>axios</strong></li>
      <li><strong>node-fetch</strong></li>
    </ul>
  </details>
  <details>
    <summary>automatic installation</summary>
    <h5>git clone</h5>
    <p>clone this project with an example like this on your terminal <br>
    <code>git clone https://github.com/Drnk-28/discord-auth-example.git</code></p>
    <p>after that, you can manage everything starting from <a href="#settings">this</a><br>after that run it with <code>node .</code> on your terminal</p>
  </details>
  
  <details>
    <summary>manual installation</summary>
    <h5>download repository</h5>
    <p>You can download <a href="https://github.com/Drnk-28/discord-auth-example/archive/refs/heads/master.zip">this repository</a> on the main page of this repository<br>After that, you can paste all the files in it into your file editor, and don't forget to fill in everything you need in the <a href="#settings">settings</a> section.<br>After that, you can run the file with <code>node .</code> in your terminal </p>
  </details>
  </ul>
  <h3 id="settings">Settings</h3>  
  <ul>
  <details>
    <summary>env-example</summary>
    <pre>clientId=<br>clientSecret=<br>redirectURL=</pre>
    <p>You can get your clientId and clientSecret on the <a href="https://discord.com/developers/applications"> discord developer portal </a>website, there you must have an application, and if there is no application yet, you need to create one first. if so, you just need to select the application and go to the <strong>OAuth2</strong> menu, and select the general page, and do the same as in the screenshot below
<img src="/public/image/Example-1.jpg" alt="Example 1"> <br>
     for the <code>redirectURL=</code> you can fill it with <code>https://localhost:3000/login</code> or with <code>https://yourcoolwebsite.domain/login</code>
    </p>
  </details>

  <details>
    <summary>authorization</summary>
    <p>the file below is located in <a href="/views/home.ejs"><code>home.ejs</code></a></p>
    <code>&lt;a href="Your authorization link is here" class="login"&gt;Login&lt;span&gt;&lt;/span&gt;&lt;i class="bx bx-rocket"&gt;&lt;/i&gt;&lt;/a&gt;</code>
<p>You can get the authorization link from the Discord developer portal website, it is located in the OAuth2 menu, on the URL Generator page
do exactly the same as the example below
<img src="/public/image/Example-2.jpg" alt="Example 2"/>
</p>
  </details> <br>
  </ul>
  <p>Once you feel like everything is finished or you don't need anything else, you can try it by pressing the link <a href="https://localhost:3000/"><code>https://localhost:3000/</code><a></p>
  <h2>Credits</h2>

</div>
