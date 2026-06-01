# Odin TODO List
## Introduction
Fourth project of TOP's Javascript course, Full Stack Javascript path. The idea is to build a to-do list webapp based on webpack, OOP, and SOLID principles.
## About this project
After my 1-month, 1-week of work, I've completed `V1` of this project. It consists of having a functional to-do list webapp. I've precisely mentioned `V1` because the code isn't as clean as I had hoped for, and SOLID principles aren't as enforced as I decided. So I'm considering a refactor later which should be `V2`.

---
## Project Architecture
During my 1-month, 1-week duration of work, this is the structure I chose for this assignment:
- `./`: configuration files, `.md` helper files, and `./src` directory.
- `./src/`: where all folders and files related to code exist.
    - Folder root contains universal and main components, and components' directories.
    - `./src/objectsFactories`: OOP-related files which include `classes` for `Tasks` and `Lists`
    - `./src/checkers`: these files are responsible to check data and ensure for proper validation.
    -  `./src/objectsComponents`: internal-logic files. Anything related to creating objects, editing them, adding them to lists or removing them from it, is built under this directory.
    - `./src/DOM`: DOM-manipulation. Everything under it is related to creating visual components and appending them accordingly.
        - `./src/DOM/listCreatorComponent`: dialog and form responsible for creating lists.
        - `./src/DOM/taskCreatorComponent`: dialog and form responsible for creating tasks.
        - `./src/DOM/mainPageComponent`: all elements that will be rendered in the `main` element
            - `./src/DOM/mainPageComponent/mainOptionsComponents`: options components rendered in the `main` element
            - `./src/DOM/mainPageComponent/mainDetailsComponents`: details components rendered in the `main` element
---
## My Approach
To sum it up, there was 4 major steps to achieve this result:
- **Step 1: brainstorming:**
Basically, before starting with the code, I had to think how the main operations should work. This meant how to create the `Tasks` and `Lists`, how to add tasks inside lists, to remove them, how to delete tasks or list, and edit each object's information
- **Step 2: building internal logic:**
Before starting with the interface, first I created the classes responsible for creating each object, then my first 2 weeks were building the `objectsComponents` where all internal logic lies. This stage, tests were purely using `console.log()`.
- **Step 3: deciding over the UI:** now that I've got the logic running, I have to figure out how to dynamically render it on the screen, and based on `TOP`'s recommendations in [INSTRUCTIONS.md](./INSTRUCTIONS.md), I chose my project's interface design.
- **Step 4: connecting the dots:** after constructing the interface's structure, all that remained was connecting the logic to be functional with the DOM
## Conclusion
This was my most challenging and time-consuming project as of yet. And while I'm hoping to improve quality, I'm very proud of the result I was able to conclude. Furthermore, I had noted everything I learned along the way, feel free to check it out [in my personal notes](https://nour-al-hazzouri.github.io/my-notes/Education/Career-Paths/Web-Development/2--New/2--The-Odin-Project/2--FullStack-JavaScript-Path/2--JavaScript-Course/10.1--Odin_todo-list-Notes)