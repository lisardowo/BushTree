/*
Heres a quick guide of how the profile config is structured, you can uncomment and modify this 
or go ahead an change 
the uncommented version
profile.INFO = 
{
    title : "<Your User>",
    subtitle : "<here you can add a lil quote or whatever u want>",
    pfpImages : ["<path of the images you want to use(can be only 1)>", "<use relative paths or will not work>"],
    
    platforms: {

    nameoftheplatform: {
      label: <"Name of the platform>",
      url: "<url to be redirected>",
      icon: "<svg of the platform (icon is not strictly necessary)>"
    },
    anotherPlatform: {
      label: "<another platform>",
      //the dictorionary can be empty if you dont have it ready yet but url atributte should exist
      url: ""
    },
    yetAnotherPlatform: {
      label: "<yet another platform>",
      url: "<url to be redirected>"
      //Icon can be empty but then it will only let you show the platform as a rectangular link and not top icon
    }
  },
    Show as top icon row (must have icon)
    socialIcons: ["platform", "anotherplatform"],

    Show as rectangular button
    rectangularLinks: ["platform", "antoherPlatform", "yetAnotherPlatform"],

    theme: 
    {
        bg: "here you can customize the css (use hex values)",
        card:   "#cff9d4",
        text:   "#ffffff",
        ink:    "#0d160f",
    }
}

following is my profile that you can use as an example if needed 
*/
window.profile = window.profile || {};
window.profile.INFO = 
{
    title : "pkg!nn",
    subtitle : "the boy who needs to do something stpid",
    pfpImages : ["assets/pfp1.jpeg", "assets/pfp2.jpeg"],

    platforms: {

    spotify: {
      label: "Spotify",
      url: "https://open.spotify.com/user/31gbbsyu4n2zav23ulmiuh4ntztm?si=733c206b464f487d",
      icon: "assets/spotify.svg"
    },
    github: {
      label: "Github",
      url: "https://github.com/lisardowo",
      icon: "assets/github.svg"
    },
    steam: {
      label: "Steam",
      url: "https://steamcommunity.com/id/ughpenguin/",
      icon: "assets/steam.svg"
    },
    instagram: {
      label: "Instagram",
      url: "https://www.instagram.com/ugh.pp3nguin/",
      icon: "assets/instagram.svg"
    },
    pinterest: {
      label: "Pinterest",
      url: "https://pin.it/CJbpJTi2b"
    },
    x: {
      label: "X",
      
      url: ""
    }
  },
    // Show as top icon row (must have icon)
    socialIcons: ["github", "steam", "spotify", "instagram"],

    // Show as rectangular buttons
    rectangularLinks: ["spotify", "github", "steam", "instagram", "pinterest", "x"],

    theme: 
    {
        bg: "#0f241f",
        card:   "#cff9d4",
        text:   "#ffffff",
        ink:    "#0d160f",
    }
}
