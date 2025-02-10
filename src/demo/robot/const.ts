
export const code1 = `
<template>
    <n-space>
        <LcRobot value="s1"></LcRobot>
        <LcRobot value="s2"></LcRobot>
        <LcRobot value="s3"></LcRobot>
        <LcRobot value="s4"></LcRobot>
        <LcRobot src="https://b0.bdstatic.com/a6a0f12117cd6488ec39bb46d308b498.jpg@h_1280"></LcRobot>
    </n-space>
</template>
`;

export const code2 = `
<template>
    <NSpace>
        // 拖拽机器人
        <LcRobot width="auto" height="147px" value="s4" trigger="focus" showPopup draggable></LcRobot>
        // 其它用法
        <LcRobot width="auto" height="147px" value="s4" trigger="focus" showPopup></LcRobot>
        <LcRobot width="auto" height="147px" value="s4" trigger="focus" hid-dir="rt" showPopup></LcRobot>
        <LcRobot width="auto" height="147px"
            src="https://b0.bdstatic.com/2d43e63ca240bdf793814be0dbc9c3a5.jpg@h_1280" trigger="focus"
            hid-dir="rt" showPopup></LcRobot>
    </NSpace>
</template>
`;