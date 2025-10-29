# Pot-App Ollama 文字识别插件

支持本地Ollama Vision模型

**2025/10/29 Update** ： 推荐您使用qwen3vl模型，您可以在ollama官网下载，同时，您也可以使用ollama qwen3vl cloud模型😊
cloud模型会快很多：
<img width="1200" height="600" alt="image" src="https://github.com/user-attachments/assets/76f666a6-effd-4307-afd2-32aa0b21b08b" />


**Note** : We recommend using the latest qwen2.5vl model, as it delivers excellent results 🥰👍
![image](https://github.com/user-attachments/assets/091a2f28-e492-44a7-bdcd-b264ba5fc69a)


### 模型安装
推荐使用minicpm-v或llava-llama3模型，以minicpm-v为佳
```
ollama run llava-llama3
ollama run minicpm-v
```

### 其余配置
```
自定义Prompt(推荐)：The extracted text does not need to analyze its title and body, ignore the corresponding icon, do not guess the meaning of the text, and only output the corresponding recognized content
```
### 预览
![image](https://github.com/user-attachments/assets/7ca865ce-5dd4-468e-a527-42c37e5dcb25)
![image](https://github.com/user-attachments/assets/22733699-6523-4394-9ecd-e99f2c1f6991)

### 注意
由于本地OCR模型识别能力有限，图片识别截图时，请不要**过长或过宽**，以免发生传输问题，后续可能会修复，请谅解🥺

### 支持
如有问题或建议，欢迎在GitHub提交issue反馈
