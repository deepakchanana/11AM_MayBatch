$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Update personal information(First Name) in my account.feature");
formatter.feature({
  "line": 1,
  "name": "Update personal Information",
  "description": "",
  "id": "update-personal-information",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Update personal information(First Name) in my account",
  "description": "",
  "id": "update-personal-information;update-personal-information(first-name)-in-my-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username \"automationpractice25@gmail.com\" and password \"test@1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on My Personal Information button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter \"newtestuserrrr\" in firstname input box",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters \"test@1234\" in Current password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"test@1234\" in New Password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"test@1234\" in Confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Save",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Validate message \"Your personal information has been successfully updated.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefition.Open_browser()"
});
formatter.result({
  "duration": 7702037877,
  "status": "passed"
});
formatter.match({
  "location": "StepDefition.User_click_on_Sign_In_link()"
});
formatter.result({
  "duration": 2911051611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "automationpractice25@gmail.com",
      "offset": 21
    },
    {
      "val": "test@1234",
      "offset": 67
    }
  ],
  "location": "StepDefition.User_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 194626037,
  "status": "passed"
});
formatter.match({
  "location": "StepDefition.Click_on_SignIn_button()"
});
formatter.result({
  "duration": 2477770190,
  "status": "passed"
});
formatter.match({
  "location": "StepDefition.User_clicks_on_My_Personal_Information_button()"
});
formatter.result({
  "duration": 1583667181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newtestuserrrr",
      "offset": 12
    }
  ],
  "location": "StepDefition.User_enter_in_firstname_input_box(String)"
});
formatter.result({
  "duration": 3110975231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@1234",
      "offset": 13
    }
  ],
  "location": "StepDefition.User_enters_in_Current_password(String)"
});
formatter.result({
  "duration": 83739744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@1234",
      "offset": 13
    }
  ],
  "location": "StepDefition.User_enters_in_New_Password(String)"
});
formatter.result({
  "duration": 73498530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@1234",
      "offset": 13
    }
  ],
  "location": "StepDefition.User_enters_in_Confirmation(String)"
});
formatter.result({
  "duration": 3074719038,
  "status": "passed"
});
formatter.match({
  "location": "StepDefition.Click_on_Save()"
});
formatter.result({
  "duration": 6636798662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your personal information has been successfully updated.",
      "offset": 18
    }
  ],
  "location": "StepDefition.Validate_message(String)"
});
formatter.result({
  "duration": 26299825,
  "status": "passed"
});
formatter.after({
  "duration": 794726514,
  "status": "passed"
});
});