<?php

//sample BinaryTreeNode class

class BinaryTreeNode 
{
    private $value;
    private $left;
    private $right;

    public function __construct($value)
    {
        $this->value = $value;      
    }

    public function insertLeft($value) {
        $this->left = new BinaryTreeNode($value);
        return $this->left;
    }

    public function insertRight($value) {
        $this->right = new BinaryTreeNode($value);
        return $this->right;
    }
}

/**
 * @param BinaryTreeNode $rootNode
 * @return integer
 */

function findLargest($rootNode)
{
    $current = $rootNode;
    while ($current) {
        if (!$current->right) {
            return $current->value;
        }
        $current = $current->right;
    }
}

function findSecondLargest($rootNode)
{
    if (!$rootNode || (!$rootNode->left && !$rootNode->right)) {
        throw new Exception('Tree must have at least 2 nodes');
    }

    $current = $rootNode;

    while ($current) {

        // case: current is largest and has a left subtree
        // 2nd largest is the largest in that subtree
        if ($current->left && !$current->right) {
            return findLargest($current->left);
        }

        // case: current is parent of largest, and largest has no children,
        // so current is 2nd largest
        if ($current->right &&
                !$current->right->left &&
                !$current->right->right) {
            return $current->value;
        }

        $current = $current->right;
    }
}
?>