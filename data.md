# Data rendering

This example highlights how we can embed data in the middle of a markdown page. For example, this repo has `${data/value(kql) repositories | where id == context.repoId | summarize return = any(watcherCount)}` stars.

```data/table(kql foo=bar) 
repositories | where watcherCount > 1000
```
