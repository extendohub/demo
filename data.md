# Data rendering
There are lots of scenarios for wanting to render data in GitHub. Perhaps a table as part of your project, the output or status of your code, software development insigths on your team's engineering flow, or any of a million other cases. Here we show some for the capabilities to illustrate the possible data sources, data lifecycles, and rendering possibilities. Note that just about any permutation and combination of data source/lifecycle and rendering should work.

## Simple rendering of static data from a file

Here we load data from a file in GitHub (`./olympics.csv`) and render it as a normal HTML table. The file can be anywhere the current user can read. For fun, the rendering markup in the <code>\`...\`</code> code block shows how you can control rendering by defining *options*. In this case we indicate that there's a header row in the CSV.
```
/// data/htmlTable[headings=true](content=./olympics.csv) 
```

## Inline rendering of live data from Kusto  
This example highlights how we can embed data in the middle of a markdown page as part of the normal text flow. For example, this repo has 👉`${data/value(content=kql) repositories | where id == context.repoId | summarize return = any(watcherCount)}`👈 stars. See what we did there? We know the star count because the `<code>` element has the simplest possible Kusto query that runs and gets the number of watchers, and then renders the result as a *value* (i.e., just a simple `<code>` block). 

This is another inline example but rather than running some KQL in Kusto, we have some inline JavaScript. After some deep thought and hard computation we know that the answer is 👉`${data/value(content=javascript,seed=6) ({options}) => { return options.seed * 7 }}`👈.

## [Vega](https://vega.github.io/vega/) based charts with embedded JSON
Now let's get a bit more interesting with the rendering. The example here renders using the [Vega](https://vega.github.io/vega/) visualization library. To keep the example simple, we're just using a bar chart but the full power of Vega is at your fingertips. Notice in the markup that we're using GitHub config-as-code YAML to actually define the Vega inputs as they are a bit verbose. There are other ways to do it and over time we can simplify the common paths.

```
/// data/vega(content=config)
render:
  options:
    description: Cool test data
    mark: bar
    encoding: {x: {field: 'a', type: 'ordinal'}, y: { field: 'b', type: 'quantitative'}}
  data: [{"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43}, {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53}, {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}]
```
## [Vega](https://vega.github.io/vega/) based charts with live Kusto data
OK, so now it gets more interesting. There's a fair bit going on in this example. We have some JavaScript that uses a built-in *data* API to query the Kusto GitHub data and get the number of created issues on the `github/github` repo as a function of time since the start of 2019. This is useful when you want to vary the query based on some factor (heck you can even dynamically generate the query!). It's also useful if you want to shape the data a bit after it comes out of the query say adapt it to the particular rendering you want.

That brings us to next interesting point that the rendering of this data is dynamically determined by the result of running the JavaScript. In the previous examples the *language* markup after the \`\`\` was used to pick a rendering. Here, the code returns a particular structure that has the `content` and the `renderer` along with it's `options`. This means you can dynamically decide what data to gather and then dynamically pick the best rendering of that data.

```
/// dynamic(content=javascript)
async ({context}) => {
  const { data, target } = context
  const kql = `
issues
| where repositoryId == 3 and createdAt > datetime('2019-01-01')
| summarize count=count() by month=endofmonth(createdAt) 
| project month=format_datetime(month, 'yyyy-MM-dd'), count=['count']
| sort by month asc 
`
  const results = await data.query(kql, target.resource, {}, {}) 
  
  return {
    content: results.value, 
    access: 1, 
    renderer: 'data/vega', 
    options: {
      mark: 'bar',
      encoding: {x: {field: 'month', type: 'ordinal'}, y: { field: 'count', type: 'quantitative'}}
    }
  }
}
```
