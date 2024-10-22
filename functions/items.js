// functions/items.js
exports.handler = async function (event, context) {
    const items = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ];
  
    if (event.httpMethod === "GET") {
      // Handle GET request
      return {
        statusCode: 200,
        body: JSON.stringify(items),
      };
    } else if (event.httpMethod === "POST") {
      // Handle POST request
      const body = JSON.parse(event.body);
      const newItem = { id: items.length + 1, name: body.name };
      items.push(newItem);
      return {
        statusCode: 201,
        body: JSON.stringify(newItem),
      };
    }
  
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  };
  
