<?php 

// Write a recursive function for generating all 
// permutations of an input string. 

function findPerms($string) {

    //base case
    if (strlen($string) <= 1) {
        return [$string];
    }
    
    $allCharsExceptLast = substr($string, 0, - 1);
    $lastCharacter = $string[strlen($string) - 1];

    $permutationsOfAllCharsExceptLast = findPerms($allCharsExceptLast);

    $permutations = [];

    foreach($permutationsOfAllCharsExceptLast as $permutationOfAllCharsExceptLast) {
        for ($position = 0; $position <= strlen($allCharsExceptLast); $position++) {
            $permutation = substr($permutationOfAllCharsExceptLast, 0, $position) . $lastCharacter . substr($permutationOfAllCharsExceptLast, $position);
            array_push($permutations, $permutation);
        }
    }

    return $permutations;
}

$result = findPerms("cat");

var_dump($result);

?>