
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST ?? window.location.hostname,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
    wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
    forceTLS: false,
    enabledTransports: ['ws'],
});

window.Echo.connector.pusher.connection.bind('connected', () => {
    console.log('WebSocket connected successfully!');
});

window.Echo.connector.pusher.connection.bind('error', (err) => {
    console.error('WebSocket connection error:', err);
});
