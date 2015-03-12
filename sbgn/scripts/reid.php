<?php

$lines = explode ("\n", file_get_contents ("tmp4.gml"));

$out = "";
foreach ($lines as $l)
{
	if (strpos ($l, "ID \"glyph"))
		$l = preg_replace ("/glyph/", "glyph" . rand (), $l);
	if (strpos ($l, "ID \"arc"))
		$l = preg_replace ("/arc/", "arc" . rand (), $l);
	$out .= $l."\n";
}

file_put_contents ("tmp5.gml", $out);


?>
