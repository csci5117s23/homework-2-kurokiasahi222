// Code largely taken from Kluver's demo code
// link: https://github.com/csci5117s23/Tech-Stack-2-Kluver-Demo/blob/main/src/modules/Data.js

const backend_base = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

// add to do to the database
export async function addToDo(authToken, content) {
    const result = await fetch(backend_base + "/todos", {
        'method': 'POST',
        'headers': {
            'Authorization': 'Bearer ' + authToken,
            'Content-Type': 'application/json' },
        'body': JSON.stringify(content)
    })
    console.log(JSON.stringify(content))
    const ret = await result.json();
    console.log(ret);
    return ret;
}

// done to do: update the database
// change the status to done
export async function doneToDo(authToken, content) {
    content.done = !content.done;
    const result = await fetch(backend_base + "/todos/" + content._id, {
        'method': 'PUT',
        'headers': { 'Authorization': 'Bearer ' + authToken }, 
        'body': JSON.stringify(content)
    })
    console.log(JSON.stringify(content))
    const ret = await result.json();
    console.log(ret);
    return ret;
}

export async function getToDo(authToken) {
    const result = await fetch(backend_base + "/todos/", {
        'method': 'GET',
        'headers': { 'Authorization': 'Bearer ' + authToken }
    })
    if (result.ok) {
        const item = await result.json(); 
        console.log(item); 
        return item; 
    } else {
        return null;
    }
}


