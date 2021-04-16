# Data rendering

This example highlights how we can embed data in the middle of a markdown page. For example, this repo has `${data/value(loader=kql) repositories | where id == context.repoId | summarize return = any(watcherCount)}` stars.

```data/htmlTable(loader=file,foo=bar) 
./data.json
```

This is some content that is javascript `${data/value(loader=javascript) 3 + 7}`

And a bar chart with data as a literal JSON object
```data/barchart[option1=73](loader:json)
{"a": 1, "b": 3, "c": 5, "d": 7, "e": 3, "f": 4}
```
