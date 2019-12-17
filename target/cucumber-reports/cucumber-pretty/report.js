$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Tek School Scenarios",
  "description": "",
  "id": "tek-school-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "SDET2019AUG_SDET_Register_Form_Test",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-register-form-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@SDET_RF_SO"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "User click on myAccount menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User click on register on myAccount menu",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User fill register form with below information",
  "rows": [
    {
      "comments": [
        {
          "line": 61,
          "value": "#firstname|lastName|email|phone|password|"
        }
      ],
      "cells": [
        "Shaiq",
        "Darwish",
        "\u003cemail\u003e",
        "2021234455",
        "Test123"
      ],
      "line": 62
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on \u0027\u003cradioButton\u003e\u0027 radio button for Subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User should see \u0027Your Account Has Been Created!\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-register-form-test;",
  "rows": [
    {
      "cells": [
        "email",
        "radioButton"
      ],
      "line": 68,
      "id": "tek-school-scenarios;sdet2019aug-sdet-register-form-test;;1"
    },
    {
      "cells": [
        "ahmad1234@gmail.com",
        "yes"
      ],
      "line": 69,
      "id": "tek-school-scenarios;sdet2019aug-sdet-register-form-test;;2"
    },
    {
      "cells": [
        "teacher@gmail.com",
        "no"
      ],
      "line": 70,
      "id": "tek-school-scenarios;sdet2019aug-sdet-register-form-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29609057400,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-BO26G71\u0027, ip: \u0027169.254.78.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:192)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepDefinitions.Initializer.beforeHooks(Initializer.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:30577/status] to be available after 20005 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:187)\r\n\t... 64 more\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(Unknown Source)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:147)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 65 more\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 69,
  "name": "SDET2019AUG_SDET_Register_Form_Test",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-register-form-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@SDET_RF_SO"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "User click on myAccount menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User click on register on myAccount menu",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User fill register form with below information",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "comments": [
        {
          "line": 61,
          "value": "#firstname|lastName|email|phone|password|"
        }
      ],
      "cells": [
        "Shaiq",
        "Darwish",
        "ahmad1234@gmail.com",
        "2021234455",
        "Test123"
      ],
      "line": 62
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on \u0027yes\u0027 radio button for Subscribe",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User should see \u0027Your Account Has Been Created!\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_myAccount_menu_on_top_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_register_on_myAccount_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_fill_register_form_with_below_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 15
    }
  ],
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_yes_radio_button_for_Subscribe(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_should_see_Your_Account_Has_Been_Created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 37819800,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.Initializer.afterHooks(Initializer.java:55)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 33349638700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 19867054600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 6265749100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 10261900,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "SDET2019AUG_SDET_Register_Form_Test",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-register-form-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@SDET_RF_SO"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "User click on myAccount menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User click on register on myAccount menu",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User fill register form with below information",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "comments": [
        {
          "line": 61,
          "value": "#firstname|lastName|email|phone|password|"
        }
      ],
      "cells": [
        "Shaiq",
        "Darwish",
        "teacher@gmail.com",
        "2021234455",
        "Test123"
      ],
      "line": 62
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on \u0027no\u0027 radio button for Subscribe",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User should see \u0027Your Account Has Been Created!\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_myAccount_menu_on_top_of_the_page()"
});
formatter.result({
  "duration": 3182728200,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_register_on_myAccount_menu()"
});
formatter.result({
  "duration": 2042865300,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_fill_register_form_with_below_information(DataTable)"
});
formatter.result({
  "duration": 1473020400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no",
      "offset": 15
    }
  ],
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_yes_radio_button_for_Subscribe(String)"
});
formatter.result({
  "duration": 470806800,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_continue_button()"
});
formatter.result({
  "duration": 1137425700,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_should_see_Your_Account_Has_Been_Created()"
});
formatter.result({
  "duration": 30618663700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[text()\u003d\u0027Your Account Has Been Created!\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.79)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-BO26G71\u0027, ip: \u0027169.254.78.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.79, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\aminu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54944}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fd692fbca9391c03ec2dc4c4f6444e6a\n*** Element info: {Using\u003dxpath, value\u003d//h1[text()\u003d\u0027Your Account Has Been Created!\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat pageObjects.TekSchoolScenariosPageObject.confirmationMessage(TekSchoolScenariosPageObject.java:170)\r\n\tat stepDefinitions.TekSchoolScenariosStepDefinitions.user_should_see_Your_Account_Has_Been_Created(TekSchoolScenariosStepDefinitions.java:92)\r\n\tat ✽.Then User should see \u0027Your Account Has Been Created!\u0027(Features/TekSchoolScenarios.feature:65)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4370588200,
  "status": "passed"
});
});