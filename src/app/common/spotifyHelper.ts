import { IUser } from './../interfaces/IUser';

export function spotifyUserForUser(user: SpotifyApi.CurrentUsersProfileResponse):IUser {
    return {
        id: user.id,
        name: user.display_name,
        imageUrl: user.images.pop().url
    }
}