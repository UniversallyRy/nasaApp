export const fetcher = async (...args: any[]) => {

  const options = { method: 'GET'};
  const res = await fetch(args[0], options)
  const res_json = await res.json();

  if(res_json.errors) {
  	throw(JSON.stringify(res_json.errors));
  }

  return res_json;
}
