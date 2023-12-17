<#import "template.ftl" as layout>
  <@layout.registrationLayout displayInfo=social.displayInfo; section>
    <#if section="title">
      ${msg("loginTitle",(realm.displayName!''))?no_esc}
      <#elseif section="form">
        <#if realm.password>
          <div class="ui grid">
            <div class="column">
              <form id="kc-form-login" class="ui form" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
                <div class="ui stacked segment">
                  <div class="field">
                    <div class="ui left icon input floating-label">
                      <i class="user icon"></i>
                      <input required id="username" class="${properties.kcInputClass!}" name="username" value="${(login.username!'')}" type="text" autofocus autocomplete="off">
                      <label for="username">
                        ${msg("username")}
                      </label>
                    </div>
                  </div>
                  <div class="field">
                    <div class="ui left icon input floating-label">
                      <i class="lock icon"></i>
                      <input required id="password" class="${properties.kcInputClass!}" name="password" type="password" autocomplete="off">
                      <label for="password">
                        ${msg("password")}
                      </label>
                    </div>
                  </div>
                  <button class="ui fluid large teal submit button" name="login" id="kc-login" type="submit">
                    ${msg("doLogIn")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </#if>
    </#if>
  </@layout.registrationLayout>