<?php

function distance($a, $b)
{
  $cont = 0;
  $arr1 = str_split($a);
  $arr2 = str_split($b);
    if (count($arr1) != count($arr2)) {
        throw new InvalidArgumentException('DNA strands must be of equal length.');
    }else {
      for ($i=0; $i < count($arr1); $i++) {
        if ($arr1[$i] != $arr2[$i]) {
          $cont++;
        }
      }
      return $cont;
    }

}
