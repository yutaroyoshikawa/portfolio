import { useCallback, useState, useEffect } from 'react'
import * as d3 from 'd3'
import rd3 from 'react-d3-library'
import { useMappedState } from 'redux-react-hook'
import { IAboutState } from '../reducers/about'

const RD3Component = rd3.Component

export default () => {
  const [d3data, _d3data] = useState<any>(null)

  const skillMapState = useCallback(
    (state: IAboutState) => state.about.skills,
    [],
  )

  const skills = useMappedState(skillMapState)

  const buble = () => {
    const node = document.createElement('svg')
    const width = innerWidth * 0.7
    const height = innerHeight * 0.7
    node.style.width = `${width}px`
    node.style.height = `${height}px`
    const bubble = d3.pack()
                    .size([width, height])
                    .padding(1)

    const nodes = d3.hierarchy({children: skills})
                    .sum((d: any) => d.val)

    const bubble_data = bubble(nodes).descendants()
    const no_root_bubble = bubble_data.filter((d: any) => d.parent !== null)

    const max_val = d3.max(no_root_bubble, (d: any) => d.r);     
    const min_val = d3.min(no_root_bubble, (d: any) => d.r);
    
    const color_scale = d3.scaleLinear()
                          .domain([min_val, max_val])
                          .range(d3.schemeCategory10 as any)
    const font_scale = d3.scaleLinear()
            .domain([min_val, max_val])
            .range([9, 28]);

    const bubbles = d3.select(node)
                      .selectAll('.bubble')
                      .data(no_root_bubble)
                      .enter()
                      .append('g')
                      .attr('class', 'bubble')
                      .attr('transform',
                        (d: any) => 'translate('+d.x+','+d.y+')'
                      )

    bubbles.append('circle')
            .attr('r', (d: any) => d.r)
            .style('fill', (d: any) => color_scale(d.r))

    bubbles.append('text')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'central')
            .text((d: any) => d.data.name)
            .style('font-size', (d: any) => font_scale(d.r))
    
    return node
  }

  useEffect(() => {
    _d3data(buble)
  }, [])

  return (
    <RD3Component data={d3data} />
  )
}