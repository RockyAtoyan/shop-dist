import { C as s } from "./Cart-7c1cb072.js";
const c = document.querySelector("#items"),
  o = new s(),
  i = () => {
    if (!o.count) return (c.innerHTML = "<h1>Корзина пуста!</h1>");
    const a = o.items.map((e) => {
      const t = document.createElement("div");
      t.className = "item";
      const r = document.createElement("h1"),
        d = document.createElement("h2"),
        n = document.createElement("button");
      return (
        (n.innerText = "Удалить из корзины"),
        n.addEventListener("click", () => {
          o.deleteItem(e.id, e), i();
        }),
        (r.innerText = e.title),
        (d.innerText = e.body),
        t.appendChild(r),
        t.appendChild(d),
        t.appendChild(n),
        t
      );
    });
    (c.innerHTML = ""),
      a.forEach((e) => {
        c.appendChild(e);
      });
  };
i();
