<#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <meta charset=" utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="robots" content="noindex, nofollow">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>
            <#nested "title">
        </title>
        <link rel="shortcut icon" href="${url.resourcesPath}/img/taskmanagement.svg" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.8.7/components/icon.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.8.7/semantic.min.css">
        <#if properties.styles?has_content>
            <#list properties.styles?split(',') as style>
                <link href="${url.resourcesPath}/${style}" rel="stylesheet" />
            </#list>
        </#if>
    </head>

    <body class="template">
        <img src="${url.resourcesPath}/img/bg.webp" class="img-bg" />
        <div class="glassmorphism">
            <div id="kcContainerClass">
                <div id="kc-container-wrapper">
                    <div id="kc-content">
                        <div id="kc-content-wrapper">
                            <div id="kc-form">
                                <h2 class="ui centered teal image header">
                                    <img src="${url.resourcesPath}/img/taskmanagement.svg" class="image">
                                    <div class="content">
                                        <#nested "title">
                                    </div>
                                </h2>
                                <div id="kc-form-wrapper">
                                    <#nested "form">
                                </div>
                            </div>
                            <#if displayMessage && message?has_content>
                                <div class="ui error message">
                                    ${message.summary}
                                </div>
                            </#if>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.8.7/semantic.min.js"></script>
    </body>

    </html>
</#macro>