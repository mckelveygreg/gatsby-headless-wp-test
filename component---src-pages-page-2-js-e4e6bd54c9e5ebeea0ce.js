(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{251:function(t,e,r){"use strict";r.r(e);var i=r(0),s=r.n(i),n=r(132),o=r(133),u=r.n(o),a=r(255),c=r(247),p=r(246);function l(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(['\n  {\n    page(id: "cGFnZTo3MDE=") {\n      content\n    }\n  }\n']);return l=function(){return t},t}var b=u()(l());e.default=function(){var t=Object(a.a)(b),e=t.loading,r=(t.error,t.data);return s.a.createElement(c.a,null,s.a.createElement(p.a,{title:"Page two"}),s.a.createElement("h1",null,"Hi from the second page"),s.a.createElement("p",null,"Welcome to page 2"),e?"loading":s.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.page.content}}),s.a.createElement(n.a,{to:"/"},"Go back to the homepage"))}},255:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));r(26),r(27),r(45),r(46),r(6),r(7),r(4),r(13),r(30),r(37);var i=r(131),s=r(1),n=r(0),o=r(86),u=r(49),a=r(3),c=function(){function t(t,e){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=t||{},this.context=e||{}}return t.prototype.getOptions=function(){return this.options},t.prototype.setOptions=function(t){Object(u.a)(this.options,t)||(this.previousOptions=this.options),this.options=t},t.prototype.unmount=function(){this.isMounted=!1},t.prototype.refreshClient=function(){var t=this.options&&this.options.client||this.context&&this.context.client;Object(a.b)(!!t,2);var e=!1;return t!==this.client&&(e=!0,this.client=t,this.cleanup()),{client:this.client,isNew:e}},t.prototype.verifyDocumentType=function(t,e){var r=Object(i.e)(t);Object(i.d)(e),Object(i.d)(r.type);Object(a.b)(r.type===e,3)},t}(),p=function(t){function e(e){var r=e.options,i=e.context,s=e.forceUpdate,n=t.call(this,r,i)||this;return n.previousData={},n.currentObservable={},n.runLazy=!1,n.runLazyQuery=function(t){n.cleanup(),n.runLazy=!0,n.lazyOptions=t,n.forceUpdate()},n.getExecuteResult=function(){var t=n.getQueryResult();return n.startQuerySubscription(),t},n.obsRefetch=function(t){return n.currentObservable.query.refetch(t)},n.obsFetchMore=function(t){return n.currentObservable.query.fetchMore(t)},n.obsUpdateQuery=function(t){return n.currentObservable.query.updateQuery(t)},n.obsStartPolling=function(t){n.currentObservable&&n.currentObservable.query&&n.currentObservable.query.startPolling(t)},n.obsStopPolling=function(){n.currentObservable&&n.currentObservable.query&&n.currentObservable.query.stopPolling()},n.obsSubscribeToMore=function(t){return n.currentObservable.query.subscribeToMore(t)},n.forceUpdate=s,n}return Object(s.c)(e,t),e.prototype.execute=function(){this.refreshClient();var t=this.getOptions(),e=t.skip,r=t.query,i=t.ssr;(e||r!==this.previousData.query)&&(this.removeQuerySubscription(),this.previousData.query=r),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription();var s=!1===i;return this.getExecuteSsrResult(s)||this.getExecuteResult()},e.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:o.b.ready,called:!1,data:void 0}]},e.prototype.fetchData=function(){var t=this.getOptions();if(t.skip||!1===t.ssr)return!1;var e=this.currentObservable.query;return!!e.getCurrentResult().loading&&e.result()},e.prototype.afterExecute=function(t){var e=this,r=(void 0===t?{}:t).lazy,i=void 0!==r&&r;return this.isMounted=!0,i&&!this.runLazy||(this.handleErrorOrCompleted(),setTimeout((function(){e.currentObservable.query&&e.currentObservable.query.resetQueryStoreErrors()}))),this.unmount.bind(this)},e.prototype.cleanup=function(){this.removeQuerySubscription(),delete this.currentObservable.query,delete this.previousData.result},e.prototype.getOptions=function(){var e=t.prototype.getOptions.call(this),r=this.lazyOptions||{},i=Object(s.a)({},e,{variables:Object(s.a)({},e.variables,r.variables),context:Object(s.a)({},e.context,r.context)});return this.runLazy&&delete i.skip,i},e.prototype.getExecuteSsrResult=function(t){var e;if(this.context&&this.context.renderPromises){var r={loading:!0,networkStatus:o.b.loading,called:!0,data:void 0};if(t)return r;(e=this.context.renderPromises.addQueryPromise(this,this.getExecuteResult))||(e=r)}return e},e.prototype.prepareObservableQueryOptions=function(){var t=this.getOptions();this.verifyDocumentType(t.query,i.b.Query);var e=t.displayName||"Query";return this.context&&this.context.renderPromises&&("network-only"===t.fetchPolicy||"cache-and-network"===t.fetchPolicy)&&(t.fetchPolicy="cache-first"),Object(s.a)({},t,{displayName:e,context:t.context||{},metadata:{reactComponent:{displayName:e}}})},e.prototype.initializeObservableQuery=function(){if(this.context&&this.context.renderPromises&&(this.currentObservable.query=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable.query){var t=this.prepareObservableQueryOptions();this.previousData.observableQueryOptions=Object(s.a)({},t,{children:null}),this.currentObservable.query=this.refreshClient().client.watchQuery(t),this.context&&this.context.renderPromises&&this.context.renderPromises.registerSSRObservable(this.currentObservable.query,t)}},e.prototype.updateObservableQuery=function(){if(this.currentObservable.query){var t=Object(s.a)({},this.prepareObservableQueryOptions(),{children:null});Object(u.a)(t,this.previousData.observableQueryOptions)||(this.previousData.observableQueryOptions=t,this.currentObservable.query.setOptions(t).catch((function(){})))}else this.initializeObservableQuery()},e.prototype.startQuerySubscription=function(){var t=this;if(!this.currentObservable.subscription&&!this.getOptions().skip){var e=this.currentObservable.query;this.currentObservable.subscription=e.subscribe({next:function(e){var r=e.loading,i=e.networkStatus,s=e.data,n=t.previousData.result;if(n){if(n.loading&&n.networkStatus===o.b.fetchMore&&Object(u.a)(n.data,s))return;if(n.loading===r&&n.networkStatus===i&&Object(u.a)(n.data,s))return}t.forceUpdate()},error:function(e){if(t.resubscribeToQuery(),!e.hasOwnProperty("graphQLErrors"))throw e;var r=t.previousData.result;(r&&r.loading||!Object(u.a)(e,t.previousData.error))&&(t.previousData.error=e,t.forceUpdate())}})}},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.currentObservable.query.getLastError(),e=this.currentObservable.query.getLastResult();this.currentObservable.query.resetLastResults(),this.startQuerySubscription(),Object.assign(this.currentObservable.query,{lastError:t,lastResult:e})},e.prototype.getQueryResult=function(){var t=this.observableQueryFields(),e=this.getOptions();if(e.skip)t=Object(s.a)({},t,{data:void 0,error:void 0,loading:!1,called:!0});else{var r=this.currentObservable.query.getCurrentResult(),i=r.loading,n=r.partial,u=r.networkStatus,a=r.errors,c=r.error,p=r.data;if(a&&a.length>0&&(c=new o.a({graphQLErrors:a})),t=Object(s.a)({},t,{loading:i,networkStatus:u,error:c,called:!0}),i){var l=this.previousData.result&&this.previousData.result.data;t.data=l&&p?Object(s.a)({},l,p):l||p}else if(c)Object.assign(t,{data:(this.currentObservable.query.getLastResult()||{}).data});else{var b=this.currentObservable.query.options.fetchPolicy;if(e.partialRefetch&&!p&&n&&"cache-only"!==b)return Object.assign(t,{loading:!0,networkStatus:o.b.loading}),t.refetch(),t;t.data=p}}return t.client=this.client,this.previousData.loading=this.previousData.result&&this.previousData.result.loading||!1,this.previousData.result=t,t},e.prototype.handleErrorOrCompleted=function(){var t=this.currentObservable.query;if(t){var e=t.getCurrentResult(),r=e.data,i=e.loading,s=e.error;if(!i){var n=this.getOptions(),o=n.query,a=n.variables,c=n.onCompleted,p=n.onError;if(this.previousOptions&&!this.previousData.loading&&Object(u.a)(this.previousOptions.query,o)&&Object(u.a)(this.previousOptions.variables,a))return;c&&!s?c(r):p&&s&&p(s)}}},e.prototype.removeQuerySubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e.prototype.observableQueryFields=function(){return{variables:this.currentObservable.query.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},e}(c);function l(t,e,r){void 0===r&&(r=!1);var o=Object(n.useContext)(Object(i.c)()),a=Object(n.useReducer)((function(t){return t+1}),0),c=a[0],l=a[1],b=e?Object(s.a)({},e,{query:t}):{query:t},h=Object(n.useRef)();h.current||(h.current=new p({options:b,context:o,forceUpdate:l}));var v=h.current;v.setOptions(b),v.context=o;var y,d,f,O={options:Object(s.a)({},b,{onError:void 0,onCompleted:void 0}),context:o,tick:c},g=(y=function(){return r?v.executeLazy():v.execute()},d=O,(f=Object(n.useRef)()).current&&Object(u.a)(d,f.current.key)||(f.current={key:d,value:y()}),f.current.value),m=r?g[1]:g;return Object(n.useEffect)((function(){return v.afterExecute({lazy:r})}),r?void 0:[m.loading,m.networkStatus,m.error,m.data]),Object(n.useEffect)((function(){return function(){return v.cleanup()}}),[]),g}function b(t,e){return l(t,e,!1)}!function(t){function e(e){var r=e.options,s=e.context,n=e.result,o=e.setResult,u=t.call(this,r,s)||this;return u.runMutation=function(t){void 0===t&&(t={}),u.onMutationStart();var e=u.generateNewMutationId();return u.mutate(t).then((function(t){return u.onMutationCompleted(t,e),t})).catch((function(t){if(u.onMutationError(t,e),!u.getOptions().onError)throw t}))},u.verifyDocumentType(r.mutation,i.b.Mutation),u.result=n,u.setResult=o,u.mostRecentMutationId=0,u}Object(s.c)(e,t),e.prototype.execute=function(t){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,i.b.Mutation),t.client=this.refreshClient().client,[this.runMutation,t]},e.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},e.prototype.cleanup=function(){},e.prototype.mutate=function(t){var e=this.getOptions(),r=e.mutation,i=e.variables,n=e.optimisticResponse,o=e.update,u=e.context,a=void 0===u?{}:u,c=e.awaitRefetchQueries,p=void 0!==c&&c,l=e.fetchPolicy,b=Object(s.a)({},t),h=Object.assign({},i,b.variables);return delete b.variables,this.refreshClient().client.mutate(Object(s.a)({mutation:r,optimisticResponse:n,refetchQueries:b.refetchQueries||this.getOptions().refetchQueries,awaitRefetchQueries:p,update:o,context:a,fetchPolicy:l,variables:h},b))},e.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},e.prototype.onMutationCompleted=function(t,e){var r=this.getOptions(),i=r.onCompleted,s=r.ignoreResults,n=t.data,u=t.errors,a=u&&u.length>0?new o.a({graphQLErrors:u}):void 0;this.isMostRecentMutation(e)&&!s&&this.updateResult({called:!0,loading:!1,data:n,error:a}),i&&i(n)},e.prototype.onMutationError=function(t,e){var r=this.getOptions().onError;this.isMostRecentMutation(e)&&this.updateResult({loading:!1,error:t,data:void 0,called:!0}),r&&r(t)},e.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},e.prototype.isMostRecentMutation=function(t){return this.mostRecentMutationId===t},e.prototype.updateResult=function(t){!this.isMounted||this.previousResult&&Object(u.a)(this.previousResult,t)||(this.setResult(t),this.previousResult=t)}}(c);!function(t){function e(e){var r=e.options,i=e.context,s=e.setResult,n=t.call(this,r,i)||this;return n.currentObservable={},n.setResult=s,n.initialize(r),n}Object(s.c)(e,t),e.prototype.execute=function(t){if(!0===this.getOptions().skip)return this.cleanup(),{loading:!1,error:void 0,data:void 0,variables:this.getOptions().variables};var e=t;this.refreshClient().isNew&&(e=this.getLoadingResult());var r=this.getOptions().shouldResubscribe;return"function"==typeof r&&(r=!!r(this.getOptions())),!1!==r&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!Object(u.a)(this.previousOptions.variables,this.getOptions().variables)||this.previousOptions.skip!==this.getOptions().skip)&&(this.cleanup(),e=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),Object(s.a)({},e,{variables:this.getOptions().variables})},e.prototype.afterExecute=function(){this.isMounted=!0},e.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},e.prototype.initialize=function(t){this.currentObservable.query||!0===this.getOptions().skip||(this.currentObservable.query=this.refreshClient().client.subscribe({query:t.subscription,variables:t.variables,fetchPolicy:t.fetchPolicy}))},e.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},e.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},e.prototype.updateResult=function(t){this.isMounted&&this.setResult(t)},e.prototype.updateCurrentData=function(t){var e=this.getOptions().onSubscriptionData;this.updateResult({data:t.data,loading:!1,error:void 0}),e&&e({client:this.refreshClient().client,subscriptionData:t})},e.prototype.updateError=function(t){this.updateResult({error:t,loading:!1})},e.prototype.completeSubscription=function(){var t=this.getOptions().onSubscriptionComplete;t&&t(),this.endSubscription()},e.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)}}(c);!function(){function t(){this.queryPromises=new Map,this.queryInfoTrie=new Map}t.prototype.registerSSRObservable=function(t,e){this.lookupQueryInfo(e).observable=t},t.prototype.getSSRObservable=function(t){return this.lookupQueryInfo(t).observable},t.prototype.addQueryPromise=function(t,e){return this.lookupQueryInfo(t.getOptions()).seen?e():(this.queryPromises.set(t.getOptions(),new Promise((function(e){e(t.fetchData())}))),null)},t.prototype.hasPromises=function(){return this.queryPromises.size>0},t.prototype.consumeAndAwaitPromises=function(){var t=this,e=[];return this.queryPromises.forEach((function(r,i){t.lookupQueryInfo(i).seen=!0,e.push(r)})),this.queryPromises.clear(),Promise.all(e)},t.prototype.lookupQueryInfo=function(t){var e=this.queryInfoTrie,r=t.query,i=t.variables,s=e.get(r)||new Map;e.has(r)||e.set(r,s);var n=JSON.stringify(i),o=s.get(n)||{seen:!1,observable:null};return s.has(n)||s.set(n,o),o}}()}}]);
//# sourceMappingURL=component---src-pages-page-2-js-e4e6bd54c9e5ebeea0ce.js.map