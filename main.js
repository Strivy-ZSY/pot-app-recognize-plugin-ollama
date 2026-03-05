async function recognize(base64, lang, options) {
    const { config, utils } = options;
    const { tauriFetch: fetch } = utils;
    let { model = "minicpm-v", requestPath, customPrompt, thinkMode = "disable" } = config;

    if (!requestPath) {
        requestPath = "http://localhost:11434";
    }

    const url = new URL(requestPath);
    if (!url.pathname.endsWith('/api/chat')) {
        url.pathname = '/api/chat';
    }
    requestPath = url.toString();

    if (!customPrompt) {
        customPrompt = "Just recognize the text in the image. Do not offer unnecessary explanations.";
    } else {
        customPrompt = customPrompt.replaceAll("$lang", lang);
    }

    const body = {
        model,
        messages: [
            { "role": "system", "content": customPrompt },
            { "role": "user", "content": "Text Recognition: [img-0]", "images": [base64] }
        ],
        stream: false,
        think: thinkMode !== "disable"
    };

    try {
        let res = await fetch(requestPath, {
            method: 'POST',
            url: requestPath,
            headers: { 'Content-Type': 'application/json' },
            body: { type: "Json", payload: body },
            timeout: 120000
        });

        if (res.ok) {
            let result = res.data;
            let content = result.message.content || "";
            let thinking = result.message.thinking || "";

            if (thinkMode === "normal") {
                if (thinking) {
                    return "[思考过程]\n" + thinking + "\n\n[识别结果]\n" + content;
                }
                return content;
            } else if (thinkMode === "hide") {
                return content;
            } else {
                if (thinking) {
                    return "[⚠️ 该模型不支持关闭思考，已自动过滤]\n\n" + content;
                }
                return content;
            }
        } else {
            throw new Error(`Http Request Error\nHttp Status: ${res.status}\n${JSON.stringify(res.data)}`);
        }
    } catch (error) {
        throw new Error(`Request failed: ${error.message}\nURL: ${requestPath}`);
    }
}
