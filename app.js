// const fs = require('fs')      // <-- this is return value that will be stored to fs variable (const fs)
// ex) const fileSystem = require('fileSystem') <--- can choose any variable name, names just need to be the same,

//challenge 4
const yargs = require('yargs')


// 1. file system module, need to be loaded in. NPM modulem module or core node module.
//thus need to call REQUIRE function, to load in module, and pass in a single string ('fs'),
// & need require function to be stored in variable. 

// argv = holds an array of command-line values provided when the current process was initiated
// MODULE - are referred to FILES, FILES are referred as MODULES. 
// up arrow key will run previous terminal command ...


// fs.writeFileSync('notes.txt', 'My name is Jessa.')
// 2.   2 parameters:   ^ name for file  ^contents to put into file  
// fs needs to be defined. this created CORE MODULE.

// 3. **** once require variable has been initiated and fs.writefilesynch has been created
// can prompt on terminal `node app.js` ... which will then populate NOTES.TEXT FILE 
//for any update/changes made, run `node app.js` to see udpdate 
// can test using on terminal: node app.js add --title="My Title"
//output: 
// Adding a new note! { _: [ 'add' ], title: 'My Title', '$0': 'app.js' }
// { _: [ 'add' ], title: 'My Title', '$0': 'app.js' }



// ----------------------------------
// challenge: append a message to notes.txt
// 1. use appendFileSync to append to the file
// 2. run the script
// 3. check your work by opening the file and viewing the appended text. 

// fs.appendFileSync('notes.txt', ' this is an update. I live in NC')


// --------------------------------------
// ---------------------------------------

// 1.2 how to load another file....
// if we want another file to run, we have to require it for that file to actually get loaded in 
// use`require` .. go through directory ('./')

// const name = require('./utils.js')

// const name = 'Jessica'
// console.log(name)

// after running node app.js .. will populate on terminal: utils.js and Jessica to confirm app.js and utils.js file are being read 


// --------------------------------------

// after creating function 'add' on utils.js file .. go back to app.js file 
// and create const add variable to export utils.js module and run sum variable from add function
// to console log and give output after passing in (4,-2) as arguments 

// const add = require('./utils.js')

// const sum = add(4,-2)

// console.log(sum)

// then go to terminal and run node app,js and returns --> 2 (bc 4- -2 = 2)



// ---------------------------------
//CHALLENGE #2: LOAD AND CALL GETNOTES FUNCTION

//LOAD 
// const validator = require('validator')
// holds add note and get note property
const notes = require('./notes.js')

// CALL GETNOTES FUNCTION
// const msg = getNotes()

// console.log(msg)

//*** ... once load and call get notes, run on terminal node app.js and returns ---> 'Your notes..."

// use npm package of email
// console.log(validator.isEmail('adnrew@example.com'))
// then run terminal: node app.js ... returns output--> Your notes... and true 

// use npm package for url 
// console.log(validator.isURL('google.com'))
//returns as TRUE, valid url 
//--------------------------

//CHAPTER 4: IMPORTING NPM PACKAGES/MODULES

// 1. make sure you are in root directory folder .. in this case notes-app
// 2. install/run node with command: node -v
// 3. run in terminal for npm: npm -v
// 4. initialize npm congif file to project with command: npm init 
// 5. hit enter for config settings... will then create /package.json directory 
// 6. confirm settings... package.json file is created on project
// JSON ----- javaScript object notation
// in json file... everything/properties is in "" quotes.. wrapped in double quotes 


// go to npmjs.com website and download/copy validator 
//https://www.npmjs.com/package/validator
// write command: npm i validator@10.8.0
// after it will create package.lock.json file and new directory... node_modules


// --------------------------------------
// CHALLENGE 3: USE THE CHALK LIBRARY IN YOUR PROJECT
// 1. install version 2.4.1 of chalk
// 2. load chalk into app.js 
// 3. use it to print the string "success!" to the console in green
// 4. test your work. 


// need to LOAD and call
// 0. install in terminal command: npm i chalk@2.4.1
// 1. LOAD THE LIBRARY USING REQUIRE KEYWORD... this goes on TOP of app.js page 
const chalk = require('chalk')
// 2. NEED TO CALL.. create variable to CALL ....
// const greenMsg = chalk.bold.inverse.yellow('Success!')
// 3. PRINT THE STRING
// console.log(chalk.green('Success!')) or... bc we created variable, just call it below
// console.log(greenMsg)
// receive output of --> Success! (in green font color) and in bold :)




// -----------------
// how to work with GLOBAL NPM PACKAGES
// packages are installed globally and gives access to new command on termninal
// with global packages it allows to run our application  & automitcally restart 
//whenever the app code changes so that we wont need to switch to terminal &
// rerun same command as we do with node app.js 
// use -g command


// chalk and validator are known as locally installed packages,
//that's when we install the dependency expplicity into our project


//START HERE 
// 1. download nodemon --> https://www.npmjs.com/package/nodemon
// 2. grab sticky link from website & run oncommand: npm i nodemon@1.18.5 -g
// 3. above termnal did not work due to admin permission so use: sudo npm install -g nodemon
// 4. confirm ur password
// 5. verify if you have nodemon by running on terminal: nodemon -v
// 6. should give version. 

// 7. run on terminal: nodemon app.js  ...gives new command 
// 8. so when i got up and change chalk color to yellow.. changes are made
//instantly after saving changes and are instanctly updated
//9. to stop running nodemon.. on terminal running....: control+c

// --------------




//get input from user
// *** PROCESS - IS A BIG OBJECT WITH DOZENS OF DIFFERENT METHODS AND PROPERTIES
//** arg.v = a method that stands for 'argument vector'.. just an array that contains all 
// of the arguments provided 

// 0. do not have nodemon running. 
// 1. run on terminal: node app.js
// 2. write on vscode...: console.log(process.argv)
// THEN... // 3. then run on terminal: node app.js Jessica

// console.log(process.argv[1])

// 5. after console.log, in terminal should show 3 arrays:
// '/usr/local/bin/node',
 // '/Users/jessicacontrerasayala/Desktop/GI_WEEK12-NOTESAPP/notes-app/app.js',
 // 'Jessica' ]

 // 6. add [] into the console.log(process.argv) as console.log(process.argv[]) to extract array to grab item 
 // 7. can input 0, 1, 2, into [] to grab arrays
 // 8. then run node app.js Jessica on terminal again
 // 9. gives output : Jessica if use [2]

 //....
 // is use on terminal: node app.js add
// make sure only REQUIRE variables are only available. remove other content. 

// 1. node app.js add
// 2. create variable on vs code: const command = process.argv[2]
//  const command = process.argv[2]

 // *#9 
//  console.log(process.argv)
//  console.log(yargs.argv)
// 3. write if conditionals: 
// if (command === 'add') {
//     console.log('adding notes!') 
// } else if (command === 'remove') {
//     console.log('removing note!')
// }

// 4. on terminal run: node app.js add
// output on terminal should be --> adding notes!

// 5. remove content... with node app.js remove 
// 6. but must do the else if statement in conditional 
// 7. go to terminal and run: node app.js remove

// add TITLE
/// 8. run on terminal: node app.js add --title="This is my title" 
// output ---> adding note! 
// 9. title should be passed by running the command to check do on app.js file:
// console.log(process.argv)
// 10. then run on terminal: node app.js add --title="This is my title" 
// 11. output on terminal --> [
  // '/usr/local/bin/node',
  // '/Users/jessicacontrerasayala/Desktop/GI_WEEK12-NOTESAPP/notes-app/app.js',
  // 'add',
  // '--title=This is my title' ]



  // NEED TO PARSE if title is provded .. need to get value 
  // MODULE 4: PART: ARGUMENT PARSING ...

  // 1. DOWNLOAD yargs from npm https://www.npmjs.com/package/yargs
  // 2. install on terminal: npm i yargs@12.0.2
  // 3. check version: npm yargs - v also check on package.jsonfile to make sure yargs is there
  // 4. require on vscode to import package: const yargs = require('yargs')
  // 5. temporary remove on vscode: const command = process.argv[2]
  // 6. temporary remove if else statement 
  // 7. type on vscode: console.log(yargs.argv)
  // 8. then run on terminal: node app.js 
  // 9. output: 
  //
  //[ '/usr/local/bin/node',
  //'/Users/jessicacontrerasayala/Desktop/GI_WEEK12-NOTESAPP/notes-app/app.js' ]
// { _: [], '$0': 'app.js' }

  // add ARGUMENTS
  // write on terminal: node app.js add --title=""Things to buy"
  // output: 
  // [ '/usr/local/bin/node',
  //  '/Users/jessicacontrerasayala/Desktop/GI_WEEK12-NOTESAPP/notes-app/app.js',
  //  'add',
  //  '--titleThings to buy' ]
  // { _: [ 'add' ], 'titleThings to buy': true, '$0': 'app.js' } <---- this is OBJECT

  // 11. write on terminal : node app.js --help
  // output:
  // [ '/usr/local/bin/node',
  // '/Users/jessicacontrerasayala/Desktop/GI_WEEK12-NOTESAPP/notes-app/app.js',
  // '--help' ]
  // 12. console.log(process.argv) should not be present on app.js file, do remove if present 
// 13. get version by writing on terminal: node app.js --version 
// output: 1.0.0

// 14. customize yargs version
// write on vscode apps.js file :
yargs.version('1.1.0')

// yargs to be able to work with commands to get to work with. ex) use: add, remove, read, list

//1.  create 'add' command... on yargs.. register new command
yargs.command ({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
                 describe: 'Note body',
                 demandOption: true,
                 type: 'string'
        }
    },
    // handler: function(argv) { <-- previous b4 arrow function change
    handler(argv) {
        // console.log('Adding a new note!', argv)
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)

        notes.addNote(argv.title, argv.body)
    }
})


// property handler .. needs to be set up with a function value, and that function gets executed if command ever gets used

// 2. run on terminal: node app.js --help (make sure console.log(yargs.argv) is at bottom of page)
// output: 
// Commands:
//   app.js add  Add a new note

//Options:
//  --help     Show help                                                 [boolean]
//  --version  Show version number                                       [boolean]


//3. run on terminal: node app.js add
//output on terminal:
//Adding a new note!
// { _: [ 'add' ], '$0': 'app.js' }

// THE HANDLER IS WOOOORKING! =D
///--------------------------------------



/// create a REMOVE command 

// step 1... create the yargs.command object, passing in the options object within{} & configure the 3 properties within 
// to then be listed in the help options
 yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Removing the note')
        notes.removeNote(argv.title)
    }
})


//2. rerrun on terminal command: node app.js --help
//3. output on terminal: 
// Commands:
 // app.js add     Add a new note
 // app.js remove  Remove a note

 /// --------------------------
 //------------------------------------------


 // CHALLENGE ON SECTION 4: ADD TWO NEW COMMANDS

//1. setup command to support 'list' command (print placeholder message for now) 
//2. setup command to support 'read' command (print placeholder message for now) 
//3. test your worrk by running both commands and ensure correct output 


// create LIST command

yargs.command({
    command: 'list',
    describe: 'List your note',
    handler() {
     notes.listNotes()
    }
})
// create READ command 

yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


// can test out to check if LIST command works by:
// running on command: node app.js list 
//output: 
//Listing out all notes
// { _: [ 'list' ], '$0': 'app.js' }


// can test out to check if READ command works by:
// running on command: node app.js read
//output: 
// Reading a note
//{ _: [ 'read' ], '$0': 'app.js' }
//


// run on terminal command: node app.js --help
// output on terminal:

//Commands:
//  app.js add     Add a new note
// app.js remove  Remove a note
//  app.js list    List your note
//  app.js read    Read the note

// SUCCESS!! =D!!

//  console.log(yargs.argv) //<-- need to be called at end of page for yargs options to work 
 yargs.parse()  // <---------- can also use!!!! instead of console.log, and it would still work 

// -----------------------------
// --------- UDEMY SECTION 4: #17. ARGUMENT PARSING PART 2 ------------------------

// configure options for commands we created when we created add, remove, list and read commands

//how?
// we use BUILDER property . builder's value is an object and on that object 
// ^ we set up another property on the configuration object we pass to command. 
// we are going to place builder within configuration object under describe:, right before handler
// in the BUIILDER, we are going to define all the options we want this given command to support!

//1. builder: {
  //  title: {describe: 'Note title'}
//    },

//2. this will be passed into handler.  update the handler function from  --> handler: function() {
    // to ---> handler: function(argv) {

// 3. update the handle function console.log from --->  console.log('Adding a new note!')
// to ---->  console.log('Adding a new note!', argv)

// 4. run on terminal command: node app.js add --title="Shopping list"
//output: 
// Adding a new note! { _: [ 'add' ], title: 'Shopping list', '$0': 'app.js' }
//{ _: [ 'add' ], title: 'Shopping list', '$0': 'app.js' }

// 5. create demandOption property to configuration, by default is set to false, so we are 
//going to set it to true. write on vscode:
//    demandOption: true, 
// 6. run command: node app.js add    ....output on terminal:
// Add a new note

//Options:
//--help     Show help                                                 [boolean]
//--version  Show version number                                       [boolean]
//--title    Note title                                               [required] // <----- shows that needs to be required

//Missing required argument: title
// 7. set up another property so that when array of title: has value of true, we instead want it to return a string 
// to insure our argv property is always a string by setting up another property in options object configuration
// write on vscode in add object: type: 'string' <--- we set type to have value equal to of 'string'
// 8. run terminal: node app.js add --title
// 9. output on terminal :
// Adding a new note! { _: [ 'add' ], title: '', '$0': 'app.js' } <----- shows title now as blank string instead of boolean of true/false 
// { _: [ 'add' ], title: '', '$0': 'app.js' } <----- shows title now as blank string instead of boolean of true/false 

// ------------------------

/// print title...
// remove the -->  console.log('Adding a new note!', argv) from within  handler: function(argv) { sitting in 'add' command
// ...and be replaced with:   console.log('Title: ' + argv.title)
// ...run on terminal: node app.js add --title="My Title"
// output: Title: My Title

//// ------------------------

// CHALLENGE : add an option to yargs

//1. setup a body option for the add command
//2. configure a descriptiion, make it required, and for it to be a string
//3. log the body value in the handler function
//4. test your work!

// body: {
//      describe: 'Note body',
//      demandOption: true,
//      type: 'string'
//}

// add new console to handler --> console.log('Body: ' + argv.body)

// 4. test on terminal: node app.js add --title="Buy" --body="These are what I need to buy."
//5. outut on terminal: 

// Title: Buy
// Body: These are what I need to buy.


//// ---------------------------------------

// CHALLENGE MODULE 4: PART 20 


// challenge module 4 #20 : setup command option and function 

//
//1. setup the remove command to take a required "--title option"
// (go to yargs.command REMOVE function to update with BUILDER property to create object )
// builder: {
 //   title: {
 //       describe: 'Note title',
 //       demandOption: true,
 //       type: string
 //  }

//2. create and exporrt a removeNote function from notes.js

//go to notes.js 
// add: //create remove function
// const removeNote = function (title) {
// }


//also export by going to module.exports object and adding:
//     removeNote: removeNote


//3. call removeNote in remove command handler

//call by going to HANDLER function object in app.js filethat has remove object  and updating:
// pass the argv function

//  handler: function(argv) {
 //       notes.removeNote(argv.title)


//4.  have removeNote log the ittle of the note to be removed

// add placeholder to notes.js where const removeNote = function (title) is and update inside with:
// console.log(title)


//5. test your work using: node app.js remove --title="some title"
// write on terminal: node app.js remove --title="some title"
//output: some title



/// ----------------------------------------------



// NEXT CHALLENGE

// 1. load existing notes

//go to notes.js and update the const removeNote = function (title) to:
//

// 2. use array filter method to remove the matching note (if any)

//return note.title !== title 

// add to same removenote function
// 

// 3. save the newly created array
// 4.  test your work with a title that exists and a title that doestn exist
// remove a note that exists on command:
// node app.js remove --title="t"
// no longer visible on notes.json file of 't' file 


//// -------------------------

// CHALLENGE NUMBER 3, MODULE 4, #20 
// use chalk to provide useful logs for remove 

// 1. if note is removed, print 'note removed!' with a green BG
// 2.  if no note is removed, print 'no note found!' with a red BG

// in notes.js, go to removenote function, add if statement
// (make sure to REQUIRE chalk package first on top of page on notes.js) -->  const chalk = require('chalk')
//   if (notes.length > notesToKeep.length) {
//    console.log(chalk.green.inverse('note removed!'))
//    saveNotes(notesToKeep)
//} else { //note not removed, change bg to RED

//    console.log(chalk.red.inverse('no note found'))
//}

// test out with node app.js remove --title"t"
//output -- red message: no note found

// test to remove give green BG: node app.js remove --title="List 2"
//output --- green messge: note removed!


//----------------------------------------

// challenge module 4 #23 wire up list command
//1. create and export listNotes frrom notes.js ... on notes.js file 
// -'your notes' using chalk
// -print note title for each note 
//2. call listnote from command handler
//3. test your work 


//----------------------------------------

//challenge module 4 #24

// goal: wire up read command

// 1. setup --title option fo read command
// 2. crreate readNote in notes.js
// -search for note by title
// -find note and print title (styled) and body (plain)
// - no note found? print error in red
// - have the command handler call the function 
// - test your work by running a coupole commands


//test by using: node app.js read --title="t" --> t(in color blue), and b(no color)
//test by using: node app.js read --title="shopping list" --> note not found(in red)
