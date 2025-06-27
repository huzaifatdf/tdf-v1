<?php
// Check for any Reverb processes running
$check_command = "pgrep -f 'artisan reverb:start'";
exec($check_command, $pids, $check_return);

if (!empty($pids)) {
    // Kill all found processes
    foreach ($pids as $pid) {
        exec("kill -9 " . escapeshellarg($pid));
    }

    echo "✅ All Reverb processes stopped. Killed PIDs: " . implode(', ', $pids);

    // Optionally delete saved PID file
    $pid_file = __DIR__ . '/storage/app/reverb.pid';
    if (file_exists($pid_file)) {
        unlink($pid_file);
    }
} else {
    echo "ℹ️ No Reverb process is running.";
}
?>
