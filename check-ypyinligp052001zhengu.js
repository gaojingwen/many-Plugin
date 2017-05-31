var Domain = "";

function InitConfig(domain) {
    Domain = domain;
}

var GetCheckCode = function (item) {
    var strName = $("#tb_name" + item).val();
    if (strName === "请输入股票代码/名称") {
        strName = "";
    }
    var strPhone = $("#tb_phone" + item).val();
    if (strPhone === "请输入您的手机号") {
        strPhone = "";
    }

    if (strName === "") {
        alert("您输入的股票名称不能为空！");
        $("#tb_name" + item).focus();
        return false;
    }

    if (strPhone === "") {
        alert("您输入的手机号码不能为空！");
        $("#tb_phone" + item).focus();
        return false;
    }

    //验证手机号码格式

    if (!(/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/.test(strPhone))) {
        alert("您输入的手机号码格式不正确！");
        $("#tb_phone" + item).focus();
        return false;
    }
    var url = Domain + "/promotion/generate_image_code.jsonp";
    var postData = {
        "mobile": strPhone,
        "real_name": strName,
        "pool_id": poolId,
        "search_word": searchWord,
        "search_url": searchUrl,
        "company_type": companyType,
        "action": action,
        "media_number": mediaNumber,
        "media_name": mediaName
    };
    $.ajax({
        url: url,
        type: "GET",
        data: postData,
        dataType: 'jsonp',
        success: function (data) {
            if (data.errorCode === 1) {

                sendAgain(item);
                $("#imgCode" + item).show();
                $("#imgCode" + item).attr("src", Domain + "/image_code/" + data.imageCodeKey);
                $("#imgCode" + item).attr("key", data.imageCodeKey);
            } else if (data.errorCode === 5) {
                alert("验证码获取失败，该账号已经存在！");
            }
        }
    });

};


var errorMsg = function (item, message) {
    if (message.indexOf("验证码") > -1) {
        item.parent().next().text(message);
    } else {
        item.next().text(message);
    }

};


// 验证码时间60s
var timer;
var sendAgain = function (item) {
    var times = 60;
    timer = setInterval(function () {
        var btnCode = $("#btn_code" + item);
        if (times > 0) {
            btnCode.attr("disabled", "false");
            btnCode.val("重新获取(" + times + ")");
            times--;
        } else {
            btnCode.removeAttr("disabled");
            btnCode.val("获取验证码");
            clearInterval(timer);
        }
    }, 1000);
}


//ruku
var Register = function (item) {
    var strName = $("#tb_name" + item).val();
    if (strName === "请输入股票代码/名称") {
        strName = "";
    }

    if (strName === "") {
        alert("您输入的股票名称不能为空！");
        $("#tb_name" + item).focus();
        return false;
    }

    var strPhone = $("#tb_phone" + item).val();
    if (strPhone === "请输入您的手机号") {
        strPhone = "";
    }

    if (strPhone === "") {
        alert("您输入的手机号码不能为空！");
        $("#tb_phone" + item).focus();
        return false;
    }

    var strCode = $("#tb_code" + item).val();
    if (strCode === "请输入验证码") {
        strCode = "";
    }

    if (strCode === "") {
        alert("请输入验证码")
        $("#tb_code" + item).focus();
        return false;
    }


    //验证手机号码格式
    if (!(/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/.test(strPhone))) {
        alert("您输入的手机号码格式不正确！");
        $("#tb_phone" + item).focus();
        return false;
    }

    if (strCode === "") {
        alert("您输入的验证码不能为空！");
        $("#btn_code" + item).focus();
        return false;
    }

    var kind = getQueryStringByName("kind");
    //图形验证码key
    var key = $("#imgCode" + item).attr("key");
    //分公司类型（总部）
//    var branchCompany = "";
    console.log($(".access-log-tag").val());
    var url = Domain + "/promotion/image_code_phone_stored.jsonp";
    var postData = {
        "mobile": strPhone,
        "real_name": strName,
        "pool_id": poolId,
        "company_type": companyType,
        "search_word": searchWord,
        "image_code_key": key,
        "image_code": strCode,
        "action": action
    };
    $.ajax({
        url: url,
        type: "GET",
        data: postData,
        dataType: 'jsonp',
        success: function (data) {
            if (data.errorCode === 1) {
                alert("您的查询信息已经提交成功，请耐心等待");
                if (redirectUrl !== "") {
                    self.location.href = redirectUrl;
                }
            } else if (data.errorCode === 216) {
                alert("验证码未找到或者已失效,请重新获取验证码！");
            }
            else if (data.errorCode === 215) {
                alert("验证码已过期,请重新获取验证码！");
            }
        }
    });


};


//获取浏览器地址栏的参数
var getQueryStringByName = function (name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}


//写Cookie
var SetCookie = function (name, value) {
    var Days = 365; //此 cookie 将被保存 30 天
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/";
}

//获取Cookie
var getCookie = function (name) {
    var arr = document.cookie.split("; ");
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("=");
        if (arr2[0] == name) {
            return arr2[1];
        }
    }
    return "";
}


//删除cookie
var delCookie = function (name) {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=; expire=" + date.toGMTString() + "; path=/";
}
