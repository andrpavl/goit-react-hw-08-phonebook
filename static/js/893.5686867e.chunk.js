"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[893],{2893:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a=t(9434),r=t(8893),s=function(e){return e.contacts.contacts},o=function(e){return e.contacts.isLoading},c=function(e){return e.contacts.error},l=function(e){return e.filter.filter},i="ContactList_list__csErn",u=t(4281),d=t(5206),m=t(184);function h(){var e=(0,a.v9)(l),n=(0,a.I0)(),t=(0,a.v9)(s).filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,m.jsx)("ul",{className:i,children:t.map((function(e){return(0,m.jsxs)("li",{children:[e.name,": ",e.number,(0,m.jsx)(u.Z,{variant:"contained",size:"small",onClick:function(){return t=e.id,n((0,r.GK)(t)),void d.Am.warn("Contact deleted!");var t},style:{marginLeft:"20px"},children:"Delete"})]},e.id)}))})}var f="Filter_label__vEd1E",p="Filter_cont__yrs2S",v=t(96);function x(){var e=(0,a.I0)(),n=(0,a.v9)(l);return(0,m.jsx)("div",{className:p,children:(0,m.jsxs)("label",{htmlFor:"name",className:f,children:["Find contacts by name",(0,m.jsx)("input",{placeholder:"Enter name",value:n,onChange:function(n){e((0,v.Tv)(n.target.value))},style:{marginLeft:"20px",width:"200px"},className:"form-control","aria-label":"default input example",type:"text"})]})})}var b=t(9439),_=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&t[e];n+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return n},j="Phonebook_form__J23fu",g="Phonebook_label__Qzztg",y="Phonebook_loader__-5wJH",C=t(2791),w=t(3521);function N(){var e=(0,a.I0)(),n=(0,a.v9)(s),t=(0,a.v9)(o),l=(0,a.v9)(c);(0,C.useEffect)((function(){e((0,r.yF)())}),[e]);var i=(0,C.useState)(""),h=(0,b.Z)(i,2),f=h[0],p=h[1],v=(0,C.useState)(""),x=(0,b.Z)(v,2),N=x[0],k=x[1],A=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":p(a);break;case"number":k(a)}},F=_(),Z=_();return(0,m.jsxs)("div",{children:[(0,m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t,a){if(n.some((function(e){return e.name===t})))return d.Am.warn("".concat(t," is already in contacts."));var s={id:_(),name:t,number:a};e((0,r.uK)(s)),d.Am.success("".concat(t," added to your contacts"))}(f,N),p(""),k("")},className:j,children:[t&&!l&&(0,m.jsx)("div",{className:y,children:(0,m.jsx)(w.Z,{})}),(0,m.jsxs)("label",{htmlFor:F,className:g,children:["Name",(0,m.jsx)("input",{className:"form-control",placeholder:"Enter name","aria-label":"default input example",type:"text",value:f,onChange:A,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{htmlFor:Z,className:g,children:["Phone",(0,m.jsx)("input",{onChange:A,value:N,name:"number",className:"form-control",required:!0,type:"tel",placeholder:"Enter phone number","aria-label":"default input example",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]}),(0,m.jsx)(u.Z,{variant:"contained",type:"submit",children:"Add contact"})]}),(0,m.jsx)(d.Ix,{})]})}function k(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(N,{}),(0,m.jsx)("h2",{style:{textAlign:"center",marginTop:"40px"},children:"Contacts"}),(0,m.jsx)(x,{}),(0,m.jsx)(h,{})]})}}}]);
//# sourceMappingURL=893.5686867e.chunk.js.map