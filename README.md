# _{Application Name}_

#### _{Brief description of application}_

#### By _**Cat Denton {List of contributors}**_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

Copyright <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Specs 
Describe: beepBoop()

Test: "It should return 0 if the number 0 is inputted"
Expect(beepBoop(0).toEqual(0);

Test: "It should return with the numbers preceding the number the user inputted"
Expect(beepBoop(5)).toEqual(0,1,2,3,4,5);

Test: "It should replace the number 3 with "Won't you be my neighbor?" **note - 'neighbor' was used to shorthand in this commit
Expect:(beepBoop(4)).toEqual(0,1,2,Won't you be my neighbor?,4)

Test: "It should replace every number containing the number 3 with "Won't you be my neighbor?"
Expect: (beepBoop(14)).toEqual(0,1,2,WYBMN,4...11,12,WYBMN,14)

Test: "It should replace every number containing 2 with "boop".
Expect:(beepBoop(14)).toEqual(0,1,boop,neighbor,...,11,boop,neighbor,14)




## Contact Information

_Karlson Drendel <kdrendel99@gmail.com>_