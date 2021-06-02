---
type: ghnb
---

```{md}
# Brushable Scatterplot

This chart shows the inverse relationship between engine power (*y*-axis) and fuel efficiency (*x*-axis) in ${data.length} cars from 1970–1982. Brushing this scatterplot will show the selected data points.
```

```{js#viewof selection}(inputs=d3;width;height;xAxis;yAxis;data;x;y)
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .property("value", []);

  const brush = d3.brush()
      .on("start brush end", brushed);

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  const dot = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(data)
    .join("circle")
      .attr("transform", d => `translate(${x(d.x)},${y(d.y)})`)
      .attr("r", 3);

  svg.call(brush);

  function brushed({selection}) {
    let value = [];
    if (selection) {
      const [[x0, y0], [x1, y1]] = selection;
      value = dot
        .style("stroke", "gray")
        .filter(d => x0 <= x(d.x) && x(d.x) < x1 && y0 <= y(d.y) && y(d.y) < y1)
        .style("stroke", "steelblue")
        .data();
    } else {
      dot.style("stroke", "steelblue");
    }
    svg.property("value", value).dispatch("input");
  }

  return svg.node();
}
);
```
```{js#selection}(inputs=Generators,viewof selection)
Generators.input(viewof_selection))
```
```{js}(inputs=selection)
selection
```

```{js#height}
600
```
```{js#margin}
{top: 20, right: 30, bottom: 30, left: 40}
```
```{js#x}(inputs=d3;data;margin;width)
d3.scaleLinear()
  .domain(d3.extent(data, d => d.x)).nice()
  .range([margin.left, width - margin.right])
```

```{js#y}(inputs=d3;data;height;margin)
d3.scaleLinear()
  .domain(d3.extent(data, d => d.y)).nice()
  .range([height - margin.bottom, margin.top])
```

```{js#xAxis}(inputs=height;margin;d3;x;width;data)
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
        .attr("x", width - margin.right)
        .attr("y", -4)
        .attr("fill", "#000")
        .attr("font-weight", "bold")
        .attr("text-anchor", "end")
        .text(data.x))
```

```{js#yAxis}(inputs=margin;d3;y;data)
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 4)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))
```

```{imports}
cars-2 load ./cars-2.csv
```

```{js#data}(inputs=d3;cars-2)
Object.assign(d3.csvParse((await cars-2).text(), ({Name: name, Miles_per_Gallon: x, Horsepower: y}) => ({name, x: +x, y: +y})), {x: "Miles per Gallon", y: "Horsepower"})
```

```{md}
Thanks to [John Alexis Guerra Gómez](/@john-guerra) for suggestions.
```

```{js#d3}(inputs=require)
require("d3@6")
```