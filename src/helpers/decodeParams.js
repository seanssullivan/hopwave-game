export default function decodeParams(params) {
  return params.split("&").reduce(function (result, item) {
    const parts = item.split("=");
    result[parts[0]] = parts[1];
    return result;
  }, {});
}
