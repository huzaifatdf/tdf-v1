<?php
// Check if Reverb is already running to prevent multiple instances
$check_command = "pgrep -f 'artisan reverb:start'";
exec($check_command, $check_output, $check_return);

if (empty($check_output)) {
    // Reverb is not running, start it
    $command = 'cd ' . __DIR__ . ' && nohup php artisan reverb:start ' .
               '--host=0.0.0.0 ' .
               '--port=8080 ' .
               '--hostname=thedesignsfirm.tdfclient.com ' .
               '--no-interaction ' .
               '> storage/logs/reverb.log 2>&1 & echo $!';

    $output = [];
    $return_var = 0;
    exec($command, $output, $return_var);

    if ($return_var !== 0) {
        echo "Error starting reverb: " . implode("\n", $output);
        exit(1);
    } else {
        $pid = trim(implode('', $output));
        echo "Reverb started successfully. PID: " . $pid;

        // Save PID for future reference
        file_put_contents(__DIR__ . '/storage/app/reverb.pid', $pid);
    }
} else {
    echo "Reverb is already running. PID(s): " . implode(', ', $check_output);
}
?>
