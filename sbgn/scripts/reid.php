<?php

$lines = explode ("\n", file_get_contents ("../process-description.gml"));

$out = "";
foreach ($lines as $l)
{
	if (strpos ($l, "ID \"glyph"))
		continue;//$l = preg_replace ("/glyph/", "glyph" . rand (), $l);
	if (strpos ($l, "ID \"arc"))
		continue;//$l = preg_replace ("/arc/", "arc" . rand (), $l);
	$out .= $l."\n";
}

file_put_contents ("process-description.gml-fixed-ids.gml", $out);


?>
