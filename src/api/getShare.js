import api from './index'
// axios
import request from '@/utils/request'


// 分享微信获取信息接口哦
export function getShare(data) {
    return request({
        url: api.getShare,
        method: 'post',
        data: data
    })
}
