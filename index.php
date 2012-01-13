<?php include('includes/header.inc.php'); ?>

<h1>Voila!</h1>
<p>Drag this to your bookmarks bar to enjoy a simulated quick-add experience to the Mktplc.</p>

<a href="javascript:var d=document,w=window,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),f='http://sandbox.wrkng.net/mktplc/bookmarklet/save.php',l=d.location,e=encodeURIComponent,p='?u='+e(l.href) +'&t='+e(d.title) +'&s='+e(s),u=f+p;try{if(false)throw(0);tstbklt();}catch(z){a =function(){if(!w.open(u,'t','toolbar=0,resizable=0,status=1,width=600,height=430'))l.href=u;};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();}void(0)" onclick="return alert('this is a bookmarklet for the mktplc');" id="save_to_mktplc" title="Drag this to your Bookmarks Bar to install">Save to Mktplc</a>  

<?php include('includes/footer.inc.php'); ?>

