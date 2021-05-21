---
type: ghnb
---
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# foo
this is a butnch more stuff in the notebook
markdown
that may describe some stuff`
)});
  return main;
}
