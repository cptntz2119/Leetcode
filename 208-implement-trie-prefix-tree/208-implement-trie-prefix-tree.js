
var Trie = function() {
    this.map = {}
};
Trie.prototype.insert = function(word) {
    this.map[word] = true;
};
Trie.prototype.search = function(word) {
    return this.map[word] ? true : false;
};
Trie.prototype.startsWith = function(prefix) {
    return Object.keys(this.map).filter(x => x.startsWith(prefix)).length > 0;
};