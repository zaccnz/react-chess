(function(){"use strict";var h=(n=>(n.Pawn="pawn",n.Rook="rook",n.Knight="knight",n.Bishop="bishop",n.King="king",n.Queen="queen",n))(h||{});const g=8;var M=(n=>(n[n.WHITE=0]="WHITE",n[n.BLACK=1]="BLACK",n[n.MAX=2]="MAX",n))(M||{});const d=(n,e,o)=>o*g+e,T=(n,e)=>[e%g,Math.floor(e/g)];h.Rook,h.Knight,h.Bishop,h.Queen,h.King,h.Bishop,h.Knight,h.Rook;const w=n=>{const e=n.board.map((i,I)=>i===null?null:[i,...T(n,I)]).filter(i=>i!==null),o=e.find(i=>i[0].type==="king"&&i[0].team==0),s=e.find(i=>i[0].type==="king"&&i[0].team==1);if(!o||!s)return console.log("a player is missing a king.  invalid game state!"),[o===void 0,s===void 0];const[,c,u]=o,[,k,p]=s,v=[...Array(2)].map(i=>!1);for(const[i,I,N]of e.filter(t=>t[0].type!=="king")){const t=K(n,I,N,!1);for(const[r,l]of t.filter(b=>b[2])){const[b,a]=i.team==0?[k,p]:[c,u];b==r&&a==l&&(v[i.team==0?1:0]=!0)}}return v},E=(n,e,o,s,c)=>{const u=n.board[d(n,s,c)];n.board[d(n,s,c)]=n.board[d(n,e,o)],n.board[d(n,e,o)]=null;const k=w(n);return n.board[d(n,e,o)]=n.board[d(n,s,c)],n.board[d(n,s,c)]=u,k},K=(n,e,o,s=!0)=>{const c=n.board[d(n,e,o)];if(c==null)return[];const u=[],k=c.team==0,p=(r,l)=>!(r<0||r>=g||l<0||l>=g),v=(r,l)=>{if(!p(r,l))return!1;const b=n.board[d(n,r,l)];return b&&b.team!=c.team},i=(r,l,b=!1)=>{if(!p(r,l))return;const a=n.board[d(n,r,l)];a&&a.team==c.team||u.push([r,l,a!==null,b])},I=(r,l)=>{!p(r,l)||v(r,l)&&i(r,l)},N=(r,l)=>{!p(r,l)||n.board[d(n,r,l)]==null&&i(r,l)},t=(r,l)=>{let b=e+r,a=o+l;for(;p(b,a)&&(i(b,a),n.board[d(n,b,a)]==null);)b+=r,a+=l};switch(c.type){case"pawn":{!c.has_moved&&n.board[d(n,e,o+(k?-1:1))]===null&&N(e,k?4:3),N(e,o+(k?-1:1)),I(e-1,o+(k?-1:1)),I(e+1,o+(k?-1:1));break}case"rook":t(-1,0),t(1,0),t(0,-1),t(0,1);break;case"knight":i(e-1,o-2),i(e+1,o-2),i(e-1,o+2),i(e+1,o+2),i(e-2,o-1),i(e+2,o-1),i(e-2,o+1),i(e+2,o+1);break;case"bishop":t(-1,-1),t(1,-1),t(-1,1),t(1,1);break;case"king":{i(e-1,o-1),i(e-1,o+1),i(e+1,o+1),i(e+1,o-1),i(e+1,o),i(e-1,o),i(e,o+1),i(e,o-1);const r=n.board[d(n,e,o)];if(r!=null&&r.has_moved)break;let l=n.board[d(n,0,o)];if(l&&l.type==h.Rook&&!l.has_moved){let b=!w(n)[c.team];for(let a=5;a<7;a++)b=b&&n.board[d(n,a,o)]==null;for(let a=5;a<7;a++)b=b&&!E(n,e,o,a,o)[c.team];b&&(console.log("pushing castle"),i(6,o,!0))}if(l=n.board[d(n,7,o)],l&&l.type==h.Rook&&!l.has_moved){let b=!w(n)[c.team];for(let a=1;a<4;a++)b=b&&n.board[d(n,a,o)]==null;for(let a=1;a<4;a++)b=b&&!E(n,e,o,a,o)[c.team];b&&(console.log("pushing castle"),i(2,o,!0))}}break;case"queen":t(-1,0),t(1,0),t(0,-1),t(0,1),t(-1,-1),t(1,-1),t(-1,1),t(1,1);break}if(s)for(let r=u.length-1;r>=0;r--)E(n,e,o,u[r][0],u[r][1])[c.team]&&u.splice(r,1);return u},Y=(n,e)=>{const o=e?1:-1;let s=0;switch(n){case"pawn":s=10;break;case"knight":s=30;break;case"bishop":s=30;break;case"rook":s=50;break;case"queen":s=90;break;case"king":s=900;break}return s*o},R=(n,e)=>n.board.filter(o=>o!==null).map(o=>Y(o.type,o.team===e)).reduce((o,s)=>o+s,0),A=(n,e)=>{const o=(c,u)=>u*g+c,s=n.board[o(e.to_x,e.to_y)];return n.board[o(e.to_x,e.to_y)]=n.board[o(e.from_x,e.from_y)],n.board[o(e.from_x,e.from_y)]=null,s},C=(n,e,o)=>{const s=(c,u)=>u*g+c;n.board[s(e.from_x,e.from_y)]=n.board[s(e.to_x,e.to_y)],n.board[s(e.to_x,e.to_y)]=o},f=(n,e)=>{const o=n.board.map((c,u)=>c===null?null:[u%g,Math.floor(u/g),c.team]).filter(c=>c!==null&&c[2]==e),s=(c,u)=>K(n,c,u).map(([k,p])=>({from_x:c,from_y:u,to_x:k,to_y:p}));return o.map(([c,u])=>s(c,u)).flat()},B=(n,e,o,s,c,u=!1)=>{if(o===0)return R(n,e);if(u){let k=Number.NEGATIVE_INFINITY;for(const p of f(n,e)){const v=A(n,p),i=B(n,e,o-1,s,c,!1);if(C(n,p,v),i>k&&(k=i),i>s&&(s=i),c<=s)break}return k}else{let k=Number.POSITIVE_INFINITY;const p=e==M.BLACK?M.WHITE:M.BLACK;for(const v of f(n,p)){const i=A(n,v),I=B(n,e,o-1,s,c,!0);if(C(n,v,i),I<k&&(k=I),I<c&&(c=I),c<=s)break}return k}},F=(n,e)=>{const o=f(n,e);let s,c=Number.NEGATIVE_INFINITY;for(const u of o){const k=A(n,u),p=B(n,e,3,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY);C(n,u,k),p>c&&(c=p,s=u)}return s};onmessage=n=>{const e=n.data;switch(e.type){case"generateMove":{const o=performance.now(),s=F(e.state,e.team),c=performance.now();console.log(`AI move generation took ${c-o} ms`),postMessage(s===void 0?{type:"failed"}:{type:"success",move:s})}}}})();
