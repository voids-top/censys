function s(r,t=10,i=!1){if(!r)return"";if(r.length<=t)return r;if(i){let n=Math.floor(t/2)-1;return`${r.slice(0,n)}...${r.slice(r.length-n)}`}return`${r.slice(0,t-3)}...`}export{s as a};
