import { spotifyConfiguration } from './../../environments/environment';
import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js'
 
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null

  constructor() {
    this.spotifyApi = new Spotify()
   }

  getUrlLogin(): string {
    const authEndPoint = `${spotifyConfiguration.authEndPoint}?`
    const clientId = `client_id=${spotifyConfiguration.clientId}&`
    const redirectUrl = `redirect_uri=${spotifyConfiguration.redirectUrl}&`
    const scopes = `scope=${spotifyConfiguration.scopes.join('%20')}&`
    const responseType = `response_type=token&show_dialog=true`
    return authEndPoint + clientId + redirectUrl + scopes + responseType
  }

  getUrlTokenCallback(): string {
    const params = window.location.hash.substring(1).split('&')
    return !window.location.hash ? '' : params[0].split('=')[1]
  }

  setAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token)
    localStorage.setItem('token', token)
  }

}
