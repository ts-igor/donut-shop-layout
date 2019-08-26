# Donut Shop layout

This is an **HTML+CSS** layout pages for a simple donut shop. Interface is adaptive and mostly made with ***CSS Grid*** and ***CSS Flex*** rules.

## Prebuilt files

If you just want to look at the pages, latest prebuilt files are under *dist* directory.

## Installation for development

You must have installed **Node.js** with **NPM** in order to build this project.

Run this command from the root directory conraining *package.json* file :

```
npm install
```

After installing all the dependencies run:

```
gulp
```

It will start the default Gulp task that automatically recompile changed *\*.pug* and *\*.sass* files to **HTML** and **CSS**. Each compilation also makes running local HTTP server reload its page.

## Used technologies

- SASS (CSS preprocessor)
- PUG (HTML preprocessor and template engine)
- Gulp (taskrunner)
  - *gulp-connect* (plug-in with local HTTP server with LiveReloading)
  - *gulp-sass* (plug-in with SASS compiler)
  - *gulp-pug* (plug-in with PUG compiler)
  - *gulp-jsbeautifier* (plug-in with code beautifier)
