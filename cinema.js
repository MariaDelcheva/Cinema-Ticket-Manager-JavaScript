function cinema(input) 
{
    const numberOfMovie = parseInt(input[0], 10);  // от входните данни ел.на 0 позиция е БРОЯ филми

    const allMovies = input.slice(1, numberOfMovie + 1);
    // от input масива извади в отделен масив всичко от 1 елемент до колкото е броя на филмите  + 1.
    //Резултат от входните примерни данни [ 'Avatar', 'Titanic', 'Joker' ] (само филмите)

    const allCommands = input.slice(numberOfMovie + 1);
    // от input масива , който вече е ['3','Sell', 'End', 'Swap 0 1'] без филмите
    //извади в отделен масив всичко , което е след броя на филмите.
    //от редактирания input ще вземе [ 'Sell', 'End', 'Swap 0 1' ] (само командите)

    for (let index = 0; index < allCommands.length; index += 1) // обходи всяка команда с фор цикъл
    {
        const elementsOfCommand = allCommands[index].split(' '); // Разделяме командата на отделни елементи по разделител 
        //интервал.  Например 'Swap 0 1'    ще стане 'Swap' , '0' , '1' 

        const nameCommand = elementsOfCommand[0];

        if (nameCommand === 'Sell')
        {
            //"Sell" command – you must remove the ticket at the first position in the array and print: "{movie title} ticket sold!" 

            const soldMovie = allMovies.shift();       // от всички филми премахни първия.
            console.log(`${soldMovie} ticket sold!`);
        }
        else if (nameCommand === 'Add') 
        {
            //"Add {movie title}" – place the given movie title at the end of the array 
            const movieTitleToAdd = allCommands[index].slice(4);

            if (!movieTitleToAdd) {
                continue;
            }

            allMovies.push(movieTitleToAdd);
        }
        else if (nameCommand === 'Swap') 
        {
            //Swap {start index} {end index}" – swap the tickets in the given index range and print: "Swapped!" 
            const startIndexOfCommand = parseInt(elementsOfCommand[1]);
            const endIndexOfCommand = parseInt(elementsOfCommand[2]);

            // Check if given indexes are valid. 

            if (isNaN(startIndexOfCommand < 0 || startIndexOfCommand >= allMovies.length)) 
            {
                continue;
            }

            if (isNaN(endIndexOfCommand < 0 || endIndexOfCommand >= allMovies.length))
            {
                continue;
            }

         const movieOfStartIndex = allMovies[startIndexOfCommand];
         allMovies[startIndexOfCommand] = allMovies[endIndexOfCommand];   //разменяме филмите 
         allMovies[endIndexOfCommand] = movieOfStartIndex;

         console.log('Swapped!');
        }
        else if (nameCommand === 'End') 
        {
            break;
        }
    }

    if (allMovies.length) // Aко след командата 'End'  са останали още филми  
    {
     console.log(`Tickets left: ${allMovies.join(', ')}`);  // изброяваме филмите разделени със запетая
    }

     else
    {
      console.log(`The box office is empty`); // Aко след командата 'End'няма филми.
    }
 
}


    cinema(['3', 'Avatar', 'Titanic', 'Joker', 'Sell', 'End', 'Swap 0 1']);