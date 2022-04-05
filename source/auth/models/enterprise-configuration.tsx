interface IEnterpriseData {
  logo: string;
  name: string;
  login_logo: string;
  login_bg_image: string;
  head_translate: any /* ILang[]; TODO: Traducciones*/;
  help_information_translate: any /* ILang[]; TODO: Traducciones*/;
  enable_intercom_on_login: boolean;
  custom_domain: string;
  allow_google_signin: boolean;
  allow_azure_active_directory_signin: boolean;
  allow_keycloak_signin: boolean;
  allow_form_user_pass: boolean;
  is_engagement_subdomain: boolean;
  hide_login_button: boolean;
  status: string;
  slug_enterprise_name: string;
  include_email_recovery: boolean;
  keycloak_keys: any /* ILang[]; TODO: añadir modelo */;
  enable_master_auth: any;
  tenant_token: any;
  azure_ad_connection: any;
}

class EnterpriseConfiguration {
  logo: string;
  name: string;
  loginLogo: string;
  bgImage: string;
  status: string;
  title: any /* ILang[]; TODO: Traducciones*/;
  enterpriseName: string;
  loginForm: boolean;
  complementaryInformation: any /* ILang[]; TODO: Traducciones*/;
  resetPassword: boolean;
  intercomOnLogin: boolean;
  allowGoogleSignin: boolean;
  allowAzureActiveDirectorySignin: boolean;
  allowFormUserPassSignin: boolean;
  allowKeycloakSignin: boolean;
  isEngagementSubdomain: boolean;
  keycloakKeys: any /* ILang[]; TODO: añadir modelo */;
  customDomain: string;
  enableMasterAuth: boolean;
  enterpriseToken: string;
  azureADConnection: {};

  constructor(data: IEnterpriseData) {
    this.logo = data.logo;
    this.name = data.name;
    this.loginLogo = data.login_logo;
    this.bgImage = data.login_bg_image;
    this.status = data.status;
    this.title = data.head_translate;
    this.enterpriseName = data.slug_enterprise_name;
    this.loginForm = data.hide_login_button;
    this.complementaryInformation = data.help_information_translate;
    this.resetPassword = data.include_email_recovery;
    this.intercomOnLogin = data.enable_intercom_on_login;
    this.isEngagementSubdomain = data.is_engagement_subdomain;
    this.keycloakKeys = data.keycloak_keys;
    this.customDomain = data.custom_domain;
    this.allowGoogleSignin = data.allow_google_signin;
    this.allowAzureActiveDirectorySignin =
      data.allow_azure_active_directory_signin;
    this.allowKeycloakSignin = data.allow_keycloak_signin;
    this.allowFormUserPassSignin = data.allow_form_user_pass;
    this.enableMasterAuth = data.enable_master_auth;
    this.enterpriseToken = data.tenant_token;
    this.azureADConnection = data.azure_ad_connection;
  }
}

export default EnterpriseConfiguration;
