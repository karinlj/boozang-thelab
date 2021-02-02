export const getData = async (url) => {
  try {
    //fetch() returns promise
    const result = await fetch(url);
    //result.json(); returns promise
    const data = await result.json();
    return data;
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
    const data = await result.json();
    return data;
  } catch (err) {
    console.log("error:", err);
  }
};

export const deleteData = async (url) => {
  try {
    const result = await fetch(url, {
      method: "DELETE",
    });
    const data = await result.json();
    return data;
  } catch (err) {
    console.log("error:", err);
  }
};
