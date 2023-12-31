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
        return profileAPI.getProfile(userId)
    },

}

export const profileAPI = {

    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status })
    },

    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    onSave(obj: any) {
        return instance.put(`profile`, obj)
    }
}


export const authAPI = {
    me() {
        return instance.get('auth/me')
    },

    login(email: string, password: string, rememberMe: boolean = false, captcha: any) {
        return instance.post('auth/login', { email, password, rememberMe, captcha })
    },

    logout() {
        return instance.delete('auth/login')
    }

}

export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url')
    }
}