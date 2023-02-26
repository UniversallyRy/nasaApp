export async function fetcher(resource: string) {
  let result;
  try {
    result = await fetch(resource);
  } catch (e) {
    console.log("***** Problem with fetch that results in an exception");
    console.error(e);
    throw new Error("Invalid Response");
  }
  if (result.ok) {
    try {
      return await result.json();
    } catch (e) {
      console.log("***** Problem with JSON payload", e);
      throw "Result OK but JSON borked";
    }
  } else {
    console.log("****** Result ! OK", result.status, result.statusText);
    throw result.statusText;
  }
}
