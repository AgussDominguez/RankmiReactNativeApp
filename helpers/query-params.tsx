/* TODO: Servirá para obtener la empresa segun el domain */
export const getParameterByName = (
  name: string,
  url: string /* = window.location.href */,
) => {
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const params = regex.exec(url);
  if (!params) {
    return null;
  }
  if (!params[2]) {
    return '';
  }
  return decodeURIComponent(params[2].replace(/\+/g, ' '));
};
