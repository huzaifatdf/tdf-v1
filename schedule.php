<?php
$command = 'php artisan reverb:start > storage/logs/reverb.log 2>&1 &';
$output = [];
$return_var = 0;
exec($command, $output, $return_var);
if ($return_var !== 0) {
    echo "Error starting reverb: " . implode("\n", $output);
} else {
    echo "Reverb started successfully.";
}
