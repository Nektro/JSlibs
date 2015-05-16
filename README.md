# JSlibs
A group of libraries that you might use on your website. Or not. You do you :)

## License & About
You are free to download, use, modify, and all that with this code. Attribtion would be nice, but not required. At the moment these are made for me in my free time.
That said, these are provided on an "as is" basis, but feel free to comment and pull.

## Keys.js
Use this to get the key codes for most of the Keyboard for all your game and shortcut listeners.
```javascript
window.addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case Keys.ARROW_UP:
      // Jump logic
      break;
  }
});
```
## Util.php
First, check with your provider to see if include of http is enabled on your server if you with to load over GitHub.
Second, make sure to use the actual raw URL in your include, for if you use a service like RawGit, the file will be interpreted on the server on not be accessible to you.
Alternatively, you can download the file.
Check out [the file](php/util.php) to the the variables and functions reference.

~Nektro
