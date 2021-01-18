<? 

use Ds\Set;
// Write a recursive function for generating all 
// permutations of an input string. 
// Return them as a set (use Ds library that come with PHP 7+)

function findPerms($string) {

    //base case
    if (strlen($string) <= 1) {
        return new Set([$string]);
    }

}