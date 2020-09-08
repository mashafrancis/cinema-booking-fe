import * as io from 'socket.io-client';
import createFeathersClient from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';

const socket = io('http://localhost:3030', {
  transports: ['websocket'],
  forceNew: true
});
const client = createFeathersClient();

client.configure(socketio(socket))

client.configure(
  auth({
    storage: window.localStorage,
    storageKey: 'jwt-token',
    path: '/authentication'
  }))

export default client;
