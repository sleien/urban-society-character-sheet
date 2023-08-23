# Urban Society Character Sheet creator

With this tool a character can be created and managed.

#### Credits:
This project was forked from [here](https://github.com/Chee32/5e-Character-Sheet). Credit goes to Chee32 for the JQuery which remains largely unchanged.
I mainly changed the stats and renamed stuff.

## Things to know when using this sheet. (copied from fork)
### How to:
#### Make your own character sheet: 
1. Download or clone the repository.
2. Fill out all the fields staring with Proficeincy Bonus and Attribute Scores.
3. Save your sheet (in the menu).

#### Save the sheet:
1. Click the 'hamburger' bars to open the menu.
2. In the 'Options' drop-down menu, click 'Save'.
3. It will be saved to the local storage

#### Change Character & Alliance images:
1. Upload your images into the 'imgs' folder
2. For the Character Appearance name the file 'character.jpeg'.
3. For the Alliance Symbol, name the file 'symbol.jpeg'.
4. Currently, if you want to change the name or file type of these images you will have to go into the 'app.css' and change the values.

#### To 'Lock' the sheet:
Locking stops the scripts from running on the sheet if you want to calculate all of your information yourself.
To turn on the lock:
1. Click the 'hamburger' bars to open the menu.
2. In the 'Options' drop-down menu, click 'Lock'.
    - Currently this has to be set every time you load up the sheet.

### Fields that don't populate.
Some fields do not auto-populate based off of the attributes. 
#### Some of the less obvious ones are:
- AC: The reason for this is that your armor and class features mainly determine your AC. I felt it was better to just leave it to you to set it.
- Initiative Bonus: Again, a lot of things can change this other than attributes.
- Proficiency Bonus: This mainly changes with level so I felt it was easy enough to set.
- Current Hit Dice: Again, mainly based on level and not attributes.
- Max Health: This is mainly based off of class and level. It can also be rolled if you chose to so I didn't want this to change if someone added more hit dice.

---

## Issue Reporting & Pull Requests.
### Issues:
If you find any issues, feel free to report them and I will try to address them. Please include as much detail as possible on how to re-create the problem, thanks!

### Pull Requests & Forks:
Feel free to make contributions or fork this project. Please just credit the original author and myself. Thanks!