# BBLOGQA
# BBLOGQA

## Getting Started

### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```
- Install Java 8 or above, Allure Reports require Java 8 or higher.
- Install Java 11 instead of Java 8 if you intend to use Sonar Qube.


### Installation

1. Clone the repo using below URL

```sh
https://github.com/Shaikhanees75/BBLOGQA.git
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```



<!-- USAGE EXAMPLES-->

## Usage

1. For Browser Configuration, change required parameters in `playwright.config.ts`.


2. For execution entire test suite 

```
npx playwright test


3. To change password, go to `lib/WebActions` in `decipherPassword()` uncomment `ENCRYPT` code block and replace `password` with your password, execute the test case, 
Encrypted password will be printed on your console 
```
Copy Encrypted password in `testConfig.ts` against `password` field. You can comment Encrypt bloack ater this.

4. For viewing report 
```JS
npx playwright show-trace build\e2e
```

5.  In `tsconfig.json` file in `paths` section we can re-assign the long path imports like '../../' to a variable which starts with '@' and then we can use it to shorten our import statements in respective file.
In the below example wherever '../../pageFactory/pageRepository/' import statement is used we can replace it with '@pages'
```JS
"@pages/*":["pageFactory/pageRepository/*"]
```
