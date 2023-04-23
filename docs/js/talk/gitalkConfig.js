var gitalkConfig = {
  clientID: "3917364bae5761855450",
  clientSecret: "30f282d53d5bede2ed668de2402a32c45d6d6da1",
  repo: "AIDrawingGuide",
  owner: "luuman",
  githubID: "luuman",
  id: location["pathname"],
  perPage: 20,
  admin: ["luuman"],
  title: location.hash.match(/#(.*?)([?]|$)/)[1],
  id: location.hash.match(/#(.*?)([?]|$)/)[1],
  distractionFreeMode: false
};
// var gitalk = new Gitalk({
//   clientID: '987eb43bc737bf99d17a',
//   clientSecret: 'ee57c838823856a7b152e09431156b4c56bf8617',
//   repo: 'AIDrawingGuide',
//   owner: 'luuman',
//   githubID: 'luuman',
//   id: location['pathname'],
//   perPage: 20,
//   admin: ['luuman'],
//   title: location.hash.match(/#(.*?)([?]|$)/)[1],
//   id: location.hash.match(/#(.*?)([?]|$)/)[1],
// })
// // 监听URL中hash的变化，如果发现换了一个MD文件，那么刷新页面，解决整个网站使用一个gitalk评论issues的问题。
// window.onhashchange = function(event){
//   if(event.newURL.split('?')[0] !== event.oldURL .split('?')[0]) {
//     location.reload()
//   }
// }
