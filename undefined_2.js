// ==UserScript==
// @name Discord Theme
// @description Customized theme for Discord, transparent version (custom background allowed)
// @version 1.0.0
// @namespace http://tampermonkey.net/
// @license CC-BY-SA 4.0
// @grant GM_addStyle
// @run-at document-start
// @include https://discord.com/*
// ==/UserScript==

(function() {
let css = `
/*
    Autor: Roberto Michán Sánchez (Roboron)
    Upstream URL / Report issues: https://github.com/Roboron3042/Cyberpunk-Neon
    License: CC-BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
*/

/* Custom background
    To change the background replace the URL in background-image in .appMount-3lHmkl with your prefered one

    Example:

    background-image: url(https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/blade-runner-2049.jpg);

    Result: https://cdn.discordapp.com/attachments/634038467696787463/634474813838065664/Screenshot_20191017_213616.png
*/

.appMount-3lHmkl {
    background-image: url(https://images.app.goo.gl/M2jAiUiHycxHZcLm8);
    background-color: rgba(9, 24, 51, 0);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.theme-dark {
    --background-primary: rgba(9, 24, 51, .4);
    --background-secondary: rgba(0, 11, 30, .4);
    --background-tertiary: rgba(0, 11, 30, .4);
    --deprecated-panel-background: rgba(9, 24, 51, .4);
    --channeltextarea-background: rgba(19, 62, 124, .7);
    --background-secondary-alt: rgba(9, 24, 51, .7)

}
.theme-dark .container-1D34oG {
    background-color: rgba(9, 24, 51, .4)
}
.theme-dark .inset-3sAvek {
    background-color: rgba(19, 62, 124, .2);
}
.theme-dark .outer-1AjyKL.active-1xchHY, .theme-dark .outer-1AjyKL.interactive-3B9GmY:hover {
    background-color: rgba(9, 24, 51, .4)
}
`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();