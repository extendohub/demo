# Data rendering

This example highlights how we can embed data in the middle of a markdown page. For example, this repo has `${data/value(content=kql)[option1=73] repositories | where id == context.repoId | summarize return = any(watcherCount)}` stars.

```data/htmlTable[option1=73](content=./data.json,foo=bar) 
```

This is some content that is javascript `${data/value(content=javascript)[option1=73] () => { return 3 + 7 }}`

And a bar chart with data as a literal JSON object
```ddata/barchart[encoding={x:{field:'a',type:'ordinal'},y:{field:'b',type:'quantitative'}}](content=json)
{"a": 1, "b": 3, "c": 5, "d": 7, "e": 3, "f": 4}
```
```data/vega(content=config)
render:
  options:
    description: Cool test data
    mark: bar
    encoding: {x: {field: 'a', type: 'ordinal'}, y: { field: 'b', type: 'quantitative'}}
  data: [{"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43}, {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53}, {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}]
```


```dynamic(content=javascript)
async ({context}) => {
  const { data } = context
  const results = [{"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43}, {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53}, {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}]
  return {
    content: data, 
    access: 1, 
    renderer: 'data/vega', 
    options: {
      mark: 'bar',
      encoding: {x: {field: 'month', type: 'ordinal'}, y: { field: 'count', type: 'quantitative'}}
    }
  }
}
```
