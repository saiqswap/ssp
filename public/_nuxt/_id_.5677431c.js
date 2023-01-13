import{_ as Eo}from"./back.b8f32d6c.js";import{_ as Do}from"./status-block.31ea9218.js";import{a as to,L as ao,r as m,s as lo,F as ro,v as I,ac as F,i as uo,A as bo,H as S,b as co,o as u,e as k,f as e,l as v,m as h,t as s,q as V,h as W,S as go,p as po,j as mo,M as qo,K as Fo,c as wo,y as A,B as $o,G as Wo,au as Mo,z as so,w as K,N as Ho,ai as Vo,ak as zo,an as B,av as _o,X as q,k as io,J as Go,C as Jo,E as Ko,a1 as Xo,a2 as Qo}from"./entry.9435db5d.js";/* empty css              */import{_ as Co,a as yo}from"./icon-arrow_2x.db44c7c5.js";const Yo=to({props:{positionInfo:{type:Object,required:!0}},setup(o){const{t:l}=ao();let T=m(!1),j=m(!0);const O=lo(),P=ro(),t=I(()=>P),c=I(()=>{var b,g,y,R,U,D,M,_;const $=o.positionInfo.amountA*((g=t.value.RATES[(b=o.positionInfo)==null?void 0:b.token_a.name.toUpperCase()])==null?void 0:g.price),f=o.positionInfo.amountB*((R=t.value.RATES[(y=o.positionInfo)==null?void 0:y.token_b.name.toUpperCase()])==null?void 0:R.price);return((D=t.value.RATES[(U=o.positionInfo)==null?void 0:U.token_a.name.toUpperCase()])==null?void 0:D.price)&&((_=t.value.RATES[(M=o.positionInfo)==null?void 0:M.token_b.name.toUpperCase()])==null?void 0:_.price)?$+f:" --"}),i=I(()=>{var $,f,b,g;return((f=t.value.RATES[($=o.positionInfo)==null?void 0:$.token_a.name.toUpperCase()])==null?void 0:f.price)&&c.value!=="--"?(o.positionInfo.amountA*((g=t.value.RATES[(b=o.positionInfo)==null?void 0:b.token_a.name.toUpperCase()])==null?void 0:g.price)/c.value*100).toFixed(0):" --"}),E=I(()=>{var $,f,b,g;return((f=t.value.RATES[($=o.positionInfo)==null?void 0:$.token_b.name.toUpperCase()])==null?void 0:f.price)&&c.value!=="--"?(o.positionInfo.amountB*((g=t.value.RATES[(b=o.positionInfo)==null?void 0:b.token_b.name.toUpperCase()])==null?void 0:g.price)/c.value*100).toFixed(0):" --"}),n=I(()=>t.value.tokensObj&&o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.address&&t.value.tokensObj[o.positionInfo.token_a.address]&&t.value.tokensObj[o.positionInfo.token_a.address].logoURI),C=I(()=>t.value.tokensObj&&o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.address&&t.value.tokensObj[o.positionInfo.token_b.address]&&t.value.tokensObj[o.positionInfo.token_b.address].logoURI);return{fromPercent:E,toPercent:i,amountUSD:c,showNum:F,t:l,importIcon:uo,indexStore:O,rateChange:j,decimalFormat:bo,fromCoinUrl:n,toCoinUrl:C,pools:t,addCommom:S,isPc:T}}});const Zo=o=>(po("data-v-a9f02cbe"),o=o(),mo(),o),xo={class:"position-card"},oe={class:"coin-pair"},ee=["src"],ne=["src"],se={class:"fee"},ie={class:"right"},te={key:0,class:"status"},ae={class:"min-and-max"},le={key:0},re={class:"text"},de={key:0,src:Co,alt:""},ue={key:1,src:yo,alt:""},ce={class:"text"},pe={key:1},me={class:"text"},fe={key:0,src:Co,alt:""},ve={key:1,src:yo,alt:""},ke={class:"text"},Ie=Zo(()=>e("use",{"xlink:href":"#icon-a-icon-change2"},null,-1)),he=[Ie],_e={class:"liquidity"},be={class:"label"},ge={class:"value"},we={class:"token-num"},$e={class:"item"},Ce=["src"],ye={class:"rate"},Se={class:"item"},Te=["src"],Ae={class:"rate"};function Oe(o,l,T,j,O,P){const t=go,c=Do;return u(),k("div",xo,[e("div",{class:V(["left",`position-status-${o.positionInfo&&o.positionInfo.currentStatus&&o.positionInfo.currentStatus.toLowerCase()}`])},[v(t,{class:"left-skeleton",loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[e("div",oe,[e("div",null,[e("img",{src:o.fromCoinUrl||o.importIcon(`/image/coins/${o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol.toLowerCase()}.png`)},null,8,ee),e("img",{src:o.toCoinUrl||o.importIcon(`/image/coins/${o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol.toLowerCase()}.png`)},null,8,ne)]),e("span",null,s(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" - "+s(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)]),e("div",se,s(o.$t("common.fee"))+" "+s(o.positionInfo.fee)+"% ",1)]),_:1},8,["loading"])],2),e("div",ie,[o.pools.currentPositionLoading?W("",!0):(u(),k("div",te,[v(c,{"current-status":o.positionInfo.currentStatus||""},null,8,["current-status"])])),v(t,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[e("div",ae,[o.rateChange?(u(),k("div",le,[e("div",re,s(o.addCommom(o.decimalFormat(String(o.positionInfo.minPrice),6))),1),o.indexStore.theme=="default"?(u(),k("img",de)):(u(),k("img",ue)),e("div",ce,s(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("\u221E")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"\u221E":o.addCommom(o.decimalFormat(String(o.positionInfo.maxPrice),6)))+" "+s(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol)+" per "+s(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)])):(u(),k("div",pe,[e("div",me,s(o.addCommom(o.decimalFormat(String(1/Number(o.positionInfo.maxPrice)),6))),1),o.indexStore.theme=="default"?(u(),k("img",fe)):(u(),k("img",ve)),e("div",ke,s(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("\u221E")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"\u221E":o.addCommom(o.decimalFormat(String(1/Number(o.positionInfo.minPrice)),6)))+" "+s(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" per "+s(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])),(u(),k("svg",{class:"icon-change","aria-hidden":"true",onClick:l[0]||(l[0]=i=>o.rateChange=!o.rateChange)},he))])]),_:1},8,["loading"]),e("div",_e,[v(t,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[e("div",be,s(o.$t("common.liquidity")),1),e("div",ge," $"+s(o.amountUSD=="--"?"--":Number(o.amountUSD)==0?0:Number(o.amountUSD)<.01?"<0.01":o.addCommom(o.amountUSD,2)),1)]),_:1},8,["loading"])]),e("div",we,[v(t,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[e("div",$e,[e("div",null,[e("img",{src:o.fromCoinUrl||o.importIcon(`/image/coins/${o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol.toLowerCase()}.png`)},null,8,Ce),e("p",null,s(o.showNum(o.positionInfo.amountA,o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.decimals)),1),e("span",null,s(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)]),e("div",ye,s(o.addCommom(o.fromPercent,0))+"%",1)]),e("div",Se,[e("div",null,[e("img",{src:o.toCoinUrl||o.importIcon(`/image/coins/${o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol.toLowerCase()}.png`)},null,8,Te),e("p",null,s(o.showNum(o.positionInfo.amountB,o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.decimals)),1),e("span",null,s(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_b.symbol),1)]),e("div",Ae,s(o.addCommom(o.toPercent,0))+"%",1)])]),_:1},8,["loading"])])])])}const Pe=co(Yo,[["render",Oe],["__scopeId","data-v-a9f02cbe"]]),Re=to({components:{Modal:qo},props:{positionInfo:{type:Object,required:!0},isLoading:{type:Boolean,required:!0}},setup(o,l){const{t:T,locale:j}=ao(),O=lo(),{copy:P}=O,t=()=>{l.emit("toClaim")},c=ro(),i=I(()=>c),E=I(()=>i.value.tokensObj&&o.positionInfo.token_a.address&&i.value.tokensObj[o.positionInfo.token_a.address]&&i.value.tokensObj[o.positionInfo.token_a.address].logoURI),n=I(()=>i.value.tokensObj&&o.positionInfo.token_b.address&&i.value.tokensObj[o.positionInfo.token_b.address]&&i.value.tokensObj[o.positionInfo.token_b.address].logoURI);return{showNum:F,fromCoinUrl:E,toCoinUrl:n,toClaim:t,t:T,addCommom:S,importIcon:uo,store:O,copy:P}}});const Ue=o=>(po("data-v-09ff5415"),o=o(),mo(),o),Ne=Ue(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Le={class:"claim-container"},Be={key:0,class:"pc-claim"},je=["src"],Ee={key:1,class:"pc-claim"},De=["src"];function qe(o,l,T,j,O,P){const t=$o,c=Fo("Modal");return u(),wo(c,{visible:!0,class:"claim-fees",centered:"",closable:!0,title:o.$t("modal.claimFees"),width:"400px",footer:null,onCancel:l[0]||(l[0]=i=>o.$emit("onClose"))},{closeIcon:h(()=>[Ne]),default:h(()=>[e("div",Le,[o.positionInfo&&o.positionInfo.token_a.symbol?(u(),k("div",Be,[e("img",{src:o.fromCoinUrl||o.importIcon(`/image/coins/${o.positionInfo.token_a.symbol.toLowerCase()}.png`)},null,8,je),e("span",null,s(o.showNum(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals))+" "+s(o.positionInfo.token_a.symbol),1)])):W("",!0),o.positionInfo&&o.positionInfo.token_b.symbol?(u(),k("div",Ee,[e("img",{src:o.toCoinUrl||o.importIcon(`/image/coins/${o.positionInfo.token_b.symbol.toLowerCase()}.png`)},null,8,De),e("span",null,s(o.showNum(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals))+" "+s(o.positionInfo.token_b.symbol),1)])):W("",!0)]),v(t,{class:"big-btn claim-btn",disabled:o.isLoading||o.addCommom(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals)==0&&o.addCommom(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals)==0||o.positionInfo.poolInfo.is_pause,onClick:o.toClaim},{default:h(()=>[A(s(o.$t("common.claim")),1)]),_:1},8,["disabled","onClick"])]),_:1},8,["title"])}const Fe=co(Re,[["render",qe],["__scopeId","data-v-09ff5415"]]),We=to({setup(){const o=m(!1),l=m(!1),T=m(!1),j=m(!0),O=ro(),P=m(""),t=m(""),c=m(""),i=I(()=>O),E=I(()=>{var p,d,w,N;const a=n.value.feeOwedA*((p=i.value.RATES[n.value&&n.value.token_a&&n.value.token_a.name.toUpperCase()])==null?void 0:p.price),r=n.value.feeOwedB*((d=i.value.RATES[n.value&&n.value.token_b&&n.value.token_b.name.toUpperCase()])==null?void 0:d.price);return((w=i.value.RATES[n.value&&n.value.token_a&&n.value.token_a.name.toUpperCase()])==null?void 0:w.price)&&((N=i.value.RATES[n.value&&n.value.token_b&&n.value.token_b.name.toUpperCase()])==null?void 0:N.price)?a+r:" --"}),n=m(i.value.currentPositionInfo||{}),C=Wo(),$=Mo();function f(){$.setCurrentLiquidity(n),C.push(`/remove-liquidity?collect=${n.value.collectionName}&&token=${n.value.tokenName}&&address=${n.value.pool}`)}function b(){console.log("1205###toIncrease####positionInfo####",n),$.setCurrentLiquidity(n),C.push(`/increase-liquidity?collect=${n.value.collectionName}&&token=${n.value.tokenName}&&address=${n.value.pool}`)}const g=()=>{R(),T.value=!0,setTimeout(()=>{T.value=!1},1e3)},y=so(),R=async()=>{i.value.setCurrentPositionLoading(!0);const a=C.currentRoute.value.query.token||"",r=C.currentRoute.value.query.collect||"";t.value=C.currentRoute.value.query.address||"",a&&r&&t.value&&(P.value=r,c.value=a,i.value.setCurrentPositionInfo(t.value,P.value,c.value),n.value=i.value.currentPositionInfo)};K(()=>i.value.addressLpTokens,a=>{q(a)||R()},{immediate:!0});const U=m(""),D=m(""),M=m(""),_=lo(),X=I(()=>_);K(()=>[X.value.newTopPoolsObj,n.value],([a,r])=>{if(!q(a)&&!q(r)){const p=r.poolAddress,d=a[p];console.log(d,"==>stats"),U.value=d&&d.apr_7day,D.value=d&&io(d.tvl_in_usd,2),M.value=d&&io(d.vol_in_usd_24h,2)}},{immediate:!0,deep:!0}),K(()=>i.value.currentPositionInfo,a=>{a&&(n.value=i.value.currentPositionInfo,Y.value=n.value.token_a,Z.value=n.value.token_b,console.log(a,"positionInfo.valuepositionInfo.value"))});const So=Ho(),H=I(()=>So);Vo(()=>{H.value.connected||C.push("/position")});const{t:Q}=ao(),{$notify:fo}=zo(),To=async()=>{o.value=!0,l.value=!1,_.setTransactionDesc(Q("newAdd.claimWaitingText",{from:S(n.value.feeOwedA,n.value.token_a.decimals)==0?"":`${F(n.value.feeOwedA,n.value.token_a.decimals)} ${n.value.token_a.symbol}`,and:S(n.value.feeOwedA,n.value.token_a.decimals)==0||S(n.value.feeOwedB,n.value.token_b.decimals)==0?"":"and",to:S(n.value.feeOwedB,n.value.token_b.decimals)==0?"":`${F(n.value.feeOwedB,n.value.token_b.decimals)} ${n.value.token_b.symbol}`})),_.setIsShowWaiting(!0);let a;const r={pool:n.value.poolInfo,position:n.value},p=so();try{const d=await p.getCollectFeeTransactionPayload(r);if(a=await H.value.currentWallet.signAndSubmitTransaction(d),a){_.setTransactionTxid(a.hash),_.setIsShowWaiting(!1),_.setIsShowSuccess(!0);const w={title:"Claim",desc:"",hash:a.hash,tit:`Claimed Fee: ${n.value.poolInfo.symbol}`,text:`Claim ${S(n.value.feeOwedA,n.value.token_a.decimals)==0?"":`${F(n.value.feeOwedA,n.value.token_a.decimals)} ${n.value.token_a.symbol}`}  
              ${S(n.value.feeOwedA,n.value.token_a.decimals)==0||S(n.value.feeOwedB,n.value.token_b.decimals)==0?"":"and"} ${S(n.value.feeOwedB,n.value.token_b.decimals)==0?"":`${F(n.value.feeOwedB,n.value.token_b.decimals)} ${n.value.token_b.symbol}`}
              
            `};p.showTransitionPending(w),await p.watchTransaction(w)&&setTimeout(()=>{R()},1e3)}else _.setIsShowWaiting(!1),_.setIsShowRejected(!0),fo.error({icon:B("svg",{class:{icon:!0},"aria-hidden":!0},[B("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),duration:4.5,message:B("div",{class:"notification-title"},[B("span",{innerHTML:_o.global.t("newAdd.claimFailed")},null)]),description:Q("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"});o.value=!1,console.log("claim####test###",a)}catch(d){console.log("claim###error####",d),o.value=!1,_.setIsShowWaiting(!1),_.setIsShowRejected(!0),fo.error({icon:B("svg",{class:{icon:!0},"aria-hidden":!0},[B("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:B("div",{class:"notification-title"},[B("span",{innerHTML:_o.global.t("newAdd.claimFailed")},null)]),duration:4.5,description:Q("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"})}},Y=m(""),Z=m(""),Ao=()=>{Y.value=n.value.token_b,Z.value=n.value.token_a},Oo=I(()=>i.value.newTokenObj&&n&&n.value.token_a&&n.value.token_a.address&&i.value.newTokenObj[n.value.token_a.address]&&i.value.newTokenObj[n.value.token_a.address].logoURI),Po=I(()=>i.value.newTokenObj&&n&&n.value.token_b&&n.value.token_b.address&&i.value.newTokenObj[n.value.token_b.address]&&i.value.newTokenObj[n.value.token_b.address].logoURI),Ro=I(()=>X.value.chainName),Uo=I(()=>Go[Ro.value]),vo=m(0),x=m([]),ko=async()=>{const a=i.value.addressLpTokens[n.value.poolAddress];console.log(a,"===>pool");const r=await y.getTickDataByIndex(a.ticks_handle,Number(n.value.tick_lower_index)),p=await y.getTickDataByIndex(a.ticks_handle,Number(n.value.tick_upper_index)),d=await y.getPosRewardersAmount({poolAddress:n.value.poolAddress,positionName:n.value.tokenName,tickLowerData:r,tickUpperData:p}),w=[];let N=0;d.forEach(L=>{const eo=i.value.newTokenObj[L.coin_address].decimals,J=i.value.newTokenObj[L.coin_address];console.log(L.amount_owed.toString(),"===>element.amount_owed.toString()");const no=Number(L.amount_owed.toString())/Math.pow(10,eo),jo=i.value.RATES[i.value.newTokenObj[L.coin_address].name.toUpperCase()].price,ho=no*jo;N+=ho,w.push({...L,...J,amount:no,amountUSD:ho})}),x.value=w,vo.value=Number(io(N,2))};K(()=>[n.value],async([a])=>{!q(a)&&!q(i.value.addressLpTokens)&&!q(i.value.newTokenObj)&&!q(i.value.RATES)&&ko()},{immediate:!0});const{setIsShowSuccess:No,setIsShowRejected:Io,setIsShowWaiting:oo,setTransactionDesc:Bn,setTransactionTxid:Lo}=_,G=m(!1),Bo=async()=>{G.value=!0;const a=so(),r=x.value;let p={coinTypeA:n.value.poolInfo.coinTypeA,coinTypeB:n.value.poolInfo.coinTypeB,coinTypeC:"",coinTypeD:"",coinTypeE:"",pool_address:n.value.poolAddress,pos_index:n.value.index,rewarder_nums:r.length};p.coinTypeC=r[0]?r[0].coin_address:"",p.coinTypeD=r[1]?r[1].coin_address:"",p.coinTypeE=r[2]?r[2].coin_address:"",console.log(p,"===>collectRewarderParams");try{const d=await a.getCollectRewarderTransactionPayload(p),w=await H.value.currentWallet.signAndSubmitTransaction(d);if(w&&w.hash){Lo(w.hash),oo(!1),No(!0);const N=r[0].amount+r[0].symbol,L=p.coinTypeD?" and "+r[1].amount+r[1].symbol:"",eo=p.coinTypeE?" and "+r[2].amount+r[2].symbol:"",J={title:"Claim",desc:"",hash:w.hash,tit:`Claimed Rewarder: ${n.value.poolInfo.symbol}`,text:N+L+eo};a.showTransitionPending(J),await a.watchTransaction(J)&&setTimeout(()=>{ko(),a.getAccount(H.value.address)},1e3)}else oo(!1),Io(!0);G.value=!1}catch(d){console.log("Swap Error###",d),G.value=!1,oo(!1),Io(!0)}};return console.log(n,"===>positionInfo"),{feeOwed:E,config:Uo,showNum:F,index:X,fromCoinUrl:Oo,toCoinUrl:Po,toggle:Ao,fromCoin:Y,toCoin:Z,apr:U,liquidityTvl:D,vol24:M,addCommom:S,decimalFormat:bo,wallet:H,isLoading:o,toClaim:To,pools:i,positionInfo:n,importIcon:uo,router:C,toRemove:f,toIncrease:b,isShowClaim:l,direct:j,refresh:T,clickRefresh:g,pendingRewarderArr:x,pendingRewarder:vo,toClaimRewards:Bo,rewarderLoading:G}}});const z=o=>(po("data-v-7156f934"),o=o(),mo(),o),Me={key:0,class:"position-detail-container"},He={class:"position-detail-header"},Ve={class:"back-and-refresh"},ze=z(()=>e("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Ge=[ze],Je={class:"action-position"},Ke={class:"coin-pair"},Xe=z(()=>e("use",{"xlink:href":"#icon-icon-copy"},null,-1)),Qe=[Xe],Ye=["href"],Ze=z(()=>e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon-jump"})],-1)),xe=[Ze],on={class:"acton-btn-box"},en=z(()=>e("svg",{"aria-hidden":"true",class:"action-icon"},[e("use",{"xlink:href":"#icon-icon-Reduction"})],-1)),nn=z(()=>e("svg",{"aria-hidden":"true",class:"action-icon"},[e("use",{"xlink:href":"#icon-icon-add"})],-1)),sn={class:"position-content"},tn={class:"pedding-fee"},an={class:"top"},ln={class:"left"},rn={class:"bottom"},dn=["src"],un=["src"],cn={class:"poolInfo"},pn={class:"pool-info-title"},mn={class:"currentPrice"},fn={key:0,class:"coin"},vn={key:1,class:"coin"},kn={class:"toggle"},In=["src"],hn=["src"],_n={key:0},bn={class:"info-block-container"},gn={class:"info-block"},wn={class:"leabl"},$n={class:"text"},Cn={class:"info-block"},yn={class:"leabl"},Sn={class:"text"},Tn={class:"info-block"},An={class:"leabl"},On={class:"text"},Pn={class:"info-block"},Rn={class:"leabl"},Un={class:"text"},Nn={class:"loading-global"};function Ln(o,l,T,j,O,P){const t=Eo,c=$o,i=go,E=Pe,n=Xo,C=Fe,$=Qo;return o.positionInfo?(u(),k("div",Me,[e("div",He,[e("div",Ve,[v(t),(u(),k("svg",{"aria-hidden":"true",class:V(o.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:l[0]||(l[0]=(...f)=>o.clickRefresh&&o.clickRefresh(...f))},Ge,2))]),e("div",Je,[v(i,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[e("div",Ke,[A(s(o.positionInfo.tokenName)+" ",1),(u(),k("svg",{class:"icon","aria-hidden":"true",onClick:l[1]||(l[1]=f=>o.index.copy(o.positionInfo.nftHash))},Qe)),e("a",{href:`https://explorer.aptoslabs.com/token/${o.positionInfo.nftHash}/0?network=${o.config.network}`,target:"_blank"},xe,8,Ye)]),e("div",on,[v(c,{class:V(["remove-liquidity action-btn",o.positionInfo.poolInfo.is_pause?"text-default":""]),disabled:o.positionInfo.poolInfo.is_pause,onClick:o.toRemove},{default:h(()=>[en,A(" "+s(o.$t("button.remove")),1)]),_:1},8,["class","disabled","onClick"]),v(c,{class:"increase-liquidity action-btn",disabled:o.positionInfo.poolInfo.is_pause,onClick:o.toIncrease},{default:h(()=>[nn,A(" "+s(o.$t("button.increase")),1)]),_:1},8,["disabled","onClick"])])]),_:1},8,["loading"])])]),e("div",sn,[v(E,{"position-info":o.positionInfo},null,8,["position-info"])]),e("div",tn,[e("div",an,[e("div",ln,[e("span",null,s(o.$t("newAdd.pendingFees")),1),e("p",null,"$"+s(o.feeOwed=="--"?"--":Number(o.feeOwed)==0?0:Number(o.feeOwed)<.01?"<0.01":o.addCommom(o.feeOwed,2)),1)]),v(c,{class:"increase-liquidity action-btn",disabled:o.isLoading||!o.wallet.connected||!(Number(o.positionInfo&&o.positionInfo.feeOwedA)||Number(o.positionInfo&&o.positionInfo.feeOwedB))||o.positionInfo.poolInfo.is_pause,onClick:l[2]||(l[2]=f=>o.isShowClaim=!0)},{default:h(()=>[A(s(o.$t("common.claim")),1)]),_:1},8,["disabled"])]),v(i,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[e("div",rn,[e("div",null,[e("img",{src:o.fromCoinUrl},null,8,dn),e("p",null,s(o.showNum(o.positionInfo.feeOwedA,o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.decimals)),1),e("span",null,s(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)]),e("div",null,[e("img",{src:o.toCoinUrl},null,8,un),e("p",null,s(o.showNum(o.positionInfo.feeOwedB,o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.decimals)),1),e("span",null,s(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])])]),_:1},8,["loading"])]),e("div",cn,[e("div",pn,s(o.$t("newAdd.poolInfo")),1),e("div",mn,[v(i,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>{var f,b,g,y,R,U;return[o.direct?(u(),k("div",fn,[e("span",null,s(o.$t("common.currentPrice")),1),A(" "+s(o.addCommom(o.decimalFormat(o.positionInfo.currentPrice,6)))+" "+s((f=o.toCoin)==null?void 0:f.symbol)+" per "+s((b=o.fromCoin)==null?void 0:b.symbol),1)])):(u(),k("div",vn,[e("span",null,s(o.$t("common.currentPrice")),1),A(" "+s(o.addCommom(o.decimalFormat(1/o.positionInfo.currentPrice,6)))+" "+s((g=o.fromCoin)==null?void 0:g.symbol)+" per "+s((y=o.toCoin)==null?void 0:y.symbol),1)])),e("div",kn,[e("div",{class:V(o.direct?"item active-item":"item"),onClick:l[3]||(l[3]=D=>o.direct=!0)},[e("img",{src:o.fromCoinUrl,alt:""},null,8,In),A(" "+s(o.positionInfo&&o.positionInfo.token_a&&((R=o.positionInfo.token_a)==null?void 0:R.symbol)),1)],2),e("div",{class:V(o.direct?"item ":"item active-item"),onClick:l[4]||(l[4]=D=>o.direct=!1)},[e("img",{src:o.toCoinUrl,alt:""},null,8,hn),A(" "+s(o.positionInfo&&o.positionInfo.token_b&&((U=o.positionInfo.token_b)==null?void 0:U.symbol)),1)],2)])]}),_:1},8,["loading"])]),v(i,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[o.apr&&o.liquidityTvl&&o.vol24?(u(),k("div",_n,[e("div",bn,[e("div",gn,[e("div",wn,s(o.$t("common.apr")),1),e("div",$n,[v(n,{placement:"bottom","arrow-point-at-center":""},{title:h(()=>[e("span",null,s(o.$t("tips.aprTipsTest")),1)]),default:h(()=>[A(" "+s(o.apr),1)]),_:1})])]),e("div",Cn,[e("div",yn,s(o.$t("common.liquidity")),1),e("div",Sn,"$"+s(o.liquidityTvl),1)]),e("div",Tn,[e("div",An,s(o.$t("common.volume24h")),1),e("div",On,"$"+s(o.vol24),1)]),e("div",Pn,[e("div",Rn,s(o.$t("newAdd.tickSpacing")),1),e("div",Un,s(o.positionInfo.tickSpacing),1)])])])):W("",!0)]),_:1},8,["loading"])]),o.isShowClaim?(u(),wo(C,{key:0,"is-loading":o.isLoading,"position-info":o.positionInfo,onOnClose:l[5]||(l[5]=f=>o.isShowClaim=!1),onToClaim:o.toClaim},null,8,["is-loading","position-info","onToClaim"])):W("",!0),Jo(e("div",Nn,[v($)],512),[[Ko,o.pools.currentPositionLoading]])])):W("",!0)}const Wn=co(We,[["render",Ln],["__scopeId","data-v-7156f934"]]);export{Wn as default};
