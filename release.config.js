module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/fer77/github-actions",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/git",
    ],
};
