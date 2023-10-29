var a = Object.defineProperty;
var u = (s, e, t) =>
  e in s
    ? a(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (s[e] = t);
var l = (s, e, t) => (u(s, typeof e != "symbol" ? e + "" : e, t), t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = t(r);
    fetch(r.href, o);
  }
})();
const c = "testshop";
class m {
  constructor(e = "#cart") {
    l(this, "items");
    l(this, "cartIcon");
    (this.items = Object.keys(localStorage)
      .map((t) => {
        if (t.split("-")[0] === c)
          try {
            return JSON.parse(localStorage.getItem(t));
          } catch {
            return null;
          }
        return null;
      })
      .filter((t) => t)),
      (this.cartIcon = document.querySelector(e)),
      (this.cartIcon.innerText = this.count);
  }
  get count() {
    return this.items.length;
  }
  _reloadItems() {
    this.items = Object.keys(localStorage)
      .map((e) => {
        if (e.split("-")[0] === c)
          try {
            return JSON.parse(localStorage.getItem(e));
          } catch {
            return null;
          }
        return null;
      })
      .filter((e) => e);
  }
  addItem(e, t) {
    localStorage.setItem(c + "-" + e, JSON.stringify(t)),
      this._reloadItems(),
      (this.cartIcon.innerText = this.count);
  }
  deleteItem(e) {
    localStorage.removeItem(c + "-" + e),
      this._reloadItems(),
      (this.cartIcon.innerText = this.count);
  }
  isInCart(e) {
    return !!localStorage.getItem(c + "-" + e);
  }
}
export { m as C };
