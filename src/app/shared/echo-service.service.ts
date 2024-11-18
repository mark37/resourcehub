import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

declare global {
  interface Window {
    Pusher: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class EchoServiceService {
  private echo: Echo<any>;
  // private pusher: Pusher;
  constructor() {
    window.Pusher = Pusher;

    this.echo = new Echo({
      broadcaster: 'pusher',              // Use 'pusher' for Reverb (Soketi)
      key: 'hmc2qkx0ppvkn0nrzqfb',       // Your Reverb/Soketi app key
      cluster: 'mt1',                    // Cluster for Pusher; Reverb typically uses 'mt1'
      forceTLS: true,                    // Enable TLS if you’re using HTTPS
      wsHost: 'api.resourcehub.cloud',   // Your Reverb/Soketi server host
      wsPort: 6001,                      // WebSocket port for Soketi (default is 6001)
      wssPort: 6001,                     // Secure WebSocket port for Soketi
      disableStats: true,                // Disable stats to reduce traffic
      enabledTransports: ['ws', 'wss'],  // Use WebSocket and secure WebSocket transports
      client: Pusher                     // Attach the Pusher client
    });
  }

  listenToNotifications() {
    this.echo.channel('notifications')
      .listen('NotificationEvent', (data: any) => {
        console.log('Notification received:', data);
      });
  }
}
