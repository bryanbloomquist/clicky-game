(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Baron Underbheit",image:"images/baron-underbheit.png",clicked:!1},{id:2,name:"Billy Quizboy",image:"images/billy-quizboy.png",clicked:!1},{id:3,name:"Brock Sampson",image:"images/brock-sampson.jpg",clicked:!1},{id:4,name:"Dean Venture",image:"images/dean-venture.png",clicked:!1},{id:5,name:"Dr Girlfriend",image:"images/dr-girlfriend.png",clicked:!1},{id:6,name:"The Monarch",image:"images/the-monarch.jpg",clicked:!1},{id:7,name:"Dr Venture",image:"images/dr-venture.jpg",clicked:!1},{id:8,name:"Hank Venture",image:"images/hank-venture.png",clicked:!1},{id:9,name:"Henchman 21",image:"images/henchman-21.png",clicked:!1},{id:10,name:"Henchman 24",image:"images/henchman-24.png",clicked:!1},{id:11,name:"Pete White",image:"images/pete-white.jpg",clicked:!1},{id:12,name:"The Phantom Limb",image:"images/the-phantom-limb.png",clicked:!1}]},,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(2),r=t.n(c),s=t(3),m=t(4),o=t(7),l=t(5),d=t(8),u=(t(15),function(e){return i.a.createElement("nav",{className:"navbar navbar-expand-lg"},i.a.createElement("a",{className:"navbar-brand h1 navbar-item logo m-0",href:"/"},i.a.createElement("img",{src:"images/venture.jpg",alt:"Venture Bros Logo"})),i.a.createElement("span",{className:"instructions navbar-item",style:{color:e.divStyle}},e.display),i.a.createElement("span",{className:"scoreboard navbar-item "},"Score: ",e.score,i.a.createElement("br",null)," Top Score: ",e.highScore))}),g=(t(16),function(e){return i.a.createElement("div",{className:"container-fluid animated zoomIn"},e.children)});t(17);var h=function(e){return i.a.createElement("div",{className:"imgContainer hovereffect",onClick:function(){return e.checkGuess(e.id)}},i.a.createElement("img",{alt:e.name,src:e.image,className:"token"}))},p=(t(18),function(){return i.a.createElement("div",{className:"footer mx-auto p-2"},i.a.createElement("p",{className:"lead p-2 m-0"},"Copyright \xa9 2019"))}),v=t(6),f=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={divStyle:"#ddd",ventures:v,score:0,highScore:0,display:"Click any image to begin, but don't click the same image more than once."},t.gameOver=function(){t.state.score>t.state.highScore&&t.setState({highScore:t.state.score}),t.state.ventures.forEach(function(e){e.clicked=!1}),t.setState({score:0,display:"You Guessed Incorrectly! Click on an image to try again.",divStyle:"#f00"})},t.gameWin=function(){t.state.ventures.forEach(function(e){e.clicked=!1}),t.setState({score:0,highScore:12,display:"Perfect Score!"})},t.checkGuess=function(e){for(var a,n=t.state.ventures,i=t.state.score,c=0;c<n.length;c++)n[c].id===e&&(a=n[c]);!1===a.clicked?(t.setState({divStyle:"#0fa"}),a.clicked=!0,12===++i?t.gameWin():t.setState({ventures:n,score:i,display:"You Guessed Correctly!"})):t.gameOver()},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(u,{display:this.state.display,score:this.state.score,highScore:this.state.highScore,divStyle:this.state.divStyle}),i.a.createElement(g,null,this.state.ventures.sort(function(){return Math.random()-.5}).map(function(a){return i.a.createElement(h,{checkGuess:e.checkGuess,clicked:a.clicked,id:a.id,image:a.image,key:a.image,name:a.name})})),i.a.createElement(p,null))}}]),a}(n.Component);r.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.6b04e6a4.chunk.js.map