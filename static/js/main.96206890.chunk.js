(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,function(e,t,a){},,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Rick","img":"https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/scale-to-width-down/620?cb=20160923150728","isClicked":false},{"id":2,"name":"Morty","img":"https://vignette.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest?cb=20170217193441","isClicked":false},{"id":3,"name":"Summer","img":"https://vignette.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg/revision/latest?cb=20160919183158","isClicked":false},{"id":4,"name":"Beth","img":"https://vignette.wikia.nocookie.net/rickandmorty/images/5/58/Beth_Smith.png/revision/latest?cb=20151204220729","isClicked":false},{"id":5,"name":"Jerry","img":"https://vignette.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20160923151111","isClicked":false},{"id":6,"name":"Mr Poopybutthole","img":"https://i1.sndcdn.com/avatars-000275185348-tzwpb4-t500x500.jpg","isClicked":false},{"id":7,"name":"Mr. Meeseeks","img":"https://vignette.wikia.nocookie.net/rickandmorty/images/6/6c/MeeseeksHQ.png/revision/latest?cb=20150930232412","isClicked":false},{"id":8,"name":"Birdperson","img":"https://vignette.wikia.nocookie.net/rickandmorty/images/b/b1/Birdperson.png/revision/latest?cb=20140415133633","isClicked":false},{"id":9,"name":"Tammy","img":"https://vignette.wikia.nocookie.net/rickandmorty/images/0/08/Tammy.png/revision/latest?cb=20140523063749","isClicked":false},{"id":10,"name":"Jessica","img":"https://vignette.wikia.nocookie.net/rickandmorty/images/e/e8/Jessica.png/revision/latest?cb=20150706222334","isClicked":false},{"id":11,"name":"Snowball","img":"https://m.media-amazon.com/images/M/MV5BNzUyNmIxYzYtMTM2My00ZTZjLWFmODYtNmFmMDgyZDY4OWU4XkEyXkFqcGdeQXVyNjg0Nzk2Nzc@._V1_UY268_CR147,0,182,268_AL_.jpg","isClicked":false},{"id":12,"name":"Brad","img":"https://vignette.wikia.nocookie.net/rickandmorty/images/a/ac/Brad.jpg/revision/latest?cb=20150730222204","isClicked":false}]')},,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),r=a.n(c),s=(a(15),a(4)),o=a(5),l=a(8),m=a(6),d=a(9);a(16),a(2);var g=function(e){var t=e.character,a=t.id,n=t.name,c=t.img;return i.a.createElement("div",{className:"img-container",id:a},i.a.createElement("img",{alt:n,src:c}))};var k=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.onClick(e.characters.id)}},i.a.createElement(g,{character:e.characters}))};a(17);var u=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(18);var h=function(e){return i.a.createElement("div",{className:"headDiv"},e.children)};a(19);var f=function(e){return i.a.createElement("h1",{className:"title"},e.children)};a(20);var p=function(e){return i.a.createElement("div",{className:"score"},e.children)},v=a(7),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={characters:v,score:0},a.shuffle=function(){console.log("\n================================= Current Data ==============================="),console.log(a.state.characters),console.log("==============================================================================\n"),a.setState({characters:a.state.characters.sort((function(e,t){return.5-Math.random()}))})},a.setClicked=function(e){console.log("you clicked on the "+e+" character");var t=a.state.characters.find((function(t){return t.id===e}));t.isClicked?(alert("Game Over!"),a.resetData()):(t.isClicked=!0,console.log("start score: ",a.state.score),a.setState({characters:a.state.characters,score:a.state.score+1}),console.log("\n============================ Updated  ======================================"),a.state.characters.map((function(e){return console.log(e.name+" "+e.isClicked)})),console.log("============================================================================\n"),console.log("updated score: ",a.state.score),11===a.state.score?a.winGame():a.shuffle())},a.resetData=function(){var e=a.state.characters.map((function(e){return e.isClicked=!1}));return a.setState({characters:a.state.characters,score:0}),console.log("\n============================ Reset Data ======================================"),console.log(e),console.log("==============================================================================\n"),a.shuffle()},a.winGame=function(){alert("You win!"),a.resetData()},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(u,null,i.a.createElement(h,null,i.a.createElement(f,null," Rick and Morty Clicky Game "),i.a.createElement(p,null," Score: ",this.state.score," ")),this.state.characters.map((function(t){return i.a.createElement(k,{key:t.id,characters:t,onClick:function(){return e.setClicked(t.id)}})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.96206890.chunk.js.map