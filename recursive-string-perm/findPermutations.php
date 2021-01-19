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
    
    $allCharsExceptLast = substr($string, 0, - 1);
    $lastCharacter = $string[strnlen($string) - 1];

    $permutationsOfAllCharsExceptLast = findPerms($allCharsExceptLast);

    $permutations = new Set();

    foreach($permuationsOfAllCharsExceptLast as $permutationOfAllCharsExceptLast) {
        for ($position = 0; $position <= strnlen($allCharsExceptLast); $position++) {
            $permutation = substr($permutationOfAllCharsExceptLast, 0, $position) . $lastCharacter . substr($permutationOfAllCharsExceptLast, $position);
            $permutations->add($permutation);
        }
    }

    return $permutations;
}