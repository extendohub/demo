# Data rendering

This example highlights how we can embed data in the middle of a markdown page. For example, this repo has `${data/value(content=kql)[option1=73] repositories | where id == context.repoId | summarize return = any(watcherCount)}` stars.

```data/htmlTable[option1=73](content=./data.json,foo=bar) 
```

This is some content that is javascript `${data/value(content=javascript)[option1=73] () => { 3 + 7 }}`

And a bar chart with data as a literal JSON object
```data/barchart[option1=73](content=json)
{"a": 1, "b": 3, "c": 5, "d": 7, "e": 3, "f": 4}
```
