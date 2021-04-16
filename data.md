# Data rendering

This example highlights how we can embed data in the middle of a markdown page. For example, this repo has `${data/value(loader=kql) repositories | where id == context.repoId | summarize return = any(watcherCount)}` stars.

```data/table(loader=file,foo=bar) 
repositories | where watcherCount > 1000
```

This is some content that is javascript `${data/value(loader=javascript) 3 + 7}`
