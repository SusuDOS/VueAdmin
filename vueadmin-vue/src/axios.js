import axios from "axios";
import router from "./router";
import Element from "element-ui"

axios.defaults.baseURL = "http://localhost:8081"
// axios.defaults.baseURL = "http://localhost:8085"

const request = axios.create({
	timeout: 5000,
	headers: {
		'Content-Type': "application/json; charset=utf-8"
	}
})

// 拦截器拦截，给header带上jwt数据
request.interceptors.request.use(config => {
	config.headers['Authorization'] = localStorage.getItem("token")
	return config
})

// 异常处理机制
request.interceptors.response.use(
	response => {
		console.log("response ->" + response)

		let res = response.data

		if (res.code === 200) {
			return response
		} else {
            // 没获取到异常打，但是状态码也不是200，未识别异常重写为‘系统异常’并且弹窗显示
			Element.Message.error(!res.msg ? '系统异常' : res.msg)
			return Promise.reject(response.data.msg)
		}
	},
    // 未正常响应
	error => {
		console.log(error)
		if (error.response.data) {
			error.massage = error.response.data.msg
		}

		if (error.response.status === 401) {
			router.push("/login")
		}

        // 将弹窗显示3秒钟

		Element.Message.error(error.massage, {duration: 3000})
		return Promise.reject(error)
	}
)

export default request