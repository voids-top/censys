import{W as s,A as E}from"./proto-CpX1Bo0l.js";import{_ as c,c as O,s as l,h as T,i as A,j as m,k as p,N as u,m as S,n as d}from"./schema-CoOT6vh1.js";import{r as L,j as i,u as N}from"./framework-CWzQuqga.js";import{E as C,b as h,U as W}from"./AppErrorBoundary-8hqSHKdh.js";import"./userHasRole-CuNA7BQV.js";import{A as r,i as f}from"./route-DNuZxCmU.js";import"./TabHeader-BYC1j6KC.js";import"./useWebRawDataLayoutContext-C75hakDp.js";import{a as M}from"./remix-run-ygAyTVNf.js";const w="new-webhook-form",j="test-webhook-form",q="edit-webhook-form",G="/settings/webhooks",z="?sort=CreatedAt&direction=DESC";var I=(e=>(e.CONFIGURATION="configuration",e.TEMPLATE="template",e.HEADERS="headers",e))(I||{}),R=(e=>(e.CUSTOM="CUSTOM",e.SLACK="SLACK",e.TEAMS="TEAMS",e))(R||{});const Z=[{label:"Custom",value:"CUSTOM"},{label:"Slack",value:"SLACK"},{label:"Microsoft Teams",value:"TEAMS"}],y={SLACK:`{
  "event_type": "{{.EventType}}",
  "timestamp": "{{.Timestamp}}",
  "collection_id": "{{.CollectionId}}",
  "collection_name": "{{.CollectionName}}",
  "org_id": "{{.OrganizationId}}",
  "query": "{{.CollectionQuery}}",
  "asset_id": "{{.AssetId}}",
  "asset_type": "{{.AssetType}}",
  "url": "https://platform.censys.io/collections/{{.CollectionId}}?org={{.OrganizationId}}",
  "evidence": "{{.AssetType}} {{.AssetId}} was {{.EventVerb}} to the collection on {{.Timestamp}} because it matched the collection query."
}`,TEAMS:`{
  "@type": "MessageCard",
  "@context": "http://schema.org/extensions",
  "summary": "New Notification",
  "themeColor": "0076D7",
  "title": "Asset {{.EventVerb}} Collection",
  "text": "{{.AssetType}} {{.AssetId}} was {{.EventVerb}} collection {{.CollectionId}} on {{.Timestamp}} based on the collection query.",
  "sections": [
    {
      "activityTitle": "",
      "facts": [
        {
          "name": "Collection Id",
          "value": "{{.CollectionId}}"
        },
        {
          "name": "Collection Name",
          "value": "{{.CollectionName}}"
        }
      ],
      "markdown": true
    }
  ],
  "potentialAction": [
    {
      "@type": "OpenUri",
      "name": "Learn More",
      "targets": [
        {
          "os": "default",
          "uri": "https://platform.censys.io/collections/{{.CollectionId}}?org={{.OrganizationId}}"
        }
      ]
    }
  ]
}`},{WEBHOOK_EVENT_TYPE_UNRECOGNIZED:Q,UNRECOGNIZED_ENUM_KEY:X,...K}=s,t={WEBHOOK_NAME:"webhookName",URL:"url",PAYLOAD_TEMPLATE:"payloadTemplate",ASSET_TYPE:"assetType",...K},$={WEBHOOK_FORM:{NAMES:t,SCHEMAS:{[t.WEBHOOK_NAME]:l({error:e=>e.input===void 0?"A Webhook name is required.":void 0}).min(1,{error:"A Webhook name is required."}).max(100,{error:"Webhook name must be less than 100 characters."}),[t.URL]:T({error:"Must be a valid URL."}).min(1,{error:"A URL is required."}),[s.WEBHOOK_EVENT_TYPE_COLLECTION_ADD_ASSET]:c(["on","off"]),[s.WEBHOOK_EVENT_TYPE_COLLECTION_REMOVE_ASSET]:c(["on","off"]),[t.PAYLOAD_TEMPLATE]:O(l()),[t.ASSET_TYPE]:c([E.HOST,E.CERT,E.WEB])},INITIAL_VALUES:{[t.WEBHOOK_NAME]:"",[t.URL]:"",[s.WEBHOOK_EVENT_TYPE_COLLECTION_ADD_ASSET]:"on",[s.WEBHOOK_EVENT_TYPE_COLLECTION_REMOVE_ASSET]:"on",[t.PAYLOAD_TEMPLATE]:y.SLACK,[t.ASSET_TYPE]:E.CERT}}};function g({errorCode:e}){const o=L.useMemo(()=>b(e),[e]);return i.jsx(C,{"data-testid":`error_code_${String(e)}`,iconName:o.iconName,iconMode:o.iconMode,title:o.title,children:o.message})}function b(e){switch(e){case r.WEBHOOKS_FAILURE_TO_LIST:return{iconName:"alert",title:"Error loading Webhooks, please try again"};case r.WEBHOOKS_FAILURE_TO_GET:return{iconName:"alert",title:"Webhook not found"};case r.WEBHOOKS_FAILURE_TO_CREATE:return{iconName:"alert",title:"Error creating Webhook, please try again"};case r.WEBHOOKS_FAILURE_TO_UPDATE:return{iconName:"alert",title:"Error updating Webhook, please try again"};case r.WEBHOOKS_FAILURE_TO_DELETE:return{iconName:"alert",title:"Error deleting Webhook, please try again"};case r.WEBHOOKS_FAILURE_TO_LIST:return{iconName:"alert",title:"Error loading Webhooks, please try again"};default:return h(e)}}const B="_errorWrapper_1xa3m_2",H={errorWrapper:B};function J(){const e=N();return i.jsx("div",{className:H.errorWrapper,children:M(e)&&f(e.data)?i.jsx(g,{errorCode:e.data.code}):i.jsx(W,{error:e})})}const _=A([l(),m(File)]).nullable();p().refine(e=>e instanceof FormData,{message:"Value must be instanceof FormData"}).transform(e=>{if(!(e instanceof FormData))return u;const o=[];for(const a of e.keys()){const n=e.getAll(a);n.length&&(n.length===1?o.push([a,n[0]]):o.push([a,n]))}return S(d([l(),_.or(_.array())])).transform(a=>Object.fromEntries(a)).parse(o)});export{q as E,$ as F,w as N,R as P,j as T,I as W,J as a,Z as b,t as c,y as d,G as e,z as f};
