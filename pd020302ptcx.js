function chkMobile(mobile) {
    if (mobile == "") return 0;
    if (mobile.length != 11) return 0;
    if (/^13\d{9}$/.test(mobile) || /^15\d{9}$/.test(mobile) || /^18\d{9}$/.test(mobile) || /^14\d{9}$/.test(mobile)) return 1;
    if (/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(mobile)) return 1;
    return 0;
}
function isChn(str) {
    var reg = /[^\u0000-\u00FF]+$/;
    if (!reg.test(str)) {
        return false;
    }
    return true;
}
var url;
function GetRequest() {
    url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
function YuRegister() {
    var _u_name;
    var _u_tel;
    var p_code;
    var Request = new Object();

    Request = GetRequest();
    var source = "";
    var medium = "";
    var term = "";
    var content = "";
    var campaign = "";
    var _key = "";
    if (url.indexOf("?") != -1) {
        source = Request['utm_source'];
        medium = Request['utm_medium'];
        term = Request['utm_term'];
        content = Request['utm_content'];
        campaign = Request['utm_campaign'];
        _key = Request['key'];
    }
    _u_name = $.trim($("#y_name").val());
    _u_tel = $.trim($("#y_mobile").val());
    p_code = $.trim($("#p_code").val());

    if (_u_name == "") {
        alert("请输入您的姓名");
        return false;
    }

    if (!isChn(_u_name)) {
        alert("请输入有效的平台或公司名称");
        return false;
    }

    if (_u_tel == "") {
        alert("请输入您的手机号码");
        return false;
    }

    if (!chkMobile(_u_tel)) {
        alert("请输入您的有效手机号码");
        return false;
    }
    if (p_code == "") {
        alert("请输入验证码");
        return false;
    }
    SaveCourseApply(_u_name, _u_tel, p_code, source, medium, term, content, campaign, _key);
}

function SaveCourseApply(_z_name, _z_mobile, p_code, source, medium, term, content, campaign, _key) {
    $.ajax({
        url: "http://api.yizi188.com/kskh3.ashx",
        dataType: 'jsonp',
        data: { name: _z_name, shouji: _z_mobile, email: "", code: p_code, type: "预约开户", utm_source: source, utm_medium: medium, utm_term: term, utm_content: content, utm_campaign: campaign, key: _key },
        jsonp: 'callback',
        async: false,
        success: function (data) {
            if (data != null) {
                if (data.success == "1") {
                    var _unum = data.unum;
                    if (_unum != "") {
                        $("#y_name").val("");
                        $("#y_mobile").val("");
                        $("#p_code").val("");
                        $("#tcBox").hide();
                        $(".btnT").val("");
                        alert("申请成功，请保持手机畅通稍后我们的客服将会联系您。");
                        $("<iframe width='0' height='0' style='display:none' src='/mobilebaidutongji.html' id='Frame1'></iframe>").prependTo('body');

                    }
                    return false;
                } else if (data.success == "2") {
                    alert("验证码错误,请刷新重试。");
                    return false;
                } else {
                    alert("验证码错误,请刷新重试。。");
                    return false;
                }
            } else {
                alert("申请失败,请拨打我们的热线电话4006-200-188咨询,谢谢.");
                return false;
            }
        },
        error: function () {
            alert("创建模拟帐号失败,请拨打我们的热线电话4006-200-188咨询,谢谢.");
            return false;
        }
    });
    //    $.ajax({
    //        url: "http://api.yizi188.com/kskh3.ashx",
    //        dataType: 'jsonp',
    //        jsonp: 'callback',
    //        async: false,
    //        data: { name: _z_name, shouji: _z_mobile, email: "", code: p_code, type: "预约开户", utm_source: source, utm_medium: medium, utm_term: term, utm_content: content, utm_campaign: campaign, key: _key },
    //        success: function (data) {
    //            if (data.Success == "1") {
    //                alert("申请成功，我们的客服人员会尽快与您联系,谢谢。");
    //                $("#y_name").val("");
    //                $("#y_mobile").val("");
    //                $("#y_code").val("");
    //                $("#tcBox").hide();
    //                $(".btnT").val("");
    //                $("<iframe width='0' height='0' style='display:none' src='/mobilebaidutongji.html' id='Frame1'></iframe>").prependTo('body');

    //            } else {
    //                alert(data.Msg + "申请失败，请刷新重试。");
    //            }
    //        }
    //    });
}
//var iii = 60;
//var clearchecksmstime;
//function sendsmsvcode() {
//    var _z_mobile = $.trim($("#y_mobile").val());
//    if (_z_mobile == "") {
//        alert("请输入您的手机号码");
//        return;
//    }
//    if (!chkMobile(_z_mobile)) {
//        alert("请输入您的有效手机号码");
//        return;
//    }

//    $(".vt").attr("disabled", "disabled");
//    $.ajax({
//        url: "http://api.yizi188.com/sendsmscode2.ashx",
//        dataType: 'jsonp',
//        data: { phone: _z_mobile },
//        jsonp: 'callback',
//        async: false,
//        success: function (data) {
//            if (data.Result) {
//                checksmstime();
//            } else {
//                alert(data.Msg);
//                $(".vt").removeAttr("disabled");
//            }

//        },
//        complete: function (jqXHR, textStatus) {
//        }

//    });
//}
//function checksmstime() {
//    $(".vt").attr("disabled", "disabled");
//    iii = iii - 1;
//    $(".vt").val("获 取(" + iii + ")");
//    $(".vt").css("color", "gray");
//    if (iii <= 0) {
//        iii = 60;
//        $(".vt").removeAttr("disabled");
//        $(".vt").css("color", "black");
//        $(".vt").val("获取");
//        clearTimeout(clearchecksmstime);

//    } else {
//        clearchecksmstime = setTimeout("checksmstime()", 1000);
//    }
//}

