async function recognize(base64, lang, options) {
    const { config, utils } = options;
    const { tauriFetch: fetch } = utils;
    let { model = "minicpm-v", requestPath, customPrompt } = config;

    if (!requestPath) {
        requestPath = "http://localhost:11434";
    }

    // 使用 URL 对象处理路径
    const url = new URL(requestPath);
    if (!url.pathname.endsWith('/v1/chat/completions')) {
        url.pathname = '/v1/chat/completions';
    }
    requestPath = url.toString();
    if (!customPrompt) {
        customPrompt = "Just recognize the text in the image. Do not offer unnecessary explanations.";
    } else {
        customPrompt = customPrompt.replaceAll("$lang", lang);
    }

    const headers = {
        'Content-Type': 'application/json',
    };

    const body = {
        model,
        messages: [
            {
                "role": "system",
                "content": [
                    {
                        "type": "text",
                        "text": customPrompt
                    }
                ],
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": `data:image/png;base64,${base64}`,
                            "detail": "high"
                        },
                    },
                ],
            }
        ],
    };

    // 打印请求信息以便调试
    console.log("Request URL:", requestPath);
    console.log("Request Body:", JSON.stringify(body, null, 2));
    console.log("Request Headers:", headers);

    try {
        let res = await fetch(requestPath, {
            method: 'POST',
            url: requestPath,
            headers: headers,
            body: {
                type: "Json",
                payload: body
            },
            timeout: 10000 // 设置超时时间为10秒
        });

        if (res.ok) {
            let result = res.data;
            return result.choices[0].message.content;
        } else {
            throw new Error(`Http Request Error\nHttp Status: ${res.status}\n${JSON.stringify(res.data)}`);
        }
    } catch (error) {
        console.error("Request failed:", error);
        throw new Error(`Request failed: ${error.message}\nURL: ${requestPath}`);
    }
}
