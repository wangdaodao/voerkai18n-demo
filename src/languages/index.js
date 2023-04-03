/**
 * 注意：执行compile命令会生新后成本文件，所以请不要修改本文件
 */

const messageIds = require("./idMap")
const { translate,VoerkaI18nScope  } =  require("@voerkai18n/runtime")
const defaultFormatters = require("./formatters/zh.js")
const activeFormatters = defaultFormatters
const defaultMessages =  require("./zh.js")        // 默认语言包
const activeMessages = defaultMessages 
 
 
// 语言配置文件
const scopeSettings = {
    "languages": [
        {
            "name": "zh",
            "title": "中文"
        },
        {
            "name": "tw",
            "title": "繁体"
        },
        {
            "name": "en",
            "title": "英语"
        }
    ],
    "defaultLanguage": "zh",
    "activeLanguage": "zh",
    "namespaces": {}
}
const formatters = {
    'zh' :  defaultFormatters,
    'tw' : ()=>import("./formatters/tw.js"),
	'en' : ()=>import("./formatters/en.js")
}
// 语言包加载器
const loaders = { 
    "tw" : ()=>import("./tw.js"),
    "en" : ()=>import("./en.js") 
}

// 语言作用域
const scope = new VoerkaI18nScope({
    ...scopeSettings,                               // languages,defaultLanguage,activeLanguage,namespaces,formatters
    id          : "hello",                    // 当前作用域的id，自动取当前工程的package.json的name
    debug       : false,                            // 是否在控制台输出高度信息
    default     : defaultMessages,                  // 默认语言包
    messages    : activeMessages,                   // 当前语言包
    idMap       : messageIds,                       // 消息id映射列表    
    formatters,                                     // 扩展自定义格式化器    
    loaders                                         // 语言包加载器
}) 
// 翻译函数
const scopedTtranslate = translate.bind(scope) 

module.exports.t = scopedTtranslate
module.exports.i18nScope = scope 

