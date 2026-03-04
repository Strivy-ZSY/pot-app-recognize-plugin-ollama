# Pot-App Ollama 文字识别插件

支持本地Ollama Vision模型

**2026/03/03 Update**：ollama的glm-ocr目前无法正常使用，可以先用别的模型，等待官方修复，👉[相关讨论](https://github.com/ollama/ollama/issues/14474)，或者如果您没有进一步下载最新的其他模型，也可将ollama回退至[v0.17.0](https://github.com/ollama/ollama/releases/tag/v0.17.0)，`v0.17.6`的版本更新应该会修复，👉相关[PR](https://github.com/ollama/ollama/pull/14584)

**2026/02/04 Update** ：推荐您使用昨日发布的glm-ocr模型，很不错🙂
<img width="1376" height="780" alt="image" src="https://github.com/user-attachments/assets/28b5be34-f282-4c91-8a58-3ccf3eee3729" />

~~**2025/10/29 Update** ： 推荐您使用qwen3vl模型，您可以在ollama官网下载，同时，您也可以使用ollama qwen3vl cloud模型😊~~
cloud模型会快很多：
<img width="1200" height="600" alt="image" src="https://github.com/user-attachments/assets/76f666a6-effd-4307-afd2-32aa0b21b08b" />


~~**Note** : We recommend using the latest qwen2.5vl model, as it delivers excellent results 🥰👍~~
![image](https://github.com/user-attachments/assets/091a2f28-e492-44a7-bdcd-b264ba5fc69a)


### 模型安装
~~推荐使用minicpm-v或llava-llama3模型，以minicpm-v为佳~~

(**2025/12/13**)：推荐使用ministral-3和qwen3-vl，以qwen3-vl为佳。
ministral-3虽在官方测试中优于qwen3-vl，但推理速度稍慢。
qwen3-vl分为thinking和instruct，instruct无思考，平时instruct够用，在速度和准确率上较为平衡

```
ollama run qwen3-vl:8b-instruct
```

### 其余配置
```
自定义Prompt(推荐)：The extracted text does not need to analyze its title and body, ignore the corresponding icon, do not guess the meaning of the text, and only output the corresponding recognized content
```
**可选**：如果您使用其识别数学公式🙂，可以在上述提示词后再加一句：
```
If there are mathematical formulas in the diagram, convert them into LaTeX expressions.
```
<img width="2143" height="588" alt="d1822b2673243a09cfa460c82105ecad" src="https://github.com/user-attachments/assets/100d2ca8-eef3-4a35-9921-93e8db26c6f4" />


### 预览
![image](https://github.com/user-attachments/assets/7ca865ce-5dd4-468e-a527-42c37e5dcb25)
![image](https://github.com/user-attachments/assets/22733699-6523-4394-9ecd-e99f2c1f6991)

### 注意
~~由于本地OCR模型识别能力有限，图片识别截图时，请不要**过长或过宽**，以免发生传输问题，后续可能会修复，请谅解🥺~~

qwen3vl模型已无此问题🥰
<img width="1200" height="600" alt="image" src="https://github.com/user-attachments/assets/03141dae-a495-4f71-8737-19930d3bdd8d" />


### 支持
如有问题或建议，欢迎在GitHub提交issue反馈
