## DOM-Like Tree

/*
Given the following example:

div
|   |   \
div div  div
|    |
p    p
|    |
text text

generate a data structure that generate a DOM-like text structure representing this tree
*/

const structure ={
  markup: "div",
  content: [
    {
      markup: "div",
      content: [
        {
          markup: "div",
          content: [
            {
              markup: "p",
              content: "text"
            },
            {
              markup: "p",
              content: "text"
            },
            {
              markup: "p",
              content: "text"
            }
          ]
        },
        {
          markup: "div",
          content: "text"
        },
        {
          markup: "div",
          content: [{
            markup: "p",
            content: "text"
          }]
        },
        {
          markup: "div",
          content: [{
            markup: "p",
            content: "text"
          }]
        },
      ]
    },
    {
      markup: "div",
      content: [
        {
          markup: "div",
          content: []
        },
      ]
    },
    {
      markup: "div",
      content: [{
        markup: "div",
        content: [
          {
            markup: "p",
            content: "text"
          }
        ]
      }, {
        markup: "div",
        content: [{
          markup: "p",
          content: "text"
        }]
      }, {
        markup: "div",
        content: [{
          markup: "p",
          content: "text"
        }, {
          markup: "p",
          content: "text"
        }]
      }, {
        markup: "div",
        content: [{
          markup: "p",
          content: "text"
        }, {
          markup: "p",
          content: "text"
        }, {
          markup: "p",
          content: "text"
        }]
      }, {
        markup: "div",
        content: [{
          markup: "p",
          content: "text"
        }]
      }]
    },
    {
      markup: "div",
      content: [{
        markup: "div",
        content: []
      }]
    },
    {
      markup: "div",
      content: [{
        markup: "div",
        content: [
          {
            markup: "p",
            content: "text"
          }
        ]
      }]
    },
  ]
}

const renderStr = (data, tabIdx = 0) => {

  const tabIndex = (idx, str) => {
    if (!str) str = ""
    if (idx === 0) return str;
    return str + tabIndex(idx - 1, '\t')
  }

  let { markup, content } = data;
  if (content.length === 0) return `${tabIndex(tabIdx)}</${markup}>\n`
  if (typeof content === "string") return `${tabIndex(tabIdx)}<${markup}>${content}</${markup}>\n`

  let str = `${tabIndex(tabIdx)}<${markup}>\n`
  content.forEach(item => {
    str += `${renderStr(item, tabIdx + 1)}`
  })
  str += `${tabIndex(tabIdx)}</${markup}>\n`
  return str;
}

console.log(renderStr(structure, 0))
