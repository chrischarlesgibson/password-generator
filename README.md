# Random password Generator

## Description

---

Random Password Generator is an application that takes user input and generates a random password([Link to project found here](https://chrischarlesgibson.github.io/password-generator/)). The user is prompted to input what length they want their password to be. As well as whether they want it to include lowercase, uppercase, numbers and/or special characters. The user must input a length between 8 and 128 and must also pick at least one character type(lowercase, uppercase, numbers and/or special characters).

Here's a snippet of code that shows the asewome for() loop that i made to generate a random password. I just thought that it would be cool to highlight :

```
 for (var i = 0; i < inputtedPasswordLength; i++) {
    var random =
      characterBank[Math.floor(Math.random() * characterBank.length)];

    passwordArray = [...passwordArray, random];
  }
  return passwordArray.join("");
}
```

## Usage

---

Clicking the "generate password" button will prompt the user to start inputting their criteria.

![how to use GIF](./Assets/password%20generator%20GIF.gif)

## Technologies Used

---

-JavaScript
-CSS
-HTML
-Screencastify
-prettier code formatter

## Author

---

**Chris Gibson** -[Gitub](https://github.com/chrischarlesgibson) -[Linkedin](https://www.linkedin.com/in/chris-gibson-415909250/) -[Portfolio](https://chrischarlesgibson.github.io/Chris-Gibson-project-portfolio/)

## Credits and acknowledgments

---

-[Thanks to my brother Alex Gibson for advice when I was stuck on some code](https://github.com/argibson02)

-[Raphael Vogel's markdown cheatsheet](https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md)

-[W3 schools was used extensively for JavaScript reference guides](https://www.w3schools.com/)

## License

---

This webpage is licensed under the MIT license.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
