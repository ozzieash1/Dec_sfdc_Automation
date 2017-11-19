$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account.feature");
formatter.feature({
  "line": 2,
  "name": "Account function",
  "description": "",
  "id": "account-function",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@current"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Varify create new account into the Sales Force",
  "description": "",
  "id": "account-function;varify-create-new-account-into-the-sales-force",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user opens a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"https://login.salesforce.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters user name as \"USER_ULFAT\" and password as \"PASSWORD_ULFAT\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "##parameters in double quote above"
    }
  ],
  "line": 8,
  "name": "user click on LogIn",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on Accounts tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on new button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Capital One\" as Account name",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user validates newly created contact \"Capital One\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user logs out of the current application",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.user_opens_a_browser()"
});
formatter.result({
  "duration": 4258284744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://login.salesforce.com/",
      "offset": 19
    }
  ],
  "location": "LogInSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 5759802920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USER_ULFAT",
      "offset": 26
    },
    {
      "val": "PASSWORD_ULFAT",
      "offset": 55
    }
  ],
  "location": "LogInSteps.user_enters_user_name_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 329431125,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.clickOnLogInButton()"
});
formatter.result({
  "duration": 2789881599,
  "status": "passed"
});
formatter.match({
  "location": "AccountsSteps.clickOnAccountsTab()"
});
formatter.result({
  "duration": 23507552386,
  "status": "passed"
});
formatter.match({
  "location": "LeadsSteps.clickOnNewButton()"
});
formatter.result({
  "duration": 803338188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Capital One",
      "offset": 13
    }
  ],
  "location": "AccountsSteps.enterAccountName(String)"
});
formatter.result({
  "duration": 50102256564,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"xPath_AccountName\"}\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 50.10 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027DESKTOP-T57PU49\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_71\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\Dell\\AppData\\Local\\Temp\\scoped_dir6008_1421}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: b01e5694885a7ab1548a78df8459b8d9\n*** Element info: {Using\u003dxpath, value\u003dxPath_AccountName}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat sfdc.automation.utils.SeleniumUtil.clickElementByXpath(SeleniumUtil.java:141)\r\n\tat sfdc.automation.pages.AccountsPage.enterAccountName(AccountsPage.java:40)\r\n\tat sfdc.automation.impl.AccountsImpl.enterAccountName(AccountsImpl.java:51)\r\n\tat sfdc.automation.steps.AccountsSteps.enterAccountName(AccountsSteps.java:33)\r\n\tat ✽.And user enters \"Capital One\" as Account name(Account.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LeadsSteps.clicksOnSave()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Capital One",
      "offset": 38
    }
  ],
  "location": "ContactsSteps.validateContact(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LogInSteps.user_logs_out_of_the_current_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Contact.feature");
formatter.feature({
  "line": 2,
  "name": "Contact function",
  "description": "",
  "id": "contact-function",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@current"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Varify creating a new contact into the Sales Force",
  "description": "",
  "id": "contact-function;varify-creating-a-new-contact-into-the-sales-force",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user opens a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"https://login.salesforce.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters user name as \"USER_ULFAT\" and password as \"PASSWORD_ULFAT\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "##parameters in double quote above"
    }
  ],
  "line": 8,
  "name": "user click on LogIn",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on Contacts tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on new button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Kurmi\" as last name",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user validates newly created contact \"Kurmi\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user logs out of the current application",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.user_opens_a_browser()"
});
formatter.result({
  "duration": 51747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://login.salesforce.com/",
      "offset": 19
    }
  ],
  "location": "LogInSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 2731681188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USER_ULFAT",
      "offset": 26
    },
    {
      "val": "PASSWORD_ULFAT",
      "offset": 55
    }
  ],
  "location": "LogInSteps.user_enters_user_name_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 361092555,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.clickOnLogInButton()"
});
formatter.result({
  "duration": 1483066576,
  "status": "passed"
});
formatter.match({
  "location": "ContactsSteps.clickOnContactsTab()"
});
formatter.result({
  "duration": 2890698677,
  "status": "passed"
});
formatter.match({
  "location": "LeadsSteps.clickOnNewButton()"
});
formatter.result({
  "duration": 506665429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kurmi",
      "offset": 13
    }
  ],
  "location": "LeadsSteps.enterLeadName(String)"
});
formatter.result({
  "duration": 143381142,
  "status": "passed"
});
formatter.match({
  "location": "LeadsSteps.clicksOnSave()"
});
formatter.result({
  "duration": 2444661455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kurmi",
      "offset": 38
    }
  ],
  "location": "ContactsSteps.validateContact(String)"
});
formatter.result({
  "duration": 43012675,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.user_logs_out_of_the_current_application()"
});
formatter.result({
  "duration": 500558517,
  "status": "passed"
});
formatter.uri("LogIn.feature");
formatter.feature({
  "line": 2,
  "name": "Log In function",
  "description": "",
  "id": "log-in-function",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@current"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@automation"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Varify Logging into the Sales Force",
  "description": "",
  "id": "log-in-function;varify-logging-into-the-sales-force",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user opens a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"https://login.salesforce.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters user name as \"USER_ULFAT\" and password as \"PASSWORD_ULFAT\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "##parameters in double quote above"
    }
  ],
  "line": 8,
  "name": "user click on LogIn",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user sees the below objects",
  "rows": [
    {
      "cells": [
        "Home"
      ],
      "line": 10
    },
    {
      "cells": [
        "Chatter"
      ],
      "line": 11
    },
    {
      "cells": [
        "Campaigns"
      ],
      "line": 12
    },
    {
      "cells": [
        "Leads"
      ],
      "line": 13
    },
    {
      "cells": [
        "Accounts"
      ],
      "line": 14
    },
    {
      "cells": [
        "Contacts"
      ],
      "line": 15
    },
    {
      "comments": [
        {
          "line": 16,
          "value": "#|Opportunities|"
        },
        {
          "line": 17,
          "value": "#|Forecasts|"
        },
        {
          "line": 18,
          "value": "#|Contracts|"
        },
        {
          "line": 19,
          "value": "#|Orders|"
        }
      ],
      "cells": [
        "Cases"
      ],
      "line": 20
    },
    {
      "comments": [
        {
          "line": 21,
          "value": "#|Solutions|"
        },
        {
          "line": 22,
          "value": "#|Products|"
        }
      ],
      "cells": [
        "Reports"
      ],
      "line": 23
    },
    {
      "cells": [
        "Dashboards"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user logs out of the current application",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.user_opens_a_browser()"
});
formatter.result({
  "duration": 56023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://login.salesforce.com/",
      "offset": 19
    }
  ],
  "location": "LogInSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 1242726232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USER_ULFAT",
      "offset": 26
    },
    {
      "val": "PASSWORD_ULFAT",
      "offset": 55
    }
  ],
  "location": "LogInSteps.user_enters_user_name_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 290580816,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.clickOnLogInButton()"
});
formatter.result({
  "duration": 794605048,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.validateTab(String\u003e)"
});
formatter.result({
  "duration": 3616760053,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.user_logs_out_of_the_current_application()"
});
formatter.result({
  "duration": 396096537,
  "status": "passed"
});
});