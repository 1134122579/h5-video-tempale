import api from './index'
// axios
import request from '@/utils/request'
// 提交
export function UpFromdata(data) {
    return request({
        url: api.UpFromdata,
        method: 'post',
        data: data
    })
}

// 获取验证码
export function PhoneCode(data) {
    return request({
        url: api.PhoneCode,
        method: 'post',
        data: data
    })
}