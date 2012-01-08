<?php 
$url = $_REQUEST['u'];
$title = $_REQUEST['t'];
$selection = $_REQUEST['s'];
$action = 'process.php';
?>
<!doctype html>  
<html lang="en">  
<head>  
  <meta charset="utf-8">  
  <title>Add to the Mktplc</title>  
  <link type="text/css" rel="stylesheet" media="all" href="civcoms.css" />  
  <!--[if lt IE 9]>  
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>  
  <![endif]-->  
</head>  
<body>  
  <form action="<?php echo $action; ?>" id="form" method="post">
  <h1>Awesome! Add this to the Mktplc</h1>
    <label>What is it?:</label>
    <select name="node_type">
      <option value="">-- choose --</option>
      <option value="application">Application</option>
      <option value="organization">Organization</option>
      <!--<option value="interaction">Connection</option>-->
    </select>
    <label>Title:</label>
    <input type="text" name="title" id="title" value="<?php echo $title ?>" />
    <label>Url:</label>
    <input type="text" name="url" id="url" value="<?php echo $url ?>" />
    <label>Description:</label>
    <textarea name="description" id="description"><?php echo $selection; ?></textarea>
    <input type="submit" id="submit" rows="8" value="Go" />
  </form>
</body>  
</html>  
