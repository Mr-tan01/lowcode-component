import { onMounted, shallowRef } from 'vue'

const _baseAngle = Math.PI / 360,
    R = 200
const speed = 1,
    angleX = speed * _baseAngle,
    angleY = -speed * _baseAngle,
    _focalLength = R * 1.5

function Initialization(options) {
    this.options = options
    this.container = options.container
    this.dataArr = options.data
    this.init()
}

Initialization.prototype.init = function () {
    const len = this.dataArr.length
    const newTags = []

    for (let i = 0; i < len; i++) {
        const angleA = Math.acos((2 * (i + 1) - 1) / len - 1)
        const angleB = angleA * Math.sqrt(len * Math.PI)
        const z = R * Math.cos(angleA)
        const y = R * Math.sin(angleA) * Math.sin(angleB)
        const x = R * Math.sin(angleA) * Math.cos(angleB)
        const color = '#' + Math.floor(Math.random() * 0xffffff).toString(16)
        this.dataArr[i].style.color = color
        const newtag = new Tag(this.dataArr[i], x, y, z, this.options)
        newtag.move()
        // @ts-ignore
        newTags.push(newtag)
        this.animate()
    }
    this.newTags = newTags
}

Initialization.prototype.rotateX = function () {
    const cos = Math.cos(angleX),
        sin = Math.sin(angleX)
    this.newTags.forEach(tag => {
        const y = tag.y * cos - tag.z * sin,
            z = tag.z * cos + tag.y * sin
        tag.y = y
        tag.z = z
    })
}

Initialization.prototype.rotateY = function () {
    const cos = Math.cos(angleY),
        sin = Math.sin(angleY)
    this.newTags.forEach(tag => {
        const x = tag.x * cos - tag.z * sin,
            z = tag.z * cos + tag.x * sin
        tag.x = x
        tag.z = z
    })
}
Initialization.prototype.animate = function () {
    const that = this
    setInterval(function () {
        that.rotateX()
        that.rotateY()
        that.newTags.forEach(tag => {
            tag.move()
        })
    }, 20)
}
function Tag(data, x, y, z, options) {
    this.options = options
    this.dataArr = options.data
    this.data = data
    this.x = x
    this.y = y
    this.z = z
}
Tag.prototype.move = function () {
    const scale = _focalLength / (_focalLength - this.z)
    const alpha = (this.z + R) / (2 * R)
    this.data.style.left = this.x + 'px'
    this.data.style.top = this.y + 'px'
    this.data.style.fontSize = 14 * scale + 'px'
    this.data.style.opacity = alpha + 0.5
}

export function useWordCloud() {
    const wrodTags = shallowRef()
    const wordCloudWrapper = shallowRef()

    onMounted(() => {
        const options = {
            data: wrodTags.value,
            container: wordCloudWrapper.value,
        }
        new Initialization(options)
        // wordCloudWrapper.value.addEventListener('mousemove', function (e) {
        //     const { width, height } = wordCloudWrapper.value.getBoundingClientRect();
        //     angleY = 1 * (e.clientX / width - 0.5) * speed * _baseAngle;
        //     angleX = 1 * (e.clientY / height - 0.5) * speed * _baseAngle;
        // });
    })
    return {
        wrodTags,
        wordCloudWrapper,
    }
}
