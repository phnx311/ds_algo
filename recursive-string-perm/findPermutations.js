// Write a recursive function for generating all 
// permutations of an input string. 
// Return them as a set

function findAllPerms(str) {
    //the smallest subproblem involves the rearrangement of two letter ie. ab, ba
    // for this initial run trhough, we will consider the string without duplicate letters

    //base case
    if (str.length <= 1) {
        return new Set([str]);
    }

    const allCharsExceptLast = str.slice(0, -1);
    const lastCharacter = str.slice(str.length - 1);

    //this is where we break this down into subproblems
    const permutationsOfAllCharsExceptLast = findAllPerms(allCharsExceptLast);

    //initialize a new Set which will return all the unique permutations
    const permutations = new Set();

    //take the permutationsOfAllCharsExceptLast and place the last character in each position
    //and push to the Set
    permutationsOfAllCharsExceptLast.forEach((permutationOfAllCharsExceptLast) => {
        for (let position = 0; position <= allCharsExceptLast.length; position++) {
            const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
            permutations.add(permutation);
        }
    })

    return permutations;
}
 
//TODO 

//take a look at the iterative solution and compare
//how does the problem change if the string can have duplicate characters
//what if we wanted to bring down time and/or space costs