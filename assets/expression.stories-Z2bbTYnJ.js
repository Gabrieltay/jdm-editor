import{j as r}from"./index-C1fuRcQE.js";import{r as g}from"./index-CDs2tPxN.js";import{E as a}from"./expression-D0B00gSA.js";import"./extends-CCbyfPlC.js";import"./index-7f_Nov5Q.js";import"./useDrop-C5hNdXZd.js";import"./button-DP1-t7AX.js";import"./ce-CiyYDXfv.js";const c=[{id:"1",key:"customer.fullName",value:'customer.firstName + " " + customer.lastName'},{id:"2",key:"customer.isPremium",value:'contains(customer.tags, "premium")'},{id:"3",key:"customer.purchaseTotals",value:"sum(map(customer.purchases, #.amount))"}],W={title:"Expression",component:a,args:{configurable:!0,disabled:!1,defaultValue:c},argTypes:{manager:{table:{disable:!0}},value:{table:{disable:!0}}}},i=({children:e})=>r.jsx("div",{style:{maxWidth:900},children:e}),s={render:e=>r.jsx(i,{children:r.jsx(a,{...e})})},t={render:e=>{const[d,x]=g.useState(c);return r.jsx(i,{children:r.jsx(a,{value:d,onChange:x,...e})})}};var o,n,u;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    return <StoryWrapper>
        <Expression {...args} />
      </StoryWrapper>;
  }
}`,...(u=(n=s.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(expressionDefault);
    return <StoryWrapper>
        <Expression value={value} onChange={setValue} {...args} />
      </StoryWrapper>;
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const C=["Uncontrolled","Controlled"];export{t as Controlled,s as Uncontrolled,C as __namedExportsOrder,W as default};
