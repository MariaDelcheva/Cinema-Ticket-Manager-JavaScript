# Cinema Ticket Manager 🎟️ (JavaScript)

This project is a JavaScript-based console application that simulates a cinema ticket management system. The solution is implemented in **Visual Studio Code** and run using **Node.js**.

## 📋 Task Overview

The cinema box office received shuffled movie tickets and must now sort and sell them using a specific set of commands. The program reads the initial list of movies and processes various commands such as selling, adding, or swapping tickets.

## 📥 Input Format

The function `cinema(input)` expects a single array of strings:

1. First element: Number of movies (n)
2. Next n elements: Movie titles
3. Remaining elements: Commands
   - `Sell`
   - `Add {movie title}`
   - `Swap {start index} {end index}`
   - `End` (terminates the input)

## 🧾 Example

```js
cinema(['3', 'Avatar', 'Titanic', 'Joker', 'Sell', 'Swap 0 1', 'End']);
```

### Output:

```
Avatar ticket sold!
Swapped!
Tickets left: Joker, Titanic
```

## ⚙️ Commands

- `Sell` → Removes and prints the first movie in the list.
- `Add {movie}` → Adds a movie to the end of the list.
- `Swap {index1} {index2}` → Swaps movies at the given indices (if valid).
- `End` → Prints the remaining tickets or a message if empty.

## 🛠️ Technologies Used

- JavaScript
- Visual Studio Code
- Node.js

## 🚀 How to Run

1. Save the code in a file named `cinema.js`
2. Open a terminal and navigate to the folder containing the file:

```bash
cd path/to/your/folder
```

3. Run the script using Node.js:

```bash
node cinema.js
```

> ℹ️ Make sure Node.js is installed and available in your system's PATH.

## 📌 Notes

- Invalid commands or indexes are ignored.
- Only the core function should be submitted to the judge system.
- Use `slice(4)` when extracting movie titles from an 'Add' command to correctly isolate the title.
