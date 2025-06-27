<?php
// Check if Reverb is already running
$output = shell_exec('pgrep -f "artisan reverb:start"');
if (empty(trim($output))) {
    // Reverb is not running, start it
    $command = '/usr/bin/php ' . dirname(__DIR__) . '/artisan reverb:start > /dev/null 2>&1 &';
    shell_exec($command);
    echo "Reverb started\n";
} else {
    echo "Reverb already running\n";
}
?>
