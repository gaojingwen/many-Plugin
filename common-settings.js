/**
 * Created by jasonzhang on 15/12/21.
 */

//长链接的地址
WEB_SOCKET_URL = "";

//微信web socket地址
WS_URL = "";

//http接口地址
WEB_HTTP_URL = "";

//图片URL
FILE_URL = "";

//静态资源
STATIC_URL = "";

//oss图片
OSS_URL = "";

//tokenID的cookie名
TOKEN_ID_TAG = 'cerium_security_session';

/**
 * 初始化地址
 * @param option
 */
function initUrl(option) {
    WEB_SOCKET_URL = option['WEB_SOCKET_URL'];
    WS_URL = option['WS_URL'];
    WEB_HTTP_URL = option['WEB_HTTP_URL'];
    LEGEND_HTTP_URL = option['LEGEND_HTTP_URL'];
    FILE_URL = option['FILE_URL'];
    STATIC_URL = option['STATIC_URL'];
    OSS_URL = option['OSS_URL'];
    initHttpUrl(LEGEND_HTTP_URL, WEB_HTTP_URL);
}

//黄金分割(比例)
GOLDEN_SECTION = 0.618;


/**
 * 初始化http请求的url
 * @param hostUrl  主域名
 */
function initHttpUrl(hostUrl, webUrl) {
    // webUrl = 'http://10.0.27.75:8090';
    // hostUrl = 'http://10.0.27.75:9010';
    REQ_STOCK_INFO = webUrl + "/promotion/diagnosis_stock.json";
    REQ_DYNAMIC_STOCK= webUrl + "/promotion/dynamic_stock.json";

}

COOKIE_EXPIRES_TIME = new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1000);

HTTP_REQUEST_TIME_OUT = 30  * 1000;