(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{252:function(t,e,r){"use strict";r.r(e);var i=r(0),s=r.n(i),n=r(132),o=r(133),u=r.n(o),a=(r(26),r(27),r(45),r(47),r(6),r(7),r(4),r(13),r(30),r(37),r(131)),c=r(1),p=r(100),l=r(49),b=r(3),h=function(){function t(t,e){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=t||{},this.context=e||{}}return t.prototype.getOptions=function(){return this.options},t.prototype.setOptions=function(t){Object(l.a)(this.options,t)||(this.previousOptions=this.options),this.options=t},t.prototype.unmount=function(){this.isMounted=!1},t.prototype.refreshClient=function(){var t=this.options&&this.options.client||this.context&&this.context.client;Object(b.b)(!!t,2);var e=!1;return t!==this.client&&(e=!0,this.client=t,this.cleanup()),{client:this.client,isNew:e}},t.prototype.verifyDocumentType=function(t,e){var r=Object(a.e)(t);Object(a.d)(e),Object(a.d)(r.type);Object(b.b)(r.type===e,3)},t}(),v=function(t){function e(e){var r=e.options,i=e.context,s=e.forceUpdate,n=t.call(this,r,i)||this;return n.previousData={},n.currentObservable={},n.runLazy=!1,n.runLazyQuery=function(t){n.cleanup(),n.runLazy=!0,n.lazyOptions=t,n.forceUpdate()},n.getExecuteResult=function(){var t=n.getQueryResult();return n.startQuerySubscription(),t},n.obsRefetch=function(t){return n.currentObservable.query.refetch(t)},n.obsFetchMore=function(t){return n.currentObservable.query.fetchMore(t)},n.obsUpdateQuery=function(t){return n.currentObservable.query.updateQuery(t)},n.obsStartPolling=function(t){n.currentObservable&&n.currentObservable.query&&n.currentObservable.query.startPolling(t)},n.obsStopPolling=function(){n.currentObservable&&n.currentObservable.query&&n.currentObservable.query.stopPolling()},n.obsSubscribeToMore=function(t){return n.currentObservable.query.subscribeToMore(t)},n.forceUpdate=s,n}return Object(c.c)(e,t),e.prototype.execute=function(){this.refreshClient();var t=this.getOptions(),e=t.skip,r=t.query,i=t.ssr;(e||r!==this.previousData.query)&&(this.removeQuerySubscription(),this.previousData.query=r),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription();var s=!1===i;return this.getExecuteSsrResult(s)||this.getExecuteResult()},e.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:p.b.ready,called:!1,data:void 0}]},e.prototype.fetchData=function(){var t=this.getOptions();if(t.skip||!1===t.ssr)return!1;var e=this.currentObservable.query;return!!e.getCurrentResult().loading&&e.result()},e.prototype.afterExecute=function(t){var e=this,r=(void 0===t?{}:t).lazy,i=void 0!==r&&r;return this.isMounted=!0,i&&!this.runLazy||(this.handleErrorOrCompleted(),setTimeout((function(){e.currentObservable.query&&e.currentObservable.query.resetQueryStoreErrors()}))),this.unmount.bind(this)},e.prototype.cleanup=function(){this.removeQuerySubscription(),delete this.currentObservable.query,delete this.previousData.result},e.prototype.getOptions=function(){var e=t.prototype.getOptions.call(this),r=this.lazyOptions||{},i=Object(c.a)({},e,{variables:Object(c.a)({},e.variables,r.variables),context:Object(c.a)({},e.context,r.context)});return this.runLazy&&delete i.skip,i},e.prototype.getExecuteSsrResult=function(t){var e;if(this.context&&this.context.renderPromises){var r={loading:!0,networkStatus:p.b.loading,called:!0,data:void 0};if(t)return r;(e=this.context.renderPromises.addQueryPromise(this,this.getExecuteResult))||(e=r)}return e},e.prototype.prepareObservableQueryOptions=function(){var t=this.getOptions();this.verifyDocumentType(t.query,a.b.Query);var e=t.displayName||"Query";return this.context&&this.context.renderPromises&&("network-only"===t.fetchPolicy||"cache-and-network"===t.fetchPolicy)&&(t.fetchPolicy="cache-first"),Object(c.a)({},t,{displayName:e,context:t.context||{},metadata:{reactComponent:{displayName:e}}})},e.prototype.initializeObservableQuery=function(){if(this.context&&this.context.renderPromises&&(this.currentObservable.query=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable.query){var t=this.prepareObservableQueryOptions();this.previousData.observableQueryOptions=Object(c.a)({},t,{children:null}),this.currentObservable.query=this.refreshClient().client.watchQuery(t),this.context&&this.context.renderPromises&&this.context.renderPromises.registerSSRObservable(this.currentObservable.query,t)}},e.prototype.updateObservableQuery=function(){if(this.currentObservable.query){var t=Object(c.a)({},this.prepareObservableQueryOptions(),{children:null});Object(l.a)(t,this.previousData.observableQueryOptions)||(this.previousData.observableQueryOptions=t,this.currentObservable.query.setOptions(t).catch((function(){})))}else this.initializeObservableQuery()},e.prototype.startQuerySubscription=function(){var t=this;if(!this.currentObservable.subscription&&!this.getOptions().skip){var e=this.currentObservable.query;this.currentObservable.subscription=e.subscribe({next:function(e){var r=e.loading,i=e.networkStatus,s=e.data,n=t.previousData.result;if(n){if(n.loading&&n.networkStatus===p.b.fetchMore&&Object(l.a)(n.data,s))return;if(n.loading===r&&n.networkStatus===i&&Object(l.a)(n.data,s))return}t.forceUpdate()},error:function(e){if(t.resubscribeToQuery(),!e.hasOwnProperty("graphQLErrors"))throw e;var r=t.previousData.result;(r&&r.loading||!Object(l.a)(e,t.previousData.error))&&(t.previousData.error=e,t.forceUpdate())}})}},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.currentObservable.query.getLastError(),e=this.currentObservable.query.getLastResult();this.currentObservable.query.resetLastResults(),this.startQuerySubscription(),Object.assign(this.currentObservable.query,{lastError:t,lastResult:e})},e.prototype.getQueryResult=function(){var t=this.observableQueryFields(),e=this.getOptions();if(e.skip)t=Object(c.a)({},t,{data:void 0,error:void 0,loading:!1,called:!0});else{var r=this.currentObservable.query.getCurrentResult(),i=r.loading,s=r.partial,n=r.networkStatus,o=r.errors,u=r.error,a=r.data;if(o&&o.length>0&&(u=new p.a({graphQLErrors:o})),t=Object(c.a)({},t,{loading:i,networkStatus:n,error:u,called:!0}),i){var l=this.previousData.result&&this.previousData.result.data;t.data=l&&a?Object(c.a)({},l,a):l||a}else if(u)Object.assign(t,{data:(this.currentObservable.query.getLastResult()||{}).data});else{var b=this.currentObservable.query.options.fetchPolicy;if(e.partialRefetch&&!a&&s&&"cache-only"!==b)return Object.assign(t,{loading:!0,networkStatus:p.b.loading}),t.refetch(),t;t.data=a}}return t.client=this.client,this.previousData.loading=this.previousData.result&&this.previousData.result.loading||!1,this.previousData.result=t,t},e.prototype.handleErrorOrCompleted=function(){var t=this.currentObservable.query;if(t){var e=t.getCurrentResult(),r=e.data,i=e.loading,s=e.error;if(!i){var n=this.getOptions(),o=n.query,u=n.variables,a=n.onCompleted,c=n.onError;if(this.previousOptions&&!this.previousData.loading&&Object(l.a)(this.previousOptions.query,o)&&Object(l.a)(this.previousOptions.variables,u))return;a&&!s?a(r):c&&s&&c(s)}}},e.prototype.removeQuerySubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e.prototype.observableQueryFields=function(){return{variables:this.currentObservable.query.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},e}(h);function y(t,e,r){void 0===r&&(r=!1);var s=Object(i.useContext)(Object(a.c)()),n=Object(i.useReducer)((function(t){return t+1}),0),o=n[0],u=n[1],p=e?Object(c.a)({},e,{query:t}):{query:t},b=Object(i.useRef)();b.current||(b.current=new v({options:p,context:s,forceUpdate:u}));var h=b.current;h.setOptions(p),h.context=s;var y,d,f,O={options:Object(c.a)({},p,{onError:void 0,onCompleted:void 0}),context:s,tick:o},g=(y=function(){return r?h.executeLazy():h.execute()},d=O,(f=Object(i.useRef)()).current&&Object(l.a)(d,f.current.key)||(f.current={key:d,value:y()}),f.current.value),m=r?g[1]:g;return Object(i.useEffect)((function(){return h.afterExecute({lazy:r})}),r?void 0:[m.loading,m.networkStatus,m.error,m.data]),Object(i.useEffect)((function(){return function(){return h.cleanup()}}),[]),g}!function(t){function e(e){var r=e.options,i=e.context,s=e.result,n=e.setResult,o=t.call(this,r,i)||this;return o.runMutation=function(t){void 0===t&&(t={}),o.onMutationStart();var e=o.generateNewMutationId();return o.mutate(t).then((function(t){return o.onMutationCompleted(t,e),t})).catch((function(t){if(o.onMutationError(t,e),!o.getOptions().onError)throw t}))},o.verifyDocumentType(r.mutation,a.b.Mutation),o.result=s,o.setResult=n,o.mostRecentMutationId=0,o}Object(c.c)(e,t),e.prototype.execute=function(t){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,a.b.Mutation),t.client=this.refreshClient().client,[this.runMutation,t]},e.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},e.prototype.cleanup=function(){},e.prototype.mutate=function(t){var e=this.getOptions(),r=e.mutation,i=e.variables,s=e.optimisticResponse,n=e.update,o=e.context,u=void 0===o?{}:o,a=e.awaitRefetchQueries,p=void 0!==a&&a,l=e.fetchPolicy,b=Object(c.a)({},t),h=Object.assign({},i,b.variables);return delete b.variables,this.refreshClient().client.mutate(Object(c.a)({mutation:r,optimisticResponse:s,refetchQueries:b.refetchQueries||this.getOptions().refetchQueries,awaitRefetchQueries:p,update:n,context:u,fetchPolicy:l,variables:h},b))},e.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},e.prototype.onMutationCompleted=function(t,e){var r=this.getOptions(),i=r.onCompleted,s=r.ignoreResults,n=t.data,o=t.errors,u=o&&o.length>0?new p.a({graphQLErrors:o}):void 0;this.isMostRecentMutation(e)&&!s&&this.updateResult({called:!0,loading:!1,data:n,error:u}),i&&i(n)},e.prototype.onMutationError=function(t,e){var r=this.getOptions().onError;this.isMostRecentMutation(e)&&this.updateResult({loading:!1,error:t,data:void 0,called:!0}),r&&r(t)},e.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},e.prototype.isMostRecentMutation=function(t){return this.mostRecentMutationId===t},e.prototype.updateResult=function(t){!this.isMounted||this.previousResult&&Object(l.a)(this.previousResult,t)||(this.setResult(t),this.previousResult=t)}}(h);!function(t){function e(e){var r=e.options,i=e.context,s=e.setResult,n=t.call(this,r,i)||this;return n.currentObservable={},n.setResult=s,n.initialize(r),n}Object(c.c)(e,t),e.prototype.execute=function(t){if(!0===this.getOptions().skip)return this.cleanup(),{loading:!1,error:void 0,data:void 0,variables:this.getOptions().variables};var e=t;this.refreshClient().isNew&&(e=this.getLoadingResult());var r=this.getOptions().shouldResubscribe;return"function"==typeof r&&(r=!!r(this.getOptions())),!1!==r&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!Object(l.a)(this.previousOptions.variables,this.getOptions().variables)||this.previousOptions.skip!==this.getOptions().skip)&&(this.cleanup(),e=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),Object(c.a)({},e,{variables:this.getOptions().variables})},e.prototype.afterExecute=function(){this.isMounted=!0},e.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},e.prototype.initialize=function(t){this.currentObservable.query||!0===this.getOptions().skip||(this.currentObservable.query=this.refreshClient().client.subscribe({query:t.subscription,variables:t.variables,fetchPolicy:t.fetchPolicy}))},e.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},e.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},e.prototype.updateResult=function(t){this.isMounted&&this.setResult(t)},e.prototype.updateCurrentData=function(t){var e=this.getOptions().onSubscriptionData;this.updateResult({data:t.data,loading:!1,error:void 0}),e&&e({client:this.refreshClient().client,subscriptionData:t})},e.prototype.updateError=function(t){this.updateResult({error:t,loading:!1})},e.prototype.completeSubscription=function(){var t=this.getOptions().onSubscriptionComplete;t&&t(),this.endSubscription()},e.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)}}(h);!function(){function t(){this.queryPromises=new Map,this.queryInfoTrie=new Map}t.prototype.registerSSRObservable=function(t,e){this.lookupQueryInfo(e).observable=t},t.prototype.getSSRObservable=function(t){return this.lookupQueryInfo(t).observable},t.prototype.addQueryPromise=function(t,e){return this.lookupQueryInfo(t.getOptions()).seen?e():(this.queryPromises.set(t.getOptions(),new Promise((function(e){e(t.fetchData())}))),null)},t.prototype.hasPromises=function(){return this.queryPromises.size>0},t.prototype.consumeAndAwaitPromises=function(){var t=this,e=[];return this.queryPromises.forEach((function(r,i){t.lookupQueryInfo(i).seen=!0,e.push(r)})),this.queryPromises.clear(),Promise.all(e)},t.prototype.lookupQueryInfo=function(t){var e=this.queryInfoTrie,r=t.query,i=t.variables,s=e.get(r)||new Map;e.has(r)||e.set(r,s);var n=JSON.stringify(i),o=s.get(n)||{seen:!1,observable:null};return s.has(n)||s.set(n,o),o}}();var d=r(247),f=r(246);function O(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(['\n  {\n    page(id: "cGFnZTo3MDE=") {\n      content\n    }\n  }\n']);return O=function(){return t},t}var g=u()(O());e.default=function(){var t,e=y(g,t,!1),r=e.loading,i=(e.error,e.data);return s.a.createElement(d.a,null,s.a.createElement(f.a,{title:"Page two"}),s.a.createElement("h1",null,"Hi from the second page"),s.a.createElement("p",null,"Welcome to page 2"),r?"loading":s.a.createElement("div",{dangerouslySetInnerHTML:{__html:i.page.content}}),s.a.createElement(n.a,{to:"/"},"Go back to the homepage"))}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-da60fd3a9aa2f5a79c4d.js.map