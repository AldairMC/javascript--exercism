<?php

function distance($a, $b)
{
  $cont = 0;
    if (strlen($a) != strlen($b)):
      throw new InvalidArgumentException('DNA strands must be of equal length.');
    endif;
    for ($i=0; $i < strlen($a); $i++):
        if ($a[$i] != $b[$i]):
          $cont++;
        endif;
    endfor;
    return $cont;
}
