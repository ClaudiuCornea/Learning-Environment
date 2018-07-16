/*data = [[1,2,5,7,4,15],[4,5,2,6,3,6]];
be = [1,2,5,7,4,15];
fr = [4,5,2,6,3,6];
console.log(data.map);
console.log(be.map);
let svg_width = 800,
    svg_height = 300,
    bar_padding = 5;
let bar_width = (svg_width / data[0].length);

let svg = d3.select("svg")
            .attr("class","bar")
            .attr("width",svg_width)
            .attr("height",svg_height);
            
let x_scale = d3.scaleLinear()
                .domain(data)
                .range([0, svg_width]);

let y_scale = d3.scaleLinear()
                .domain([0, d3.max(data[0])])
                .range([svg_height, 30]);

let x_axis = d3.axisBottom().scale(x_scale);
let y_axis = d3.axisLeft().scale(y_scale);

svg.append("g")
    .attr("transform", "translate(40, -20)")
    .call(y_axis);
    
let x_axis_translate = svg_height - 20;

svg.append("g")
    .attr("transform", "translate(40, " + x_axis_translate  +")")
    .call(x_axis);

let bar = svg.selectAll("rect")
            .data(function(d){return(data.mapping);})
            .enter()
            .append("rect")
            .attr("y", function(d){return(svg_height - y_scale(d));})
            .attr("height", function(d){return(y_scale(d));})
            .attr("width", bar_width - bar_padding)
            .attr("transform", function(d, i){
                let translate = [bar_width * i + 50, -20 ];
                return("translate(" + translate +")");
    });*/
    
let data = [{
    "Client": "ABC",
    "sale": "20.2",
    "year": "2000"
}, {
    "Client": "ABC",
    "sale": "21.5",
    "year": "2002"
}, {
    "Client": "ABC",
    "sale": "17.9",
    "year": "2004"
}, {
    "Client": "ABC",
    "sale": "19.9",
    "year": "2006"
}, {
    "Client": "ABC",
    "sale": "13.4",
    "year": "2008"
}, {
    "Client": "ABC",
    "sale": "17.6",
    "year": "2010"
}, {
    "Client": "XYZ",
    "sale": "100",
    "year": "2000"
}, {
    "Client": "XYZ",
    "sale": "215",
    "year": "2002"
}, {
    "Client": "XYZ",
    "sale": "179",
    "year": "2004"
}, {
    "Client": "XYZ",
    "sale": "199",
    "year": "2006"
}, {
    "Client": "XYZ",
    "sale": "134",
    "year": "2008"
}, {
    "Client": "XYZ",
    "sale": "176",
    "year": "2013"
}];

let _width = 1000,
    _height = 500,
    _margin ={
        "top" : 50,
        "right" : 20,
        "bottom" : 50,
        "left" : 50
    };

let svg = d3.select("svg")
            .attr("width", _width)
            .attr("height", _height);

let parseTime = d3.timeParse("%Y"),
    formatTime = d3.timeFormat("%Y");
data.forEach(function(d){
    d.year = parseTime(d.year);
});

let x_scale = d3.scaleTime()
                .range([_margin.left, _width - _margin.right])
                .domain(d3.extent(data, function(d){return(d.year);}));
let y_scale = d3.scaleLinear()
                .range([_height - _margin.top, _margin.bottom])
                .domain([d3.min(data, function(d){return(Math.floor(d.sale));}),
                        d3.max(data, function(d){return(Math.ceil(d.sale));})]);
let x_axis = d3.axisBottom()
                .scale(x_scale);
let y_axis = d3.axisLeft()
                .scale(y_scale);
svg.append("g")
    .attr("transform", "translate(0," + (_height - _margin.bottom) + ")")
    .call(x_axis);
svg.append("text")
    .attr("x", _width / 2)
    .attr("y", _height)
    .style("text-anchor", "middle")
    .text("Axe X");
svg.append("g")
    .attr("transform", "translate(" + _margin.left + ",0)")
    .call(y_axis);
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", 0 - _height / 2)
    .attr("y", _margin.right / 2)
    .style("text-anchor", "middle")
    .text("Axe Y");

let line_1 = d3.line()
                .x(function(d){
                    return(x_scale(d.year));
                })
                .y(function(d){
                    return(y_scale(d.sale));
                });
let data_group_client = d3.nest()
                        .key(function(d){return(d.Client);})
                        .entries(data);
data_group_client.forEach(function(d, i){
    svg.append("path")
        .attr("class", "line")
        .attr("id", "line_" + d.key)
        .attr("d", line_1(d.values, x_scale, y_scale))
        .attr("stroke", function(d ,i){
            return("hsl(" + Math.random() * 360 + ",100%, 50%");
        })
        .attr("stroke-width", 2)
        .attr("fill", "none")
        .on("mouseover", function(){
            d3.selectAll(".line")
                .style("opacity", 0.3);
            d3.select(this)
                .style("stroke-width", 4)
                .style("opacity", 1);
        })
        .on("mouseout", function(){
            d3.selectAll(".line")
                .style("opacity", 1);
            d3.select(this)
                .style("stroke-width", 2);
        });
    let legend_space = _width / data_group_client.length;
    svg.append("text")
        .attr("x", (legend_space / data_group_client.length ) + i * legend_space)
        .attr("y", _height)
        .style("fill", "black")
        .text(d.key)
        .attr("id",(d.key))
        .attr("class", "legend")
        .on("mouseover", function(){
            d3.selectAll(".legend")
                .style("opacity", 0.3);
            d3.selectAll(".line")
                .style("opacity", 0.3);
            d3.select(this)
                .style("opacity", 1);
            d3.select("#line_" + d.key)
                .style("opacity", 1)
                .style("stroke-width", 4);
        })
        .on("mouseout", function(){
            d3.selectAll(".legend")
                .style("opacity", 1);
            d3.selectAll(".line")
                .style("stroke-width", 2)
                .style("opacity", 1);
        });
});

let tooltip = d3.select("body")
                .append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

svg.selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("cx", function(d){return(x_scale(d.year));})
    .attr("cy", function(d){return(y_scale(d.sale));})
    .style("opacity", 0)
    .on("mouseover", function(d){
        tooltip.transition()
            .style("opacity", 1);
        tooltip.html(formatTime(d.year) + "<br/>" + d.sale)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY) + "px");
    })
    .on("mouseout", function(d){
        tooltip.transition()
            .style("opacity", 0);
    });
