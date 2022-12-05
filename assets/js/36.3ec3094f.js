(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{324:function(s,t,a){s.exports=a.p+"assets/img/folder.d63b2199.png"},483:function(s,t,a){"use strict";a.r(t);var e=a(44),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("ModuleLayoutWLesson",[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Agenda")]),s._v(" "),e("ul",[e("li",[s._v("Sass\n"),e("ul",[e("li",[s._v("Variables")]),s._v(" "),e("li",[s._v("Nesting")]),s._v(" "),e("li",[s._v("Mixins & Extends")]),s._v(" "),e("li",[s._v("Functions")])])])])])]),s._v(" "),e("h2",{attrs:{id:"sass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sass"}},[s._v("#")]),s._v(" Sass")]),s._v(" "),e("ul",[e("li",[s._v("Sass is a CSS pre-processor, which means that it is processed and generates the CSS before the CSS is sent to the browser.")]),s._v(" "),e("li",[s._v("As the designer / developer you will write the Sass commands to generate the CSS.")]),s._v(" "),e("li",[s._v("You will compile the Sass code into CSS.")]),s._v(" "),e("li",[s._v("The finished CSS is what will be linked to on the webpage, just like always.")]),s._v(" "),e("li",[s._v("The official website "),e("a",{attrs:{href:"http://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sass website"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("There are other CSS pre-processors that you may encounter")]),s._v(" "),e("li",[e("a",{attrs:{href:"http://lesscss.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("LESS"),e("OutboundLink")],1),s._v(" and "),e("a",{attrs:{href:"http://stylus-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Stylus"),e("OutboundLink")],1),s._v(" are two popular ones.")]),s._v(" "),e("li",[s._v("The popularity of LESS has reduced lately. Sass and Stylus are the two most popular.")])]),s._v(" "),e("h2",{attrs:{id:"sass-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sass-installation"}},[s._v("#")]),s._v(" Sass Installation")]),s._v(" "),e("ul",[e("li",[s._v("It can be installed in several ways.")]),s._v(" "),e("li",[s._v("We will be using the DART version of Sass.")]),s._v(" "),e("li",[e("a",{attrs:{href:"http://sass-lang.com/dart-sass",target:"_blank",rel:"noopener noreferrer"}},[s._v("About DART Sass"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"http://sass-lang.com/install",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install Instructions"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("We are using the DART version because it has the least issues with installs and running.")]),s._v(" "),e("li",[s._v("You can install Sass with Ruby but that requires extra install work for Windows.")]),s._v(" "),e("li",[s._v("You can install and run Sass with "),e("code",[s._v("npm")]),s._v(" but it runs slower than with DART or RUBY.")]),s._v(" "),e("li",[s._v("On Windows you can use "),e("code",[s._v("Choclatey")]),s._v(" package manager to install a stand alone version.")]),s._v(" "),e("li",[s._v("On OSX or Linux you can use "),e("code",[s._v("HomeBrew")]),s._v(" to install a stand alone version.")]),s._v(" "),e("li",[s._v("You can run Sass in the browser with JavaScript but this is inefficient and forces the user to download more and do the processing.")]),s._v(" "),e("li",[s._v("We will be running it from the CLI with Dart-Sass")]),s._v(" "),e("li",[s._v("Go "),e("a",{attrs:{href:"https://github.com/sass/dart-sass/releases/tag/1.14.3",target:"_blank",rel:"noopener noreferrer"}},[s._v("HERE"),e("OutboundLink")],1),s._v(" to download the proper version for your Windows x64.")]),s._v(" "),e("li",[s._v("You will then need to add it to your PATH Environmental variable. "),e("a",{attrs:{href:"https://katiek2.github.io/path-doc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Instructions"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"running-sass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-sass"}},[s._v("#")]),s._v(" Running Sass")]),s._v(" "),e("ul",[e("li",[s._v("For Sass to do the pre-processing we need to set it up.")]),s._v(" "),e("li",[s._v("We will have one folder where we save our .scss files")]),s._v(" "),e("li",[s._v("Then we run the command to compile the Sass and tell it where to put the newly generated .css file(s)")]),s._v(" "),e("li",[s._v("Let's say we have the following project structure\n"),e("div",[e("img",{attrs:{src:a(324),alt:"folder structure"}})])]),s._v(" "),e("li",[s._v("Now let's say that there is a file inside the "),e("code",[s._v("sass")]),s._v(" folder called "),e("code",[s._v("main.scss")])]),s._v(" "),e("li",[s._v("We want to convert that file from Sass to CSS, so on the CLI, from the root folder of our project, we type:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sass sass/main.scss:css/main.css\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("That will run the compiler once to convert the Sass file into a file, inside the css folder, called "),e("code",[s._v("main.css")])])]),s._v(" "),e("li",[e("p",[s._v("If you wanted to convert ALL the files inside the sass folder into css files of the same name inside the css folder then type:")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sass sass/:css/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("Use imports in Sass to combine your Sass files into a single CSS file that can be linked to from your HTML")])]),s._v(" "),e("ul",[e("li",[s._v("If you want to have Sass constantly watch your folder for changes to files as they are saved then you can use the --watch flag.")]),s._v(" "),e("li",[s._v("To stop Sass watching your files, use CTRL + C to stop it.")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sass --watch sass/:css/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("Finally, there are options for the output style of your CSS.")]),s._v(" "),e("li",[s._v("You can output your CSS in an expanded format that makes it easy for you to read.")]),s._v(" "),e("li",[s._v("OR")]),s._v(" "),e("li",[s._v("You can output your CSS in a compressed format that removes all the comments and extra whitespace so you have a small file-size that is better for sending to the browser.")]),s._v(" "),e("li",[s._v("Enter ONE of the lines below")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sass --watch sass/:css/ --style expanded\nsass --watch sass/:css/ --style compressed\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("For any of these "),e("code",[s._v("sass")]),s._v(" commands there will also be a "),e("code",[s._v(".css.map")]),s._v(" file that gets created.")]),s._v(" "),e("li",[s._v("The map file will be used to track changes between versions, determine where different parts of the file came from, and to provide debugging information to your IDE.")])]),s._v(" "),e("h2",{attrs:{id:"sass-syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sass-syntax"}},[s._v("#")]),s._v(" Sass Syntax")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Here is the basic "),e("a",{attrs:{href:"http://sass-lang.com/guide",target:"_blank",rel:"noopener noreferrer"}},[s._v("Guide to Sass"),e("OutboundLink")],1)])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"http://sass-lang.com/documentation/file.Sass_REFERENCE.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Full Reference for Sass"),e("OutboundLink")],1)])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"http://thesassway.com/beginner",target:"_blank",rel:"noopener noreferrer"}},[s._v("Good Sass tutorial site"),e("OutboundLink")],1)])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://hackr.io/tutorials/learn-sass?sort=recent&type_tags%5B%5D=1",target:"_blank",rel:"noopener noreferrer"}},[s._v("Multiple Sass tutorials on Hackr.io"),e("OutboundLink")],1)])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://www.youtube.com/watch?v=5jZGo_k8Rd0&list=PLyuRouwmQCjlzPHwHOAIfIFXkf6J8Q_qy",target:"_blank",rel:"noopener noreferrer"}},[s._v("Learning Sass video playlist "),e("OutboundLink")],1)])]),s._v(" "),e("li",[e("p",[s._v("Key Sass concepts:")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Variables")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[s._v("$"),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-stack")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Helvetica"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sans-serif"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Mixins")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token atrule"}},[e("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@mixin")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("transform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$property"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-transform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $property"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("-ms-transform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $property"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $property"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token atrule"}},[e("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@include")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("transform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("30deg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Functions")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token atrule"}},[e("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("double")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$size"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token atrule"}},[e("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@return")]),s._v(" $size * 2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n  //20px  -> 40px   3rem -> 6rem\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("h1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("double")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("$lg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Nesting")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".row")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid #999"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(";\n  .col")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #e4e4e4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1rem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Partials and Imports")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*  /sass/_some.scss */")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token atrule"}},[e("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reset"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Extends")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("%message-shared")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1px solid #ccc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".message")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #333"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token atrule"}},[e("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@extend")]),s._v(" %message-shared"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Interpolation")]),s._v(" "),e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("p.#")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("$attr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("-color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])])])]),s._v(" "),e("h2",{attrs:{id:"playground-for-testing-sass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#playground-for-testing-sass"}},[s._v("#")]),s._v(" Playground for Testing Sass")]),s._v(" "),e("ul",[e("li",[s._v("There is a website, like CodePen, that you can use to test your Sass syntax")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.sassmeister.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("SassMeister"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"to-do-before-week-13"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#to-do-before-week-13"}},[s._v("#")]),s._v(" To Do Before Week 13")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("Self-Directed To Do")]),s._v(" "),e("ul",[e("li",[s._v("Get familiar with the "),e("a",{attrs:{href:"https://getbootstrap.com/docs/5.1/getting-started/introduction/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Bootstrap documentation"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("Complete "),e("RouterLink",{attrs:{to:"/assignments/exer.html#week-12-sass-file-organization"}},[s._v("Week 12: Sass File Organization")])],1),s._v(" "),e("li",[s._v("Review the "),e("RouterLink",{attrs:{to:"/assignments/projects.html#_1-portfolio-website"}},[s._v("final assignment")])],1)])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);