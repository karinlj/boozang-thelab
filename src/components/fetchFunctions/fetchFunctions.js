//connector?
export const getData = async (url) => {
  try {
    //fetch() returns promise
    const result = await fetch(url);
    //result men status ej ok
    if (!result.ok) {
      // console.log("result:", result);
      throw Error("Fetch data error: " + result.statusText);
    }
    //result.json(); returns promise
    const data = await result.json();
    return data;
    //inget result ex hittar ej url
  } catch (err) {
    console.log("error:", err);
  }
};

export const addData = async (url, item) => {
  try {
    const result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //what I post as json-format
      body: JSON.stringify(item),
    });
    if (!result.ok) {
      throw Error("Fetch data error: " + result.statusText);
    }
    const data = await result.json();
    return data;
  } catch (err) {
    console.log("error:", err);
  }
};

export const updateData = async (url, updItem) => {
  try {
    const result = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      //what I post as json-format
      body: JSON.stringify(updItem),
    });
    if (!result.ok) {
      throw Error("Fetch data error: " + result.statusText);
    }
    const data = await result.json();
    return data;
  } catch (err) {
    console.log("error:", err);
  }
};

export const deleteData = async (url, id) => {
  url = url.endsWith("/") ? url : url + "/";
  try {
    const result = await fetch(url + id, {
      method: "DELETE",
    });
    if (!result.ok) {
      throw Error("Fetch data error: " + result.statusText);
    }
    const data = await result.json();
    return data;
  } catch (err) {
    console.log("error:", err);
  }
};
