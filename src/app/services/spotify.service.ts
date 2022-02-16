import { IUser } from './../interfaces/IUser';
import { spotifyConfiguration } from './../../environments/environment';
import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js'
import { spotifyUserForUser } from '../common/spotifyHelper';
 
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null
  user: IUser

  constructor() {
    this.spotifyApi = new Spotify()
   }

  async userInicialize() {
    if(!!this.user)
      return true

    const token = localStorage.getItem('token')

    if(!token)
      return false

    try {

      this.setAccessToken(token)
      await this.getSpotifyUser()
      return true

    }catch(ex) {
      return false
    }

  }

  async getSpotifyUser() {
    const userInfo = await this.spotifyApi.getMe()
    this.user = spotifyUserForUser(userInfo)
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
