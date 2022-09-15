class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /* Time O(N) | Space O(N) */
  insert(word) {
    let cur = this.root;
    for (const c of word) {
      if (!cur.children[c]) {
        cur.children[c] = new TrieNode();
      }
      cur = cur.children[c];
    }
    cur.endOfWord = true;
  }

  /* Time O(N) | Space O(1) */
  search(word) {
    let cur = this.root;
    for (const c of word) {
      if (!cur.children[c]) {
        return false;
      }
      cur = cur.children[c];
    }
    return cur.endOfWord;
  }

  /* Time O(N) | Space O(1) */
  startsWith(prefix) {
    let cur = this.root;
    for (const c of prefix) {
      if (!cur.children[c]) {
        return false;
      }
      cur = cur.children[c];
    }
    return true;
  }
}
