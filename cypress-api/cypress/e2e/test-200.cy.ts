// Assuming you have Cypress installed and configured

describe("JSONPlaceholder API Test", () => {
  it("should fetch and validate data from the API", () => {
    // Make a GET request to the posts endpoint
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        // Verify the response status is 200
        expect(response.status).to.eq(200);

        // Verify the response body is not empty
        expect(response.body).to.not.be.empty;

        // Verify that at least one post is returned
        expect(response.body).to.have.length.greaterThan(0);

        // You can perform more specific validations based on your use case
        // For example, checking the structure of each post in the response
        const firstPost = response.body[0];
        expect(firstPost).to.have.property("userId");
        expect(firstPost).to.have.property("id");
        expect(firstPost).to.have.property("title");
        expect(firstPost).to.have.property("body");
      },
    );
  });

  it.only("should fetch and validate data from JSONPlaceholder using fixture", () => {
    // Load fixture data from posts.json
    cy.fixture("posts.json").then((posts) => {
      // Make a GET request to the posts endpoint
      cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then(
        (response) => {
          // Verify the response status is 200
          expect(response.status).to.eq(200);

          // Verify the response body is not empty
          expect(response.body).to.not.be.empty;

          // Verify that the response body matches the fixture data
          expect(response.body[0]).to.deep.eq(posts);
        },
      );
    });
  });

  it("should fail to make an invalid API request", () => {
    // Attempt to make a request to an invalid endpoint
    cy.request(
      "GET",
      "https://jsonplaceholder.typicode.com/invalid-endpoint",
    ).then((response) => {
      // This test should fail, as the endpoint is intentionally invalid
      expect(response.status).to.eq(200); // Change to 404 to make the test pass
    });
  });

  it.skip("should skip this test", () => {});
});
