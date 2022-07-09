
// var Trie = function() {
//     this.map = {}
// };
// Trie.prototype.insert = function(word) {
//     this.map[word] = true;
// };
// Trie.prototype.search = function(word) {
//     return this.map[word] ? true : false;
// };
// Trie.prototype.startsWith = function(prefix) {
//     return Object.keys(this.map).filter(x => x.startsWith(prefix)).length > 0;
// };

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root; // starting from root

	// add each character to trie
    for (const char of word) {
	
	// if char DNE, add
      if (!node[char]) node[char] = {};

      node = node[char]; // move on no next char node
    }

    node.isEnd = true; // set isEnd true to mark that we reach end of current word
  }

  search(word) {
    let node = this.root;

    for (const char of word) {
	// if char we are looking for DNE, return false
      if (!node[char]) return false;

      node = node[char]; // move on to next node
    }

    return node.isEnd || false; // if is a word, return true. Else, false
  }

  startsWith(prefix) {
    let node = this.root;

    for (const char of prefix) {
	// if char DNE, invalid prefix. Does not start with given prefix
      if (!node[char]) return false;

      node = node[char]; // move on to next node
    }

    return true;
  }
}
