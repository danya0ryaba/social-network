import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "0411e24e-f7ad-4c92-8265-27c8903329a2"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {


    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(resp => resp.data)
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
    },

    follow(id: number) {
        return instance.post(`follow/${id}`)
    },

    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },


}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}