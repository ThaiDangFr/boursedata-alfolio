const ninja=document.querySelector("ninja-keys");ninja.data=[{id:"nav-about",title:"about",section:"Navigation",handler:()=>{window.location.href="/"}},{id:"nav-blog",title:"blog",description:"",section:"Navigation",handler:()=>{window.location.href="/blog/"}},{id:"nav-stocks-amp-market",title:"stocks &amp; market",description:"Retrouvez ici les analyses d&#39;action et de march\xe9",section:"Navigation",handler:()=>{window.location.href="/stocks/"}},{id:"post-trading-vs-investissement",title:"Trading vs investissement",description:"La diff\xe9rence entre le trading et l&#39;investissement",section:"Posts",handler:()=>{window.location.href="/blog/2024/trading-vs-investir/"}},{id:"project-project-1",title:"project 1",description:"with background image",section:"Projects",handler:()=>{window.location.href="/stocks/1_project/"}},{id:"project-project-2",title:"project 2",description:"a project with a background image and giscus comments",section:"Projects",handler:()=>{window.location.href="/stocks/2_project/"}},{id:"project-project-3-with-very-long-name",title:"project 3 with very long name",description:"a project that redirects to another website",section:"Projects",handler:()=>{window.location.href="/stocks/3_project/"}},{id:"project-project-4",title:"project 4",description:"another without an image",section:"Projects",handler:()=>{window.location.href="/stocks/4_project/"}},{id:"project-project-5",title:"project 5",description:"a project with a background image",section:"Projects",handler:()=>{window.location.href="/stocks/5_project/"}},{id:"project-project-6",title:"project 6",description:"a project with no image",section:"Projects",handler:()=>{window.location.href="/stocks/6_project/"}},{id:"project-ma",title:"MA",description:"Mastercard",section:"Projects",handler:()=>{window.location.href="/stocks/ma/"}},{id:"project-v",title:"V",description:"Visa",section:"Projects",handler:()=>{window.location.href="/stocks/v/"}},{id:"socials-email",title:"Send email",section:"Socials",handler:()=>{window.open("mailto:%63%6F%6E%74%61%63%74@%62%6F%75%72%73%65%64%61%74%61.%66%72","_blank")}},{id:"socials-rss",title:"RSS Feed",section:"Socials",handler:()=>{window.open("/feed.xml","_blank")}},{id:"light-theme",title:"Change theme to light",description:"Change the theme of the site to Light",section:"Theme",handler:()=>{setThemeSetting("light")}},{id:"dark-theme",title:"Change theme to dark",description:"Change the theme of the site to Dark",section:"Theme",handler:()=>{setThemeSetting("dark")}},{id:"system-theme",title:"Use system default theme",description:"Change the theme of the site to System Default",section:"Theme",handler:()=>{setThemeSetting("system")}}];