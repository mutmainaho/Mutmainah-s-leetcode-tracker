function isPalindrom(s) {
  if (s.length === 0) return true;
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] != s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
