<?php

$lines = explode ("\n", file_get_contents ("process-description.gml-fixed-ids.sbgn"));

$logicnodes = array ();

$out = "";


// run through file search for logic nodes
foreach ($lines as $l)
{
	if (strpos ($l, "class=\"or\"") || strpos ($l, "class=\"and\""))
	{
		$id = preg_replace ("/^.*id=\"(glyph\d+)\".*/", '$1', $l);
		$logicnodes[] = $id;
		//echo $id . "\n";
		//$l = preg_replace ("/glyph/", "glyph" . rand (), $l);
	}
	/*if (strpos ($l, "ID \"arc"))
		$l = preg_replace ("/arc/", "arc" . rand (), $l);
	$out .= $l."\n";*/
}


// run again to change the arc types

foreach ($lines as $l)
{
	if (strpos ($l, "class=\"consumption\""))
	{
		$from = preg_replace ("/^.*source=\"(glyph\d+)\".*/", '$1', $l);
		$to = preg_replace ("/^.*target=\"(glyph\d+)\".*/", '$1', $l);
		if (in_array ($from, $logicnodes) || in_array ($to, $logicnodes))
			$l = str_replace ("consumption", "logic arc", $l);
	}
	$out .= $l."\n";
}



file_put_contents ("process-description.gml-fixed-ids.sbgn-fixed-arcs.sbgn", $out);


?>
