// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

// accounts data
const accountsDto = {
  results: [
    { id: "1", name: "account 1", accountType: "type 1" },
    { id: "2", name: "account 2", accountType: "type 2" },
    { id: "3", name: "account 3", accountType: "type 3" },
    { id: "4", name: "account 4", accountType: "type 4" },
    { id: "5", name: "account 5", accountType: "type 5" },
  ],
};

module.exports = [
  {
    id: "get-accounts", // id of the route
    url: "/api/accounts",
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        type: "json",
        options: {
          status: 200, // status to send
          body: accountsDto, // body to send
        },
      },
    ],
  },
];
