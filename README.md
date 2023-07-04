# 03 Generating JavaScript

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes. The password can include special characters.

## Objective

In this challenge the objectives are the following.
* Create an interactive random password generator.
* Prompt for password criteria.
* Must be no less than 8 characters and no more than 128 characters.
* When asked for character types, confirm at least one of the following characters options for generator to operate.
* When criteria is met the user will have a unique, random password generated.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Series of Events

Challenge 03, creating a random password generator. After going through the user story as well as the acceptance criteria it was clear that the assignment was to create a random password no less than 8 characters but no more than 128 characters. With what was given in the starter code I first built the prompt to select the length of characters your password will be. 13, 56, 121, etc. The conditional statement verifies that the user has selected an acceptable option given. If the user chooses say the number 7 or 129 they will be alerted with an error message of an invalid password length. If the selected number is acceptable the user will then confirm the characters they would like to be utilized in their password. Confirm messages were then implemented to include uppercase, lowercase, special and numeric characters. The conditional statement for these characters state that the user must select at least one character set in order to continue. If the user fails to select at least one character option they will be alerted with an error message that at least one character must be selected. The variables were then created to give the characters value. The conditional statement then states that depending on which character set was selected it will be designated the correspoding value. This will give it the string of characters to work from. In order for this code to be executed a for loop must be used. This allows the code to repeat a set of instructions until the desired destination is reached. Once all the prompts and requirements are met the user will be presented with a new, unique, randomly generated password.

## Sources

In this challenge utilizing JavaScript for further assistance to develop the best application I could I revisited course lectures, notes, YouTube, Google, MDN, W3 Schools, JavaScript for Dummies, reached out to colleagues and classmates, worked with TA's during office hours, bounced ideas and follow up questions off my tutor. 

## Screenshots

* ![Alt text](<Screenshot 2023-07-03 at 7.55.57 PM.png>)
* ![Alt text](<Screenshot 2023-07-03 at 7.56.15 PM.png>)
* ![Alt text](<Screenshot 2023-07-03 at 7.59.20 PM.png>)
* ![Alt text](<Screenshot 2023-07-03 at 7.56.40 PM.png>)
* ![Alt text](<Screenshot 2023-07-03 at 8.00.34 PM.png>)
* ![Alt text](<Screenshot 2023-07-03 at 7.56.54 PM.png>)
* ![Alt text](<Screenshot 2023-07-03 at 7.57.20 PM.png>)
* ![Alt text](<Screenshot 2023-07-03 at 7.57.36 PM.png>)
* ![Alt text](<Screenshot 2023-07-03 at 7.57.55 PM.png>)
* ![Alt text](<Screenshot 2023-07-03 at 7.58.21 PM.png>)

## Final Submission

* https://jiujitsucarrot.github.io/generating-javascript/
* https://github.com/jiujitsucarrot/generating-javascript

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

## Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

## Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

## Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the challenge instructions.

## Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, scrrenshot, and link to deployed application.

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.