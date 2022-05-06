fetch("https://api.github.com/users/fazaimron27/repos")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((repo) => {
      const repos = document.getElementById("repos");
      const repoDescription = repo.description ?? "No description";
      repos.insertAdjacentHTML(
        "beforeend",
        `<div class="col-md-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  <span>${repo.name}</span>
                </h5>
                <hr>
                <p class="card-text">${repoDescription}</p>
                <hr>
                <a href="${repo.html_url}" class="text-muted" target="_blank">${repo.html_url}/${repo.name}</a>
              </div>
          </div>
        </div>`
      );
    });
  });
